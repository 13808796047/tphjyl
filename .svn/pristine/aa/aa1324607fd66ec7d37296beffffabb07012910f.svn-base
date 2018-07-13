<?php
namespace app\index\controller;


use app\common\Common;
use app\index\model\AdminLog;
use app\index\model\Bets;
use app\index\model\DataTime;
use app\index\model\Members;
use app\index\model\Played;
use app\index\model\Type;
use think\Controller;
use think\Db;
use think\Session;
use think\Request;

class GameRecord extends Controller
{

    protected function _initialize()
    {
        if(!empty(Session::get('userData'))){
            $this->assign('play_lists',(new Game())->play_list);
            return view('index/login');
        }else{
            $this->user = Session::get('userData');
        }
    }

    public function getIndex()
    {
        return view('game_record/index');
    }

    public function getBetList()
    {
        $member = array();
        $cur_username = session('userData.username');
        if(isset($_GET['username'])){
            $username = $_GET['username'];
            $member = Members::where(array('username'=>$username))->find();
            $cur_username = $username;
        }
        $p_days = isset($_GET['days'])?$_GET['days']:date('Y-m-d',time());//投注时间
        $lotteryid = isset($_GET['lotteryid'])?$_GET['lotteryid']:0;//彩种名称
        $methodid = isset($_GET['methodid'])?$_GET['methodid']:0;//游戏玩法
        $issue = isset($_GET['issue'])?$_GET['issue']:0;//彩种奖期
        $include = isset($_GET['include'])?$_GET['include']:0;//包含下级
        $this->assign('p_days',$p_days);
        $this->assign('lotteryid',$lotteryid);
        $this->assign('methodid',$methodid);
        $this->assign('issue',$issue);
        $this->assign('include',$include);

        //获取投注时间
        $days = array();
        for($idx = 0;$idx<5;$idx++){
            $cur_day = strtotime(date('Y-m-d',time()));
            $days[$idx] = date("Y-m-d",$cur_day-(86400*$idx));
        }
        $uid = $member ? $member['uid'] : session('userData.uid');        
        if(!empty($include) && $uid){
            // $where['parents'] = array('like','%'.$uid.'%');
            $pwhere[] = array('exp','FIND_IN_SET('.$member['uid'].',parents)');
            $pwhere['isDelete'] = 0;
            $uidArr = Db::table('gygy_members')->where($pwhere)->field('uid')->select();
            $uids = array_column($uidArr, 'uid');
        }else{
            $uids = [$uid];
        }
        $endTime = strtotime($p_days) + 86400;
        $where['actionTime'] = array('between time',[$p_days,$endTime]);
        if(!empty($lotteryid)){
            $where['type'] = $lotteryid;
        }
        if(!empty($methodid)){
            $where['playedId'] = $methodid;
        }
        if(!empty($issue)){
            $where['actionNo'] = $issue;
        }
        
        $pageSize = 20;
        $bets = Bets::where($where)->whereIn('uid',$uids)->order('actionTime desc')->paginate($pageSize,false,array(
            'query'=>array(
                'days'=>$p_days,
                'include'=>$include,
                'lotteryid'=>$lotteryid,
                'methodid'=>$methodid,
                'issue'=>$issue,
                'username'=>$cur_username,
            ),
        ));
        foreach($bets as $idx=>$sub){
            if($sub['isDelete']==1){
                $bets[$idx]['status_name'] = "已撤单";
            }elseif($sub['lotteryNo'] === ''){
                $bets[$idx]['status_name'] = "未开奖";
            }elseif($sub['zjCount']){
                $bets[$idx]['status_name'] = "已中奖";
            }else{
                $bets[$idx]['status_name'] = "未中奖";
            }
            $bets[$idx]['type'] = $this->getGameType($sub['type']);
            $bets[$idx]['playedId'] = $this->getPayType($sub['playedId']);
            $bets[$idx]['mode'] = $sub['mode'];
            $bets[$idx]['lotteryNo'] = !$sub['lotteryNo'] && $sub['lotteryNo'] !== 0 ?"---" : $sub['lotteryNo'];
            $bets[$idx]['zj_money'] = $sub['lotteryNo']?number_format($sub['bonus'], 2): '0.00';
            $bets[$idx]['zj_money_num'] = $sub['bonus'];
        }
        $total = $bets->total();

        $this->assign('bets',$bets);
        $this->assign('total',$total);
        $this->assign('page',$bets->render());
        $this->assign('currentPage', $bets->currentPage());
        $this->assign('totalPage', ceil($total/$pageSize));
        $this->assign('days',$days);        
        $this->assign('member',$member);
        $this->assign('cur_username',$cur_username);
        $this->assign('types_data',$this->types());
        $this->assign('data_method',json_encode($this->played()));
        $this->assign('data_issue',json_encode($this->getNo()));

        return view('game_record/bet_list');
    }

    public function getTaskList()
    {
        $starttime = isset($_GET['starttime']) ? strtotime($_GET['starttime']) : strtotime(date('Y-m-d',time()));
        $endtime = isset($_GET['endtime']) ? strtotime($_GET['endtime']) : time();
        $lotteryid = isset($_GET['lotteryid']) ? $_GET['lotteryid'] : "";//彩种名称
        $methodid = isset($_GET['methodid']) ? $_GET['methodid'] : "";//游戏玩法
        $issue = isset($_GET['issue']) ? $_GET['issue'] : "";//彩种奖期
        $include = isset($_GET['include']) ? $_GET['include'] : "";//包含下级

        $member = [];
        $cur_username = session('userData.username');
        if(isset($_GET['username'])){
            $username = $_GET['username'];
            $member = Members::where(array('username'=>$username))->find();
            $cur_username = $username;
        }
        $uid = $member ? $member['uid'] : session('userData.uid');
        $where = ['zhuihao'=>1];
        if(!empty($include) && $uid){
            $where['uid'] = array('like','%'.$uid.'%');
        }else{
            $where['uid'] = $uid;
        }
        $where['actionTime'] = array('between time',[$starttime,$endtime]);
        if(!empty($lotteryid)){
            $where['type'] = $lotteryid;
        }
        if(!empty($methodid)){
            $where['playedId'] = $methodid;
        }
        if(!empty($issue)){
            $where['actionNo'] = $issue;
        }
        $pageSize = 20;
        $bets = Db::table('gygy_bets')->alias('b')
            ->join('gygy_type t','t.id=b.type','LEFT')
            ->join('gygy_played p t','p.id=b.playedId','LEFT')
            ->field('b.*,t.shortName as type_name,p.name as played_name')
            ->where($where)
            ->paginate($pageSize,false,['query'=>$_GET]);

        $total = $bets->total();
        $this->assign('bets',$bets);
        $this->assign('total',$total);
        $this->assign('page',$bets->render());
        $this->assign('currentPage', $bets->currentPage());
        $this->assign('totalPage', ceil($total/$pageSize));
        $this->assign('member',$member);
        $this->assign('cur_username',$cur_username);
        $this->assign('starttime',date('Y-m-d',$starttime));
        $this->assign('endtime',date('Y-m-d',$endtime));
        $this->assign('types_data',$this->types());
        $this->assign('data_method',json_encode($this->played()));
        $this->assign('data_issue',json_encode($this->getNo()));

        return view('game_record/task_list');
    }

    public function getBetDetail(Request $request){
        $para = $request->get();
        if (empty($para['id'])) {
            $bet = [];
        }else{
            $bet = Db::table('gygy_bets')->alias('b')
                ->join('gygy_type t','t.id=b.type','LEFT')
                ->join('gygy_played p t','p.id=b.playedId','LEFT')
                ->field('b.*,t.shortName as type_name,p.name as played_name')
                ->where('b.id','=',$para['id'])
                ->find();

            if($bet['isDelete']==1){
                $bet['status_name'] = "已撤单";
            }elseif(!$bet['lotteryNo']){
                $bet['status_name'] = "未开奖";
            }elseif($bet['zjCount']){
                $bet['status_name'] = "已中奖";
            }else{
                $bet['status_name'] = "未中奖";
            }
        }
        
        $this->assign('bet',$bet);
        return view('game_record/bet_detail');
    }

    public function getGameType($id){
        $type = Type::where(array('id'=>$id))->find();
        if($type){
            return $type['title'];
        }else{
            return "";
        }
    }

    public function getPayType($id){
        $info = Played::where(array('id'=>$id))->find();
        if($info){
            return $info['name'];
        }else{
            return "";
        }
    }

    public function mode($mode){
        $modeName=array('2.00'=>'元', '0.20'=>'角', '0.02'=>'分');
        return isset($modeName[$mode])?$modeName[$mode]:1;
    }

    public function types(){
        return Type::where(array('isDelete'=>0))->order('sort')->select();
    }
    public function played(){
        $type = Type::where(array('isDelete'=>0))->order('sort')->select();
        $playeds = Played::where(array('enable' => 1))->order('sort')->select();
        $data          = array();
        if ($playeds) {
            foreach ($type as $item) {
                foreach ($playeds as $var) {
                    $cur_play = array('lotteryid'=>$var['type'],'methodid'=>$var['id'],'methodname'=>$var['name']);
                    if($item['type']==$var['type']){
                        $data[$item['id']][$var['id']] = $cur_play;
                    }
                }
            }
        }
        return $data;
    }
    public function getNo(){
        $time = strtotime(date('Y-m-d',time()));
        $me = new Common();
        $data = array();
        $type = Type::where(array('isDelete'=>0))->order('sort')->select();
        $date_time = DataTime::order('actionTime')->select();
        $return = array();
        foreach ($date_time as $item) {
            $return[$item['type']][$item['id']] = $item;
        }
        foreach ($type as $item) {
            $fun = $item['onGetNoed'];
            if(isset($return[$item['id']])){
                $cur_no_arr = $return[$item['id']];
                $idx = 0;
                foreach ($cur_no_arr as $sub_key=>$sub_item) {
                    $me->type = $sub_item['type'];
                    $actionNo = $sub_item['actionNo'];
                    $actionTime = $sub_item['actionNo'];
                    if (method_exists($me, $fun)) {
                        $me->$fun($actionNo, $actionTime, $time,$item['data_ftime']);
                        $data[$item['id']][$idx] = array(
                            'issue' => $actionNo,
                            'lotteryid' => $actionNo,
                            'dateend' => date('Y-m-d', $time),
                        );
                    }
                    $idx++;
                }
            }
        }
        return $data;
    }

    public function addLog($type, $extfield0 = 0, $extfield1 = '')
    {
        $this->user = Session::get('userData');
        $log = array(
            'uid' => $this->user['uid'],
            'username' => $this->user['username'],
            'type' => $type,
            'actionTime' => time(),
            'actionIP' => get_client_ip(1),
            'action' => $this->adminLogType[$type],
            'extfield0' => $extfield0,
            'extfield1' => $extfield1
        );
        AdminLog::insert($log);
    }

}