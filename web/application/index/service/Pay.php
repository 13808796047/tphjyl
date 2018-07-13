<?php
/**
 * Created by PhpStorm.
 * Author: Hon
 * Date: 2017/11/27 0027
 * Time: 21:48
 */

namespace app\index\service;


use app\index\model\MemberRecharge;
use think\Log;

class Pay
{
    public static $order_no = '';
    public static $order_amount = '';

    protected  static $pub_key = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDQ+F40QZAAbV77+A9lbUkDsjqL
gee+l+TNEkGRWQWP6E0l07x4/+W7YDV4Tt03BG4r4bgwitmdRbLIo735TYAJkrxc
xryi1Lbw7pIZ1dvJIqEKUpBDDN0ASBO3Ln68cXQJumGzv+iKQJCgpQil6ovK+btX
uT7wqLWtr0IMWCyGQQIDAQAB
-----END PUBLIC KEY-----';
    protected static $prv_key = '-----BEGIN PRIVATE KEY-----
MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAND4XjRBkABtXvv4
D2VtSQOyOouB576X5M0SQZFZBY/oTSXTvHj/5btgNXhO3TcEbivhuDCK2Z1Fssij
vflNgAmSvFzGvKLUtvDukhnV28kioQpSkEMM3QBIE7cufrxxdAm6YbO/6IpAkKCl
CKXqi8r5u1e5PvCota2vQgxYLIZBAgMBAAECgYEApzwdJ/TQKYdd3IhIygMLy8l2
0O7FZ+JnWTajAo8bxG9ETmGFE9C3KZ11LTLwFneVM8kQfsigHx0IV0mzXzCGpa63
4dEu/bgNW6+HNGTKSLTtVZJlQzdhZU8Q4DAxrqlWbGOoUZcfpDXMekfcZK7GUrVk
X2uMVEXzT30ApJ8zWYECQQD+z4VzWymfaCod1ZkkLXuv7607ux0aw2Hhcc8/nO2O
m3qYkDnPDLc9OBjcLJSrkqAxjI5WAKSF9KMlW5SapqRbAkEA0fISKohK8NdZVuRQ
Dz8u/oizxwsV382Rqz++EXg6NwJQDyFX5L9rgj/GAZpnuOf6ig/CSAIp/xrnUM+n
2TVSkwJBAN4KzjqgpRugtJq86C8rZ03/6JBVVF5fBetjtnqzcBtGB0Xs4EM5zG+P
c7JhMsh0BB5JYjs1YijM7mH+dPdy4WMCQQCiCanHtgXROQS1MeYwvl1xCuVmnMG3
SJxDhiEWrqqPxnMwGlYSMUOy9bHHjvq7FiCi6mLS3Qi44nTiREOSO7uNAkALv/qu
ILXu35X5zutasqx80moNWCpJt+n8Fe7kOipz+UJO3D7nAR3ezNNZLjdZ9ftaKie7
FrtUwgTyc/ZsbXXJ
-----END PRIVATE KEY-----';
    protected static $pt_key = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQRZ2VlaI4J5zmmO4RrWIS8kLX
j3th8+1pCNbueYypqMKvIiLZ+6JRRGkjvdiBeJriuuO0cN/lUoArGookb6PgKr/DW
js+vZTQCk+iDzOv747sKDMnX+YwoBTolCkIOOa+Kic0g3MLx5XqRMzzP5rGzPXC7Y
X8JUVCoqC0dQu5PwIDAQAB
-----END PUBLIC KEY-----';
    protected static $merchant_code = '2110060011';
    protected static $url = 'https://pay.dinpay.com/gateway';
    public static function getParams(){
        $data = $_REQUEST;
        $merchant_code = self::$merchant_code;//商户号，1118004517是测试商户号，线上发布时要更换商家自己的商户号！

        $service_type ="direct_pay";

        $interface_version ="V3.0";

        $sign_type ="RSA-S";

        $input_charset = "UTF-8";

        $notify_url = self::getRootUrl().'/recharge/zf_server1';
        self::$order_no = self::getRechId();
        $order_no = self::$order_no;

        $order_time = date( 'Y-m-d H:i:s' );
        self::$order_amount = $data['amount'];
        $order_amount = $data['amount'];

        $product_name ="somethings";

        //以下参数为可选参数，如有需要，可参考文档设定参数值

        $return_url =self::getRootUrl();

        $pay_type = "";

        $redo_flag = "";

        $product_code = "";

        $product_desc = "";

        $product_num = "";

        $show_url = "";

        $client_ip =get_client_ip();

        $bank_code = "";

        $extend_param = "";

        $extra_return_param = "";




/////////////////////////////   参数组装  /////////////////////////////////
        /**
        除了sign_type参数，其他非空参数都要参与组装，组装顺序是按照a~z的顺序，下划线"_"优先于字母
         */

        $signStr= "";

        if($bank_code != ""){
            $signStr = $signStr."bank_code=".$bank_code."&";
        }
        if($client_ip != ""){
            $signStr = $signStr."client_ip=".$client_ip."&";
        }
        if($extend_param != ""){
            $signStr = $signStr."extend_param=".$extend_param."&";
        }
        if($extra_return_param != ""){
            $signStr = $signStr."extra_return_param=".$extra_return_param."&";
        }

        $signStr = $signStr."input_charset=".$input_charset."&";
        $signStr = $signStr."interface_version=".$interface_version."&";
        $signStr = $signStr."merchant_code=".$merchant_code."&";
        $signStr = $signStr."notify_url=".$notify_url."&";
        $signStr = $signStr."order_amount=".$order_amount."&";
        $signStr = $signStr."order_no=".$order_no."&";
        $signStr = $signStr."order_time=".$order_time."&";

        if($pay_type != ""){
            $signStr = $signStr."pay_type=".$pay_type."&";
        }

        if($product_code != ""){
            $signStr = $signStr."product_code=".$product_code."&";
        }
        if($product_desc != ""){
            $signStr = $signStr."product_desc=".$product_desc."&";
        }

        $signStr = $signStr."product_name=".$product_name."&";

        if($product_num != ""){
            $signStr = $signStr."product_num=".$product_num."&";
        }
        if($redo_flag != ""){
            $signStr = $signStr."redo_flag=".$redo_flag."&";
        }
        if($return_url != ""){
            $signStr = $signStr."return_url=".$return_url."&";
        }

        $signStr = $signStr."service_type=".$service_type;

        if($show_url != ""){

            $signStr = $signStr."&show_url=".$show_url;
        }

/////////////////////////////   获取sign值（RSA-S加密）  /////////////////////////////////

        $merchant_private_key= openssl_get_privatekey(self::$prv_key);

        openssl_sign($signStr,$sign_info,$merchant_private_key,OPENSSL_ALGO_MD5);

        $sign = base64_encode($sign_info);
        return [
            'sign'              => $sign,
            'merchant_code'     => $merchant_code,
            'bank_code'         => $bank_code,
            'order_no'          => $order_no,
            'order_amount'      => $order_amount,
            'service_type'      => $service_type,
            'input_charset'     => $input_charset,
            'notify_url'        => $notify_url,
            'interface_version' => $interface_version,
            'sign_type'         => $sign_type,
            'order_time'        => $order_time,
            'product_name'      => $product_name,
            'client_ip'         => $client_ip,
            'extend_param'      => $extend_param,
            'extra_return_param'      => $extra_return_param,
            'pay_type'      => $pay_type,
            'product_code'      => $product_code,
            'product_desc'      => $product_desc,
            'product_num'      => $product_num,
            'return_url'      => $return_url,
            'show_url'      => $show_url,
            'redo_flag'      => $redo_flag,
        ];
    }
    //广州根铁智付  支付
    public static function bankPay(){
        $url = self::$url;
        $params = self::getParams();
        return self::doPost($url,$params);
    }

    public static function doPost($url,$params)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:pay.dinpay.com','Origin:http://tiegenmy.com','Upgrade-Insecure-Requests:1','Content-Type:application/x-www-form-urlencoded;charset=UTF-8'));
        curl_setopt ($ch, CURLOPT_REFERER, 'http://tiegenmy.com/recharge/index.html');

//        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:api.dinpay.com','Origin:http://'.$tiaoBan,'Upgrade-Insecure-Requests:1','Content-Type:application/x-www-form-urlencoded;charset=UTF-8'));
//        curl_setopt ($ch, CURLOPT_REFERER, 'http://www.taapay.cn/recharge/index.html');
//        curl_setopt ($ch, CURLOPT_REFERER, 'http://www.tcjkjb.top/index.php?s=/home/recharge/index.html');
        $User_Agent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
        curl_setopt($ch, CURLOPT_USERAGENT, $User_Agent);
        curl_setopt($ch,CURLOPT_POST,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($params));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        $output = str_replace('action="Pay"','action="https://pay.dinpay.com/Pay"',$output);
        $output = str_replace('submitForm_scanPay','local_submitForm_scanPay',$output);
        curl_close($ch);
        return $output;
    }

    public static function offlineNotify()
    {
        Log::record('真智付通道回调成功');
        try{
            $merchant_code	= $_POST["merchant_code"];
            $notify_type = $_POST["notify_type"];
            $notify_id = $_POST["notify_id"];
            $interface_version = $_POST["interface_version"];
            $sign_type = $_POST["sign_type"];
            $DD4Sign = base64_decode($_POST["sign"]);
            $order_no = $_POST["order_no"];
            $order_time = $_POST["order_time"];
            $order_amount = $_POST["order_amount"];
            $extra_return_param = isset($_POST["extra_return_param"])?$_POST["extra_return_param"]:"";
            $trade_no = $_POST["trade_no"];
            $trade_time = $_POST["trade_time"];
            $trade_status = $_POST["trade_status"];
            $bank_seq_no = isset($_POST["bank_seq_no"])?$_POST["bank_seq_no"]:"";
/////////////////////////////   参数组装  /////////////////////////////////
            /**
            除了sign_type DD4Sign参数，其他非空参数都要参与组装，组装顺序是按照a~z的顺序，下划线"_"优先于字母
             */
            $signStr = "";
            if($bank_seq_no != ""){
                $signStr = $signStr."bank_seq_no=".$bank_seq_no."&";
            }
            if($extra_return_param != ""){
                $signStr = $signStr."extra_return_param=".$extra_return_param."&";
            }
            $signStr = $signStr."interface_version=".$interface_version."&";
            $signStr = $signStr."merchant_code=".$merchant_code."&";
            $signStr = $signStr."notify_id=".$notify_id."&";
            $signStr = $signStr."notify_type=".$notify_type."&";
            $signStr = $signStr."order_amount=".$order_amount."&";
            $signStr = $signStr."order_no=".$order_no."&";
            $signStr = $signStr."order_time=".$order_time."&";
            $signStr = $signStr."trade_no=".$trade_no."&";
            $signStr = $signStr."trade_status=".$trade_status."&";
            $signStr = $signStr."trade_time=".$trade_time;
/////////////////////////////   RSA-S验签  /////////////////////////////////
            $DD4_public_key = openssl_get_publickey(self::$pt_key);
            $flag = openssl_verify($signStr,$DD4Sign,$DD4_public_key,OPENSSL_ALGO_MD5);
            /**
            如果验签返回ture就响应SUCCESS,并处理业务逻辑，如果返回false，则终止业务逻辑。
             */
            if ($flag) {
                Order::updateOrder($order_no, $order_time,$bank='通道三');
            } else {
                Log::record('充值失败,签名验证失败');
                Order::createReqInfo(json_encode($_POST),$order_no,'通道三',1,'充值失败,签名验证失败');
                exit('FAILED');
            }
        }catch (\Exception $e){
            Order::createReqInfo(json_encode($_POST),'','通道三',1,$e->getMessage());
            Log::record($e->getMessage());
        }
        exit('SUCCESS');
    }
    private static function getRootUrl(){
        return 'http://taapay.cn';
        $url = $_SERVER['HTTP_REFERER'];
        $arr = explode('/index.php',$url);
        return $arr[0];
    }
    private static function getRechId()
    {
        $rechargeId = guid();
        if (MemberRecharge::where(array('rechargeId' => $rechargeId))->find()) {
            self::getRechId();
        } else {
            return $rechargeId;
        }
    }

}