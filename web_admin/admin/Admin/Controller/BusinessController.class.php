<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Admin\Controller;

use Think\Log;
use User\Api\UserApi as UserApi;

/**
 * 后台首页控制器
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */
class BusinessController extends AdminController
{

    static protected $allow = array('verify');

    /**
     * 后台首页
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    public function index()
    {

        $this->display();

    }

    //提现记录
    public final function cash()
    {

        $para = I('post.');

        if (!$para)
            $para = I('get.');

        // 用户限制
        $userWhere = '';
        if ($para['username']) {
            $_username = trim($para['username']);
            $userWhere = " and m.username like '%{$_username}%'";
        }

        // 时间限制
        if ($para['fromTime'] && $para['toTime']) {
            $fromTime = strtotime($para['fromTime']);
            $toTime = strtotime($para['toTime']) + 24 * 3600;
            $timeWhere = " and c.actionTime between $fromTime and $toTime";
        } elseif ($para['fromTime']) {
            $fromTime = strtotime($para['fromTime']);
            $timeWhere = " and c.actionTime>=$fromTime";
        } elseif ($para['toTime']) {
            $toTime = strtotime($para['toTime']) + 24 * 3600;
            $timeWhere = " and c.actionTime<$toTime";
        } else {
            $timeWhere = ' and c.actionTime>' . strtotime(' 00:00:00');
        }

        $pageIndex = I('p') > 0 ? I('p') : 1;
        if( isset($request['r']) ){
            $listRows = (int)I('r');
        }else{
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
        }

        //dump($fromTime);
        $Model = new \Think\Model();
        $list = $Model->table('__MEMBERS__ m ')
            ->join('LEFT JOIN __MEMBER_CASH__ c ON m.uid=c.uid')
            ->join('LEFT JOIN __BANK_LIST__ l ON l.id=c.bankId')
            ->join('__MEMBER_BANK__ b ON c.memberBankId = b.id')
            ->where('c.isDelete=0' . $userWhere . $timeWhere)
            ->field('c.*,l.name as name,l.home as home,m.username as uName,b.bankDetail')
            ->order('c.id desc')
            ->page($pageIndex,$listRows)
            ->select();
        $total =$Model->table('__MEMBERS__ m ')
            ->join('LEFT JOIN __MEMBER_CASH__ c ON m.uid=c.uid')
            ->join('LEFT JOIN __BANK_LIST__ l ON l.id=c.bankId')
            ->where('m.uid=c.uid and l.id=c.bankId and c.isDelete=0' . $userWhere . $timeWhere)
            ->count();
//        $this->recordList($list);
        //dump($list);
        $total_cash =  $Model->table('__MEMBERS__ m ')
            ->join('LEFT JOIN __MEMBER_CASH__ c ON m.uid=c.uid')
            ->where(' c.state=0 and c.isDelete=0 AND m.is_test=0' . $userWhere . $timeWhere)->sum('c.amount');
        $this->assign('total_cash',$total_cash);
        $request    =   (array)I('request.');
        $page       =   new \COM\Page($total, $listRows, $request);
        $p			=	$page->show();
        $this->assign('_list', $list);
        if ($total > $listRows){
            $this->assign('_page', $p? $p: '');
        }

        $this->meta_title = '提现记录';
        $this->display();

    }

    // 提现分账详情
    public final function to_cash_split()
    {
        $para = I('post.');
        if (!$para)
            $para = I('get.');

        $Model = new \Think\Model();
        $list = $Model->table('__MEMBER_CASH_SPLIT__ s')
            ->join('__BANK_LIST__ l ON s.bankId=l.id')
            ->where('s.cashId=' . $para['id'])
            ->field('s.*,l.name as name,l.home as home,s.username as uName,s.splitAmount as amount')
            ->select();

        $this->recordList($list);
        $this->meta_title = '提现分账详情';
        $this->display();
    }

    // 处理分账
    public final function split_cash()
    {
        $para = I();
        if (!$para)
            $this->error('分账记录不存在');

        if (M('member_cash_split')->where(array('id' => $para['id']))->save(array('state' => 2))) {
            $data = [
                'result' => true,
                'msg' => '处理提现分账成功',
                'id' => $para['id']
            ];

            $this->ajaxReturn($data, 'JSON');
        } else {
            $data = [
                'result' => false,
                'msg' => '处理提现分账失败',
                'id' => $para['id']
            ];

            $this->ajaxReturn($data, 'JSON');
        }
    }

    //处理提现
    public final function to_cash()
    {

        if (IS_POST) {

            $MCash = M('member_cash');
            $data = $MCash->create();

            if ($data) {
                $cash = $MCash->where(array('id' => I('id')))->find();
                if ($cash['state'] != 1)
                    $this->error('提现已经被其他管理员处理过');

                // 检查分账
                if ($data['state'] == 0) {
                    $splitCount = M('member_cash_split')->where(['cashId' => I('id'), 'state' => 1])->count();
                    if ((int)$splitCount > 0) {
                        $this->error('请先处理提现分账');
                    }
                }

                // 开始事物处理
                $Model = new \Think\Model();
                $Model->startTrans();

                $log = array(
                    'uid' => $cash['uid'],
                    'fcoin' => -$cash['amount']
                );

                if ($data['state'] == 4) {
                    $log['info'] = "提现[{$data['id']}]处理失败";
                    $log['coin'] = $cash['amount'];
                    $log['liqType'] = 8;
                    $log['extfield0'] = $data['id'];
                } else {
                    $log['info'] = "提现[{$data['id']}]成功扣除冻结金额";
                    $log['liqType'] = 107;
                    $log['extfield0'] = $data['id'];
                }

                if ($this->addCoin($log) && $MCash->save($data)) {
                    $Model->commit();//成功则提交
                    $this->addLog(1, $cash['uid'], $log['info']);
                    $this->success('处理提现成功', U('business/cash'));
                } else {
                    $Model->rollback();//不成功，则回滚
                    $this->error('处理提现失败');
                }

            } else {
//                $this->error($Config->getError());
                $this->error('提现申请不存在或已被删除');
            }
        } else {
            $this->display();
        }
    }

    //充值记录
    public final function recharge()
    {

        $para = I('post.');

        if (!$para)
            $para = I('get.');

        //dump($para);
        // 用户限制
        if ($para['username']) {
            $_username = trim($para['username']);
            $userWhere = " and r.username like '%{$_username}%'";
        }

        // 充值编号限制
        if ($para['rechargeId']) {
            $rechargeIdWhere = " and r.rechargeId={$para['rechargeId']}";
        }

        //状态类型限制
        if ($para['type'] != '9999') {
            if($para['type'] == 1){
                $typeWhere = " and r.flag=1";
            }else if($para['type'] == 2){
                $typeWhere = " and r.state <> 9 AND r.flag=0";
            }else{
                $typeWhere = " and r.state={$para['type']}";
            }
        }
        $this->assign('type',!is_null($para['type']) ? $para['type'] : '9999');

        // 时间限制
        if ($para['fromTime'] && $para['toTime']) {
            $fromTime = strtotime($para['fromTime']);
            $toTime = strtotime($para['toTime']) + 24 * 3600;
            $timeWhere = " and r.actionTime between $fromTime and $toTime";
        } elseif ($para['fromTime']) {
            $fromTime = strtotime($para['fromTime']);
            $timeWhere = " and r.actionTime>=$fromTime";
        } elseif ($para['toTime']) {
            $toTime = strtotime($para['toTime']) + 24 * 3600;
            $timeWhere = " and r.actionTime<$toTime";
        } else {
            $timeWhere = ' and r.actionTime>' . strtotime('00:00');
        }

        $pageIndex = I('p') > 0 ? I('p') : 1;
        if( isset($request['r']) ){
            $listRows = (int)I('r');
        }else{
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
        }

        $Model = new \Think\Model('member_recharge');

        $list = $Model->table('__MEMBER_RECHARGE__ r')
            ->join('__MEMBERS__ s ON s.uid = r.uid')
            ->join('LEFT JOIN __BANK_LIST__ l ON l.id = r.mBankId')
            ->where('r.isDelete=0  ' . $userWhere . $rechargeIdWhere . $timeWhere . $typeWhere)
            ->order('r.id desc')->group('r.rechargeId')
            ->field('r.*,l.name as name,l.home as home, s.parents as parents')
            ->page($pageIndex,$listRows)
            ->select();
        $total = $Model->table('__MEMBER_RECHARGE__ r')
            ->join('__MEMBERS__ s ON s.uid = r.uid')
            ->where('r.isDelete=0  ' . $userWhere . $rechargeIdWhere . $timeWhere . $typeWhere)
            ->count();
        $total = $total > 0 ? $total : 0;

        $total_recharge =  $Model->table('__MEMBER_RECHARGE__ r')
            ->join('__MEMBERS__ s ON s.uid = r.uid')
            ->where('r.isDelete=0 AND s.is_test=0' . $userWhere . $rechargeIdWhere . $timeWhere . $typeWhere)
            ->sum('rechargeAmount');
        $this->assign('total_recharge',$total_recharge);
        $request    =   (array)I('request.');
        $page       =   new \COM\Page($total, $listRows, $request);
        $p			=	$page->show();
        $this->assign('_list', $list);
        if ($total > $listRows){
            $this->assign('_page', $p? $p: '');
        }

        $members = M('Members')->field('uid, username')->select();
        foreach ($members as $m) {
            $members_list[$m['uid']] = $m['username'];
        }
        $this->assign('members_list', $members_list);
        $this->meta_title = '充值记录';
        $this->display();

    }

    //新增充值
    public final function to_recharge()
    {
        if (IS_POST) {
            $this->user = session('user_auth');
            $uid = 0;
            if (I('user') == 1) {
                $uid = intval(I('uid'));
                if ($uid <= 0) $this->error('用户ID不正确');
            } else
                $uid = I('uid');

            $amount = floatval(I('amount'));
            //if($amount<=0) $this->error('充值金额不能为负值');

            $data = array(
                'amount' => $amount,
                'rechargeAmount' => $amount,
                'actionUid' => $this->user['uid'],
                'actionIP' => $this->ip(true),
                'actionTime' => time(),
                'rechargeTime' => time()
            );
            $info = I('info','充值');
            // 查找用户信息
            if (I('user') == 1) {
                $user = M('members')->where(array('uid' => $uid))->find();
            } else {
                $user = M('members')->where(array('username' => $uid))->find();
            }
            if (!$user) $this->error('用户不存在');

            // 开始事物处理
            $Model = new \Think\Model();
            $Model->startTrans();

            $data['uid'] = $user['uid'];
            $data['coin'] = $user['coin'];
            $data['fcoin'] = $user['fcoin'];
            $data['username'] = $user['username'];
            $data['info'] = I('info');
            $data['state'] = 9;
            $data['mBankId'] = 1;
            $data['rechargeId'] = date('YmdHis').mt_rand(10, 99);
           /* do {
                $data['rechargeId'] = mt_rand(100000, 999999);
            } while ($recharge = M('member_recharge')->where(array('rechargeId' => $data['rechargeId']))->find());*/
            $re = false;
            $dataId = -1;
            if($info == '活动赠送'){
                $re = true;
            }else{
                $dataId = M('member_recharge')->add($data);
                if($dataId){
                    $re = true;
                }
            }
            if ($re) {
                $return = $this->addCoin(array(
                    'uid' => $user['uid'],
                    'liqType' => 1,
                    'coin' => $amount,
                    'extfield0' => $dataId,
                    'extfield1' => $data['rechargeId'],
                    'info' => $info
                ));
                if ($return) {
                    //每天首次充值赠送

                    $Model->commit();//成功则提交
                    $this->addLog(3, $user['uid'], $amount);
                    $this->success('新增充值成功', U('business/recharge'));
                }

            }

            $Model->rollback();//不成功，则回滚
            $this->error('新增充值失败');

        } else {
            $this->display('recharge_modal');
        }
    }

    public final function del_recharge()
    {
        if (M('member_recharge')->where(array('id' => I('id', '', 'intval')))->save(array('isDelete' => 1)))
            $this->success('删除充值成功', U('business/recharge'));
        else
            $this->error('删除充值失败');
    }

    //到账处理
    public final function toOn_recharge()
    {
        if (IS_POST) {
            $this->user = session('user_auth');

            $data = M('member_recharge')->where(array('id' => I('id')))->find();
            if (!$data)
                $this->error('此充值id不存在');

            if ($data['state']) $this->error('充值已经到账，请不要重复确认');
            if ($data['isDelete']) $this->error('充值已经被删除');

            $user = M('members')->where(array('uid' => $data['uid']))->field('coin,fcoin')->find();
            if (!$user)
                $this->error('此充值用户不存在');

            // 开始事物处理
            $Model = new \Think\Model();
            $Model->startTrans();

            $para = I('post.');
            $MRecharge = M('member_recharge');


            $para = array_merge(array('id' => $para['id'], 'rechargeAmount' => $para['rechargeAmount'], 'state' => 1, 'info' => '手动确认', 'actionUid' => $this->user['uid'],
                'actionTime' => time(), 'rechargeTime' => time(), 'actionIP' => $this->ip(true), 'coin' => $user['coin'], 'fcoin' => $user['fcoin']));

            if ($MRecharge->save($para)) {
                $return = $this->addCoin(array(
                    'uid' => $data['uid'],
                    'coin' => $para['rechargeAmount'],
                    'liqType' => 1,
                    'extfield0' => $data['id'],
                    'extfield1' => $data['rechargeId'],
                    'info' => '充值'
                ));
                if ($return) {
                    //每天首次充值赠送

                    $Model->commit();//成功则提交
                    $this->addLog(2, $data['uid'], $para['rechargeAmount']);
                    $this->success('充值到账成功', U('business/recharge'));
                }
            }

            //dump($MRecharge->getLastSql());
            $Model->rollback();//不成功，则回滚
            $this->error('充值到账失败');

        } else {
            $this->display('rechargeOn_modal');
        }
    }

    //投注记录
    public final function betLog()
    {
        $map = array();

        //账号类型限制
        if (I('isTest') == 2) {
            $map['istest'] = ['EQ', 0];
        } elseif (I('isTest') == 3) {
            $map['istest'] = ['EQ', 1];
        }
        $this->assign('isTest', I('isTest'));

        // 账号限制
        if (I('username')) {
            $map['username'] = trim(I('username'));
        }

        //期号
        if (I('actionNo')) {
            $map['actionNo'] = I('actionNo');
        }

        //开奖状态
        if (I('lottery_status') == 2) {
            $map['lotteryNo'] = ['NEQ', ''];
        } elseif (I('lottery_status') == 3) {
            $map['lotteryNo'] = ['EQ', ''];
        }

        // 彩种限制
        if (I('type')) {
            $map['type'] = I('type');
        }

        // 单号限制
        if (I('wjorderId')) {
            $map['wjorderId'] = I('wjorderId');
        }

        // 时间限制
        if (I('fromTime') && I('toTime')) {
            $fromTime = strtotime(I('fromTime'));
            $toTime = strtotime(I('toTime')) + 24 * 3600;
            $map['actionTime'] = array('between', array($fromTime, $toTime));
        } elseif (I('fromTime')) {
            $fromTime = strtotime(I('fromTime'));
            $map['actionTime'] = array('egt', $fromTime);
        } elseif (I('toTime')) {
            $toTime = strtotime(I('toTime')) + 24 * 3600;
            $map['actionTime'] = array('elt', $toTime);
        } else {
            $map['actionTime'] = array('gt', strtotime('00:00'));
        }

        $pageIndex = I('p') > 0 ? I('p') : 1;
        if( isset($request['r']) ){
            $listRows = (int)I('r');
        }else{
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
        }
        $list = M('bets')->where($map)->order('id desc')->page($pageIndex,$listRows)->select();
        $total = M('bets')->where($map)->count();
        $total = $total > 0 ? $total : 0;
        if ($total > 1000){
            $total = 1000;
        }
        $request    =   (array)I('request.');
        $page       =   new \COM\Page($total, $listRows, $request);
        $p			=	$page->show();
        $this->assign('_list', $list);
        if ($total > $listRows){
            $this->assign('_page', $p? $p: '');
        }
//        $list = M('bets')->where($map)->order('id desc')->limit(1000)->select();
//        $this->recordList($list);

        $this->getTypes();
        $this->assign('types', $this->types);

        $this->getPlayeds();
        $this->assign('playeds', $this->playeds);

        $this->assign('type', I('type'));
        $this->assign('lottery_status', I('lottery_status'));

        $this->meta_title = '投注记录';
        $this->display();
    }

    //投注详单
    public final function betInfo()
    {
        $this->getTypes();
        $this->getPlayeds();
        $bet = M('bets')->where(array('id' => I('id')))->find();

        //if($bet['uid']!=$this->user['uid']) $this->error('这单子不是您的，您不能查看。');

        $this->assign('types', $this->types);
        $this->assign('playeds', $this->playeds);
        $this->assign('bet', $bet);
        $this->assign('user', $this->user);
        $this->display('Business/bet-info');
    }

    //充值详单
    public final function rechargeInfo()
    {
        $rechargeInfo = M('member_recharge')->where(array('id' => I('id')))->find();
        $bankInfo = M('member_bank')->where(array('uid' => $rechargeInfo['uid']))->find();
        $list = M('bank_list')->order('id')->select();

        $bankList = array();
        if ($list) foreach ($list as $var) {
            $bankList[$var['id']] = $var;
        }

        $this->assign('rechargeInfo', $rechargeInfo);
        $this->assign('bankInfo', $bankInfo);
        $this->assign('bankList', $bankList);

        $this->display('recharge-info');
    }

    //提现详单
    public final function cashInfo()
    {
        $cashInfo = M('member_cash')->where(array('id' => I('id')))->find();
        $bankInfo = M('member_bank')->where(array('uid' => $cashInfo['uid']))->find();
        $list = M('bank_list')->order('id')->select();

        $bankList = array();
        if ($list) foreach ($list as $var) {
            $bankList[$var['id']] = $var;
        }

        $this->assign('cashInfo', $cashInfo);
        $this->assign('bankInfo', $bankInfo);
        $this->assign('bankList', $bankList);

        $this->display('cash-info');
    }

    public final function del_cash()
    {
        if (M('member_cash')->where(array('id' => I('id', '', 'intval')))->save(array('isDelete' => 1)))
            $this->success('删除提现成功', U('business/cash'));
        else
            $this->error('删除提现失败');
    }

    //改单
    public final function updateBet()
    {
        if (IS_POST) {
            $bet = M('bets')->where(array('id' => I('id')))->find();
            if (!$bet) $this->error('单号不存在');

            $data['id'] = I('id');
            $data['actionData'] = I('actionData');

            if (M('bets')->save($data)) {
                //将投注记录写入文件
                $fp = fopen(__ROOT__ . "Record/record.txt", "a+");
                $tz_content = $bet['wjorderId'] . " 会员：" . $bet['username'] . " 投注内容：" . $bet['actionData'] . " 玩法：" . $bet['playedId'] . " 元角分：" . $bet['mode'] . " 倍数：" . $bet['beiShu'] . " 注数：" . $bet['actionNum'] . " 时间：" . date('m-d H:i:s', time()) . " " . $_SERVER['REMOTE_ADDR'] . "\r\n\r\n";
                $flag = fwrite($fp, $tz_content);
                if (!$flag) {
                    throw new Exception('创建投注记录文件失败');
                }
                fclose($fp);

                $this->addLog(18, $data['id'], $data['actionData']);
                $this->success('修改投注成功', U('business/betlog'));
            } else {
                $this->error('修改投注记录失败或未曾改动');
            }
        } else {
            $this->getTypes();
            $this->getPlayeds();
            $this->assign('types', $this->types);
            $this->assign('playeds', $this->playeds);

            $bet = M('bets')->where(array('id' => I('id')))->find();
            if (!$bet) $this->error('单号不存在');

            $this->assign('bet', $bet);
            $this->display('update-bet-info');
        }
    }

    //撤单
    public final function deleteBet()
    {
        if (!$data = M('bets')->where(array('id' => I('id')))->find()) $this->error('找不到定单或已经撤单。');
        if ($data['isDelete']) $this->error('这单子已经撤单过了。');
        if ($data['lotteryNo']) $this->error('已开奖投注不可撤单，可以进行删单操作');
        if ($data['qz_uid']) $this->error('单子已经被人抢庄，不能撤单');

        // 开始事物处理
        $Model = new \Think\Model();
        $Model->startTrans();

        $amount = $data['beiShu'] * $data['mode'] * $data['actionNum'] * (intval($data['fpEnable'] ? '2' : '1'));
        $amount = abs($amount);
        // 添加用户资金变更日志
        $return1 = $this->addCoin(array(
            'uid' => $data['uid'],
            'type' => $data['type'],
            'playedId' => $data['playedId'],
            'liqType' => 7,
            'info' => "撤单",
            'extfield0' => I('id'),
            'coin' => round($amount-$data['bonus'],4),
        ));

        // 更改定单为已经删除状态
        $return2 = M('bets')->where(array('id' => I('id')))->save(array('isDelete' => 1));
        if ($return1 && $return2) {
            //将投注记录写入文件
            /*$fp = fopen(__ROOT__ . "Record/record.txt", "a+");
            $tz_content = $data['wjorderId'] . " 撤单 " . date('m-d H:i:s', time()) . $_SERVER['REMOTE_ADDR'] . "\r\n\r\n";
            $flag = fwrite($fp, $tz_content);
            if (!$flag) {
                $Model->rollback();//不成功，则回滚
                $this->error('创建投注记录文件失败');
            }
            fclose($fp);*/

            $Model->commit();//成功则提交
            $this->addLog(181, $data['id'], '');
            $this->success('撤单成功');
        } else {
            $Model->rollback();//不成功，则回滚
            $this->error('撤单失败');
        }

    }

    //删单
    public final function deleteBetTrue()
    {
        $id = I('id');
        if (!$data = M('bets')->where(array('id' => $id))->find()) $this->error('找不到定单或已经删单。');
//        if(!$data['lotteryNo']) $this->error('只能删除已开奖单');

        // 开始事物处理
        $Model = new \Think\Model();
        $Model->startTrans();
        try{
            //删除账变
            M('coin_log')->where('extfield0='.$id)->delete();
            $now = strtotime(date('Y-m-d',time()));
        //更新账报
           $sql = "UPDATE  gygy_coin_log_report SET fanDianAmount=fanDianAmount-{$data['fanDianAmount']}, 
                  betAmount=betAmount-{$data['bets_money']}, zjAmount=zjAmount-{$data['bonus']},
                  zyk=zyk+{$data['bets_money']}-{$data['fanDianAmount']}-{$data['bonus']},coin=coin-{$data['fanDianAmount']}-{$data['bonus']}+{$data['bets_money']}
                   WHERE actionTime={$now} AND uid={$data['uid']}";
            $Model->query($sql);
            //改余额
            $sql = "UPDATE gygy_members SET coin = coin-{$data['fanDianAmount']}-{$data['bonus']}+{$data['bets_money']} WHERE uid={$data['uid']}";
            $Model->query($sql);
            //删除投注
            M('bets')->where(array('id' => $id))->delete();

            $Model->commit();//成功则提交
            $this->addLog(999, $data['id'], '删除');
            $this->success('删除成功');
        }catch (\Exception $e){
            $Model->rollback();//不成功，则回滚
            $this->error('删除失败');
        }

    }

    //账变记录
    public final function coinLog()
    {
        //dump($_POST);exit;

        $para = I('post.');

        if (!$para)
            $para = I('get.');
        // 用户限制
        if ($para['username']) {
            $username  = trim($para['username']);
            $member = M('members')->where(array('username'=>$username))->find();
            if(empty($member)){
                $this->display('coinlog');
                return;
            }
        }else{
            $this->display('coinlog');
            return;
        }

        // 账变类型限制
        if ($para['liqType']) {
            $liqTypeWhere = " and l.liqType={$para['liqType']}";
            if ($para['liqType'] == 2) $liqTypeWhere = ' and liqType=2 or liqType=3';
        }

        // 彩种限制
        if ($para['type']) {
            $typeWhere = " and l.type={$para['type']}";
        }

        // 时间限制
        if($para['fromTime']){
            $fromTime = strtotime($para['fromTime']);
            $toTime = strtotime($para['fromTime']) +  24 * 3600;
            $timeWhere = " l.actionTime between $fromTime and $toTime";
        }else{
            $this->display('coinlog');
            return;
        }

        //金额限制
        $min_money = $para['min_money'];
        $max_money = $para['max_money'];
        $money_where = '';
        if(!empty($min_money)&&!empty($max_money)){
            $money_where = " and l.coin between ".abs($min_money)." and ".abs($max_money);
        }else if($min_money){
            $money_where = " and l.coin >= ".abs($min_money);
        }else if($max_money){
            $money_where = " and l.coin <= ".abs($max_money);
        }
        //$Model = M('coin_log');
        $Model = new \Think\Model();
        //dump($Model);
       /* $list = $Model
            ->join('gygy_members ON gygy_coin_log.uid = gygy_members.uid')
            ->where('1=1' . $timeWhere . $liqTypeWhere . $typeWhere . $userWhere)
            ->field('gygy_coin_log.*,gygy_members.username')
            ->order('gygy_coin_log.id desc');*/

        //$list = M()->table('__COIN_LOG__ l,__MEMBERS__ u')->where('l.uid=u.uid '. $timeWhere. $liqTypeWhere. $typeWhere. $userWhere)->order('l.id desc')->field('l.*,u.username')->select();

        $pageIndex = I('p') > 0 ? I('p') : 1;
        if( isset($request['r']) ){
            $listRows = (int)I('r');
        }else{
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
        }
        $list = $Model->table('__COIN_LOG__ l')
            ->where($timeWhere. $liqTypeWhere. $typeWhere.$money_where)
            ->where(array('l.uid'=>$member['uid']))
            ->order('l.id desc')
            ->page($pageIndex,$listRows)
            ->select();
        foreach($list as $item=>$sub){
            $list[$item]['username'] = $member['username'];
        }

        $total = $Model->table('__COIN_LOG__ l')
            ->where( $timeWhere. $liqTypeWhere. $typeWhere.$money_where)
            ->where(array('l.uid'=>$member['uid']))
            ->count();

        $total = $total > 0 ? $total : 0;
        if ($total > 10000){
            $total = 10000;
        }
        $request    =   (array)I('request.');
        $page       =   new \COM\Page($total, $listRows, $request);
        $p			=	$page->show();
        $this->assign('_list', $list);
        if ($total > $listRows){
            $this->assign('_page', $p? $p: '');
        }

        $this->getTypes();
        $this->assign('types', $this->types);

        $this->getPlayeds();
        $this->assign('playeds', $this->playeds);

        $this->assign('liqType',$para['liqType']);

        $this->meta_title = '账变记录';
        $this->display('coinlog');
    }

    public final function getTip_cash()
    {
        if ($data = M('member_cash')->where(array('state' => 1, 'isDelete' => 0, 'actionTime' => array('gt', strtotime(' 00:00:00'))))->field('id,flag')->select()) {

            $isDialog = false;
            foreach ($data as $d) {
                if ($d['flag'] == 0)
                    $isDialog = true;
            }

            M('member_cash')->where(array('flag' => 0))->save(array('flag' => 1));

            $return = array(
                'flag' => true,
                'isDialog' => $isDialog,
                'message' => '有新的提现请求需要处理',
                'buttons' => '前往处理:goToDealWithCash|忽略:defaultCloseModal'
            );

            $this->ajaxReturn($return, 'JSON');
        }

    }

    public final function getTip_recharge()
    {
        if ($data = M('member_recharge')->where(array('state' => 0, 'isDelete' => 0, 'actionTime' => array('gt', strtotime(' 00:00:00'))))->field('id,flag')->select()) {

            // if($cookie=$_COOKIE['recharge-tip']){
            // $cookie=explode(',',$cookie);
            // if(!array_diff($data, $cookie)) {
            // $return = array(
            // 'flag'=>false,
            // );
            // $this->ajaxReturn($return,'JSON');
            // }
            // }

            // $data=implode(',', $data);
            // if($data) setcookie('recharge-tip', $data);

            $isDialog = false;
            foreach ($data as $d) {
                if ($d['flag'] == 0)
                    $isDialog = true;
            }

            M('member_recharge')->where(array('flag' => 0))->save(array('flag' => 1));

            $return = array(
                'flag' => true,
                'isDialog' => $isDialog,
                'message' => '有新的充值请求需要处理',
                'buttons' => '前往处理:goToDealWithRec|忽略:defaultCloseModal'
            );


        }else{
            $return = array(
                'flag' => false,
            );
        }

        $this->ajaxReturn($return, 'JSON');
    }

    public function withdrawCount()
    {
        $startTime = strtotime(date("Ymd 0:0:0"));
        $cnt = M('member_cash')->where('actionTime>' . $startTime . ' and state=1')->getField('count(*)');

        $this->ajaxReturn($cnt, 'JSON');
    }

    // 批量撤单
    public function cancelBets()
    {
        $type = I('type');
        $lotteryStatus = I('lottery_status');
        $actionNo = I('action_no');
        if (!$type) {
            $data = [
                'result' => false,
                'msg' => '请先选择彩种'
            ];

            $this->ajaxReturn($data, 'JSON');
        }
        if (!$lotteryStatus) {
            $data = [
                'result' => false,
                'msg' => '请先选择开奖状态'
            ];

            $this->ajaxReturn($data, 'JSON');
        }
        if (!$actionNo) {
            $data = [
                'result' => false,
                'msg' => '请先输入期号'
            ];

            $this->ajaxReturn($data, 'JSON');
        }

        $map = array();

        //期号
        if ($actionNo) {
            $map['actionNo'] = $actionNo;
        }

        //开奖状态
        if ($lotteryStatus == 2) {
            $map['lotteryNo'] = ['NEQ', ''];
        } elseif ($lotteryStatus == 3) {
            $map['lotteryNo'] = ['EQ', ''];
        }

        // 彩种限制
        if ($type) {
            $map['type'] = $type;
        }
        $map['isDelete'] = ['NEQ', 1];
        $list = M('bets')->where($map)->order('id desc')->select();
        if (!$list) {
            $data = [
                'result' => false,
                'msg' => '没有投注记录'
            ];

            $this->ajaxReturn($data, 'JSON');
        }

        // 开始事物处理
        $Model = new \Think\Model();
        $Model->startTrans();
        foreach ($list as $value) {
            if (!$value) {
                $data = [
                    'result' => false,
                    'msg' => '找不到定单'
                ];
                $this->ajaxReturn($data, 'JSON');
            }
            if ($value['isDelete']) {
                continue;
            }

            $amount = $value['beiShu'] * $value['mode'] * $value['actionNum'] * (intval($value['fpEnable'] ? '2' : '1'));
            $amount = abs($amount);
            // 添加用户资金变更日志
            $return1 = $this->addCoin(array(
                'uid' => $value['uid'],
                'type' => $value['type'],
                'playedId' => $value['playedId'],
                'liqType' => 7,
                'info' => "未开奖撤单",
                'extfield0' => $value['id'],
                'coin' => $amount,
            ));

            // 更改定单为已经删除状态
            $return2 = M('bets')->where(array('id' => $value['id']))->save(array('isDelete' => 1));
            if ($return1 && $return2) {
                //将投注记录写入文件
                $fp = fopen(__ROOT__ . "Record/record.txt", "a+");
                $tz_content = $value['wjorderId'] . " 撤单 " . date('m-d H:i:s', time()) . $_SERVER['REMOTE_ADDR'] . "\r\n\r\n";
                $flag = fwrite($fp, $tz_content);
                if (!$flag) {
                    $Model->rollback();//不成功，则回滚
                    $data = [
                        'result' => false,
                        'msg' => '创建投注记录文件失败'
                    ];
                    $this->ajaxReturn($data, 'JSON');
                }
                fclose($fp);

                $this->addLog(181, $value['id'], '');
            } else {
                $Model->rollback();//不成功，则回滚
                $data = [
                    'result' => false,
                    'msg' => '撤单失败'
                ];
                $this->ajaxReturn($data, 'JSON');
            }
        }

        $Model->commit();//成功则提交
        $data = [
            'result' => true,
            'msg' => '撤单成功'
        ];
        $this->ajaxReturn($data, 'JSON');
    }

    //大额投注记录
    public final function bigBetLog()
    {
        $map = array();
        // 账号限制
        if(I('username')){
            $username = trim(I('username'));
            $member = M('members')->where(array('username'=>$username))->find();
            if(!empty($member)){
                $map['uid'] = $member['uid'];
            }
        }
        /*
        //期号
        if(I('actionNo')){
            $map['actionNo']=I('actionNo');
        }
        */

        //账号类型限制
        if (I('isTest') == 3) {
            $map['istest'] = ['EQ', 1];
        } else{
            $map['istest'] = ['EQ', 0];
        }
        $this->assign('isTest', I('isTest'));

        //开奖状态
        if (I('lottery_status') == 2) {
            $map['lotteryNo'] = ['NEQ', ''];
        } elseif (I('lottery_status') == 3) {
            $map['lotteryNo'] = ['EQ', ''];
        }

        // 彩种限制
        if (I('type')) {
            $map['type'] = I('type');
        }

        /*// 单号限制
        if(I('wjorderId')){
            $map['wjorderId']=I('wjorderId');
        }*/

        // 时间限制
        if (I('fromTime')) {
            $fromTime = strtotime(I('fromTime'));
            $toTime = strtotime(I('fromTime')) + 86399;
            $map['actionTime'] = array('between', array($fromTime, $toTime));
        } else {
            $map['actionTime'] = array('gt', strtotime('00:00'));
        }

        // 投注金额限制
        if (I('minAmount') && I('maxAmount')) {
            $minAmount = floatval(I('minAmount'));
            $maxAmount = floatval(I('maxAmount'));
            $whereStr = "bets_money between $minAmount and $maxAmount";
        } elseif (I('minAmount')) {
            $minAmount = floatval(I('minAmount'));
            $whereStr = "bets_money >= $minAmount";
        } elseif (I('maxAmount')) {
            $maxAmount = floatval(I('maxAmount'));
            $whereStr = "bets_money <= $maxAmount";
        } else {
            $whereStr = "bets_money >= 1000";
        }

        $pageIndex = I('p') > 0 ? I('p') : 1;
        if( isset($request['r']) ){
            $listRows = (int)I('r');
        }else{
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
        }

        $list = M('bets')->where($map)->where($whereStr)->order('actionTime desc')->page($pageIndex,$listRows)->select();
        $total = M('bets')->where($map)->where($whereStr)->count();

        $total = $total > 0 ? $total : 0;
        $request    =   (array)I('request.');
        $page       =   new \COM\Page($total, $listRows, $request);
        $p			=	$page->show();
        $this->assign('_list', $list);
        if ($total > $listRows){
            $this->assign('_page', $p? $p: '');
        }
//        $this->recordList($list);

        $this->getTypes();
        $this->assign('types', $this->types);

        $this->getPlayeds();
        $this->assign('playeds', $this->playeds);

        $this->assign('type', I('type'));
        $this->assign('lottery_status', I('lottery_status'));

        $this->meta_title = '大额投注记录';
        $this->display();
    }

    public function coinReport(){
        $fromTime = strtotime(I('fromTime'));
        $toTime = strtotime(I('toTime'));
        $username = trim(I('username'));

        if(IS_POST||($fromTime&&$toTime)){
            if(empty($fromTime)||empty($toTime)){
                $this->error('请选择时间');
            }else if($toTime-$fromTime>31*86400){
                $this->error('时间区间不能大于31天');
            }else if(empty($username)){
                $this->error('请输入用户名');
            }
            $map = array(
                'actionTime'=>array('between',array($fromTime,$toTime)),
                'istest'=>0
            );
            $m = M('members')->where(array('username'=>$username))->find();
            if(!empty($username)&&empty($m)){
                $this->display();
                return;
            }else if(!empty($username)&&!empty($m)){
                $map['uid'] = $m['uid'];
            }
            $pageIndex = I('p') > 0 ? I('p') : 1;
            if( isset($request['r']) ){
                $listRows = (int)I('r');
            }else{
                $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
            }
//            $map1['uid'] = array('not in','1480,1481,1492,1837,1838,1840,1841,1842,1482,1483,1484,1485,1486,1487,1490,1491,1617,1608,1609,1610,1611,1612,1613,1614,1615,1616');                                                                                                    //排除账户号
            $list = M('coin_log_report')->where($map)->page($pageIndex,$listRows)->order('actionTime desc')->select();
            $total = M('coin_log_report')->where($map)->count();
            $total = $total > 0 ? $total : 0;
            $request    =   (array)I('request.');
            $page       =   new \COM\Page($total, $listRows, $request);
            $p			=	$page->show();
            $this->assign('_list', $list);
            if ($total > $listRows){
                $this->assign('_page', $p? $p: '');
            }
            $col = array(
                'sum_rechargeAmount'=>0,
                'cashAmount'=>0,
                'betAmount'=>0,
                'zjAmount'=>0,
                'fanDianAmount'=>0,
                'brokerageAmount'=>0,
                'zyk'=>0,
            );
            foreach($list as $item=>$sub){
                $col['sum_rechargeAmount'] += $sub['rechargeAmount'];
//                $col['sum_cashAmount'] += $sub['cashAmount'];
                $col['sum_betAmount']+=$sub['betAmount'];
                $col['sum_zjAmount']+=$sub['zjAmount'];
                $col['sum_fanDianAmount']+=$sub['fanDianAmount'];
                $col['sum_brokerageAmount']+=$sub['brokerageAmount'];
                $col['sum_zyk']+=$sub['zyk'];
            }
            $this->assign('col',$col);
            $this->assign('_list',$list);
        }else{
            $this->moveReport();
        }
        $this->display();
    }

    //移动数据
    public function moveReport()
    {
        $Model = new \Think\Model();
        $time = strtotime(date('Ymd',time()).' - 34 day');
        $sql = 'Insert into gygy_coin_log_report_hist(id, actionTime, uid, username, istest, coin, rechargeAmount, cashAmount, betAmount, zjAmount, fanDianAmount, brokerageAmount, zyk) 
select id, actionTime, uid, username, istest, coin, rechargeAmount, cashAmount, betAmount, zjAmount, fanDianAmount, brokerageAmount, zyk from gygy_coin_log_report 
WHERE actionTime < '.$time;
        if ($Model->execute($sql) === false){
//            return false;
        }else{
            $sql = 'DELETE FROM gygy_coin_log_report WHERE actionTime < '.$time;
            $Model->execute($sql);
//            return true;
        }
    }

    public function coinReportHist(){
        $fromTime = strtotime(I('fromTime'));
        $toTime = strtotime(I('toTime'));
        $username = trim(I('username'));
        if(IS_POST||($fromTime&&$toTime)){
            if(empty($fromTime)||empty($toTime)){
                $this->error('请选择时间');
            }else if($toTime-$fromTime>31*86400){
                $this->error('时间区间不能大于31天');
            }else if(empty($username)){
                $this->error('请输入用户名');
            }
            $map = array(
                'actionTime'=>array('between',array($fromTime,$toTime)),
                'istest'=>0
            );
            $m = M('members')->where(array('username'=>$username))->find();
            if(!empty($username)&&empty($m)){
                $this->display();
                return;
            }else if(!empty($username)&&!empty($m)){
                $map['uid'] = $m['uid'];
            }
            $pageIndex = I('p') > 0 ? I('p') : 1;
            if( isset($request['r']) ){
                $listRows = (int)I('r');
            }else{
                $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
            }
//            $map1['uid'] = array('not in','1480,1481,1492,1837,1838,1840,1841,1842,1482,1483,1484,1485,1486,1487,1490,1491,1617,1608,1609,1610,1611,1612,1613,1614,1615,1616');                                                                                                    //排除账户号
            $list = M('coin_log_report_hist')->where($map)->page($pageIndex,$listRows)->order('actionTime desc')->select();
            $total = M('coin_log_report_hist')->where($map)->count();
            $total = $total > 0 ? $total : 0;
            $request    =   (array)I('request.');
            $page       =   new \COM\Page($total, $listRows, $request);
            $p			=	$page->show();
            $this->assign('_list', $list);
            if ($total > $listRows){
                $this->assign('_page', $p? $p: '');
            }
            $col = array(
                'sum_rechargeAmount'=>0,
                'cashAmount'=>0,
                'betAmount'=>0,
                'zjAmount'=>0,
                'fanDianAmount'=>0,
                'brokerageAmount'=>0,
                'zyk'=>0,
            );
            foreach($list as $item=>$sub){
                $col['sum_rechargeAmount'] += $sub['rechargeAmount'];
//                $col['sum_cashAmount'] += $sub['cashAmount'];
                $col['sum_betAmount']+=$sub['betAmount'];
                $col['sum_zjAmount']+=$sub['zjAmount'];
                $col['sum_fanDianAmount']+=$sub['fanDianAmount'];
                $col['sum_brokerageAmount']+=$sub['brokerageAmount'];
                $col['sum_zyk']+=$sub['zyk'];
            }
            $this->assign('col',$col);
            $this->assign('_list',$list);
        }
        $this->display();
    }

    public function activityLog(){
        $para = I('post.');

        if (!$para)
            $para = I('get.');

        // 用户限制
        $userWhere = '1=1';
        if ($para['username']) {
            $_username = trim($para['username']);
            $userWhere = "1=1 and m.username like '%{$_username}%'";
        }

        // 类型限制
        $typeWhere = '';
        if ($para['type']) {
            $_type = trim($para['type']);
            $typeWhere = " and al.type = {$_type}";
        }

        // 时间限制
        if ($para['fromTime'] && $para['toTime']) {
            $fromTime = strtotime($para['fromTime']);
            $toTime = strtotime($para['toTime']) + 24 * 3600;
            $timeWhere = " and al.created_at between $fromTime and $toTime";
        } elseif ($para['fromTime']) {
            $fromTime = strtotime($para['fromTime']);
            $timeWhere = " and al.actionTime>=$fromTime";
        } elseif ($para['toTime']) {
            $toTime = strtotime($para['toTime']) + 24 * 3600;
            $timeWhere = " and al.created_at<$toTime";
        } else {
            $timeWhere = ' and al.created_at>' . strtotime(' 00:00:00');
        }

        $pageIndex = I('p') > 0 ? I('p') : 1;
        if( isset($request['r']) ){
            $listRows = (int)I('r');
        }else{
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
        }

        $Model = new \Think\Model();
        $list = $Model->table('__ACTIVITY_LOG__ al')
            ->join('__MEMBERS__ m ON al.uid = m.uid')
            ->where($userWhere . $typeWhere . $timeWhere)
            ->order('al.id desc')
            ->page($pageIndex,$listRows)
            ->select();
        $total = $Model->table('__ACTIVITY_LOG__ al')
            ->join('__MEMBERS__ m ON al.uid = m.uid')
            ->where($userWhere . $timeWhere)
            ->count();

        $request    =   (array)I('request.');
        $page       =   new \COM\Page($total, $listRows, $request);
        $p          =   $page->show();
        $this->assign('_list', $list);
        if ($total > $listRows){
            $this->assign('_page', $p? $p: '');
        }

        $this->meta_title = '活动记录';
        $this->display();
    }

    public function betsCount()
    {
        $now = time();
        $startTime = $now-60;
        $cnt = M('bets')->where('istest=0 and actionTime>=' . $startTime .' and actionTime<='.$now)->getField('MAX(bets_money) bets_money');
        $daetouzhu = M('params')->where('id=169')->getField('value');
        $betmoney = $cnt?$cnt:0;
        if($betmoney<$daetouzhu){
            $betmoney = 0;
        }
        $this->ajaxReturn($betmoney, 'JSON');
    }
}
