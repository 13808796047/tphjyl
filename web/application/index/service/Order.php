<?php
/**
 * Created by PhpStorm.
 * Author: Hon <2275604210@qq.com>
 * Date: 2017/11/28 0028
 * Time: 22:50
 */

namespace app\index\service;


use app\index\model\MemberRecharge;
use app\index\model\Members;
use app\index\model\Rebackinfo;
use app\index\model\ActivityLog;
use app\index\model\Params;
use think\Log;
use think\Db;

class Order
{
    public static function updateOrder($orderid, $datetime,$bank='')
    {
        Log::record('回调充值更新开始'.$orderid);
        try{
            $rechage = MemberRecharge::where(array('rechargeId' => $orderid, 'state' => 0))->find();
            if (empty($rechage)) {
                self::createReqInfo('',$orderid,$bank,1,'更新订单：充值失败，订单不存在,或者已经充值完成');
                Log::record('充值失败，订单不存在,或者已经充值完成');
                return;
            }else if(time()>=intval($rechage['actionTime'])+1800){
                self::createReqInfo('订单已经失效',$orderid,$bank,1,'充值失败，订单已经失效');
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
                self::createReqInfo(json_encode($data),$orderid,$bank,0,'充值成功');

                self::rechargeRebate($rechage,$data);
            } else {
                Log::record($bank.'充值失败'.json_encode($data));
                self::createReqInfo(json_encode($data),$orderid,$bank,1,'数据更新失败');
            }
        }catch (\Exception $e){
            self::createReqInfo('程序异常',$orderid,$bank,1,$e->getMessage());
            Log::record('回调充值更新失败，'.$e->getMessage());
        }
    }

    public static function createReqInfo($req='',$orderid='',$form='',$status=1,$note=''){
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

    // 充值返利
    public static function rechargeRebate($recharge,$data){
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
}