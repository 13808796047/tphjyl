<?php
/**
 * Created by PhpStorm.
 * User: Hon
 * Date: 2018/3/8
 * Time: 22:12
 */

namespace app\index\service;


use app\index\model\Paybusiness;
use think\Log;
use think\Session;

class YiTongPay
{


    //qq扫码支付
    public  static function quickPay($order)
    {
        $pay = Paybusiness::where(array('id'=>$order['fl_id']))->find();
        $quickParams = [
            'version' => '1.0.0',
            'transCode' => '8888',
            'merchantId' => $pay['business_id'],
            'merOrderNum' => $order['order_sn'],
            'bussId' => 'ONL0003',
            'tranAmt' => $order['order_amount']*100,
            'sysTraceNum' => date('YmdHis').floor(microtime()*1000),//请求流水号，需要保持唯一
            'tranDateTime' => date('YmdHis'),
            'currencyType' => '156',
            'merURL' => 'http://'.$_SERVER['HTTP_HOST'].'/zfhd.html',
            'backURL' => 'http://'.$_SERVER['HTTP_HOST']."/recharge/payResult",
            'orderInfo' => strToHex('商户订单快捷支付'),
            'userId' => '',
            'userPhoneHF' => $order['userPhoneHF'],
            'userAcctNo' => $order['userAcctNo'],
            'userNameHF' => strToHex($order['userNameHF']),
            'quickPayCertNo' => $order['quickPayCertNo'],
            'userIp' => Session::get('userData.uid'),
            'bankId' => '888880170122900',
            'stlmId' => '',
            'entryType' => 1,
            'attach' => '',
            'reserver1' => '',
            'reserver2' => '',
            'reserver3' => '',
            'reserver4' => 7,
        ];
        $txnString = $quickParams['version']."|".$quickParams['transCode']."|".$quickParams['merchantId']."|"
            .$quickParams['merOrderNum']."|".$quickParams['bussId']."|".$quickParams['tranAmt']."|"
            .$quickParams['sysTraceNum']."|".$quickParams['tranDateTime']."|".$quickParams['currencyType']."|".
            $quickParams['merURL']."|".$quickParams['backURL']."|".$quickParams['orderInfo']."|".$quickParams['userId'];
        $quickParams['signValue'] = md5($txnString.$pay['business_key']);
        $rtn_ar = array();
        while ($obj = each($quickParams)) {
            Log::record($obj['key']);
            array_push($rtn_ar,array(
                'name'=>$obj['key'],
                'value'=>$obj['value'],
            ));
        }
        return $rtn_ar;
    }

}