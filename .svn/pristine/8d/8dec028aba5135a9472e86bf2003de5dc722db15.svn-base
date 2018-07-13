<?php
/**
 * Created by PhpStorm.
 * Author: Hon <2275604210@qq.com>
 * Date: 2017/12/28 0028
 * Time: 7:35
 */

namespace app\index\service;
use app\index\model\MemberRecharge;
use think\Log;
use think\Session;

/**
 * 国付宝支付类
 * Class GfbPay
 * @package app\index\service
 */
class GfbPay
{
    public static $order_no = '';
    public static $order_amount = '';
    public static $rootUrl = 'http://taapay.cn';

    protected static $merchantID = '0000061766'; //国付宝商户id
    protected static $virCardNoIn = '0000000002000009558';//国付宝支付账号
    protected static $url = 'https://gateway.gopay.com.cn/Trans/WebClientAction.do';
    protected static $md5Code = 'Vgo12DxCXnEg4HKz28Jw';
    protected static $VerficationCode = 'Vgo12DxCXnEg4HKz28Jw';

    public static function getParams ()
    {
        $data = $_REQUEST;
        $params['version'] = '2.1'; //网关版本号
        $params['charset'] = 2; //字符集 1:GBK,2:UTF-8
        $params['language'] = 1; //网关语言版本 1:ZH,2:EN
        $params['signType'] = 1; //报文加密方式 1:MD5,2:SHA
        $params['tranCode'] = 8888; //交易代码
        $params['merchantID'] = self::$merchantID; //商户代码
        $params['merOrderNum'] = self::getRechId(); //订单号
        $params['tranAmt'] = $data['amount']; //交易金额
        $params['feeAmt'] = 0; //商户提取佣金金额
        $params['currencyType'] = 156; //币种
        $params['frontMerUrl'] = ''; //商户前台通知地址:
        $params['backgroundMerUrl'] = self::$rootUrl.'/recharge/gfb_callback'; //（测试返回地址需要能够外网访问）商户后台通知地址:
        $params['tranDateTime'] = date('YmdHis',time()); //交易时间
        $params['tranDateTime'] = date('YmdHis',time()); //交易时间
        $params['virCardNoIn'] = self::$virCardNoIn; //国付宝转入账户
        $params['tranIP'] = get_client_ip(); //用户浏览器IP
        $params['isRepeatSubmit'] = 1; //订单是否允许重复提交 0:不允许,1:允许
        $params['goodsName'] = '余额充值'; //商品名称
        $params['goodsDetail'] = '余额充值'.$data['amount'].'元'; //goodsDetail
        $params['buyerName'] = ''; //buyerName
        $params['buyerContact'] = ''; //buyerContact
        $params['merRemark1'] = ''; //merRemark1
        $params['merRemark2'] = ''; //merRemark2
        $params['bankCode'] = ''; //bankCode
        $params['userType'] = ''; //userType
        $params['gopayServerTime'] =  Http::httpGet("https://gateway.gopay.com.cn/time.do",[]);
        $signStr='version=['.$params['version'].']tranCode=['.$params['tranCode'].']merchantID=['.$params['merchantID']
            .']merOrderNum=['.$params['merOrderNum'].']tranAmt=['.$params['tranAmt'].']feeAmt=['.$params['feeAmt'].
            ']tranDateTime=['.$params['tranDateTime'].']frontMerUrl=['.$params['frontMerUrl'].']backgroundMerUrl=['.
            $params['backgroundMerUrl'].']orderId=[]gopayOutOrderId=[]tranIP=['.$params['tranIP'].']respCode=[]gopayServerTime=['.
            $params['gopayServerTime'].']VerficationCode=['.self::$VerficationCode.']';
        $params['signValue'] = md5($signStr);
        $user = Session::get('userData');
        $rechage = array(
            'uid'=>$user['uid'],
            'username'=>$user['username'],
            'rechargeId'=>$params['merOrderNum'],
            'amount'=>$params['tranAmt'],
            'actionIP'=>$params['tranIP'],
            'actionTime'=>time(),
            'state'=>'0',
            'info'=>'预支付'
        );
        MemberRecharge::insert($rechage);

        //gateway.gopay.com.cn  gatewaymer.gopay.com.cn
//        header('Location:http://localhost/txffc/public/recharge?params='.json_encode($params));
        header('Location:http://pay.swkkja.com/recharge?params='.json_encode($params));
        exit();
        return Http::httpPost(self::$url,$params,'gateway.gopay.com.cn','http://pay.swkkja.com','http://pay.swkkja.com/cahrage.html');
        return Http::httpPost(self::$url,$params,'gateway.gopay.com.cn','','http://pay.swkkja.com/recharge/recharge.html');
//        return Http::httpPost(self::$url,$params,'gateway.gopay.com.cn','http://swkkja.com');
    }

    public static function gfb_callback()
    {
        Log::record('国付宝通道回调成功');
        try{
            $version = $_POST["version"];
            $charset = $_POST["charset"];
            $language = $_POST["language"];
            $signType = $_POST["signType"];
            $tranCode = $_POST["tranCode"];
            $merchantID = $_POST["merchantID"];
            $merOrderNum = $_POST["merOrderNum"];
            $tranAmt = $_POST["tranAmt"];
            $feeAmt = $_POST["feeAmt"];
            $frontMerUrl = $_POST["frontMerUrl"];
            $backgroundMerUrl = $_POST["backgroundMerUrl"];
            $tranDateTime = $_POST["tranDateTime"];
            $tranIP = $_POST["tranIP"];
            $respCode = $_POST["respCode"];
            $msgExt = $_POST["msgExt"];
            $orderId = $_POST["orderId"];
            $gopayOutOrderId = $_POST["gopayOutOrderId"];
            $bankCode = $_POST["bankCode"];
            $tranFinishTime = $_POST["tranFinishTime"];
            $merRemark1 = $_POST["merRemark1"];
            $merRemark2 = $_POST["merRemark2"];
            $signValue = $_POST["signValue"];

    //注意md5加密串需要重新拼装加密后，与获取到的密文串进行验签
            $signValue2='version=['.$version.']tranCode=['.$tranCode.']merchantID=['.$merchantID.']merOrderNum=['.
                $merOrderNum.']tranAmt=['.$tranAmt.']feeAmt=['.$feeAmt.']tranDateTime=['.$tranDateTime.
                ']frontMerUrl=['.$frontMerUrl.']backgroundMerUrl=['.$backgroundMerUrl.']orderId=['.$orderId.
                ']gopayOutOrderId=['.$gopayOutOrderId.']tranIP=['.$tranIP.']respCode=['.$respCode.
                ']gopayServerTime=[]VerficationCode=['.self::$VerficationCode.']';
    //VerficationCode是商户识别码为用户重要信息请妥善保存
    //注意调试生产环境时需要修改这个值为生产参数
            $signValue2 = md5($signValue2);

            if($signValue==$signValue2){
                if($respCode=='0000'){
                    //验签成功
                    //建议在此处进行商户的业务逻辑处理
                    Order::updateOrder($merOrderNum, strtotime($tranDateTime),$bank='通道四');
                    //注意返回参数中不包括用户的session、cookie
                    echo 'RespCode=0000|JumpURL=';
                    //如果要正常跳转指定地址，返回应答必须符合规范，参考文档中5.	通知机制
                }else{
                    Log::record('充值失败,签名验证失败');
                    Order::createReqInfo(json_encode($_POST),$merOrderNum,'通道四',1,'充值失败,签名验证失败');
                    //验签失败
                    //返回失败信息
                    echo 'RespCode=9999|JumpURL=';
                }
            }else{
                Log::record('充值失败,签名验证失败');
                Order::createReqInfo(json_encode($_POST),$merOrderNum,'通道四',1,'充值失败,签名验证失败');
                //验签失败
                //返回失败信息
                echo 'RespCode=9999|JumpURL=';
            }
        }catch (\Exception $e){
            Order::createReqInfo(json_encode($_POST),'','通道四',1,$e->getMessage());
            Log::record($e->getMessage());
            echo 'RespCode=9999|JumpURL=';
        }
        exit();
    }


    private static function getRechId()
    {
        $rechargeId = date('YmdHis').getUuidNum(11);
        if (MemberRecharge::where(array('rechargeId' => $rechargeId))->find()) {
            self::getRechId();
        } else {
            return $rechargeId;
        }
    }

}