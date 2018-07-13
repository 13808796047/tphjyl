<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Mobile\Controller;
use Think\Log;

/**
 * 空模块，主要用于显示404页面，请不要删除
 */
class TeamController extends HomeController{
	
	public final function index() {
		$user = M('members')->where(array('uid'=>$this->user['uid']))->find();
		$this->assign('user',$user);
		$this->display();
	}
	/*游戏记录*/
	public final function record(){
		$this->getTypes();
		$this->getPlayeds();
		$this->assign('types',$this->types);
		$this->assign('playeds',$this->playeds);

		$this->search();
		
		if(!I('get.'))
			$this->display('Team/record');
		else
			$this->display('Team/record-list');		
	}
	
	public final function search(){
		$para=I('get.');
	
		$this->getTypes();
		$this->getPlayeds();
		$this->assign('types',$this->types);
		$this->assign('playeds',$this->playeds);
		
		
		$where = array();
		// 用户名限制
		if($para['username'] && $para['username']!='用户名'){
			// 按用户名查找时
			// 只要符合用户名且是自己所有下级的都可查询
			// 用户名用模糊方式查询
			$where['username'] = array('like',"%".I('username')."%");
			$where['parents'] = array('like',"%,".$this->user['uid'].",%");
		}
		//用户类型限制
		switch($para['utype']){
			case 1:
				//我自己
				$map['uid'] = $this->user['uid'];
				break;
			case 2:
				//直属下线
				$map['parentId'] = $this->user['uid'];
				break;
			case 3:
				// 所有下级
				$map['parents'] = array('like','%,'.$this->user['uid'].',%');
				break;
			default:
				//所有人
				$map['parents'] = array('like',"%,".$this->user['uid'].",%");
				$map['uid'] = $this->user['uid'];
				$map['_logic'] = 'or';
				break;
		}
		
		$where['_complex'] = $map;
		$userList = M('members')->field('uid,username')->where($where)->select();
		//dump(M('members')->getLastSql());
		$userData=array();
        $userStr = '';
		foreach($userList as $user)
		{
			$userStr = $userStr.$user['uid'].',';
			$userData[$user['uid']] = $user;
		}

		$where = array();
		// 彩种限制
		if($para['type']){
			$where['type'] = $para['type'];
		}
				
		// 时间限制
		if($para['fromTime'] && $para['toTime']){
			$where['actionTime'] = array('between',array(strtotime($para['fromTime']),strtotime($para['toTime'])));
		}elseif($para['fromTime']){
			$where['actionTime'] = array('egt',strtotime($para['fromTime']));
		}elseif($para['toTime']){
			$where['actionTime'] = array('elt',strtotime($para['toTime']));
		}else{
			if($GLOBALS['fromTime'] && $GLOBALS['toTime']){
				$where['actionTime'] = array('between',array($GLOBALS['fromTime'],$GLOBALS['toTime']));
			}
		}
		
		// 投注状态限制
		if($para['state']){
		switch($para['state']){
			case 1:
				// 已派奖
				$where['zjCount'] = array('gt',0);
			break;
			case 2:
				// 未中奖
				$where['zjCount']=0;
				$where['lotteryNo']=array('neq','');
				$where['isDelete']=0;
				
			break;
			case 3:
				// 未开奖
				$where['lotteryNo']=array('eq','');
			break;
			case 4:
				// 追号
				$where['zhuiHao']=1;
			break;
			case 5:
				// 撤单
				$where['isDelete']=1;
			break;
			}
		}

		
		 //单号
	   if($para['betId'] && $para['betId']!='输入单号') $where['wjorderId']=$para['betId'];
		
		$where['uid'] = array('in',$userStr);
		$betList = M('bets')->field('id,wjorderId,uid,username,type,playedId,actionNo,beiShu,mode,lotteryNo,isDelete,zjCount,bonus,actionNum,fpEnable,actionTime')->where($where)->order('id desc,actionTime desc')->select();
		$this->recordList($betList);		
	}
	
	public final function searchRecord(){
		$this->search();
		$this->display('Team/record-list');
	}
	
	
	/*盈亏报表*/
	public final function report(){

		$this->reportSearch();
		if(!I('get.'))
			$this->display('Team/report');
		else
			$this->display('Team/report-list');
	}
	public final function searchReport(){
		$this->reportSearch();
		$this->display('Team/report-list');
	}
	public final function reportSearch(){		

        $para = I('get.');
        $uid = $this->user['uid'];
        $toTime = isset($para['toTime']) ? strtotime($para['toTime']) : strtotime(date('Y-m-d 23:59:59'));
        $fromTime = isset($para['fromTime']) ? strtotime($para['fromTime']) : strtotime(date('Y-m-d 00:00'));
        if($toTime-$fromTime>=86400*20){
            echo '<font color="red" size="15">时间区间过大</font>';exit();
        }
        $all = array();
       /* $sql = "SELECT * FROM (
SELECT 
 m.username,
 m.uid,
 if(m.type=1,'代理','会员') AS type,
  sum(r.coin) AS coin,
	sum(r.rechargeAmount) AS rechargeAmount,
	sum(r.cashAmount) AS cashAmount,
	sum(r.betAmount) AS betAmount,
	sum(r.zjAmount) AS zjAmount,
	sum(r.fanDianAmount) AS fanDianAmount,
	sum(r.brokerageAmount) AS brokerageAmount,
	sum(r.zyk) AS zyk
FROM gygy_members as m LEFT JOIN gygy_coin_log_report as r ON r.uid=m.uid
WHERE m.uid = {$uid} AND r.actionTime BETWEEN {$fromTime} AND {$toTime}
GROUP BY m.uid
UNION
SELECT 
 m.username,
 m.uid,
 if(m.type=1,'代理','会员') AS type,
  sum(r2.coin) AS coin,
	sum(r2.rechargeAmount) AS rechargeAmount,
	sum(r2.cashAmount) AS cashAmount,
	sum(r2.betAmount) AS betAmount,
	sum(r2.zjAmount) AS zjAmount,
	sum(r2.fanDianAmount) AS fanDianAmount,
	sum(r2.brokerageAmount) AS brokerageAmount,
	sum(r2.zyk) AS zyk
 FROM gygy_members m 
 LEFT JOIN (
SELECT r1.*,m1.parents FROM (
SELECT 
  r.uid,
  sum(r.coin) AS coin,
	sum(r.rechargeAmount) AS rechargeAmount,
	sum(r.cashAmount) AS cashAmount,
	sum(r.betAmount) AS betAmount,
	sum(r.zjAmount) AS zjAmount,
	sum(r.fanDianAmount) AS fanDianAmount,
	sum(r.brokerageAmount) AS brokerageAmount,
	sum(r.zyk) AS zyk
FROM gygy_coin_log_report as r WHERE uid in(
SELECT uid FROM gygy_members WHERE FIND_IN_SET({$uid},parents)
) AND r.actionTime BETWEEN {$fromTime} AND {$toTime}
GROUP BY uid
) r1 JOIN gygy_members AS m1 ON r1.uid = m1.uid
) r2 ON  INSTR(r2.parents,m.parents) > 0
 WHERE m.parentId = {$uid}
GROUP BY m.uid
) as t ORDER BY uid ";*/
        $sql = "SELECT * FROM (
                SELECT 
                 m.username,
                 m.uid,
                 if(m.type=1,'代理','会员') AS type,
                  sum(r.coin) AS coin,
                	sum(r.rechargeAmount) AS rechargeAmount,
                	sum(r.cashAmount) AS cashAmount,
                	sum(r.betAmount) AS betAmount,
                	sum(r.zjAmount) AS zjAmount,
                	sum(r.fanDianAmount) AS fanDianAmount,
                	sum(r.brokerageAmount) AS brokerageAmount,
                	sum(r.zyk) AS zyk
                FROM gygy_members as m LEFT JOIN gygy_coin_log_report as r ON r.uid=m.uid AND r.actionTime BETWEEN {$fromTime} AND {$toTime}
                WHERE m.uid = {$uid} 
                GROUP BY m.uid
                UNION
                SELECT  * FROM 
                (SELECT
                        mm.username,
                         mm.uid,
                        if(mm.type=1,'代理','会员') AS type,
                        sum(r2.coin) AS coin,
                        sum(r2.rechargeAmount) AS rechargeAmount,
                        sum(r2.cashAmount) AS cashAmount,
                        sum(r2.betAmount) AS betAmount,
                        sum(r2.zjAmount) AS zjAmount,
                        sum(r2.fanDianAmount) AS fanDianAmount,
                        sum(r2.brokerageAmount) AS brokerageAmount,
                        sum(r2.zyk) AS zyk
                     FROM gygy_members mm 
                    LEFT JOIN (
                    SELECT
                        m.uid,
                        m.username,
                        m.parentId,
                        m.parents,
                        r.coin,
                        r.rechargeAmount,
                        r.cashAmount,
                        r.betAmount,
                        r.zjAmount,
                        r.fanDianAmount,
                        r.brokerageAmount,
                        r.zyk
                    FROM
                        gygy_members AS m
                    JOIN gygy_coin_log_report AS r ON m.uid = r.uid
                    WHERE
                        FIND_IN_SET({$uid}, m.parents) AND m.uid <> {$uid}
                    AND r.actionTime BETWEEN {$fromTime} AND {$toTime}
                    ) as r2
                    ON FIND_IN_SET(mm.uid,r2.parents)
                    WHERE mm.parentId = {$uid}
                    GROUP BY mm.uid
                    ORDER BY mm.username asc) t
                ) r1 ";
        $Model = new \Think\Model();
//        $data = $Model->query("CALL sp_getCoins({$uid},{$fromTime},{$toTime})");
        $data = $Model->query($sql);
        foreach ($data as $item=>$sub) {
            $all['coin'] += $sub['coin'];
            $all['rechargeAmount'] += $sub['rechargeAmount'];
            $all['cashAmount'] += $sub['cashAmount'];
            $all['betAmount'] += $sub['betAmount'];
            $all['zjAmount'] += $sub['zjAmount'];
            $all['fanDianAmount'] += $sub['fanDianAmount'];
            $all['brokerageAmount'] += $sub['brokerageAmount'];
            $all['zyk'] += floatval($sub['zjAmount'] - $sub['betAmount'] +$sub['fanDianAmount'] +$sub['brokerageAmount']);

            $data[$item]['coin'] = floatval($sub['coin']);
            $data[$item]['rechargeAmount'] = floatval($sub['rechargeAmount']);
            $data[$item]['cashAmount'] = floatval($sub['cashAmount']);
            $data[$item]['betAmount'] = floatval($sub['betAmount']);
            $data[$item]['zjAmount'] = floatval($sub['zjAmount']);
            $data[$item]['fanDianAmount'] = floatval($sub['fanDianAmount']);
            $data[$item]['brokerageAmount'] = floatval($sub['brokerageAmount']);
            $data[$item]['zyk'] = floatval($sub['zjAmount'] - $sub['betAmount'] +$sub['fanDianAmount'] +$sub['brokerageAmount']);
        }
        $this->assign('data',$data);

        //团队
        $this->assign('all', $all);
        $this->assign('para', $para);
        $this->assign('user', $this->user);
	}
	
	//会员管理
	public final function member(){
//		dump(I('get.'));
		$this->memberSearch();
//		if(!I('get.'))
			$this->display('Team/member');
//		else
//			$this->display('Team/member-list');
	}
	public final function memberDetail(){
		$uid = (I('get.uid'));
		if (!$uid) {
			$data = [];
		}else{
			$data = M('members')->where(['uid'=>$uid])->find();
		}

		$parentData = M('members')->where(['uid'=>$user['parentId']])->find();
		
		if($parentData['parentId']){
			$parentData=$parentData;
		}else{
			$this->getSystemSettings();
			$parentData['fanDian']=$this->settings['fanDianMax'];
			$parentData['fanDianBdw']=$this->settings['fanDianBdwMax'];
		}
		$sonFanDianMax= M('members')->where(array('isDelete'=>0, 'parentId'=>I('uid')))->field('max(fanDian) sonFanDian, max(fanDianBdw) sonFanDianBdw')->find();
		
		$this->assign('parentData',$parentData);
		$this->assign('sonFanDianMax',$sonFanDianMax);

		$this->assign('data',$data);
		$this->assign('user',$this->user);
		$this->display('Team/member-detail');
	}
	public final function searchMember(){
		$this->memberSearch();
		$this->display('Team/member-list');
	}
	public final function memberSearch(){
		/*if(I('username') && I('username')!='用户名'){
			// 按用户名查找时
			// 只要符合用户名且是自己所有下级的都可查询
			// 用户名用模糊方式查询
			$where['username'] = array('like',"%".I('username')."%");
			$where['parents'] = array('like',"%,".$this->user['uid'].",%");
			
		}else{
			switch(I('utype')){
				case 1:
					// 我自己
					$where['uid'] = $this->user['uid'];
					break;
				case 2:
					// 直属下级
					$uid = $this->user['uid'];
					if(I('uid')) {
						$uid = I('uid');
					}
					$where['parentId'] = $uid;
					break;
				case 3:
					// 所有下级
					$where['parents'] = array('like',"%".$this->user['uid'].",%");
					break;
				default:
					//所有人
					$where['parents'] = array('like',"%,".$this->user['uid'].",%");
					$where['uid'] = $this->user['uid'];
					$where['_logic'] = 'or';
					break;			
			}
		}*/

        $uid = $this->user['uid'];
        if(I('uid')) {
            $uid = I('uid');
        }
        $where['parentId'] = $uid;
        $where['uid'] = $uid;
        $where['_logic'] = 'OR';
		$userList = M('members')->where($where)
            ->order('username')->select();
		$t = [];
		$k = 0;
		foreach ($userList as $key => $value){
		    if($value['uid'] == $uid){
                $t = $value;
                $k = $key;
            }
        }
        if(!empty($t)){
		    unset($userList[$k]);
            array_unshift($userList,$t);
        }
		$this->recordList($userList,20);
		$this->assign('user',$this->user);
	}
	
	public final function userUpdate(){
		
		$user = M('members')->find(I('id'));
		$this->assign('userData',$user);
		
		$parentData = M('members')->find($user['parentId']);
		
		if($parentData['parentId']){
			$parentData=$parentData;
		}else{
			$this->getSystemSettings();
			$parentData['fanDian']=$this->settings['fanDianMax'];
			$parentData['fanDianBdw']=$this->settings['fanDianBdwMax'];
		}
		$sonFanDianMax= M('members')->where(array('isDelete'=>0, 'parentId'=>I('uid')))->field('max(fanDian) sonFanDian, max(fanDianBdw) sonFanDianBdw')->find();
		
		$this->assign('parentData',$parentData);
		$this->assign('sonFanDianMax',$sonFanDianMax);
		$this->display('Team/update-menber');
	}
	
	public final function userUpdateed(){
		if(I('fanDian')<0)
			$this->error('返点不能小于0');
		$user = M('members')->where(array('username'=>I('username')))->find();
		if($this->user['uid']!=$user['parentId'])
			$this->error('不是你的直属下级，不可以修改');
		
		if($this->user['fanDian']<I('fanDian'))
			$this->error('返点不可以大于上级');
		
		$sonFanDianMax= M('members')->where(array('isDelete'=>0, 'parentId'=>$user['uid']))->field('max(fanDian) sonFanDian, max(fanDianBdw) sonFanDianBdw')->find();
		
		if($sonFanDianMax['sonFanDian']){
			if($sonFanDianMax['sonFanDian']>=I('fanDian'))
				$this->error('返点不可以小于直属下级'.$sonFanDianMax['sonFanDian']);
		}
		
		$data['fanDian'] = $this->user['fanDian']-I('fanDian');
//		$data['type'] = I('type');
		
		if(M('members')->where(array('uid'=>$user['uid']))->save($data)){
			$this->success('修改成功',U('Team/memberdetail',['uid'=>$user['uid']]));
		}else{
			$this->error('修改失败');
		}		
	}
	
	public final function addMember(){
		//print_r($this->getMyUserCount());
		$this->display('Team/add-member');
	}
	
	public final function insertMember(){
	    if($this->user['type'] == 0){
            $this->error('会员不能开号');
        }
		$username=I('username');
		$password=I('password');
		if(!$username.trim() || !$password.trim())
			$this->error('用户名或密码不能为空');
		
		if(!preg_match("/^[0-9a-zA-Z]{6,11}$/",I('username'))){
			$this->error('用户名只能由英文和数字组成，长度6-11个字符');
		}
		
		if(M('members')->where(array('username'=>I('username')))->find())
			$this->error('用户'.I('username').'已经存在');
		
			
		if(I('fanDian')<0)
			$this->error('自身保留返点不能小于0');
		
		if($this->user['fanDian']< I('fanDian'))
			$this->error('自身保留返点不可以自己返点');

		$para['parentId']=$this->user['uid'];
		$para['parents']=$this->user['parents'];
		$para['password']=think_ucenter_md5(I('password'), UC_AUTH_KEY);
		$para['coinPassword']=$para['password'];
		$para['username'] = I('username');
		$para['qq'] = I('qq');
		$para['type']=I('type');
		$para['regIP']=$this->ip(true);
		$para['regTime']=$this->time;
        $para['is_test'] = $this->user['is_test'];
		
		if(!$para['nickname']) $para['nickname']=$para['username'];
		if(!$para['name']) $para['name']=$para['username'];
		
		
		// 查检返点设置
		if($para['fanDian']=$this->user['fanDian']-floatval(I('fanDian'))){
			if($para['type'] == 0 ) $para['fanDian'] = 0;
		}else{
			$para['fanDian']=0;
		}		
		
		M()->startTrans();
		if($lastid = M('members')->add($para))
		{
			if(M('members')->where(['uid'=>$lastid])->save(array('parents'=>$this->user['parents'].','.$lastid)))
			{
				M()->commit();//成功则提交
				$this->success('添加会员成功',U('Team/member'));
			}
		}
		
		M()->rollback();//不成功，则回滚
		$this->error('添加会员失败');
		
	}
	
	/*账变列表*/
	public final function coin(){
		$this->coinSearch();
        $this->assign('fromTime',date('Y-m-d 00:00'));
		/*if(!I('get.'))
			$this->display('Team/coin');
		else
			$this->display('Team/coin-list');*/
        $this->display('Team/coin');
	}
	public final function searchCoin(){
		$this->coinSearch();
		$this->display('Team/coin-list');
	}
	public final function coinSearch(){
		/*$this->getTypes();
		$this->getPlayeds();
		$this->assign('types',$this->types);
		$this->assign('playeds',$this->playeds);
		
		$para=I('get.');
		$where = array();
		
		// 用户名限制
		if($para['username'] && $para['username']!='用户名'){
			// 按用户名查找时
			// 只要符合用户名且是自己所有下级的都可查询
			// 用户名用模糊方式查询
			$where['username'] = array('like',"%".$para['username']."%");
			$where['parents'] = array('like',"%,".$this->user['uid'].",%");
		}
		//用户类型限制
		switch($para['utype']){
			case 1:
				//我自己
				$map['uid'] = $this->user['uid'];
				break;
			case 2:
				//直属下线
				$map['parentId'] = $this->user['uid'];
				break;
			case 3:
				// 所有下级
				$map['parents'] = array('like','%,'.$this->user['uid'].',%');
				break;
			default:
				//所有人
				$map['parents'] = array('like',"%,".$this->user['uid'].",%");
				$map['uid'] = $this->user['uid'];
				$map['_logic'] = 'or';
				break;
		}
		
		$where['_complex'] = $map;
		$userList = M('members')->field('uid,username')->where($where)->select();
		//dump($userList);
		$userData=array();
        $userStr = '';
		foreach($userList as $user)
		{
			$userStr = $userStr.$user['uid'].',';			
			$userData[$user['uid']] = $user;
		}

		$where = array();
		// 账变类型限制
		if($para['liqType']){
			$where['liqType'] = $para['liqType'];
			if($para['liqType']==2) $where['liqType'] = array('between','2,3');
		}
				
		// 时间限制
		if($para['fromTime'] && $para['toTime']){
			$where['actionTime'] = array('between',array(strtotime($para['fromTime']),strtotime($para['toTime'])));
		}elseif($para['fromTime']){
			$where['actionTime'] = array('egt',strtotime($para['fromTime']));
		}elseif($para['toTime']){
			$where['actionTime'] = array('elt',strtotime($para['toTime']));
		}else{
			if($GLOBALS['fromTime'] && $GLOBALS['toTime']){
				$where['actionTime'] = array('between',array($GLOBALS['fromTime'],$GLOBALS['toTime']));
			}
		}
		
		$userStr = substr($userStr,0,-1);
		$where['uid'] = array('in',$userStr);
		//dump($where);
		$coinList = M('coin_log')->field('uid,actionTime,liqType,extfield0,extfield1,coin,userCoin')->where($where)->order('id desc')->select();
		//dump($coinList);
		unset($where['liqType']);
		$betList = M('bets')->field('id,actionNo,mode,type,playedId,wjorderId')->where($where)->order('id desc')->select();		
		$betData=array();
		foreach($betList as $bet)
		{
			$betData[$bet['id']] = $bet;
		}

		$data = array();
		$i=0;
		foreach($coinList as $coin)
		{
			$b = $betData[$coin['extfield0']];
			$b = $b?$b:array();
			$data[$i] = array_merge($coin,$userData[$coin['uid']],$b);
			$i++;
		}
		//dump($data);
		
		$this->recordList($data);*/
        $this->getTypes();
        $this->getPlayeds();
        $this->assign('types', $this->types);
        $this->assign('playeds', $this->playeds);
        $para  = I('get.');
        $where = array();
        // 用户名限制
        if ($para['username'] && $para['username'] != '用户名') {
            if (mb_strlen($para['username']) > 20){
                $this->assign('data',[]);
                return;
            }
            // 按用户名查找时
            // 只要符合用户名且是自己所有下级的都可查询
            // 用户名用模糊方式查询
            $where['m.username'] = $para['username'];
            $where['_string'] = "find_in_set({$this->user['uid']},m.parents)";
        }
        //用户类型限制
        switch ($para['utype']) {
            case 1:
                //我自己
                $map['m.uid'] = $this->user['uid'];
                break;
            case 2:
                //直属下线
                $map['m.parentId'] = $this->user['uid'];
                break;
            case 3:
                // 所有下级
                $where['_string'] = "find_in_set({$this->user['uid']},m.parents)";
                break;
            default:
                //所有人
                $where['_string'] = "find_in_set({$this->user['uid']},m.parents)";
                $map['m.uid']     = $this->user['uid'];
                $map['_logic']  = 'or';
                break;
        }
        $where['_complex'] = $map;
        // 账变类型限制
        if ($para['liqType']) {
            $where['gygy_coin_log.liqType'] = $para['liqType'];
            if ($para['gygy_coin_log.liqType'] == 2) {
                $where['gygy_coin_log.liqType'] = array('between', '2,3');
            }
        }
        $time  = $para['fromTime'] ? $para['fromTime'] : date('Y-m-d');
        if($para&&empty($time)){
            echo '<font color="red" size="15">时间必须选择</font>';exit;
        }else{
            $time = strtotime(date('Y-m-d',strtotime($time)));
            $where['gygy_coin_log.actionTime'] = array('between', array($time, $time+86399));
        }
        if (I('last_time') > 0){
            $where['gygy_coin_log.actionTime'] = array('lt',I('last_time'));
        }
        $model = M('coin_log')->field('
                    gygy_coin_log.uid,gygy_coin_log.actionTime,gygy_coin_log.liqType,gygy_coin_log.extfield0,gygy_coin_log.extfield1,
                    gygy_coin_log.coin,gygy_coin_log.userCoin,
                    b.id,b.actionNo,b.mode,b.type,b.playedId,b.wjorderId,m.uid,m.username
                ')
            ->join("gygy_bets b on b.id=gygy_coin_log.extfield0")
            ->join("gygy_members m on m.uid=gygy_coin_log.uid")
            ->where($where);
        $data = $model->order('gygy_coin_log.actionTime desc')
            ->limit(10)
            ->select();
        $this->assign('data',$data);
        $this->assign('para',$para);
	}
    public final function getCoin(){
        $this->coinGet();
        $this->display('Team/coin-list');
    }
    public final function coinGet(){
        $this->getTypes();
        $this->getPlayeds();
        $this->assign('types', $this->types);
        $this->assign('playeds', $this->playeds);
        $para  = I('get.');
        $pageSize = $para['PageSize'] > 10 ? $para['PageSize'] : 10;
        $where = array();
        // 用户名限制
        if ($para['username'] && $para['username'] != '用户名') {
            if (mb_strlen($para['username']) > 20){
                $this->assign('data',[]);
                return;
            }
            // 按用户名查找时
            // 只要符合用户名且是自己所有下级的都可查询
            // 用户名用模糊方式查询
            $where['m.username'] = $para['username'];
//            $where['m.parents']  = array('like', "%," . $this->user['uid'] . ",%");
            $where['_string'] = "find_in_set({$this->user['uid']},m.parents)";
        }
        //用户类型限制
        switch ($para['utype']) {
            case 1:
                //我自己
                $map['m.uid'] = $this->user['uid'];
                break;
            case 2:
                //直属下线
                $map['m.parentId'] = $this->user['uid'];
                break;
            case 3:
                // 所有下级
                $where['_string'] = "find_in_set({$this->user['uid']},m.parents)";
                break;
            default:
                //所有人
                $where['_string'] = "find_in_set({$this->user['uid']},m.parents)";
                $map['m.uid']     = $this->user['uid'];
                $map['_logic']  = 'or';
                break;
        }
        $where['_complex'] = $map;
        // 账变类型限制
        if ($para['liqType']) {
            $where['gygy_coin_log.liqType'] = $para['liqType'];
            if ($para['gygy_coin_log.liqType'] == 2) {
                $where['gygy_coin_log.liqType'] = array('between', '2,3');
            }
        }
        $time  = $para['fromTime'];
        if($para&&empty($time)){
            echo '<font color="red" size="15">时间必须选择</font>';exit;
        }else{
            $time = strtotime(date('Y-m-d',strtotime($time)));
            $where['gygy_coin_log.actionTime'] = array('between', array($time, $time+86399));
        }
        $where['gygy_coin_log.actionTime'] = array('lt',I('last_time'));
        $model = M('coin_log')->field('
                    gygy_coin_log.uid,gygy_coin_log.actionTime,gygy_coin_log.liqType,gygy_coin_log.extfield0,gygy_coin_log.extfield1,
                    gygy_coin_log.coin,gygy_coin_log.userCoin,
                    b.id,b.actionNo,b.mode,b.type,b.playedId,b.wjorderId,m.uid,m.username
                ')
            ->join("gygy_bets b on b.id=gygy_coin_log.extfield0")
            ->join("gygy_members m on m.uid=gygy_coin_log.uid")
            ->where($where);
        $data = $model->order('gygy_coin_log.actionTime desc')
            ->limit(10)
            ->select();

        $this->assign('data',$data);
        $this->assign('para',$para);
    }
	
	//团队统计
	public final function team(){
				
		$teamAll = M('members')->where(array('isDelete'=>0, 'parents'=>array('like','%,'.$this->user['uid'].',%')))->field('sum(coin) coin, count(uid) count')->find();
		$teamAll2 = M('members')->where(array('isDelete'=>0, 'parentId'=>$this->user['uid']))->field('count(uid) count')->find();
		
		$this->assign('teamAll',$teamAll);
		$this->assign('teamAll2',$teamAll2);
		$this->assign('user',$this->user);
		$this->display('Team/team');
	}
	
	//提现记录
	public final function cashRecord(){
		$this->cashSearch();
		if(!I('get.'))
			$this->display('Team/cashRecord');
		else
			$this->display('Team/cash-list');
	}
	public final function searchCashRecord(){
		$this->cashSearch();
		$this->display('Team/cash-list');
	}
	public final function cashSearch(){
		
		$para = I('get.');
		
		// 用户名限制
		if($para['username'] && $para['username']!='用户名'){
			// 按用户名查找时
			// 只要符合用户名且是自己所有下级的都可查询
			// 用户名用模糊方式查询
			$where['username'] = array('like',"%".I('username')."%");
			$where['parents'] = array('like',"%,".$this->user['uid'].",%");
		}
		else{
			//用户类型限制
			switch($para['utype']){
				case 1:
					//我自己
					$map['uid'] = $this->user['uid'];
					break;
				case 2:
					//直属下线
					$map['parentId'] = $this->user['uid'];
					break;
				case 3:
					// 所有下级
					$map['parents'] = array('like','%,'.$this->user['uid'].',%');
					break;
				default:
					//所有人
					$map['parents'] = array('like',"%,".$this->user['uid'].",%");
					$map['uid'] = $this->user['uid'];
					$map['_logic'] = 'or';
					break;
			}
		}
		
		$where['_complex']=$map;
		$userList = M('members')->field('uid,username')->where($where)->select();
		
		$userData=array();
        $userStr = '';
		foreach($userList as $user)
		{
			$userStr = $userStr.$user['uid'].',';
			$userData[$user['uid']] = $user;
		}

		$where = array();
	
		// 时间限制
		if($para['fromTime'] && $para['toTime']){
			$where['actionTime'] = array('between',array(strtotime($para['fromTime']),strtotime($para['toTime'])));
		}elseif($para['fromTime']){
			$where['actionTime'] = array('egt',strtotime($para['fromTime']));
		}elseif($para['toTime']){
			$where['actionTime'] = array('elt',strtotime($para['toTime']));
		}else{
			if($GLOBALS['fromTime'] && $GLOBALS['toTime']){
				$where['actionTime'] = array('between',array($GLOBALS['fromTime'],$GLOBALS['toTime']));
			}
		}
		
		$where['uid'] = array('in',$userStr);
		$cashList = M('member_cash')->field('id,uid,actionTime,amount,account,username,state,bankId')->where($where)->order('id desc')->select();
		
		$i=0;
		foreach($cashList as $cash)
		{
			$data[$i] = array_merge($cash,$userData[$cash['uid']]);
			$i++;
		}
		
		$bankList = M('bank_list')->field('id,name')->where(array('isDelete'=>0))->order('id')->select();
		$bankData=array();
		foreach($bankList as $bank)
		{
			$bankData[$bank['id']] = $bank;
		}
		$this->assign('bankData',$bankData);

		$this->recordList($data);		
	}
	
	
	//充值记录
	public final function rechargeRecord(){
		$this->rechargeSearch();
		if(!I('get.'))
			$this->display('Team/rechargeRecord');
		else
			$this->display('Team/recharge-list');
	}
	public final function searchrechargeRecord(){
		$this->rechargeSearch();
		$this->display('Team/recharge-list');
	}
	public final function rechargeSearch(){
		
		$para = I('get.');
		
		// 用户名限制
		if($para['username'] && $para['username']!='用户名'){
			// 按用户名查找时
			// 只要符合用户名且是自己所有下级的都可查询
			// 用户名用模糊方式查询
			$where['username'] = array('like',"%".I('username')."%");
			$where['parents'] = array('like',"%,".$this->user['uid'].",%");
		}
		else{
			//用户类型限制
			switch($para['utype']){
				case 1:
					//我自己
					$map['uid'] = $this->user['uid'];
					break;
				case 2:
					//直属下线
					$map['parentId'] = $this->user['uid'];
					break;
				case 3:
					// 所有下级
					$map['parents'] = array('like','%,'.$this->user['uid'].',%');
					break;
				default:
					//所有人
					$map['parents'] = array('like',"%,".$this->user['uid'].",%");
					$map['uid'] = $this->user['uid'];
					$map['_logic'] = 'or';
					break;
			}
		}
		
		$where['_complex']=$map;
		$userList = M('members')->field('uid,username')->where($where)->select();
		
		$userData=array();
        $userStr = '';
		foreach($userList as $user)
		{
			$userStr = $userStr.$user['uid'].',';
			$userData[$user['uid']] = $user;
		}

		$where = array();
	
		// 时间限制
		if($para['fromTime'] && $para['toTime']){
			$where['actionTime'] = array('between',array(strtotime($para['fromTime']),strtotime($para['toTime'])));
		}elseif($para['fromTime']){
			$where['actionTime'] = array('egt',strtotime($para['fromTime']));
		}elseif($para['toTime']){
			$where['actionTime'] = array('elt',strtotime($para['toTime']));
		}else{
			if($GLOBALS['fromTime'] && $GLOBALS['toTime']){
				$where['actionTime'] = array('between',array($GLOBALS['fromTime'],$GLOBALS['toTime']));
			}
		}
		
		$where['uid'] = array('in',$userStr);
		$cashList = M('member_recharge')->field('id,uid,username,rechargeId,amount,rechargeAmount,mBankId,state,info,actionTime')->where($where)->order('id desc')->select();
		
		$i=0;
		foreach($cashList as $cash)
		{
			$data[$i] = array_merge($cash,$userData[$cash['uid']]);
			$i++;
		}
		
		$bankList = M('bank_list')->field('id,name')->where(array('isDelete'=>0))->order('id')->select();
		$bankData=array();
		foreach($bankList as $bank)
		{
			$bankData[$bank['id']] = $bank;
		}
		$this->assign('bankData',$bankData);

		$this->recordList($data);		
	}
	
	//推广链接
	public final function linkList(){
		
		$list = M('links')->where(array('uid'=>$this->user['uid']))->order('fanDian desc')->select();
		$this->assign('data',$list);		
		$this->display('Team/link-list');
	}

	
	public final function addLink(){
		if(IS_POST)
		{
			//$para=$_POST;
			$para['regIP']=$this->ip(true);
			$para['regTime']=$this->time;
			$para['uid']=$this->user['uid'];
			$para['type'] = I('type','','intval');
			// 查检返点设置
			if($para['fanDian']=floatval(I('fanDian'))){
				if($para['fanDian'] % $this->settings['fanDianDiff']) $this->error(sprintf('返点只能是%.1f%的倍数', $this->settings['fanDianDiff']));
				
			}else{
				$para['fanDian']=0;
			}
			
			if(I('fanDian')>=$this->user['fanDian'])
				$this->error('下级返点不能大于自己的返点');
			
			$para['fanDianBdw']=floatval(I('fanDianBdw'));
			
			if(M('links')->where(array('uid'=>$this->user['uid'], 'fanDian'=>$para['fanDian']))->find())
				$this->error('此链接已经存在');
			
			if(M('links')->add($para))
				$this->success('添加链接成功',U('Team/linklist'));
			else
				$this->error('添加链接失败');
			
		}
		else
		{
			$this->display('Team/add-link');
		}
	}
	
	/*编辑注册链接*/
	public final function linkUpdate(){
		if(IS_POST)
		{

			// 查检返点设置
			if($para['fanDian']=floatval(I('fanDian'))){
				if($para['fanDian'] % $this->settings['fanDianDiff']) $this->error(sprintf('返点只能是%.1f%的倍数', $this->settings['fanDianDiff']));
				
			}else{
				$para['fanDian']=0;
			}
			
			if(I('fanDian')>=$this->user['fanDian'] || I('fanDianBdw')>=$this->user['fanDianBdw'])
				$this->error('下级返点不能大于自己的返点');
			
			$para['fanDianBdw']=floatval(I('fanDianBdw'));
			$para['lid']=intval(I('lid'));
			
			if(!M('links')->where(array('uid'=>$this->user['uid'], 'lid'=>I('lid')))->find())
				$this->error('此链接不存在');
			
			if(M('links')->save($para))
				$this->success('修改链接成功');
			else
				$this->error('修改链接失败');
		}
		else
		{
			$linkData = M('links')->where(array('lid'=>I('lid'), 'uid'=>$this->user['uid']))->find();
		
			if($linkData['uid']){
				$parentData=M('members')->field('fanDian, fanDianBdw')->find($this->user['uid']);
			}else{
				$parentData['fanDian']=$this->settings['fanDianMax'];
				$parentData['fanDianBdw']=$this->settings['fanDianBdwMax'];
			}
			
			$this->assign('linkData',$linkData);
			$this->assign('parentData',$parentData);
			
			$this->display('Team/update-link');
		}
		
	}
	
	public final  function deletelink(){
		if(IS_POST)
		{
			if(M('links')->where(array('lid'=>I('lid'), 'uid'=>$this->user['uid']))->delete())
				$this->success('删除成功', U('Team/linklist'));
			else
				$this->error('删除失败');
		}
	}
	public final  function getlink(){
		$linkData = M('links')->where(array('lid'=>I('lid'), 'uid'=>$this->user['uid']))->find();
		
		if($linkData['uid']){
			$parentData=M('members')->field('fanDian, fanDianBdw')->find($this->user['uid']);
		}else{
			$parentData['fanDian']=$this->settings['fanDianMax'];
			$parentData['fanDianBdw']=$this->settings['fanDianBdwMax'];
		}
				
		$this->assign('linkData',$linkData);
		$this->assign('parentData',$parentData);
		$this->display('get-link');
	}
	
	public final function turnMoney()
	{
		$this->display('Team/turn-money');
	}
	public final function turnRecharge(){
		$me = M('members')->where(array('uid'=>$this->user['uid']))->find();
		//dump($me);
		//dump('--'.think_ucenter_md5(I('coinpwd'), UC_AUTH_KEY));
		if($me['coinPassword']!=think_ucenter_md5(I('coinpwd'), UC_AUTH_KEY))
			$this->error('资金密码不正确');
		
		if(intval(I('amount'))<=0)
			$this->error('转账金额必须大于0');
		if($me['coin']-I('amount')<0)
			$this->error('您的余额不足');
		
		$where['username'] = I('username');
		$child=M('members')->where($where)->find();
		if(!$child)
			$this->error('此用户不存在');
		if(strpos($child['parents'],','.$me['uid'].',')===false)
			$this->error('此用户不是你的下级');
		
		// 添加本人资金流动日志
		$this->addCoin(array(
			'uid'=>$me['uid'],
			'type'=>0,
			'liqType'=>12,
			'info'=>'用户['.$me['username'].']转账给其下级['.I('username').']'.I('amount').'元',
			'extfield0'=>I('amount'),				
			'coin'=>-I('amount'),
			'fcoin'=>0
		));	

		// 添加下级资金流动日志
		$this->addCoin(array(
			'uid'=>$child['uid'],
			'type'=>0,
			'liqType'=>12,
			'info'=>'用户['.$me['username'].']转账给其下级['.I('username').']'.I('amount').'元',
			'extfield0'=>I('amount'),				
			'coin'=>I('amount'),
			'fcoin'=>0
		));
		$this->success('给下级转账成功');
	}

	//给下级充值
	function chongzhi(){
        $data = M('params')->where('name="switchCharge"')->find();
        if(isset($data['value']) && !$data['value']) {
            $this->error('充值网络异常，请稍后再试！');
        }
		$touid = I('uid');
		$money = I('money');
		$password = I('password');
		if($this->user['uid']==$touid){
			$this->error('不能给自己充值');
		}
		if(empty($money)||intval($money)<1){
			$this->error('充值金额必须大于0');
		}
		if($this->user['is_test'] != 1){
            $bankno = I('bankno');
            if(empty($bankno)){
                $this->error('绑定银行卡号不能为空！');
            }
            $banks = M('member_bank')->where(array('uid'=>$this->user['uid'],'enable'=> 1,'account'=>$bankno))->count();
            if($banks ==0){
                $this->error('验证银行卡号不正确！');
            }
        }
		if(empty($password)){
			$this->error('资金密码不能为空');
		}
		//转账次数限制
		if(!$this->zzcs()){
			$this->error("每天只能转账一次");
		}
		//转账限制
		if(!$this->zzxz()){
			$this->error("投注金额必须超过充值金额的30");
		}
        M()->startTrans();
		$me = M('Members')->where(array('uid' => $this->user['uid']))->lock(true)->find();
		$menewmoney = $me['coin'] - $money;
		if($menewmoney < 0){
            M()->rollback();
		    $this->error('余额不足，请先充值余额');
			exit();
		}

		if(empty($me['coinPassword']) || ($me['coinPassword']!= think_ucenter_md5($password, UC_AUTH_KEY))){
            M()->rollback();
		    $this->error('资金密码未设置或不正确');
			exit();
		}
		$user = M('Members')->where(array('uid' => $touid))->find();
		$p_arr = explode(',',$user['parents']);
		if (!in_array($this->user['uid'],$p_arr)) {
            M()->rollback();
			$this->error('不是你的直属下级，不可以充值');
			exit();
		}
		$usernewmoney = $user['coin'] + $money;
		$data1['uid']   = $me['uid'];
		$data1['coin']  = $menewmoney;
		$data2['uid']   = $user['uid'];
		$data2['coin']  = $usernewmoney;
		//if (M('members')->save($data1)) {

		$isSuc1 = $this->addCoin(array(
				'uid'       => $me['uid'],
				'coin'      => "-".$money,
				'liqType'   => 200,
				'info' => "资金转移到用户：".$user['username'],
		));
        M('Members')->where('uid', $this->user['uid'])->setInc('scoreTotal',$money);
		if($isSuc1 == true){
			$isSuc2 = $this->addCoin(array(
					'uid'       => $user['uid'],
					'coin'      => $money,
					'liqType'   => 201,
					'info' => "由用户转入资金：".$me['username'],
			));
		}else{
			Log::record('扣除资金失败');
			M()->rollback();
			$this->error('操作失败');exit;
		}
		$rechage = array(
				'uid'=>$user['uid'],
				'actionUid'=>$this->user['uid'],
				'coin'=>$user['coin'],
				'fcoin'=>$user['fcoin'],
				'username'=>$user['username'],
				'rechargeId'=>$this->getRechId(),
				'amount'=>$money,
				'rechargeAmount'=>$money,
				'actionIP'=>get_client_ip(1),
				'actionTime'=>time(),
				'rechargeTime'=>time(),
				'state'=>1,
				'info'=>'上级'.$this->user['username'].'给下级转账'
		);
		$rech = M('MemberRecharge')->add($rechage);
		if(!$rech){
			Log::record('给下级充值资金失败');
			M()->rollback();
			$this->error('操作失败-1');
		}
		if($isSuc2 == true){
			M()->commit();
			$this->success('操作成功',U('Team/memberdetail',['uid'=>$touid]));
		}else{
			Log::record('给下级充值资金失败');
			M()->rollback();
			$this->error('操作失败-2');
		}
	}
	final private function getRechId()
	{
		$rechargeId = $this->guid();
		if (M('MemberRecharge')->where(array('rechargeId' => $rechargeId))->find()) {
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
	//充值限制
	public function zzxz(){
		if($this->user['type']==1){
			return true;
		}
		//充值金额
		$gRs = M('MemberRecharge')->where(array('uid' => $this->user['uid'], 'state' => array('in', '1,2,9'), 'isDelete' => 0))->field('sum(case when rechargeAmount>0 then rechargeAmount else amount end) as rechargeAmount')->find();
		//投注金额
		$bet = M('Bets')->where(array('uid' => $this->user['uid'], 'isDelete' => 0, 'lotteryNo' => array('neq', '')))->field('sum(mode*beiShu*actionNum) as betAmout')->find();
		if(!empty($gRs)&&!empty($bet)){
			return false;
		}else{
			$betAmout = $bet['betAmout'];
			$rechargeAmount = $gRs["rechargeAmount"];
			$bfb = round($betAmout/$rechargeAmount,2)*100;
			if($bfb>=30){
				return true;
			}else{
				return false;
			}
		}
	}
	//转账次数限制
	public function zzcs(){
		//代理商不限制
		if($this->user['type']==1){
			return true;
		}
		$map = array(
				'uid'=>$this->user['uid'],
				'liqType'=>200,
				'actionTime'=>array('egt',strtotime(date('Y-m-d',$this->time))));
		$m = M('CoinLog')->where($map)
				->order('actionTime desc')
				->find();
		if(empty($m)){
			return true;
		}
		return false;
	}
}
