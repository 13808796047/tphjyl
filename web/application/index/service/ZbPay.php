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
 * 众宝支付类
 * Class GfbPay
 * @package app\index\service
 */
class ZbPay
{
    public static $order_no = '';
    public static $order_amount = '';
    public static $agentUrl = 'http://www.ftdz1.com/';

    protected static $merchantID = '88998885'; //众宝商户id
    protected static $url = 'https://gateway.zbpay365.com/GateWay/Pay';
    protected static $keyCode = 'd0b85458436b463d966383296a460379';

    public static function getParams ()
    {
        $notifyurl = 'http://'.$_SERVER['HTTP_HOST'].'/recharge/zb_callback';
        $data = $_REQUEST;
        $rechargeId = self::getRechId(); //订单号
        $amount = $data['amount']; //交易金额
        $actionIP = get_client_ip(); //用户浏览器IP
        $paytype = $data['paytype'];//支付宝扫码
        $request_time = date('YmdHis',time());
        $sign_str = "merchantid=" .self::$merchantID."&paytype=".$paytype."&amount=".$amount.
            "&orderid=".$rechargeId."&notifyurl=".$notifyurl."&request_time=".$request_time;
        $SignInfo = $sign_str."&key=".self::$keyCode;//测试支付密钥，正式环境请更换成您的正式密钥
        $SignInfo =  md5($SignInfo);

        $params['merchantid'] =  self::$merchantID;
        $params['paytype'] =  $paytype;
        $params['amount'] =  $amount;
        $params['orderid'] =  $rechargeId;
        $params['notifyurl'] =  $notifyurl;
        $params['request_time'] =  $request_time;
        $params['returnurl'] =  $notifyurl;
        $params['israndom'] =  'Y';
        $params['isqrcode'] =  'Y';
        $params['desc'] =  'test';
        $params['sign'] =  $SignInfo;
        $user = Session::get('userData');
        $rechage = array(
            'uid'=>$user['uid'],
            'username'=>$user['username'],
            'rechargeId'=>$rechargeId,
            'amount'=>$amount,
            'actionIP'=>$actionIP,
            'actionTime'=>time(),
            'state'=>'0',
            'info'=>'预支付'
        );
        MemberRecharge::insert($rechage);
        $html = self::getHtmlInfo(self::$url,$params);
        echo $html;exit;
        /*echo '
	<form action="'.$html.'" method="get" name="orderForm">
	</form>
	<script type="text/javascript">
	 document.orderForm.submit();
	</script>
	';exit;*/
       /* echo '
	<form action="'.self::$url.'" method="post" name="orderForm">
	<input type="hidden" name="merchantid"  value="'.self::$merchantID.'">
	<input type="hidden" name="paytype"  value="'.$paytype.'">
	<input type="hidden" name="amount"  value="'.$amount.'">
	<input type="hidden" name="orderid"  value="'.$rechargeId.'">
	<input type="hidden" name="notifyurl"  value="'.$notifyurl.'">
	<input type="hidden" name="request_time"  value="'.$request_time.'">
	<input type="hidden" name="returnurl"  value="'.$notifyurl.'">
	<input type="hidden" name="israndom"  value="Y">
	<input type="hidden" name="isqrcode"  value="Y">
	<input type="hidden" name="desc"  value="test">
	<input type="hidden" name="sign"  value="'.$SignInfo.'">
	</form>
	<script type="text/javascript">
	  setTimeout(function(){document.orderForm.submit();},1000)
	</script>
	';exit;*/
//        return Http::httpPost(self::$url,$params,'gateway.gopay.com.cn','','http://pay.swkkja.com/recharge/recharge.html');
//        return Http::httpPost(self::$url,$params,'gateway.gopay.com.cn','http://swkkja.com');
    }

    public static  function zb_callback()
    {
        Log::record('zb通道回调成功=='.json_encode($_REQUEST));
        try{
            $OrderId = urldecode($_REQUEST["orderid"]);		//商户系统传入的orderid
            $Result = urldecode($_REQUEST["result"]);		//订单结果 0：支付成功
            $Amount = urldecode($_REQUEST["amount"]);		//订单金额 单位元
            $SourceAmount = urldecode($_REQUEST["sourceamount"]);		//提交金额 单位元

            $Systemorderid= urldecode($_REQUEST["systemorderid"]);		//此次订单过程中系统内的订单Id
            $Completetime = urldecode($_REQUEST["completetime"]);	//订单时间
            $Sign = urldecode($_REQUEST["sign"]);	//MD5签名

            $Key=self::$keyCode;//测试支付密钥，正式环境请更换成您的正式密钥
            $sign_str = "orderid=".$OrderId."&result=".$Result."&amount=".$Amount.
                "&systemorderid=".$Systemorderid."&completetime=".$Completetime."&key=".$Key;

//            echo '<br/>加签源字符串:'.$sign_str;
            $SignLocal = md5($sign_str);
//            echo '<br/>加签字符串:'.$SignLocal;
            $ret2 = ($SignLocal == $Sign);
            Log::record('zb通道回调成功$ret2=='.$ret2);
                if($ret2==1){
                    //验签成功
                    //建议在此处进行商户的业务逻辑处理
                    Order::updateOrder($OrderId, strtotime($Completetime),$bank='zb');
                    //注意返回参数中不包括用户的session、cookie
                    //如果要正常跳转指定地址，返回应答必须符合规范，参考文档中5.	通知机制
                }else{
                    Log::record('充值失败,签名验证失败');
                    Order::createReqInfo(json_encode($_REQUEST),$OrderId,'zb',1,'充值失败,签名验证失败');
                    //验签失败
                }
        }catch (\Exception $e){
            Order::createReqInfo(json_encode($_REQUEST),'','通道四',1,$e->getMessage());
            Log::record($e->getMessage());
//            echo 'RespCode=9999|JumpURL=';
        }
        echo 'success';
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

    public static function getHtmlInfo($url,$parmas){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_URL, $url);
//        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:www.baidu.com','Origin:http://www.baidu.com','Upgrade-Insecure-Requests:1','Content-Type:application/x-www-form-urlencoded;charset=UTF-8'));
//        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:http://www.ftdz1.com','Origin:http://www.ftdz1.com','Upgrade-Insecure-Requests:1','Content-Type:application/x-www-form-urlencoded;charset=UTF-8'));
        curl_setopt ($ch, CURLOPT_REFERER, 'http://'.$_SERVER['HTTP_HOST'].'/recharge/index.html');
        $User_Agent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
        curl_setopt($ch, CURLOPT_USERAGENT, $User_Agent);
        curl_setopt($ch,CURLOPT_POST,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($parmas));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
//        $output = str_replace('Object moved to','',$output);
//        $output = str_replace('here','确认支付宝扫码',$output);
//        $output = explode('href="',$output);
//        $output = str_replace('">','',$output[1]);
        return $output;
    }
}