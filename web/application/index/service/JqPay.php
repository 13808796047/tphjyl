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
 * jq支付类
 * Class GfbPay
 * @package app\index\service
 */
class JqPay
{
    public static $order_no = '';
    public static $order_amount = '';
    public static $agentUrl = '';

    protected static $merchantID = '291657'; //商户id
    protected static $url = 'https://user.ecpay.cn/';
    protected static $keyCode = 'qKxWjKibscavHPB48aOyXqlENY9GBylUcnbMqvBSnwoJMHVY9h6W038KumrlpltFBEQHhmFcOad1D5xJbS1cUPfyrSZ4ftQnpQeBbJPTy2tNPymOdIn1JYDsyVqYYIOl';

    public static function getParams ()
    {
        $notifyurl = 'http://pay.suyingz.com:8111/callback.php';
        $data = $_REQUEST;
        $rechargeId = self::getRechId(); //订单号
        $amount = $data['amount']; //交易金额
        $actionIP = get_client_ip(); //用户浏览器IP

        //商户代码（merId）
        $merId = self::$merchantID;
        //商户系统生成的订单号
        $dealOrder = $rechargeId;
        //支付金额，保留两个小数位
        $dealFee	= number_format($amount,2);;
        //订单支付结果同步返回地址
        $dealReturn = $notifyurl;//'http://'.$_SERVER['HTTP_HOST'];
        //订单支付结果异步返回地址
        $dealNotify = $notifyurl;
        //生成签名
        $dealSignure=sha1($merId.$dealOrder.$dealFee.$dealReturn.self::$keyCode);

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
        //获得表单传过来的数据
        $def_url  = '<br />';
        $def_url  .= '<form id="ifrm" method="post" action="http://pay.suyingz.com:8111/gopay.php"  >';
        $def_url .= '	<input type = "hidden" name = "merId"	value = "'.$merId.'">';
        $def_url .= '	<input type = "hidden" name = "dealOrder" 				value = "'.$dealOrder.'">';
        $def_url .= '	<input type = "hidden" name = "dealFee" 			value = "'.$dealFee.'">';
        $def_url .= '	<input type = "hidden" name = "dealSignure"			value = "'.$dealSignure.'">';
        $def_url .= '	<input type = "hidden" name = "dealReturn"			value = "'.$dealReturn.'">';
        $def_url .= '	<input type = "hidden" name = "dealNotify"			value = "'.$dealNotify.'">';
        $def_url .= '</form>';
        $def_url .= "<script> document.getElementById('ifrm').submit();</script>";
        return $def_url;
    }

    public static  function jq_callback()
    {
        Log::record('jq通道回调成功=='.json_encode($_REQUEST));
        try{
            $dealOrder = $_REQUEST['dealOrder'];
//            $dealFee = $_REQUEST['dealFee'];
            $dealState = $_REQUEST['dealState'];
            $dealSignature = $_REQUEST['dealSignure'];
//            $dealId = $_REQUEST['dealId'];
            //生成签名
            $strSignature = sha1($dealOrder.$dealState.self::$keyCode);
            if ( $dealSignature !=$strSignature){
                Log::record('充值失败,签名验证失败');
                Order::createReqInfo(json_encode($_REQUEST),$dealOrder,'jq',1,'充值失败,签名验证失败');
                //验签失败
                return false;
            }else{
                if($dealState=='SUCCESS'){
                    //验签成功
                    Log::record('zb支付回调成功');
                    //建议在此处进行商户的业务逻辑处理
                    Order::updateOrder($dealOrder, time(),$bank='jq');
                }else{
                    Log::record('zb支付失败'.$dealState);
                }
            }
        }catch (\Exception $e){
            Order::createReqInfo(json_encode($_REQUEST),'','通道四',1,$e->getMessage());
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

    public static function getHtmlInfo($url,$parmas){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt ($ch, CURLOPT_REFERER, 'http://'.$_SERVER['HTTP_HOST'].'/recharge/index.html');
        $User_Agent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
        curl_setopt($ch, CURLOPT_USERAGENT, $User_Agent);
        curl_setopt($ch,CURLOPT_POST,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($parmas));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }
}