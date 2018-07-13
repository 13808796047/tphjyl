<?php

namespace app\index\controller;


use app\common\Common;
use app\index\model\ActivityLog;
use app\index\model\Bets;
use app\index\model\CoinLog;
use app\index\model\Gongzi;
use app\index\model\Params;
use think\Controller;
use think\Db;
use think\Log;
use think\Session;
use think\Request;

class Activity extends Controller
{

    public $settings;
    public $user;
	protected function _initialize()
    {
        if(empty(Session::get('userData'))){
            return view('index/login');
        }else{
            $this->assign('play_lists',(new Game())->play_list);
            $this->user = Session::get('userData');
        }

        if(!$this->settings){
            if ($data = Params::select()) {
                foreach ($data as $var) {
                    $this->settings[$var['name']] = $var['value'];
                }
            }
        }
        return $this->assign('settings',$this->settings);
    }

    public function getIndex()
    {
        $user_rigongzi = Session::get('userData')?Session::get('userData')['ri_gong_zi']:0;
        $uerType = Session::get('userData')?Session::get('userData')['type']:"0";
        $this->assign('user_rigongzi',($user_rigongzi>0&&$uerType==1)?true:false);
        return view('activity/index');
    }

    public function getCommission(Request $request)
    {
        $uid = Session::get('userData')['uid'];
        $coin_report = $this->coinReportList();
        
        $activity_log = Db::table('gygy_activity_log')
            ->where('uid',$uid)
            ->where('type',2)
            ->order('created_at','desc')
            ->field('created_at')
            ->find();
        $isReceive = 0;
        if (!empty($activity_log['created_at']) && date('Y-m-d') == date('Y-m-d',$activity_log['created_at'])) {
            $isReceive = 1;
        }

        $this->assign('coin_report',$coin_report);
        $this->assign('is_receive',$isReceive);

        return view('activity/commission');
    }

    public function getXiaofei()
    {
        $uid = Session::get('userData')?Session::get('userData')['uid']:"";
        $where=array();
        $where['uid']=$uid;
        $where['isDelete']=0;
        $where['lotteryNo']=array('neq','');
        $where['actionTime']=array('between',array(strtotime('03:00'),strtotime('03:00')+24*60*60));
        $myxf = Bets::where($where)->field('sum(mode*beiShu*actionNum) as xiaofei')->find();
        $this->assign('myxf',$myxf['xiaofei']?$myxf['xiaofei']:0);
        $list = \app\index\model\Activity::select();
        $this->assign('list',$list);
        if($coin = ActivityLog::where(array('uid'=>$uid,'type'=>1,'created_at'=>array('gt',strtotime('03:00'))))->select())
            $this->assign('have',true);
        else
            $this->assign('have',false);
        return view('activity/xiaofei',['errorcount' => 1, 'chance' => 1, 't' => 1]);
    }

    public function getchongzhi(){
        $this->assign('settings',$this->settings);
        return view('activity/chongzhi',['errorcount' => 1, 'chance' => 1, 't' => 1]);
    }

    public function getrigongzi()
    {
        $pageSize = isset($_GET['pageSize'])?$_GET['pageSize']:15;
        $data = Gongzi::where('uid',$this->user['uid'])
            ->order('tz_at desc')
            ->paginate($pageSize,false,['query' => $_GET]);
//            ->limit(0,10)->select();
        $zt = array(
            '1'=>'未达标',
            '2'=>'未领取',
            '3'=>'已领取',
        );
        foreach ($data as $key=>$item) {
            if($item['zt']==2){
                $min = strtotime(date('Y-m-d 09:00:00',$item['tz_at']));
                $max = strtotime(date('Y-m-d 18:00:00',$item['tz_at']));
                //后面跳回来先不限制
//                $max = strtotime(date('Y-m-07 18:00:00',$item['tz_at']));
                $cur_t = time();
                if($cur_t<$min){
                    $data[$key]['gq_zt'] = '未到领取时间';
                }elseif ($cur_t > $max || $item['tz_at'] < 1520345500){
                    $data[$key]['gq_zt'] = '已经过期';
                }else{
                    $data[$key]['gq_zt'] = '<a href="javascript:void(0)" onclick="lingqu('.$item['id'].')">领取</a>';//date('Y-m-d H',$item['tz_at']);
                }
            }else{
                $data[$key]['gq_zt'] = $zt[$item['zt']];
            }
            $data[$key]['zt'] = $zt[$item['zt']];
            $data[$key]['tz_at'] = date('Y-m-d H',$item['tz_at']);
        }
        $this->assign('data',$data);
        $page = $data->render();
        $this->assign('page',$page);
        return view('activity/rigongzi',['errorcount' => 1, 'chance' => 1, 't' => 1]);
    }

    public function postOnxiaofei(){
        $uid = Session::get('userData')?Session::get('userData')['uid']:"";
        if(Session::get('xfhdlq')){
            $this->error('您今日已经领取，请明日再来');
            exit();
        }
        $time=time();
        if($time<strtotime($this->settings['activity_first_time']) || $time>strtotime($this->settings['activity_end_time']))
            $this->error('活动不在有效期');
        $where=array();
        $where['uid']=$uid;
        $where['isDelete']=0;
        $where['lotteryNo']=array('neq','');
        $where['actionTime']=array('between',array(strtotime('03:00'),strtotime('03:00')+24*60*60));
        $myxf = Bets::where($where)->field('sum(mode*beiShu*actionNum) as xiaofei')->find();

        Log::record('消费金额：'.Bets::getLastSql());
        $amount = 0;
        $xiaofei = \app\index\model\Activity::order('gygy_activity.all desc')->select();
        foreach ($xiaofei as $item) {
            if($myxf['xiaofei']>=$item['all']){
                $amount = $item['amount'];break;
            }
        }
        if($amount==0){
            $this->error('消费金额不足以领取奖品');
        }
        if($coin = CoinLog::where(array('uid'=>$uid,'liqType'=>53,'actionTime'=>array('gt',strtotime('03:00'))))->select())
            $this->error('您今日已经领取，请明日再来');
        Session::set('xfhdlq',1);
        ActivityLog::insert(array(
            'type'=>1,
            'uid'=>$uid,
            'money'=>$amount,
            'created_at'=>time(),
            'remark'=>'消费活动奖励',
        ));
        $return3 = $this->addCoin(array(
            'uid'=>$uid,
            'coin'=>$amount,
            'liqType'=>53,
            'extfield0'=>0,
            'extfield1'=>0,
            'info'=>'消费活动奖励'
        ));

        $this->success('领取成功，请查收');
    }

    public function postReceiveAward(Request $request){
        $uid = Session::get('userData')['uid'];

        if(Session::get('yjhdlq')){
            $this->error('您今日已经领取，请明日再来');
            exit();
        }
        $activity_log = Db::table('gygy_activity_log')
            ->where('uid',$uid)
            ->where('type',2)
            ->order('created_at','desc')
            ->field('created_at')
            ->find();

        if (!empty($activity_log['created_at']) && date('Y-m-d') == date('Y-m-d',$activity_log['created_at'])) {
            $this->error('您今日已经领取，请明日再来');
            exit();
        }

        $coin_report = $this->coinReportList();

        $ActivityLog = [];
        foreach ($coin_report as $value) {
            $row = [
                'type' => 2,
                'uid' => $uid,
                'money' => $value['award'],
                'base_money' => $value['base_money'],
                'created_at' => time(),
                'remark' => '佣金活动奖励',
            ];
            if ($value['award_type'] == '消费') {
                $row['category'] = 1;
            }elseif ($value['award_type'] == '亏损') {
                $row['category'] = 2;
            }else{
                $row['category'] = null;
            }

            $ActivityLog[] = $row;
        }
        Session::set('yjhdlq',1);
        ActivityLog::insertAll($ActivityLog);

        $coin = array_column($coin_report, 'award');
        $return = $this->addCoin(array(
            'uid'=>$uid,
            'coin'=>array_sum($coin),
            'liqType'=>56,
            'extfield0'=>0,
            'extfield1'=>0,
            'info'=>'佣金活动奖励'
        ));

        
        $this->success('领取成功，请查收');
    }

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

        //echo $sql;exit;
        if (Db::query($sql) === false) {
            return false;
        } else {
            return true;
        }
        return false;
    }

    protected function coinReport($fCoinReport, $awardType='下级'){
        $coin_report = [];
        foreach ($fCoinReport as $value) {
            $betRow = [
                'username' => $value['username'],
                'member_level' => $awardType,
                'award_type' => '消费',
                'award' => 0,
                'base_money' => $value['betAmount']
            ];
            $zykRow = $betRow;
            $zykRow['award_type'] = '亏损';
            $zykRow['base_money'] = $value['zykAmount'] = $value['betAmount'] - $value['zjAmount'];

            /*if ($value['betAmount'] >= 10000) {
                if ($awardType=='下级') {
                    $betRow['award'] = 58;
                }elseif ($awardType=='下下级') {
                    $betRow['award'] = 18;
                }elseif ($awardType=='下下下级') {
                    $betRow['award'] = 8;
                }
            }else*/ if ($value['betAmount'] >= 5000) {
                if ($awardType=='下级') {
                    $betRow['award'] = 28;
                }elseif ($awardType=='下下级') {
                    $betRow['award'] = 8;
                }elseif ($awardType=='下下下级') {
                    $betRow['award'] = 3;
                }
            }elseif ($value['betAmount'] >= 1000) {
                if ($awardType=='下级') {
                    $betRow['award'] = 5;
                }elseif ($awardType=='下下级') {
                    $betRow['award'] = 2;
                }elseif ($awardType=='下下下级') {
                    $betRow['award'] = 1;
                }
            }

            /*if ($value['zykAmount'] >= 5000) {
                // $zykRow['base_money'] = 5000;
                if ($awardType=='下级') {
                    $zykRow['award'] = 58;
                }elseif ($awardType=='下下级') {
                    $zykRow['award'] = 38;
                }elseif ($awardType=='下下下级') {
                    $zykRow['award'] = 18;
                }
            }else*/  if ($value['zykAmount'] >= 3000) {
                // $zykRow['base_money'] = 3000;
                if ($awardType=='下级') {
                    $zykRow['award'] = 28;
                }elseif ($awardType=='下下级') {
                    $zykRow['award'] = 18;
                }elseif ($awardType=='下下下级') {
                    $zykRow['award'] = 8;
                }
            }elseif ($value['zykAmount'] >= 1000) {
                // $zykRow['base_money'] = 1000;
                if ($awardType=='下级') {
                    $zykRow['award'] = 8;
                }elseif ($awardType=='下下级') {
                    $zykRow['award'] = 5;
                }elseif ($awardType=='下下下级') {
                    $zykRow['award'] = 2;
                }
            }

            if ($betRow['award'] > 0) {
                $coin_report[] = $betRow;
            }
            if ($zykRow['award'] > 0) {
                $coin_report[] = $zykRow;
            }    
        }

        return $coin_report;
    }

    protected function coinReportList(){
        $coin_report = [];

        // 下级会员
        $uid = Session::get('userData.uid');        
        $fLevelUsers = Db::table('gygy_members')
            ->where('parentId',$uid)
            ->where('is_test',0)
            ->field('uid,type')
            ->select();
        $fDailiUserIds = [];
        $fMemUserIds = [];
        foreach ($fLevelUsers as $value) {
            if ($value['type'] == 1) {
                array_push($fDailiUserIds, $value['uid']);
            }else{
                array_push($fMemUserIds, $value['uid']);
            }
        }
        $fromTime = strtotime(date("Y-m-d 00:00:00",strtotime('-1 day')));
        $toTime = strtotime(date("Y-m-d 23:59:59",strtotime('-1 day')));
        $fCoinReport = Db::table('gygy_coin_log_report')
            ->whereIn('uid',$fMemUserIds)
            ->where('istest',0)
            ->whereBetween('actionTime',[$fromTime,$toTime])
            ->where(function($query){
                $query->where('betAmount','>=',1000);
                    //->whereOr('zyk','<=',-1000);
            })
            ->field('IFNULL(SUM(betAmount),0) as betAmount, IFNULL(SUM(zjAmount),0) as zjAmount,username')
            ->group('uid')
            ->select();
        $coin_report = $this->coinReport($fCoinReport,'下级');

        // 下下级会员
        $sLevelUsers = Db::table('gygy_members')
            ->whereIn('parentId',$fDailiUserIds)
            ->where('is_test',0)
            ->field('uid,type')
            ->select();
        $sDailiUserIds = [];
        $sMemUserIds = [];
        foreach ($sLevelUsers as $value) {
            if ($value['type'] == 1) {
                array_push($sDailiUserIds, $value['uid']);
            }else{
                array_push($sMemUserIds, $value['uid']);
            }
        }
        $sCoinReport = Db::table('gygy_coin_log_report')
                    ->whereIn('uid',$sMemUserIds)
                    ->where('istest',0)
                    ->whereBetween('actionTime',[$fromTime,$toTime])
                    ->where(function($query){
                        $query->where('betAmount','>=',1000);
                        //->whereOr('zyk','<=',-1000);
                    })
                    ->field('IFNULL(SUM(betAmount),0) as betAmount, IFNULL(SUM(zjAmount),0) as zjAmount,username')
                    ->group('uid')
                    ->select();
        $coin_report = array_merge($coin_report, $this->coinReport($sCoinReport,'下下级'));

        // 下下级会员
        $tLevelUsers = Db::table('gygy_members')
            ->whereIn('parentId',$sDailiUserIds)
            ->where('is_test',0)
            ->field('uid,type')
            ->select();
        $tDailiUserIds = [];
        $tMemUserIds = [];
        foreach ($tLevelUsers as $value) {
            if ($value['type'] == 1) {
                array_push($tDailiUserIds, $value['uid']);
            }else{
                array_push($tMemUserIds, $value['uid']);
            }
        }
        $tCoinReport = Db::table('gygy_coin_log_report')
                    ->whereIn('uid',$tMemUserIds)
                    ->where('istest',0)
                    ->whereBetween('actionTime',[$fromTime,$toTime])
                    ->where(function($query){
                        $query->where('betAmount','>=',1000);
                        //->whereOr('zyk','<=',-1000);
                    })
                    ->field('IFNULL(SUM(betAmount),0) as betAmount, IFNULL(SUM(zjAmount),0) as zjAmount,username')
                    ->group('uid')
                    ->select();
        $coin_report = array_merge($coin_report, $this->coinReport($tCoinReport,'下下下级'));

        return $coin_report;
    }

    public function postLingqu(){
        $id = $_POST['id'];
        $uid = Session::get('userData')?Session::get('userData')['uid']:"";
        if(Session::get('rgzlq')){
            $this->error('您今日已经领取，请明日再来');
            exit();
        }
        $rgz = Gongzi::where(array('id'=>$id,'zt'=>2))->find();
        if(!$rgz){
            $this->error('当前数据不符合领取条件');
        }

        if(date('H')<9||date('H')>18){
            $this->error('已过领取时间');
        }

        $min = date('Y-m-d 09:00:00',time()-86400);
        $max = date('Y-m-d 23:59:59',time()-86400);
        $tz_t = date('Y-m-d H:00:00',$rgz['tz_at']);
        $min = strtotime(date('Y-m-d 09:00:00',$rgz['tz_at']));
        $max = strtotime(date('Y-m-d 18:00:00',$rgz['tz_at']));
//        $max = strtotime(date('Y-m-07 18:00:00',$rgz['tz_at']));
        $cur_t = time();
        if($cur_t<$min){
            $this->error('此工资还未到领取时间');
        }
        if($cur_t>$max || $rgz['tz_at'] < 1520345500){
//        if(strtotime($tz_t)<strtotime($min)||strtotime($tz_t)>strtotime($max)){
            $this->error('此工资已经过期');
        }
        try{
            Session::get('rgzlq',1);
            $db = db();
            Db::startTrans();
            $amount = $rgz['zonger'];
            $comm = new Common();
            $comm->addCoin(array(
                'uid'=>$uid,
                'coin'=>$amount,
                'liqType'=>109,
                'extfield0'=>0,
                'extfield1'=>0,
                'info'=>'领取日工资'
            ));
            ActivityLog::insert(array(
                'type'=>3,
                'uid'=>$uid,
                'money'=>$amount,
                'created_at'=>time(),
                'remark'=>'领取日工资',
            ));
            Gongzi::where(array('id'=>$id))->update(array('zt'=>3,'lq_at'=>time()));
            Db::commit(); //成功则提交
        }catch (\Exception $e){
            Db::rollback(); //不成功，则回滚
            Log::record($e->getMessage());
            $this->error('领取失败');
        }
        $this->success('领取成功，请查收');
    }
}