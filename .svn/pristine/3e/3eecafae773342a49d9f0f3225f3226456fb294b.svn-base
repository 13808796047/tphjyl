<?php
/**
 * Created by PhpStorm.
 * FUCK
 * Date: 2017/9/12 0012
 * Time: 23:17
 */

namespace app\index\service;
use app\common\Common;
use app\index\model\Data;
use app\index\model\DataTime;
use app\index\model\Params;
use app\index\model\Played;
use app\index\model\Type;
use think\Log;
use think\Session;

/**
 * 同步配置
 * Class dynamicConfig
 * @package app\index\service
 */
class dynamicConfig
{
    public static $tracemaxtimes = 120;

    public static $guoTypes = [
        1,16,44,6,9,10,20,43
    ];
    // 当前期号
    public static function numbers()
    {
        $number = "20170909-1305";
        return $number;
    }

    public static function gameNumbers($play_type,$num=10)
    {
        $numbers = array();
        try{
            $type = Type::where(array('id'=>$play_type))->find();
            if(empty($type)){
                return $numbers;
            }
            $me = new Common();
            $fun = $type['onGetNoed'];
            if($play_type == 9 || $play_type == 10){

                if (method_exists($me, $fun)) {
                    $actionNo = '';
                    $time = '';
                    $me->$fun($actionNo, $time);
                    $cur_numbers = array(
                        'number' => $actionNo,//20170909-1306
                        'issueCode' => str_replace('-', '10', $actionNo),//20170909101306
                        'time' => $time,//2017-09-09 12:54:25
                    );
                    array_push($numbers, $cur_numbers);
                }
            }else{
                $date_time = DataTime::where(array('type'=>$play_type,'actionTime'=>array('gt',date('H:i:s',time()))))->order('actionTime')->select();
                $today_f = date('Ymd',time());
                $today = date('Y-m-d',time());
                $time = strtotime($today_f);
                $idx = 0;
                foreach ($date_time as $item) {
                    $actionNo = $item['actionNo'];
                    $actionTime = $item['actionTime'];
                    if (method_exists($me, $fun)) {
                        $idx++;
                        if($idx>$num){
                            break;
                        }
                        $me->$fun($actionNo, $actionTime,$time, $type['data_ftime']);
                        $cur_numbers = array(
                            'number' => $actionNo,//20170909-1306
                            'issueCode' => str_replace('-','10',$actionNo),//20170909101306
                            'time' => $today .' '. $item['actionTime'],//2017-09-09 12:54:25
                        );
                        array_push($numbers,$cur_numbers);
                    }
                }
            }
        }catch (\Exception $e){
//            return $e->getMessage();
            Log::error($e->getFile().' L:'.$e->getLine().' msg:'.$e->getMessage());
            return $numbers;
        }

        return $numbers;
    }

    public static function issueCode($number)
    {
//        $number = "20170909-1606";
        $issueCode = str_replace('-','10',$number);
        return $issueCode;
    }

    public static function historyBall($type)
    {
        /*$history = [
             "1" => [
                "code" => "2 4 1 3 6",
                "issue" => "20170909-1304"
            ],
            "2" => [
                "code" => "7 7 6 8 3",
                "issue" => "20170909-1303"
            ],
            "3" => [
                "code" => "5 1 3 1 0",
                "issue" => "20170909-1302"
            ],
            "4" => [
                "code" => "2 5 9 7 8",
                "issue" => "20170909-1301"
            ],
            "5" => [
                "code" => "7 5 5 0 0",
                "issue" => "20170909-1300"
            ]
        ];*/
        $history = Data::getHistory($type);
        return $history;
    }

    public static function lastballsTrans($type,$lastballs='')
    {
        $type = Type::getType($type)['type'];
        $trans = [
            '1' => [
                "前三：组六",
                "中三：组六",
                "后三：组六"
            ],
            '2' => ["单双：2单3双", "中位：08"],
            '3' => ["组选：组六", "和值：15"],
            '6' => ["单双：5单5双", "中位：03"],
        ];
        if($lastballs&&$type==1){
            return self::sscTypeDesc($lastballs);
        }
        if($lastballs&&$type==2){
            return self::syxwTypeDesc($lastballs);
        }
        if($lastballs&&$type==3){
            return self::sdp3TypeDesc($lastballs);
        }
        if($lastballs&&$type==6){
            return array();
        }
        return isset($trans[$type]) ? $trans[$type] : [];
    }

    public static function sscTypeDesc($lastballs){
        //前三
        $str = substr($lastballs,0,5);
        $str_arr = explode(',',$str);
        $cur_arr = array();
        $trans = array();
        foreach ($str_arr as $item) {
            $cur_arr[$item] = $item;
            $trans[0] = "前三：".(count($cur_arr)==2?"组三":(count($cur_arr)==3?"组六":(count($cur_arr)==1?"豹子":"-")));
        }
        //中三
        $str = substr($lastballs,2,5);
        $str_arr = explode(',',$str);
        $cur_arr = array();
        foreach ($str_arr as $item) {
            $cur_arr[$item] = $item;
            $trans[1] = "中三：".(count($cur_arr)==2?"组三":(count($cur_arr)==3?"组六":(count($cur_arr)==1?"豹子":"-")));
        }
        //后三
        $str = substr($lastballs,4,5);
        $str_arr = explode(',',$str);
        $cur_arr = array();
        foreach ($str_arr as $item) {
            $cur_arr[$item] = $item;
            $trans[2] = "后三：".(count($cur_arr)==2?"组三":(count($cur_arr)==3?"组六":(count($cur_arr)==1?"豹子":"-")));
        }
        return $trans;
    }

    public static function syxwTypeDesc($lastballs){
        //单双
        $str_arr = explode(',',$lastballs);
        $trans = array();
        $idx = 0;
        $ds = 0;
        $ss = 0;
        sort($str_arr);
        foreach ($str_arr as $item) {
            if($item%2==0){
                $ss++;
            }else{
                $ds++;
            }
            $trans[0] = "单双：".$ds."单".$ss."双";
            if($idx==2){
                //中位
                $trans[1] = "中位：".$item;
            }
            $idx++;
        }
        return $trans;
    }

    public static function sdp3TypeDesc($lastballs){
        $str_arr = explode(',',$lastballs);
        $trans = array();
        $cur_arr = array();
        $hz = 0;
        foreach ($str_arr as $item) {
            $cur_arr[$item] = $item;
//            $trans[0] = "组选：".(count($cur_arr)==2?"组三":(count($cur_arr)==3?"组六":(count($cur_arr)==1?"豹子":"-")));
            $hz += $item;
        }
        $trans[] = "组选：".(count($cur_arr)==2?"组三":(count($cur_arr)==3?"组六":(count($cur_arr)==1?"豹子":"-")));
        $trans[] = '和值：'.$hz;
        return $trans;
    }

    // 最后一次开奖号（各彩种不一样）
    /*public static function lastballs()
    {
        $number = "0,3,9,6,8";
        return $number;
    }*/

    public static function isStop()
    {
        $isstop = 0;
        return $isstop;
    }

    // 最后一次开奖期号（各彩种不一样）
    /*public static function lastnumber()
    {
        $number = "20170909-1305";
        return $number;
    }*/

    public static function config($type=36)
    {
        $next_numbers = self::gameNumbers($type,120);
        $next_codes = "";
        $next_time = "";
        $gamenumbers = array();
        if(isset($next_numbers[0])){
            $next_codes = $next_numbers[0]['number'];
            $next_time = $next_numbers[0]['time'];
            unset($next_numbers[0]);
            $gamenumbers = $next_numbers;
        }
        $data['username'] = Session::get('userData')['username'];
        $data['isstop'] = self::isStop();
        $data['number'] = $next_codes;//即将开奖期
        $data['issueCode'] = self::issueCode($data['number']);
        $data['nowtime'] = date('Y/m/d H:i:s',time());//当前时间
        $data['nowstoptime'] = date('Y/m/d H:i:s',strtotime($next_time));//即将开奖时间
        /*$data['resulttime'] = "2017/09/09 12:53:55";
        $data['nowtime'] = "2017/09/09 12:53:55";
        $data['nowstoptime'] = "2017/09/09 12:53:55";*/

        $historyBall = self::historyBall($type);
        $data['lastnumber'] = empty($historyBall[0]['number']) ? '' : $historyBall[0]['number'];//上期开奖期号
        $data['lastballs'] = !isset($historyBall[0]['data']) ? '' : $historyBall[0]['data'];//上期开奖时间
        $data['resulttime'] = empty($historyBall[0]['datetime']) ? '' : $historyBall[0]['datetime'];//上期开奖号码
        if (count($historyBall) > 0){
            unset($historyBall[0]);
            $data['historyBall'] = $historyBall;
        }

        $data['lastballsTrans'] = self::lastballsTrans($type,$data['lastballs']);
        $data['tracemaxtimes'] = self::$tracemaxtimes;
        $data['gamenumbers'] = $gamenumbers;//未来开奖
        $data['ballInfo'] = null;
        $data['multiplemaxtimes'] = 100;
        $data['multipleToCnyFactor'] = 2;
        $return = $data;
        return $return;
    }

    public static function getCurUserPoint($typeId){
        $type = Type::where(array('id'=>$typeId))->find();
        if(empty($type)){
            return array();
        }else{
            $user = Session::get('userData');
            if(empty($user)){
                Log::record('没有登录');
                return array();
            }
            $point_arr = array();
            $fanDianMax = Params::getParams('fanDianMax')['fanDianMax'];
            $played = Played::where(array('type'=>$type['type']))->select();
            foreach ($played as $item) {
                if($type['is_official'] == 1){
                    $prop = $item['guo_prop'];
                    $propBase = $item['guo_prop_base'];
                }else{
                    $prop = $item['bonusProp'];
                    $propBase = $item['bonusPropBase'];
                }
                if($prop <= $propBase){
                    $point_arr[$item['id']] = array(
                        "hprize"=> number_format($prop, 2, '.', ''),
//                    "hprize"=> ($item['bonusProp']-$item['bonusPropBase'])/$fanDianMax*$user['fanDian'] + $item['bonusPropBase'],
                        "prize"=> number_format($propBase,2,'.',''),
                        "point"=>0
                    );
                }else{
                    $point_arr[$item['id']] = array(
                        "hprize"=> number_format(($prop-$propBase)/$fanDianMax*$user['fanDian'] + $propBase, 2, '.', ''),
//                    "hprize"=> ($item['bonusProp']-$item['bonusPropBase'])/$fanDianMax*$user['fanDian'] + $item['bonusPropBase'],
                        "prize"=> number_format($propBase,2,'.',''),
                        "point"=>$user['fanDian']
                    );
                }
              /*  if($user['fanDian'] > 0){
                    $point_arr[$item['id']] = array(
                        "hprize"=>$item['bonusProp'],
                        "prize"=>$item['bonusPropBase'],
                        "point"=>$user['fanDian']
                    );
                }else{
                    $point_arr[$item['id']] = array(
                        "hprize"=>$item['bonusPropBase'],
                        "prize"=>$item['bonusPropBase'],
                        "point"=>$user['fanDian']
                    );
                }*/
            }
            return $point_arr;
        }
    }
}