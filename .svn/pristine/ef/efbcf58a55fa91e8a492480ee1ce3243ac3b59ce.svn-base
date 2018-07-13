<?php
/**
 * Created by PhpStorm.
 * FUCK
 * Date: 2017/10/14 0014
 * Time: 12:14
 */

namespace app\index\controller;


use app\index\model\Gongzi;
use app\index\model\Members;
use think\Controller;
use think\Db;
use think\Request;
use think\Validate;

class Rigongzi extends Controller
{
    private $base = 10000; //计算基数
    private $yxbase = 1000; // 有效计算取值
    public $request;
    public $date;

    /**
     * 日工资上线配置
     * @var array
     */
    public $gzMaxConf = [
        '200' => 2000,
        '190' => 1900,
        '180' => 1800,
        '170' => 1700,
        '160' => 1600,
        '150' => 1500,
        '140' => 1400,
        '130' => 1300,
        '120' => 1200,
        '110' => 1100,
        '100' => 1000,
        '90' => 900,
        '80' => 800,
        '70' => 700,
        '60' => 600,
        '50' => 500,
        '40' => 400,
        '30' => 300,
        '20' => 200,
        '10' => 100,
    ];
    /**
     * 日工资计算接口
     */
    public function jisuan(Request $request){
        header("Content-type:text/html;charset=utf-8");
        $rules = [
            'date'  => 'date',
        ];
        $validate = new Validate($rules);
        $data = $request->param();
        $re   = $validate->check($data);
        if(!$re){
            return json($validate->getError());
        }
        if(isset($data['date'])){
            $this->date = $data['date'];
        }else{
            $this->date = date('Y-m-d',time()-86400);
        }
        $members = $this->getRgzMembers();
        if(empty($members)){
            echo $this->date .':无符合日工资计算的会员/n/r';
            exit();
        }
        $rgz = [];
        foreach ($members as $member){
            $rgz[] = $this->calcRgz($member);
        }
        
        $re = Gongzi::insertAll($rgz);
        if($re){
            echo $this->date .':日工资计算成功！成功条数：'.$re.'/n/r';
        }else{
            echo $this->date .':日工资计算失败！/n/r';
        }
        exit();
    }

    //获取需要计算日工资的人员
    private function getRgzMembers()
    {
        $users = Members::where('type',1)->where('ri_gong_zi','>',0)->select();
        return $users;
    }

    private function calcRgz($member)
    {
        //所属周期
        $reData['username'] = $member['username'];
        $reData['uid'] = $member['uid'];
        $reData['biaozhun'] = $member['ri_gong_zi'];
        $reData['zx_biaozhun'] = 0;
        $now = strtotime($this->date);
        $end = date("Ymd",$now);
        $star = date("Ymd",$now);
        $reData['zhouqi'] = $star.'-'.$end;
        $end = strtotime(date("Y-m-d 23:59:59",$now));
        $star = strtotime(date("Y-m-d 00:00:00",$now));
        $sql = 'SELECT * FROM gygy_coin_log_report 
                WHERE uid IN ( SELECT uid FROM  gygy_members WHERE FIND_IN_SET('.$member['uid'].', parents))
                AND actionTime BETWEEN '.$star.' AND '.$end;
        $reports = Db::query($sql);
        $reData['tz_at'] = time();
        if(empty($reports)){
            $reData['touzhu_ren'] = 0; //投注总人数
            $reData['touzhu_ze'] = 0; //投注总额
            $reData['yx_touzhu_ren'] = 0; //有效投注人数
            $reData['d500'] = 0; // 大于500人数
            $reData['zonger'] = 0; // 工资总额
            $reData['zt'] = 1; //状态 1-未达标 2-未领取
            $reData['yxtze'] = 0;
        }else{
            $rs = [];
            $yxrs = [];
            $tze = 0;
            $yxtze = 0;
            $d500 = [];
            $ze = 0;
            $jsArr = [];
            foreach ($reports as $report){
                if(!in_array($report['uid'],$rs)){
                    $rs[] = $report['uid'];
                }
//                $tze += $report['betAmount'];
                if($report['betAmount'] >= $this->yxbase){
                    $tze += $report['betAmount'];
                    //大于1000 的只按1000的整数倍计算 如1100 只算1000  2200 只算2000
                    $yxtz = floor($report['betAmount']/$this->yxbase)*$this->yxbase;

                    $yxtze += $yxtz;
                    $report['betAmount'] = $yxtz;
//                    $ze += $this->JiSuanZongEr($member['uid'],$member['ri_gong_zi'],$report['uid'],$report['betAmount']);
                    $jsArr[] = $report;
                    if(!in_array($report['uid'],$yxrs)){
                        $yxrs[] = $report['uid'];
                    }
                    if(($report['betAmount']/$this->base)*$member['ri_gong_zi'] > 500){
                        if(!in_array($report['uid'],$d500)){
                            $d500[] = $report['uid'];
                        }
                    }
                }
            }
            $reData['touzhu_ren'] = count($rs); //投注总人数
            $reData['touzhu_ze'] = $tze; //投注总额
            $reData['yx_touzhu_ren'] = count($yxrs); //有效投注人数
            $reData['d500'] = count($d500); // 大于500人数
            $gz = $this->getRsXz($member['ri_gong_zi'],$reData['yx_touzhu_ren']);
            $reData['zx_biaozhun'] = $gz;
            if(!empty($jsArr)){
                if($reData['yx_touzhu_ren'] <1){
                    $ze = 0;
                }else{
                    foreach ($jsArr as $js){
                        $ze += $this->JiSuanZongEr($member['uid'],$gz,$js['uid'],$js['betAmount']);
                    }
                }
            }
            if($yxtze < $this->base){
                $ze = 0;
            }
            $reData['yxtze'] = $yxtze;
            $maxZonger = isset($this->gzMaxConf[$gz]) ? $this->gzMaxConf[$gz] : 0;
            $reData['zonger'] = $ze > $maxZonger ? $maxZonger : $ze; // 工资总额
            $reData['zt'] = $ze > 0 ? 2:1; //状态 1-未达标 2-未领取

        }
		ksort($reData);
        return $reData;
    }

    private function JiSuanZongEr($cuid,$rgz,$uid,$money){
        $user = Members::find($uid);
        if(empty($user)){
            return 0;
        }
        $parents = explode(',',$user['parents']);
        if(empty($parents)){
            return 0;
        }

        $puid = [];
        foreach ($parents as $k => $parent){
            if($parent > $cuid){
                $puid[] = $parent;
            }
        }
        $members = Members::whereIn('uid',$puid)->order('uid','asc')->select();
        foreach ($members as $k => $member){
            $rgz -= $member['ri_gong_zi'];
        }
        $money = $money/$this->base*$rgz;
        return $money > 0 ? $money : 0;
    }

    public function getRsXz($gz,$rs)
    {
        if($rs == 0) return 0;
        if($gz<= 120) {
            return $gz;
       /* }else if($gz >= 200){
            $s = 288;
        }else{
            $s =  pow(2,($gz-120)/10);
        }
        if($rs >= $s){
            return $gz;
        }
        if($gz <= 120){
            return $gz;
       */
        }else{
            $ss = 0;
            for ($i = $gz; $i>= 120 ; $i = $i-10){
                $ss = $i;
                if($i == 200 && $rs >= 288){
                    return $i;
                }
                if( $rs >= pow(2,($i-120)/10) ){
                    return $i;
                }
            }
        }

        return $ss;

    }

}