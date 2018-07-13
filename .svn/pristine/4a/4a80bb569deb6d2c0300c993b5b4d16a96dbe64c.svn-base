<?php
namespace app\index\controller;

use app\index\model\Bets;
use app\index\model\CoinLog;
use app\index\model\MemberBank;
use app\index\model\MemberCash;
use app\index\model\MemberCashSplit;
use app\index\model\MemberRecharge;
use app\index\model\Members;
use app\index\model\Params;
use app\index\model\Paybusiness;
use app\index\model\Rebackinfo;
use app\index\model\ActivityLog;
use app\index\service\GfbPay;
use app\index\service\JqPay;
use app\index\service\Pay;
use app\index\service\YiTongPay;
use app\index\service\ZbPay;
use think\Controller;
use think\Db;
use think\Log;
use think\Session;

class Recharge extends  Controller
{
    public $settings;
    public $user;
    public $time;
    public $param;
    protected function _initialize()
    {
        $url = $_SERVER['REQUEST_URI'];
        if(!empty(Session::get('userData'))){
            $this->assign('play_lists',(new Game())->play_list);
            return view('index/login');
        }else if($url=='/recharge/respond_notify'){
        }else{
            $this->user = Session::get('userData');
        }
    }

    public function getIndex()
    {
        $this->user = Session::get('userData');
        if($this->user['is_test']!=0){
//            $this->error('无此权限');
        }
        $this->assign('page_url',isset($_GET['tag'])?'recharge':"security_platwithdraw");
        $this->assign('tag',isset($_GET['tag'])?$_GET['tag']:"");
        return view('recharge/index');
    }

    public function getRecharge(){
        header("Content-type: text/html; charset=utf-8");
        $rechargeMin1 = Params::where(array('id'=>5))->find();
        $rechargeMax1 = Params::where(array('id'=>6))->find();
        $cashMin1 = Params::where(array('id'=>34))->find();
        $cashMax1 = Params::where(array('id'=>35))->find();
        $this->assign('bank_check', array('min'=>$rechargeMin1['value'],'max'=>$rechargeMax1['value']));
        $this->assign('code_check', array('min'=>$cashMin1['value'],'max'=>$cashMax1['value']));
        $busines = Paybusiness::where(array('enable'=>0))->order('sort')->select();
        $direct_pay = (count($busines)==1&&$busines[0]['id']==6)?'weixin':'direct_pay';
        $this->assign('direct_pay', $direct_pay);
        $old_line = "";
        if($busines){
            $old_line = $busines[0]['id'];
        }
        if(!empty($busines)){
            $this->assign('def_id',$busines[0]['id']);
        }
        $this->assign('busines',$busines);
        $this->assign('old_line',$old_line);
        if(isset($_GET['def-w-label'])){
            $pay_type = $_GET['def-w-label'];
            if($pay_type == 7){
                $service_type = $_GET['payLinks'];

                $this->zesheng($_GET);

                /*if($service_type=='weixin' || $service_type=='alipay'){
                    $this->zesheng($_GET);
                }else{
                    $this->redirect('/recharge/zs_pay', array('money' => $_GET['amount']));
//                    exit('此功能维护中，请选择微信或者支付宝');
                }*/
            }else if($pay_type == 5||$pay_type == 8 || $pay_type == 12){
                //智付
                $_GET['pay_type'] = $pay_type;
                $service_type = $_GET['payLinks'];
                if ($service_type == 'direct_pay') {
                    //网银
                    $this->getZfwy($_GET);
                } else {
                    //支付宝和微信
                    $this->zfpay($_GET);
                }
            }else if($pay_type == 9){
                //智付
                $service_type = $_GET['payLinks'];
                $this->yinshen($_GET);
            }else if($pay_type == 10||$pay_type == 11){
                $this->yibaoQrcode($_GET);
            }else if($pay_type == 103){
                $this->guofubao($_GET);
            }else if($pay_type==104){
                $this->zbzf($_GET);
            }else if($pay_type==105){
                $this->jqzf($_GET);
            }else{
                echo '错了';
            }
        }
        $this->assign('param',array());
        return view('recharge/recharge');
    }

    public function getzs_pay(){
        $this->assign('money',$_GET['money']);
        return view('zs_pay');
    }

    public function getEmaildeposit_chongzhi(){
        return view('recharge/emaildeposit_chongzhi');
    }
    public function getSecurity_platwithdraw(){
        if(!empty($_GET)){
            $secpass = $_GET['secpass'];
            $user = Session::get('userData');
            $member = Members::where(array('uid'=>$user['uid']))->find();
            if(trim($secpass)&&$member['coinPassword']==think_ucenter_md5($secpass, UC_AUTH_KEY)){
                $bank = MemberBank::where(array('uid'=>$user['uid']))->select();
                foreach ($bank as $key=>$item) {
                    $bank[$key]['account'] = '***************'.substr($item['account'],strlen($item['account'])-4,4);
                }
                $this->assign('bank',$bank);
                $this->assign('user',$member);
                return view('recharge/next_security_platwithdraw');
            }else{
                $this->error('资金密码错误');
            }
        }
        $this->assign('check',906);
        return view('recharge/security_platwithdraw');
    }
    public function getQr_security_platwithdraw(){
        if($_GET){
            $flag = $_GET['flag'];
            $bankId = $_GET['bankinfo'];
            $money = $_GET['money'];
            $user = Session::get('userData');
            $member = Members::where(array('uid'=>$user['uid']))->find();
            $bankInfo = MemberBank::where(array('id'=>$bankId))->find();
            if(empty($bankInfo)){
                $this->error('银行卡错误');
            }else{
                $bankInfo['account'] = '***************'.substr($bankInfo['account'],strlen($bankInfo['account'])-4,4);
            }
            $this->assign('bankInfo',$bankInfo);
            $this->assign('user',$member);
            $this->assign('money',$money);
            if(!floatval($money)||!$bankId){
                $this->error('参数有误。');
            }
            if($flag=="confirm"){
                $this->confirmMoney($member,$_GET);
            }
        }else{
            $this->error('参数错误');
        }
        return view('recharge/qr_security_platwithdraw');
    }

    public function getEmaildeposit_getmoneylist(){
        $this->init();
        $pageSize = 20;
        $where = array('c.uid'=>$this->user['uid']);
        $starttime = "";
        $endtime = "";
        if(isset($_GET['endtime'])&&isset($_GET['starttime'])){
            $starttime = $_GET['starttime'];
            $endtime = $_GET['endtime'];
            $where['actionTime'] = array('between time',array(strtotime($_GET['starttime']),strtotime($_GET['endtime'])));
        }else{
            if(isset($_GET['starttime'])){
                $starttime = $_GET['starttime'];
                $where['actionTime'] = array('egt',strtotime($_GET['starttime']));
            }
            if(isset($_GET['endtime'])){
                $endtime = $_GET['endtime'];
                $where['actionTime'] = array('elt',strtotime($_GET['endtime']));
            }
        }
        $cash =  MemberCash::alias('c')
            ->join('gygy_bank_list b ','c.bankId=b.id','left')
            ->where($where)
            ->field('c.username,c.actionTime,b.name as bankId,c.account,c.amount,c.state,c.info')
            ->paginate($pageSize,false,['query'=>$_GET]);
        foreach ($cash as $item=>$sub) {
            $cash[$item]['account'] = '******'.substr($sub['account'],strlen($sub['account'])-4,4);
            $cash[$item]['state'] = $this->cashStatus($sub['state']);
        }
        $total = $cash->total();
        $this->assign('maxDate',date('Y-m-d',$this->time));
        $this->assign('starttime',$starttime);
        $this->assign('endtime',$endtime);
        $this->assign('list',$cash);
        $this->assign('total',$total);
        $this->assign('page',$cash->render());
        $this->assign('currentPage', $cash->currentPage());
        $this->assign('totalPage', ceil($total/$pageSize));
        return view('recharge/emaildeposit_getmoneylist');
    }

    private function cashStatus($status){
        $arr = array(
          '1'=>'用户申请',
          '2'=>'已取消',
          '3'=>'已支付',
          '4'=>'提现失败',
          '5'=>'后台删除',
          '0'=>'确认到帐',
        );
        return $arr[$status];
    }

    private function confirmMoney($user,$get){
        if ($user['is_test'] == 1){
            $this->error('此账号无此权限');
        }
        if ($user['coin'] < intval($get['money'])) {
            $this->error('你账户资金不足');
        }
        $amount = $get['money'];
        $amountGroup = [];
        if ($amount > 50000) {
            $amountGroup = $this->amountGroup($amount);
        }
        $this->init();
        // 查询最大提现次数与已经提现次数
        $time = strtotime(date('Y-m-d', $this->time));
        $cash = MemberCash::where(array('actionTime' => array('egt', $time), 'uid' => $this->user['uid']))->field('count(*) as count')->find();
//        $grade = MemberLevel::where(array('level' => $this->user['grade']))->field('maxToCashCount')->find();
        if ($times = $cash['count']) {
            //$cashTimes=$grade['maxToCashCount'];
            $cashTimes = $this->settings['cashTimes'];
            if ($times >= $cashTimes) {
                $this->error('对不起，今天你提现次数已达到最大限额，请明天再来');
            }
        }

        //增加黑客修改提现金额为负数不合法的判断
        if ($amount < 100) {
            $this->error('提现金额不得低于100元');
        }
        if ($amount > 100000){
            $this->error('单次提现金额不能大于10万');
        }

        if ($amount < $this->settings['cashMin'] || $amount > $this->settings['cashMax']) {
            $this->error('提现金额必须介于' . $this->settings['cashMin'] . '和' . $this->settings['cashMax'] . '之间');
        }

        //提示时间检查
        $baseTime = strtotime(date('Y-m-d ', $this->time) . '06:00');
        $fromTime = strtotime(date('Y-m-d ', $this->time) . $this->settings['cashFromTime'] . ':00');
        $toTime = strtotime(date('Y-m-d ', $this->time) . $this->settings['cashToTime'] . ':00');
        //if($toTime<$baseTime) $toTime.=24*3600;
        if (($fromTime > $toTime && $this->time < $fromTime && $this->time > $toTime)
            || ($fromTime < $toTime && ($this->time < $fromTime || $this->time > $toTime))
        ) {
            $this->error("提现时间：从" . $this->settings['cashFromTime'] . "到" . $this->settings['cashToTime']);
        }

        //近2天来的消费判断
        $cashAmout = 0;
        $rechargeAmount = 0;
        $rechargeTime = strtotime('00:00');
//        if ($this->settings['cashMinAmount']&&$this->user['type']!=1) {
        /*if ($this->settings['cashMinAmount']) {
            $cashMinAmount = $this->settings['cashMinAmount'] / 100;

            $gRs = MemberRecharge::where(array('uid' => $this->user['uid'], 'state' => array('in', '1,2,9'), 'isDelete' => 0, 'rechargeTime' => array('egt', $rechargeTime)))->field('sum(case when rechargeAmount>0 then rechargeAmount else amount end) as rechargeAmount')->find();
            if ($gRs) {
                $rechargeAmount = $gRs["rechargeAmount"] * $cashMinAmount;
            }

            if ($rechargeAmount) {
                //近2天来消费总额
                $bet = Bets::where(array('actionTime' => array('egt', $rechargeTime), 'uid' => $this->user['uid'], 'isDelete' => 0, 'lotteryNo' => array('neq', '')))->field('sum(mode*beiShu*actionNum) as betAmout')->find();
                $betAmout = $bet['betAmout'];
                if (floatval($betAmout) < floatval($rechargeAmount)) {
                    if(floatval($gRs["rechargeAmount"])<=0&&$this->user['type']==1){
                        //代理号，如果没有充值过，提现不限制
                    }else{
                        $this->error("消费满" . $this->settings['cashMinAmount'] . "%才能提现");
                    }
                }
            }
        }*/ /////近2天来的消费判断结束
        $memberBankId = $get['bankinfo'];
        $bank = MemberBank::where(array('uid' => $this->user['uid'], 'id' => $memberBankId))->find();

        if (empty($bank)) {
            $this->error('未绑定银行卡无法提现');
        }
        if ($bank['actionTime'] + 8 * 60 * 60 > time()) {
            $this->error('该银行卡添加不足8小时，不能用于提现');
        }

        // 检查充值投注总额有没有到充值总额的30%
//        $rechargeTotal = M('member_recharge')->where(array('uid' => $this->user['uid'], 'state' => array('in', '1,2,9'), 'isDelete' => 0))->sum('amount');
        // if ($user['type'] != 1){
            $gRs = MemberRecharge::where(array('uid' => $this->user['uid'], 'state' => array('in', '1,2,9'), 'isDelete' => 0))
                ->field('sum(case when rechargeAmount>0 then rechargeAmount else amount end) as rechargeAmount')->find();
            $rechargeTotal = $gRs["rechargeAmount"];
            if ($rechargeTotal > 0) {
//            $betAmount = M('bets')->where(array('uid' => $this->user['uid'], 'isDelete' => 0, 'lotteryNo' => array('neq', '')))->sum(mode * beiShu * actionNum);
                $betAmount = $user['scoreTotal'];
                if ($betAmount < ($rechargeTotal * 0.25)) {
                    $this->error('投注金额小于充值金额的30%，不能提现');
                }
            }else{
                //如果是代理号 没有充值过 可以提现流水
                if($user['type'] != 1){
                    /* $coin_log = M('coin_log')->where(array('uid' => $this->user['uid'], 'liqType' => 201))->find();
                     if(empty($coin_log)){
                         $this->error('还未充值，不能提现');
                     }*/
                    $this->error('还未充值，不能提现');
                }
            }
        // }
        $para['username'] = $bank['username'];
        $para['account'] = $bank['account'];
        $para['amount'] = $amount;
        $para['bankId'] = $bank['bankId'];
        $para['memberBankId'] = $bank['id'];
        $para['actionTime'] = $this->time;
        $para['uid'] = $this->user['uid'];

        Db::startTrans();
        $users = Members::where(array('uid'=>$user['uid']))->lock(true)->find();
        if ($users['coin'] < intval($get['money'])) {
            Db::rollback();
            $this->error('你账户资金不足');
        }
        // 插入提现请求表
        $cash = new MemberCash();
        $cash::insert($para);
        if ($lastid = $cash->getLastInsID()) {
            // 流动资金
            $return = $this->addCoin(array(
                'coin' => 0 - $para['amount'],
                'fcoin' => $para['amount'],
                'uid' => $para['uid'],
                'liqType' => 106,
                'info' => "提现[$lastid]资金冻结",
                'extfield0' => $lastid,
            ));
            // 提现金额分账记录
            if (!empty($amountGroup)) {
                $cashSplit = [];
                foreach ($amountGroup as $amount) {
                    $row['cashId'] = $lastid;
                    $row['uid'] = $this->user['uid'];
                    $row['actionTime'] = $this->time;
                    $row['splitAmount'] = $amount;
                    $row['bankId'] = $bank['bankId'];
                    $row['account'] = $bank['account'];
                    $row['username'] = $bank['username'];
                    $row['state'] = 1;

                    $cashSplit[] = $row;
                }
                $splitRet = (new MemberCashSplit())->saveAll($cashSplit);
                if (!$splitRet) {
                    Db::rollback(); //不成功，则回滚
                    $this->error('提交提现请求出错');
                }
            }
            if ($return) {
                Db::commit(); //成功则提交
                $this->success('申请提现成功，提现将在10分钟内到账，如未到账请联系在线客服。');
            } else {
                Db::rollback(); //不成功，则回滚
                $this->error('提交提现请求出错');
            }
        }
    }

    // 提现金额分账
    private function amountGroup($amount)
    {
        if ($amount < 50000) {
            return [];
        }
        $amountGroup = [];
        $surplusAmount = $amount;
        $i = 0;
        while ($surplusAmount > 50000) {
            $randAmount = rand(40000, 49999);
            $amountGroup[$i] = $randAmount;
            $surplusAmount = $surplusAmount - $randAmount;
            $i++;
        }
        $amountGroup[$i] = $surplusAmount;
        return $amountGroup;
    }
    /**
     * 用户资金变动
     *
     * 请在一个事务里使用
     */
    protected function addCoin($log)
    {
        if (!isset($log['uid'])) {
            $log['uid'] = $this->user['uid'];
        }
        if (!isset($log['info'])) {
            $log['info'] = '';
        }
        if (!isset($log['coin'])) {
            $log['coin'] = 0;
        }
        if (!isset($log['type'])) {
            $log['type'] = 0;
        }
        if (!isset($log['fcoin'])) {
            $log['fcoin'] = 0;
        }
        if (!isset($log['extfield0'])) {
            $log['extfield0'] = 0;
        }
        if (!isset($log['extfield1'])) {
            $log['extfield1'] = '';
        }
        if (!isset($log['extfield2'])) {
            $log['extfield2'] = '';
        }
        $sql = " call setCoin({$log['coin']}, {$log['fcoin']}, {$log['uid']}, {$log['liqType']}, {$log['type']}, '{$log['info']}', {$log['extfield0']}, '{$log['extfield1']}', '{$log['extfield2']}')";
        if (Db::query($sql) === false) {
            return false;
        } else {
            return true;
        }
        return false;
    }
    private function init(){
        if ($data = Params::select()) {
            foreach ($data as $var) {
                $this->settings[$var['name']] = $var['value'];
            }
        }
        $this->time = time();
        $this->user = Session::get('userData');
    }

    //智付网银
    public function getZfwy()
    {
        $data = $_GET;
        try{
            $user = Session::get('userData');
            if($data['def-w-label'] == 12){

                $output = Pay::bankPay();
                $order_no = Pay::$order_no;
                $order_amount = Pay::$order_amount;
                //获取 orderKey
                $exp = explode('name="orderKey" value="',$output);
                $exp = explode('"',$exp[1]);
                // 微信 pay_id
                $radio = explode('<input type="radio"  value=',$output);
                $wxid = explode(' ',$radio[1]);
                $pay_code = $wxid[1];
                $wx_pay_id = $wxid[0];
                $this->assign('wx_pay_id',$wx_pay_id);
                //pay_code
                $wxcode = explode('id=',$pay_code);
                $wxcode = explode(' ',$wxcode[1]);
                $wxcode = $wxcode[0];
                preg_match('/[a-zA-Z]+/',$wxcode, $matches);
                $wx_pay_code = $matches[0];
                $this->assign('wx_pay_code',$wx_pay_code);
                //微信

                //支付宝  zfb_id
              /*  $zfb_id = explode(' ',$radio[2]);
                $pay_code = $zfb_id[1];
                $zfb_id = $zfb_id[0];*/
                $this->assign('zfb_pay_id','');
                //pay_code
                /*$al_code = explode('id=',$pay_code);
                $al_code = explode(' ',$al_code[1]);
                $al_code = $al_code[0];*/
                preg_match('/[a-zA-Z]+/','', $matches);
//                $al_pay_code = $matches[0];
                $this->assign('zfb_pay_code','');
            }else{
                //$_SERVER['HTTP_REFERER']. '/index.php?s=/home/recharge/zf_server'
                include_once "zhifu/merchant.php";
                $zf                = Paybusiness::where(array('id' => $data['def-w-label']))->find();
                $merchant_code     = $zf['business_id']; //商户号，1118004517是测试商户号，线上发布时要更换商家自己的商户号！
                $service_type ="direct_pay";
                $interface_version ="V3.0";
                $sign_type ="RSA-S";
                $input_charset = "UTF-8";
                $notify_url =$this->getRootUrl(). '/recharge/zf_server';
                $order_no = $this->getRechId();
                $order_time = date( 'Y-m-d H:i:s' );
                $order_amount = $data['amount'];
                $product_name ="testpay";
                //以下参数为可选参数，如有需要，可参考文档设定参数值
                $return_url = $this->getRootUrl();
                $pay_type = "";
                $redo_flag = "";
                $product_code = "";
                $product_desc = "";
                $product_num = "";
                $show_url = "";
                $client_ip =get_client_ip() ;
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
                $merchant_private_key= openssl_get_privatekey($merchant_private_key);
                openssl_sign($signStr,$sign_info,$merchant_private_key,OPENSSL_ALGO_MD5);
                $sign = base64_encode($sign_info);
                $parmas = array(
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
                );
                $url = $zf['tj_url'].'?input_charset=UTF-8';//'https://pay.ddbill.com/gateway?input_charset=UTF-8';
    //            dump($url);

                $output = $this->getHtmlInfo($url,$parmas);
//                dump($output);
                //获取 orderKey
                $exp = explode('name="orderKey" value="',$output);
                $exp = explode('"',$exp[1]);

                // 微信 pay_id
                $radio = explode('<input type="radio"  value=',$output);
                $wxid = explode(' ',$radio[1]);
                $pay_code = $wxid[1];
                $wx_pay_id = $wxid[0];
                $this->assign('wx_pay_id',$wx_pay_id);
                //pay_code
                $wxcode = explode('id=',$pay_code);
                $wxcode = explode(' ',$wxcode[1]);
                $wxcode = $wxcode[0];
                preg_match('/[a-zA-Z]+/',$wxcode, $matches);
                $wx_pay_code = $matches[0];
                $this->assign('wx_pay_code',$wx_pay_code);
                //微信

                //支付宝  zfb_id
                $zfb_id = explode(' ',$radio[2]);
                $pay_code = $zfb_id[1];
                $zfb_id = $zfb_id[0];
                $this->assign('zfb_pay_id',$zfb_id);
                //pay_code
                $al_code = explode('id=',$pay_code);
                $al_code = explode(' ',$al_code[1]);
                $al_code = $al_code[0];
                preg_match('/[a-zA-Z]+/',$al_code, $matches);
                $al_pay_code = $matches[0];
                $this->assign('zfb_pay_code',$al_pay_code);
            }


            //支付宝

            //预支付订单信息
            $rechage = array(
                'uid'=>$user['uid'],
                'username'=>$user['username'],
                'rechargeId'=>$order_no,
                'amount'=>$order_amount,
                'actionIP'=>$this->ip(true),
                'actionTime'=>time(),
                'state'=>'0',
                'info'=>'预支付'
            );
            MemberRecharge::insert($rechage);
            header("Content-type: text/html; charset=utf-8");
            $this->assign('orderKey',$exp[0]);
            $this->assign('output',$output);
            $this->assign('pay_id',$data['def-w-label']);

//            $this->display('zfwy');
            return view('recharge/zfwy');
        }catch (\Exception $e){
//            dump($e->getMessage().'line:'.$e->getLine().'file'.$e->getFile());
            Log::record($e->getMessage());
        }
    }

    public function guofubao($data)
    {
        echo GfbPay::getParams();
        exit();
    }
    public function postGfb_callback()
    {
        return GfbPay::gfb_callback();
    }

    public function zbzf($data)
    {
        echo ZbPay::getParams();
        exit();
    }

    public function getZb_callback()
    {
        return ZbPay::zb_callback();
    }

    public function jqzf($data)
    {
        echo JqPay::getParams();
        exit();
    }

    public function getJq_callback()
    {
        return JqPay::jq_callback();
    }

    public function postZb_callback()
    {
        return ZbPay::zb_callback();
    }
    public function getHtmlInfo($url,$parmas){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_URL, $url);
//        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:pay.ddbill.com','Origin:http://www.taapay.cn','Upgrade-Insecure-Requests:1','Content-Type:application/x-www-form-urlencoded;charset=UTF-8'));
//        curl_setopt ($ch, CURLOPT_REFERER, 'http://www.taapay.cn/recharge/index.html');
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:pay.ddbill.com','Origin:http://www.tcjkjb.top','Upgrade-Insecure-Requests:1','Content-Type:application/x-www-form-urlencoded;charset=UTF-8'));
        curl_setopt ($ch, CURLOPT_REFERER, 'http://www.xfgkjd.cn/index.php?s=/home/recharge/index.html');
//        curl_setopt ($ch, CURLOPT_REFERER, 'http://www.tcjkjb.top/index.php?s=/home/recharge/index.html');
        $User_Agent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
        curl_setopt($ch, CURLOPT_USERAGENT, $User_Agent);
        curl_setopt($ch,CURLOPT_POST,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($parmas));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        $output = str_replace('action="Pay"','action="https://pay.ddbill.com/Pay"',$output);
        $output = str_replace('submitForm_scanPay','local_submitForm_scanPay',$output);
        curl_close($ch);
        return $output;
    }
    private function getRootUrl(){
        return 'http://taapay.cn';
        $url = $_SERVER['HTTP_REFERER'];
        $arr = explode('/index.php',$url);
        return $arr[0];
    }
    final private function getRechId()
    {
        $rechargeId = $this->guid();
        if (MemberRecharge::where(array('rechargeId' => $rechargeId))->find()) {
            $this->getRechId();
        } else {
            return $rechargeId;
        }
    }
    function guid() {
        $chars = md5(uniqid(mt_rand(), true));
        $uuid  = substr($chars,0,8);
        $uuid .= substr($chars,8,4);
        $uuid .= substr($chars,12,4);
        $uuid .= substr($chars,16,4);
        $uuid .= substr($chars,20,12);
        return $uuid;
    }
    final protected static function ip($outFormatAsLong = false)
    {
        $ip = get_client_ip(1);

        return $ip;
    }

    public function postQcode(){
        $type = $_POST['type'];
        $payChannelId = $_POST['payChannelId'];
        $bankCode = $_POST['bankCode'];
        $pay_id = $_POST['pay_id'];
        $params = array(
            'bankCode'=>$bankCode,
            'payChannelId'=>$payChannelId,
            'orderKey'=>$_POST['orderKey'],
            'orderInfo'=>'',
            'chlType'=>'03',
        );
        if($pay_id == 12){
            $html = Pay::doPost('https://pay.dinpay.com/Pay',$params);
        }else{
            $html = $this->getHtmlInfo('https://pay.ddbill.com/Pay',$params);
        }
        echo $html;
    }

    public function postZf_server1()
    {
        return Pay::offlineNotify();
    }
    //智付回调
    public function postZf_server()
    {
        Log::record('通道一回调成功');
        try{
            include_once "zhifu/merchant.php";
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
            $DD4_public_key = openssl_get_publickey($DD4_public_key);
            $flag = openssl_verify($signStr,$DD4Sign,$DD4_public_key,OPENSSL_ALGO_MD5);
            /**
            如果验签返回ture就响应SUCCESS,并处理业务逻辑，如果返回false，则终止业务逻辑。
             */
            if ($flag) {
                $this->updateOrder($order_no, $order_time,$bank='通道一');
            } else {
                Log::record('充值失败,签名验证失败');
                $this->createReqInfo(json_encode($_POST),$order_no,'通道一',1,'充值失败,签名验证失败');
                exit('FAILED');
            }
        }catch (\Exception $e){
            $this->createReqInfo(json_encode($_POST),'','通道一',1,$e->getMessage());
            Log::record($e->getMessage());
        }
        exit('SUCCESS');
    }

    //智付支付
    public function zfpay($data)
    {
        $this->init();
        $zf = Paybusiness::where(array('id' => $data['def-w-label']))->find();
        include_once 'zhifu/phpqrcode.php';
        include_once 'zhifu/merchant.php';
        $merchant_code      = $zf['business_id']; //商户号，1118004517是测试商户号，调试时要更换商家自己的商户号
        $service_type       = $data['payLinks']; //微信：weixin_scan 支付宝：alipay_scan 智汇宝：zhb_scan
        $notify_url         = $this->getRootUrl() . '/recharge/zf_server'; //$_POST["notify_url"];
        $interface_version  = 'V3.1';
        $client_ip          = '120.237.123.242';
        $sign_type          = 'RSA-S';
        $order_no           = $this->getRechId();
        $order_time         = date('Y-m-d h:m:s');
        $order_amount       = $data['amount'];
        $product_name       = '充值';
        $product_code       = '';
        $product_num        = '';
        $product_desc       = '';
        $extra_return_param = '';
        $extend_param       = '';
        /////////////////////////////   参数组装  /////////////////////////////////
        /**除了sign_type DD4Sign参数，其他非空参数都要参与组装，组装顺序是按照a~z的顺序，下划线"_"优先于字母

         */
        $signStr = "";
        $signStr = $signStr . "client_ip=" . $client_ip . "&";
        if ($extend_param != "") {
            $signStr = $signStr . "extend_param=" . $extend_param . "&";
        }
        if ($extra_return_param != "") {
            $signStr = $signStr . "extra_return_param=" . $extra_return_param . "&";
        }
        $signStr = $signStr . "interface_version=" . $interface_version . "&";
        $signStr = $signStr . "merchant_code=" . $merchant_code . "&";
        $signStr = $signStr . "notify_url=" . $notify_url . "&";
        $signStr = $signStr . "order_amount=" . $order_amount . "&";
        $signStr = $signStr . "order_no=" . $order_no . "&";
        $signStr = $signStr . "order_time=" . $order_time . "&";
        if ($product_code != "") {
            $signStr = $signStr . "product_code=" . $product_code . "&";
        }
        if ($product_desc != "") {
            $signStr = $signStr . "product_desc=" . $product_desc . "&";
        }
        $signStr = $signStr . "product_name=" . $product_name . "&";
        if ($product_num != "") {
            $signStr = $signStr . "product_num=" . $product_num . "&";
        }
        $signStr = $signStr . "service_type=" . $service_type;
/////////////////////////////   RSA-S签名  /////////////////////////////////
        /////////////////////////////////初始化商户私钥//////////////////////////////////////
        $merchant_private_key = openssl_get_privatekey($merchant_private_key);
        openssl_sign($signStr, $sign_info, $merchant_private_key, OPENSSL_ALGO_MD5);
        $sign = base64_encode($sign_info);
/////////////////////////  提交参数到DD4微信网关  ////////////////////////
        /**curl方法提交支付参数到DD4微信网关https://api.ddbill.com/gateway/api/weixin，并且获取返回值

         */
        $postdata = array('extend_param' => $extend_param,
            'extra_return_param'             => $extra_return_param,
            'product_code'                   => $product_code,
            'product_desc'                   => $product_desc,
            'product_num'                    => $product_num,
            'merchant_code'                  => $merchant_code,
            'service_type'                   => $service_type,
            'notify_url'                     => $notify_url,
            'interface_version'              => $interface_version,
            'sign_type'                      => $sign_type,
            'order_no'                       => $order_no,
            'client_ip'                      => $client_ip,
            'sign'                           => $sign,
            'order_time'                     => $order_time,
            'order_amount'                   => $order_amount,
            'product_name'                   => $product_name);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $zf['tj_url']); //"https://api.ddbill.com/gateway/api/scanpay"
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postdata));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        //$res=simplexml_load_string($response);
        curl_close($ch);
        Log::record($response);
        $arr = $this->getXml($response);
        if (strtolower($arr['result_code']) != 0) {
            $this->error($arr['resp_desc'].$arr['result_code']);
        } else {
            //预支付订单信息
            $rechage = array(
                'uid'        => $this->user['uid'],
                'username'   => $this->user['username'],
                'rechargeId' => $order_no,
                'amount'     => $order_amount,
                'actionIP'   => $this->ip(true),
                'actionTime' => $this->time,
                'state'      => '0',
                'info'=>'预支付'
            );
            MemberRecharge::insert($rechage);
            echo $response;
        }
    }

    public function getXml($str)
    {
        $simple = $str;
        $p      = xml_parser_create();
        xml_parse_into_struct($p, $simple, $vals, $index);
        xml_parser_free($p);
//        echo "Index array\n";
        //        print_r($index);
        //        echo "\nVals array\n";
        $rst = array(
            'resp_code' => 'fail',
            'resp_desc' => '获取失败',
        );
        foreach ($vals as $key => $val) {
            if (strtolower($val['tag']) == 'resp_code') {
                $rst['resp_code'] = $val['value'];
            }
            if (strtolower($val['tag']) == 'result_code') {
                $rst['result_code'] = $val['value'];
            }
            if (strtolower($val['tag']) == 'resp_desc') {
                $rst['resp_desc'] = $val['value'];
            }
        }
        return $rst;
    }

    //更新订单
    private function updateOrder($orderid, $datetime,$bank='')
    {
        Log::record('回调充值更新开始'.$orderid);
        try{
            $rechage = MemberRecharge::where(array('rechargeId' => $orderid, 'state' => 0))->find();
            if (empty($rechage)) {
                $this->createReqInfo('',$orderid,$bank,1,'更新订单：充值失败，订单不存在,或者已经充值完成');
                Log::record('充值失败，订单不存在,或者已经充值完成');
                return;
            }else if(time()>=intval($rechage['actionTime'])+1800){
                $this->createReqInfo('订单已经失效',$orderid,$bank,1,'充值失败，订单已经失效');
                return;
            }
            $uid                  = $rechage['uid'];
            $data['rechargeTime'] = is_string($datetime)?strtotime($datetime):$datetime;
            $data['rechargeAmount'] = $rechage['amount'];
            $data['state']        = 1;
            $data['info']        = $bank;
            $coin                 = Members::where(array('uid' => $uid))->field('coin')->find();
            if ($coin) {
                $member['coin'] = $coin['coin'] + $rechage['amount'];
                Members::where(array('uid' => $uid))->update($member);
            }
            $reg = MemberRecharge::where(array('rechargeId'=> $orderid))->update($data);
            if ($reg) {
                Log::record($bank.'充值成功');
                $this->createReqInfo(json_encode($data),$orderid,$bank,0,'充值成功');
                //$this->redirect('home/index/index', '充值成功，即将返回主页');
                
                // 充值返利
                $this->rechargeRebate($rechage,$data);
            } else {
                Log::record($bank.'充值失败'.json_encode($data));
                $this->createReqInfo(json_encode($data),$orderid,$bank,1,'数据更新失败');
            }
        }catch (\Exception $e){
            $this->createReqInfo('程序异常',$orderid,$bank,1,$e->getMessage());
            Log::record('回调充值更新失败，'.$e->getMessage());
        }
    }

    // 充值返利
    private function rechargeRebate($recharge,$data){
        if ($recharge['isDelete'] != 0 || $data['state'] != 1 || $data['rechargeTime'] < 1) {
            Log::record('充值记录数据异常');
            return;
        }

        $params = Params::getParams();
        if (!array_key_exists('ChongZhiFanLiKaiGuan', $params)) {
            Log::record('参数设置错误：ChongZhiFanLiKaiGuan');
            return;
        }
        if (!array_key_exists('ChongZhiFanLiBiLi', $params)) {
            Log::record('参数设置错误：ChongZhiFanLiBiLi');
            return;
        }
        if (!array_key_exists('ChongZhiFanLiStartDate', $params)) {
            Log::record('参数设置错误：ChongZhiFanLiStartDate');
            return;
        }
        if (!array_key_exists('ChongZhiFanLiEndDate', $params)) {
            Log::record('参数设置错误：ChongZhiFanLiEndDate');
            return;
        }
        if ($params['ChongZhiFanLiKaiGuan'] != 1) {
            Log::record('充值返利活动未开启');
            return;
        }
        if ($params['ChongZhiFanLiBiLi'] <= 0) {
            Log::record('充值返利比例设置错误：ChongZhiFanLiBiLi：'.$params['ChongZhiFanLiBiLi']);
            return;
        }
        $ratio = $params['ChongZhiFanLiBiLi'];
        if (strtotime($params['ChongZhiFanLiStartDate']) > time()) {
            Log::record('充值返利活动未开始,开始时间：'.$params['ChongZhiFanLiStartDate']);
            return;
        }
        if (strtotime($params['ChongZhiFanLiEndDate']) < time()) {
            Log::record('充值返利活动已结束，结束时间：'.$params['ChongZhiFanLiEndDate']);
            return;
        }

        $actWhere = [
            'uid' => $recharge['uid'],
            'type' => 4,
            'created_at' => $data['rechargeTime'],
            'base_money' => $data['rechargeAmount']
        ];
        $activityLogCnt = ActivityLog::where($actWhere)->count();
        if ($activityLogCnt > 0) {
            Log::record('充值返利已经计算完成');
            return;
        }

        $actMoney = $data['rechargeAmount'] * $ratio;
        $actLogData = [
            'type' => 4,
            'uid' => $recharge['uid'],
            'money' => $actMoney,
            'base_money' => $data['rechargeAmount'],
            'created_at' => $data['rechargeTime'],
            'remark' => '充值返利'
        ];
        $ret = ActivityLog::create($actLogData);
        if (!$ret) {
            Log::record('充值返利活动记录写入失败');
            return;
        }
        $sql = " call setCoin({$actMoney},0,{$recharge['uid']},57,0,'充值返利',0,'','')";
        if (Db::query($sql) === false) {
            Log::record('充值返利活动资金账边记录处理失败');
        }
    }

    //创建回调请求数据
    private function createReqInfo($req='',$orderid='',$form='',$status=1,$note=''){
        try{
            $data = array(
                'req_data'=>$req,
                'req_date'=>time(),
                'host'=>$_SERVER['HTTP_HOST'],
                'orderid'=>$orderid,
                'form'=>$form,
                'status'=>$status,
                'note'=>$note
            );
            Rebackinfo::insert($data);
        }catch (\Exception $e){
            Log::record('回调请求数据写入失败');
        }
    }
    /*20170809 begin*/
    private function qrcode($url='http://www.jihexian.com/',$level=3,$size=4){
        Vendor('phpqrcode.phpqrcode');
        $errorCorrectionLevel =intval($level) ;//容错级别
        $matrixPointSize = intval($size);//生成图片大小
        include_once 'zhifu/phpqrcode.php';
        //生成二维码图片
        //echo $_SERVER['REQUEST_URI'];
        $object = new \QRcode();
        $file = RUNTIME_PATH .'qrcode_'.$this->guid().'.png';
        $object->png($url, $file, $errorCorrectionLevel, $matrixPointSize, 2);
        return $file;
    }
    //泽圣
    function zesheng($data){
        try{
            $this->init();
            $zf  = Paybusiness::where(array('id' => $data['def-w-label']))->find();

//            $service = $data['service'];
            $amount = $data['amount'];
            $mch_id = $zf['business_id'];
            $body = '充值';
            $mch_create_ip = get_client_ip();
            $merchantCode = $mch_id;
            $outOrderId = $this->getRechId();
            $amount = intval($amount*100);
            $orderCreateTime = date('YmdHis',time());
            $noticeUrl = $this->getRootUrl() . '/recharge/zesheng_server';
            $isSupportCredit = '1';
            $md5Key = $zf['business_key'];
            // 参与签名字段
            $sign_fields1 = Array(
                "merchantCode",
                "outOrderId",
                "amount",
                "orderCreateTime",
                "noticeUrl",
                "isSupportCredit"
            );
            $map1 = Array(
                "merchantCode" => $merchantCode,
                "outOrderId" => $outOrderId,
                "amount" => $amount,
                "orderCreateTime" => $orderCreateTime,
                "noticeUrl" => $noticeUrl,
                "isSupportCredit" => $isSupportCredit
            );
            $sign0 = $this->zesheng_sign_mac($sign_fields1, $map1, $md5Key);
            // 将小写字母转成大写字母
            $sign1 = strtoupper($sign0);
            // 使用方法
           /* $service_type = $_POST['payLinks'];
            $payChannel = 21;
            $title = "微信";
            if($service_type=='weixin'){
                $payChannel = 21;
            }else if($service_type=='alipay'){
                $payChannel = 30;
                $title = "支付宝";
            }*/
            $title = "QQ钱包扫码";
            $post_data1 = array(
                'model' => 'QR_CODE',
                'merchantCode' => $merchantCode,
                'outOrderId' => $outOrderId,
                'deviceNo' => '',
                'amount' => $amount,
                'goodsName' => $body,
                'goodsExplain' => $body,
                'ext' => 'ext',
                'orderCreateTime' => $orderCreateTime,
                'lastPayTime' => $orderCreateTime,
                'noticeUrl' => $noticeUrl,
                'goodsMark' => 'goodsMark',
                'isSupportCredit' => $isSupportCredit,
                'ip' => $mch_create_ip,
                'payChannel' => 31,//21微信，30-支付宝 31 -QQ钱包
                'sign' => $sign1
            );
            $res = $this->zesheng_send_post('http://payment.zsagepay.com/scan/entrance.do', $post_data1);
            $arr_res = json_decode($res,true);

            if($arr_res['code']==0){
                //预支付订单信息
                $rechage = array(
                    'uid'=>$this->user['uid'],
                    'username'=>$this->user['username'],
                    'rechargeId'=>$outOrderId,
                    'amount'=>$amount/100,
                    'actionIP'=>$this->ip(true),
                    'actionTime'=>$this->time,
                    'state'=>'0',
                    'info'=>'zesheng-QQ扫码支付'.$sign1,
                );
                MemberRecharge::insert($rechage);
                $img = $arr_res['data']['url'];
                $html  ="<div style='line-height: 50px;text-align:center;width: 450px;margin-top: 50px'>
                        <p style='color:#04564f;font-size:28px'>".$title."-支付</p>";
                $html .= '<img src="'.base64EncodeImage($this->qrcode($img,3,5)).'">
                    <p style=\'color:#ff0000;font-size:14px\'>请使用手机QQ扫一扫进行支付，支付完成后刷新本页面即可！</p>
                    </div>';
//                dump($this->qrcode($img,3,5));
                echo $html;
                exit();
//                $this->qrcode($img,3,5);
            }else{
                echo $arr_res['msg'];
            }
            exit();
        }catch (\Exception $e){
            exit($e->getMessage());
            Log::record($e->getMessage());
        }
    }
    /*发送数据  */
    function zesheng_send_post($url, $post_data)
    {
        $postdata = http_build_query($post_data);
        $options = array(
            'http' => array(
                'method' => 'POST',
                'header' => 'Content-type:application/x-www-form-urlencoded',
                'content' => $postdata,
                'timeout' => 15 * 60
            ) // 超时时间（单位:s）

        );
        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return $result;
    }

    /* 构建签名原文 */
    function zesheng_sign_src($sign_fields, $map, $md5_key)
    {
        // 排序-字段顺序
        sort($sign_fields);
        $sign_src = "";
        foreach ($sign_fields as $field) {
            $sign_src .= $field . "=" . $map[$field] . "&";
        }
        $sign_src .= "KEY=" . $md5_key;

        return $sign_src;
    }

    /**
     * 计算md5签名  返回的是小写的，后面需转大写
     */
    function zesheng_sign_mac($sign_fields, $map, $md5_key)
    {
        $sign_src = $this->zesheng_sign_src($sign_fields, $map, $md5_key);
        return md5($sign_src);
    }

    function postZesheng_server(){
        try{
            $zf  = Paybusiness::where(array('id' =>7))->find();
            $md5Key = $zf['business_key'];
            $business_alias = 'zesheng';
            $sign=$_POST["sign"];
            //签名数组
            $sign_fields1 = Array(
                "merchantCode",
                "transType",
                "instructCode",
                "outOrderId",
                "transTime",
                "totalAmount"
            );
            //获取异步通知数据，并赋值给数组
            $out_trade_no = $_POST["outOrderId"];
            $map = Array(
                "merchantCode"=>$_POST["merchantCode"],
                "transType"=>$_POST["transType"],
                "instructCode"=>$_POST["instructCode"],
                "outOrderId"=>$out_trade_no,
                "transTime"=>$_POST["transTime"],
                "totalAmount"=>$_POST["totalAmount"]
            );
            $sign0 = $this->zesheng_sign_mac($sign_fields1, $map, $md5Key);
            // 将小写字母转成大写字母
            $sign1 = strtoupper($sign0);
            //验签
            if($sign === $sign1) {
                echo "{'code':'00'}";
                $rechage = MemberRecharge::where(array('rechargeId' => $out_trade_no, 'state' => 0))
                    ->find();
                if (empty($rechage)) {
                    Log::record($business_alias.'充值失败，订单不存在,或者已经充值完成');
                    exit('fail');
                    return;
                }
                //更新订单
                $this->updateOrder($out_trade_no, $_POST["transTime"],$bank=$zf['business_alias']);
                Log::record($business_alias.'签名验证成功，支付更新成功');
            }else {
                echo "{'code':'01'}";
                Log::record('zesheng支付异常'.json_encode($_POST));
                $this->createReqInfo(json_encode($_POST),$out_trade_no,$business_alias,1,'第三方支付状态异常');
                exit('fail');
            }
        }catch (\Exception $e){
            Log::record('zesheng支付异常.' . $e->getMessage());
        }
    }
    /*20170809 end*/
    function postZesheng_wy(){
        try{
            $this->init();
            $zf  = Paybusiness::where(array('id' => 7))->find();
            $amount = $_POST['amount'];
            $merchantCode = $zf['business_id'];
            $outOrderId = $this->getRechId();
            $totalAmount = intval($amount*100);
            $orderCreateTime = date("YmdHis", time() + 3600 * 8);
            // 设置定的最晚支付时间为当前时间后延一天
            $lastPayTime = date("YmdHis", strtotime("+1 days") + 3600 * 8);
            $noticeUrl = $this->getRootUrl() . '/recharge/zesheng_server';
            $md5Key = $zf['business_key'];
            // 参与签名字段
            $sign_fields = Array(
                "merchantCode",
                "outOrderId",
                "totalAmount",
                "orderCreateTime",
                "lastPayTime"
            );
            $map = Array(
                "merchantCode" => $merchantCode,
                "outOrderId" => $outOrderId,
                "totalAmount" => $totalAmount,
                "orderCreateTime" => $orderCreateTime,
                "lastPayTime" => $lastPayTime
            );
            $sign = $this->zesheng_sign_mac($sign_fields, $map, $md5Key);
            // 将小写字母转成大写字母
            $sign = strtoupper($sign);
            $commonUrl = "http://payment.zsagepay.com/";
            $payUrl = $commonUrl . "ebank/pay.do";
            $goodsName = "goodsName";
            $goodsExplain = "goodsExplain";
            $merUrl = "http://192.168.13.160/EHK_PHP/rec.php";
            $bankCode = $_POST['bankCode'];
            $bankCardType = $_POST['bankCardType'];

            //预支付订单信息
            $rechage = array(
                'uid'=>$this->user['uid'],
                'username'=>$this->user['username'],
                'rechargeId'=>$outOrderId,
                'amount'=>$amount,
                'actionIP'=>$this->ip(true),
                'actionTime'=>$this->time,
                'state'=>'0',
                'info'=>$sign,
            );
            MemberRecharge::insert($rechage);
            //提交第三方
            $html = "";
            $html .='<body target=\'_blank\' onLoad="document.zlinepay.submit();" class="center">';
            $html .='	<form type="hidden" name=\'zlinepay\' action='.$payUrl.' method=\'post\' />';
            $html .='	<input type="hidden" name="merchantCode"value='.$merchantCode.' />';
            $html .='	<input type="hidden" name="outOrderId"value='.$outOrderId.' />';
            $html .='	<input type="hidden" name="totalAmount"value='.$totalAmount.' />';
            $html .='	<input type="hidden" name="goodsName"value='.$goodsName.' />';
            $html .='	<input type="hidden" name="goodsExplain"value='.$goodsExplain.' />';
            $html .='	<input type="hidden" name="orderCreateTime"value='.$orderCreateTime.' />';
            $html .='	<input type="hidden" name="lastPayTime"value='.$lastPayTime.' />';
            $html .='	<input type="hidden" name="ext" value="ext" />';
            $html .='	<input type="hidden" name="merUrl"value='.$merUrl.' />';
            $html .='	<input type="hidden" name="noticeUrl"value='.$noticeUrl.' />';
            $html .='	<input type="hidden" name="bankCode" value='.$bankCode.' />';
            $html .='	<input type="hidden" name="bankCardType" value='.$bankCardType.' />';
            $html .='		<input type="hidden" name="sign" value='.$sign.' />';
            $html .='	</form>';
            $html .='</body>';
            echo $html;
            exit();
        }catch (\Exception $e){
            Log::record($e->getMessage());
        }
    }

    public function yinshen($data){
        $this->ysepay();
        $order['order_sn'] = $this->getRechId();
        $order['order_amount'] = $data['amount'];
        echo '充值中，如果已经充值完成，请点击后退';
        $user = Session::get('userData');
        //预支付订单信息
        $rechage = array(
            'uid'=>$user['uid'],
            'username'=>$user['username'],
            'rechargeId'=>$order['order_sn'],
            'amount'=>$data['amount'],
            'actionIP'=>$this->ip(true),
            'actionTime'=>time(),
            'state'=>'0',
            'info'=>'预支付'
        );
        MemberRecharge::insert($rechage);
        echo $this->get_code($order,array());
        return view('/recharge/index');
    }

    public function postYinshen(){
        $data = $_POST;
        $this->ysepay();
        $order['order_sn'] = $this->getRechId();
        $order['order_amount'] = $data['amount'];
//        echo '充值中，如果已经充值完成，请点击后退';
        $user = Session::get('userData');
        //预支付订单信息
        $rechage = array(
            'uid'=>$user['uid'],
            'username'=>$user['username'],
            'rechargeId'=>$order['order_sn'],
            'amount'=>$data['amount'],
            'actionIP'=>$this->ip(true),
            'actionTime'=>time(),
            'state'=>'0',
            'info'=>'预支付'
        );
        MemberRecharge::insert($rechage);
        $param = $this->get_code($order,array());
        $this->success($param);
    }

    /**银盛*/
    /**
     * ***************配置部分（带#号部分商户需根据实际情况修改）*****************
     *#usercode 商户号
     *#merchantname 商户名
     *#pfxpath 商户私钥证书路径(发送交易签名使用)
     *#businessgatecerpath 银盛支付公钥证书路径(接收到银盛支付回执时验签使用)
     *#pfxpassword 商户私钥证书密码
     *#noticepg_url 前台通知地址:商户系统提供，支付成功跳转商户体统，为空不跳转。银盛支付平台在此URL后追加固定的参数向商户系统跳转:Msg=“订单号|金额（单位：分），然后对Msg做Base64编码”;Check=“Msg的签名后，再进行Base64”
     *#noticebg_url 后台通知地址:商户系统提供，支付成功后，银盛支付平台返回R3501报文
     *#host 银盛支付url
     * xmlpage_url 页面接口类银盛支付网关地址
     * xmlbackmsg_url 后台接口类银盛支付网关地址
     * filemsg_url 文件接口类银盛支付网关地址
     */
    function ysepay() {
        $this->param                        = array();
        $this->param['seller_id']           = "yuheng";
        $this->param['usercode']            = "";
        $this->param['merchantname']        = "";
        $this->param['pfxpath']             = ROOT_PATH ."includes/modules/payment/ysepay/key/yuheng.pfx";
        $this->param['businessgatecerpath'] = ROOT_PATH ."includes/modules/payment/ysepay/key/businessgate.cer";
        $this->param['pfxpassword']         = "yuheng";
        $this->param['noticepg_url']        = "http://paypg1.gandia88.top/Dev/payReturnService.php";
        $this->param['noticebg_url']        = "http://paypg1.gandia88.top/Dev/payCheckService.php";
        $this->param['host']                = "pay.ysepay.com"; //生产环境需更换为：pay.ysepay.com  TST:113.106.160.201:889
        $this->param['xmlpage_url']         = $this->param['host'] . "/businessgate/yspay.do";
        $this->param['xmlbackmsg_url']      = $this->param['host'] . "/businessgate/xmlbackmsg.do";
        $this->param['filemsg_url']         = $this->param['host'] . "/businessgate/filemsg.do";
    }

    /**
     * 生成支付代码
     * @param array $order 订单信息
     * @param array $payment 支付方式信息
     */
    function get_code($order, $payment)
    {
        $myParams                      = array();
        $myParams['business_code']     = '01000009';
        $myParams['charset']           = 'utf-8';
        $myParams['method']            = 'ysepay.online.directpay.createbyuser';
        $myParams['notify_url']        = 'http://'.$_SERVER['HTTP_HOST'].'/recharge/respond_notify';//'http://www.xxxx.com/respond_notify.php?code=ysepay';
        $myParams['noticebg_url']        = 'http://'.$_SERVER['HTTP_HOST'].'/recharge/respond_notify';;
        $myParams['out_trade_no']      =  $order['order_sn'];
        $myParams['partner_id']        = 'yuheng';
        $myParams['return_url']        = 'http://'.$_SERVER['HTTP_HOST'];//'http://www.xxxx.com/respond.php?code=ysepay';
        $myParams['seller_id']         = 'yuheng';
        $myParams['seller_name']       = '上海愈衡实业有限公司';
        $myParams['sign_type']         = 'RSA';
        $myParams['subject']           = '充值';
        $myParams['timeout_express']   = '1d';
        $myParams['timestamp']         = date('Y-m-d H:i:s',time());
        $myParams['total_amount']      = number_format($order['order_amount'],2,'.','');
        $myParams['version']           = '3.0';
        ksort($myParams);
        $data    = $myParams;
        $signStr = "";
        foreach ($myParams as $key => $val) {
            $signStr .= $key . '=' . $val . '&';
        }
        $signStr = trim($signStr, '&');
        $sign    = $this->sign_encrypt(array('data' => $signStr));
        $myParams['sign'] = trim($sign['check']);
        $action = "https://openapi.ysepay.com/gateway.do";
        /*$def_url = "<br /><form name='yshen' style='text-align:center;' method=post action='".$action."' target='_blank'>";
        while ($param = each($myParams)) {
            $def_url .= "<input type = 'hidden' id='" . $param['key'] . "' name='" . $param['key'] . "' value='" . $param['value'] . "' />";
        }
        $def_url .= "<input type=submit style='display: none'>";
        $def_url .= "</form>";
        $def_url .= "<script>document.yshen.submit();</script>";*/
//        return $def_url;
        $rtn_ar = array();
        while ($obj = each($myParams)) {
            Log::record($obj['key']);
            array_push($rtn_ar,array(
                'name'=>$obj['key'],
                'value'=>$obj['value'],
            ));
        }
        return $rtn_ar;
    }


    /**
     * 同步响应操作
     */
    function respond()
    {
        Log::record('yinshen=respond'.json_encode($_POST));
        //返回的数据处理
        $sign   = trim($_POST['sign']);
        $result = $_POST;
        unset($result['sign']);
        ksort($result);
        $url = "";
        foreach ($result as $key => $val) {
            if($val) $url .= $key . '=' . $val . '&';
        }
        $data = trim($url, '&');
        /*写入日志*/
//        file_put_contents(ROOT_PATH."z.txt", "\r\n", FILE_APPEND);
//        file_put_contents(ROOT_PATH."z.txt", "return|data:".$data."|sign:".$sign, FILE_APPEND);
        /* 验证签名 */
        if($this->sign_check($sign,$data)  != true){
            echo "验证签名失败！";
            exit;
        }
        if($result['trade_status'] == 'TRADE_SUCCESS'){
            /* 改变订单状态 */
            Log::record('改变订单状态');
//            order_paid($result['out_trade_no']);
            return true;
        }else{
            return false;
        }

    }

    /**
     * 异步响应操作
     */
   public function postRespond_notify()
    {
        $this->ysepay();
        Log::record('ys-zhif=1'.json_encode($_POST));
        Log::record('ys-zhif=2'.json_encode($_GET));
        //返回的数据处理
        $sign   = trim($_POST['sign']);
        $result = $_POST;
        unset($result['sign']);
        ksort($result);
        $url = "";
        foreach ($result as $key => $val) {
            /* 验证签名 */
            if($val) $url .= $key . '=' . $val . '&';
        }
        $data = trim($url, '&');
        /*写入日志*/
        file_put_contents(ROOT_PATH."z.txt", "\r\n", FILE_APPEND);
        file_put_contents(ROOT_PATH."z.txt", "notify|data:".$data."|sign:".$sign, FILE_APPEND);
        /* 验证签名 */
        if($this->sign_check($sign,$data) != true){
            echo "fail";
            exit;
        }else{
            if($result['trade_status']  == 'TRADE_SUCCESS'){
                $this->updateOrder($result['out_trade_no'], $result['account_date'],$bank='yinshen');
//                order_paid($result['out_trade_no']);
            }else {
                Log::record('充值失败,签名验证失败');
                $this->createReqInfo(json_encode($_POST),$result['out_trade_no'],'yinshen',1,'充值失败,签名验证失败');
                exit('FAILED');
            }
            file_put_contents(ROOT_PATH."z.txt", "\r\n", FILE_APPEND);
            file_put_contents(ROOT_PATH."z.txt",'success:1' , FILE_APPEND);
            echo 'success';
            exit;
        }

    }
    /**
     *日期转字符
     *输入参数：yyyy-MM-dd HH:mm:ss
     *输出参数：yyyyMMddHHmmss
     */
    function datetime2string($datetime) {

        return preg_replace('/\-*\:*\s*/', '', $datetime);
    }

    /**
     * 验签转明码
     * @param input check
     * @param input msg
     * @return data
     * @return success
     */

    function sign_check($sign, $data) {

        $publickeyFile = $this->param['businessgatecerpath']; //公钥
        $certificateCAcerContent = file_get_contents($publickeyFile);
        $certificateCApemContent = '-----BEGIN CERTIFICATE-----' . PHP_EOL . chunk_split(base64_encode($certificateCAcerContent), 64, PHP_EOL) . '-----END CERTIFICATE-----' . PHP_EOL;
        // 签名验证
        $success = openssl_verify($data, base64_decode($sign), openssl_get_publickey($certificateCApemContent), OPENSSL_ALGO_SHA1);

        return $success;
    }

    /**
     * 签名加密
     * @param input data
     * @return success
     * @return check
     * @return msg
     */
    function sign_encrypt($input) {
        $return = array('success' => 0, 'msg' => '', 'check' => '');
        $pkcs12 = file_get_contents($this->param['pfxpath']); //私钥
        if (openssl_pkcs12_read($pkcs12, $certs, $this->param['pfxpassword'])) {
            $privateKey = $certs['pkey'];
            $publicKey  = $certs['cert'];
            $signedMsg = "";
            if (openssl_sign($input['data'], $signedMsg, $privateKey, OPENSSL_ALGO_SHA1)) {
                $return['success'] = 1;
                $return['check']   = base64_encode($signedMsg);
                $return['msg']     = base64_encode($input['data']);

            }
        }

        return $return;
    }
    /**银盛*/

    /**yibao*/
    public function postYibao(){
        $data = $_POST;
        $order['order_sn'] = $this->getRechId();
        $order['order_amount'] = $data['amount'];
        $order['fl_id'] = $data['fl_id'];
        $order['pay_type'] = $data['pay_type'];
        $user = Session::get('userData');
        //预支付订单信息
        $rechage = array(
            'uid'=>$user['uid'],
            'username'=>$user['username'],
            'rechargeId'=>$order['order_sn'],
            'amount'=>$data['amount'],
            'actionIP'=>$this->ip(true),
            'actionTime'=>time(),
            'state'=>'0',
            'info'=>'yb预支付'
        );
        MemberRecharge::insert($rechage);
        if($data['is_kjzf']){
            $order['userNameHF'] = $data['userNameHF'];
            $order['userAcctNo'] = $data['userAcctNo'];
            $order['userPhoneHF'] = $data['userPhoneHF'];
            $order['quickPayCertNo'] = $data['quickPayCertNo'];
            $param = YiTongPay::quickPay($order);
        }else{
            $param = $this->get_yb_code($order,array());
        }
        $this->success($param);
    }

    public function yibaoQrcode($data){
        /*dump($data);
        exit();*/
        $order['order_sn'] = $this->getRechId();
        $order['order_amount'] = $data['amount'];
        $order['fl_id'] = $data['def-w-label'];
        $order['pay_type'] = $data['payLinks'];
        $user = Session::get('userData');
        //预支付订单信息
        $rechage = array(
            'uid'=>$user['uid'],
            'username'=>$user['username'],
            'rechargeId'=>$order['order_sn'],
            'amount'=>$data['amount'],
            'actionIP'=>$this->ip(true),
            'actionTime'=>time(),
            'state'=>'0',
            'info'=>'yb-qrcode预支付'
        );
        MemberRecharge::insert($rechage);
        $param = $this->get_yb_code($order,array(),$myParams);
        $url = 'https://cashier.etonepay.com/NetPay/BankSelect.action';
        $html = $this->CommonHttpsInfo($url,$myParams);
//        var_dump($html);exit;
        $html_arr = explode('codeImg=',$html);
        $base = count($html_arr)>0?$html_arr[1]:"";
        $b_arr = explode('&',$base);
        $base2 = count($b_arr)>0?$b_arr[0]:"";
        echo '<h1 style="margin-left: 20%;color: red;">通道二，qq扫码支付</h1><br/><img style="margin-left: 20%;margin-top: 2%;" src="data:image/png;base64,'.$base2.'" >';
        exit;
    }

    public function yitongQuickPay($data)
    {

    }

    public function CommonHttpsInfo($url,$parmas){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:cashier.etonepay.com','Origin:http://cashier.etonepay.com','Upgrade-Insecure-Requests:1','Content-Type:application/x-www-form-urlencoded;charset=UTF-8'));
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

    /**
     * 生成支付代码
     * @param array $order 订单信息
     * @param array $payment 支付方式信息
     */
    protected function get_yb_code($order, $payment,&$myParams=array())
    {
//        require_once("yb/ascii_class.php");
        $tranAmt = $order['order_amount']*100;
        $merOrderNum = $order['order_sn'];
        $orderInfo = '商户订单';
        $tranDateTime = date('YmdHis');
        $sysTraceNum = $tranDateTime.floor(microtime()*1000); //请求流水号，需要保持唯一
        $userId = ''; //易通支付会员ID代码，可为空
        if(!empty($orderInfo)){
            $orderInfo = strToHex($orderInfo);
        }
        $pay = Paybusiness::where(array('id'=>$order['fl_id']))->find();
        $version = "1.0.0";
        $transCode = "8888"; //交易代码
        $merchantId = $pay['business_id'];
        $bussId = $order['pay_type']=='onlinepay'?"883077":"ONL0010"; //业务代码 883077 PC网银　883078手机扫码　883079 PC扫码
        $currencyType = "156"; //币种 156=人民币
        $merUrl = 'http://'.$_SERVER['HTTP_HOST'].'/zfhd.html'; //页面返回地址
        $backUrl = 'http://'.$_SERVER['HTTP_HOST']."/recharge/payResult"; //后台通知地址
        $datakey = $pay['business_key'];
        $txnString = $version."|".$transCode."|".$merchantId."|".$merOrderNum."|".$bussId."|".$tranAmt."|".$sysTraceNum
            ."|".$tranDateTime."|".$currencyType."|".$merUrl."|".$backUrl."|".$orderInfo."|".$userId;
        $signValue = md5($txnString.$datakey);
        $myParams                      = array();
        $myParams['version']     = $version;
        $myParams['transCode']     = $transCode;
        $myParams['merchantId']     = $merchantId;
        $myParams['merOrderNum']     = $merOrderNum;
        $myParams['bussId']     = $bussId;
        $myParams['tranAmt']     = $tranAmt;
        $myParams['sysTraceNum']     = $sysTraceNum;
        $myParams['tranDateTime']     = $tranDateTime;
        $myParams['currencyType']     = $currencyType;
        $myParams['merURL']     = $merUrl;
        $myParams['orderInfo']     = $orderInfo;
        $myParams['bankId']     = $order['pay_type']=='onlinepay'?'':'888880600002900';//主扫：888880600002900 被扫：888880601002900
        $myParams['stlmId']     = '';
        $myParams['userId']     = '';
        $myParams['userIp']     = '';
        $myParams['backURL']     = $backUrl;
        $myParams['reserver1']     = $order['fl_id'];
        $myParams['reserver2']     = '';
        $myParams['reserver3']     = '';
        $myParams['reserver4']     = '';
//        $myParams['payPage']     = '';//扫码
//        $myParams['authCode']     = '';//扫码
//        $myParams['channel']     = 'wxMicro';//扫码
        $myParams['signValue'] = $signValue;
        $rtn_ar = array();
        while ($obj = each($myParams)) {
            Log::record($obj['key']);
            array_push($rtn_ar,array(
                'name'=>$obj['key'],
                'value'=>$obj['value'],
            ));
        }
        return $rtn_ar;
    }

    public function postPayResult(){
        try{
            $transCode = $_REQUEST["transCode"];
            $merchantId = $_REQUEST["merchantId"];
            $respCode = $_REQUEST["respCode"];
            $merOrderNum = $_REQUEST["merOrderNum"];
            $bussId = $_REQUEST["bussId"];
            $tranAmt = $_REQUEST["tranAmt"];
            $orderAmt = $_REQUEST["orderAmt"];
            $bankFeeAmt = $_REQUEST["bankFeeAmt"];
            $integralAmt = $_REQUEST["integralAmt"];
            $vaAmt = $_REQUEST["vaAmt"];
            $bankAmt = $_REQUEST["bankAmt"];
            $bankId = $_REQUEST["bankId"];
            $sysTraceNum = $_REQUEST["sysTraceNum"];
            $integralSeq = $_REQUEST["integralSeq"];
            $vaSeq = $_REQUEST["vaSeq"];
            $bankSeq = $_REQUEST["bankSeq"];
            $tranDateTime = $_REQUEST["tranDateTime"];
            $payMentTime = $_REQUEST["payMentTime"];
            $settleDate = $_REQUEST["settleDate"];
            $currencyType = $_REQUEST["currencyType"];
            $orderInfo = $_REQUEST["orderInfo"];
            $userId = $_REQUEST["userId"];
            $orderId = $_REQUEST["orderId"];
            $signValue = $_REQUEST["signValue"];
            $txnString =  $transCode ."|". $merchantId ."|". $respCode ."|". $sysTraceNum ."|". $merOrderNum ."|"
                . $orderId ."|". $bussId ."|". $tranAmt ."|". $orderAmt ."|" .$bankFeeAmt ."|". $integralAmt ."|"
                . $vaAmt ."|". $bankAmt ."|". $bankId ."|". $integralSeq ."|". $vaSeq ."|"
                . $bankSeq ."|". $tranDateTime ."|". $payMentTime ."|". $settleDate ."|". $currencyType ."|". $orderInfo ."|". $userId;
            $pay = Paybusiness::where(array('id'=>10))->find();
            $verifySign = $this->verify_Sign($txnString,$signValue,$pay['business_key']);
            if($respCode=='0000'&&$verifySign){
                Log::record('yibao-验证通过');
                $this->updateOrder($merOrderNum, strtotime($payMentTime),$bank='yibao');
                exit('success');
            }else{
                Log::record('yibao-验证失败，$respCode='.$respCode.'===erifySign=='.$verifySign);
                $this->createReqInfo(json_encode($_POST),$merOrderNum,'yibao',1,'充值失败,签名验证失败');
                exit('fail');
            }
        }catch (\Exception $e){
            Log::record('yibao-回调异常',$e->getLine().'-'.$e->getMessage().'===data='.json_encode($_REQUEST));
            exit('fail');
        }
    }

    public function getPayResult(){
        Log::record('yibao-get回调');
        return $this->postPayResult();
    }

    private function verify_sign($txnString, $signString,$datakey)
    {
        return md5($txnString.$datakey)==$signString;
    }
    /**yibao*/
}
