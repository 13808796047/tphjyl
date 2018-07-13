<?php
namespace app\common;
use app\index\model\AdminLog;
use app\index\model\BankList;
use app\index\model\DataTime;
use app\index\model\Type;
use think\Db;
use think\Session;

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/9 0009
 * Time: 18:36
 */
class Common{
    public $type = 0;
    public static $arr = array(
        '1'=>array('fileName'=>'ssc','fileTitle'=>'1时时彩'),
        '2'=>array('fileName'=>'syxw','fileTitle'=>'十一选五'),
        '3'=>array('fileName'=>'sdps','fileTitle'=>'3D/P3/时时乐'),
        '4'=>array('fileName'=>'lksf','fileTitle'=>'快乐十分'),
        '5'=>array('fileName'=>'gxklsf','fileTitle'=>'广西快乐十分'),
        '6'=>array('fileName'=>'pk10','fileTitle'=>'北京pk10'),
        '8'=>array('fileName'=>'bjkl8','fileTitle'=>'北京快乐8'),
        '9'=>array('fileName'=>'jsks','fileTitle'=>'江苏快3'),
        '10'=>array('fileName'=>'hjlf','fileTitle'=>'皇家龙凤'),
    );
    public $time = null;

    public function __construct()
    {
        $this->time = time();
    }

//重庆时时彩
    public function noHdCQSSC(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        /*if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
       /* }*/
    }

    //分分彩
    public function noHdFFC(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        /*if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-0120', $time);
            $actionTime = date('Y-m-d 00:00', $time);

        } else{*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
        /*}*/
    }

    //天津时时彩
    public function no0Hd(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
        // dump($actionNo);
    }

    //天津时时彩(new)
    public function no0HdTJSSC(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1001 + $actionNo, 1);
    }

    //广东11选5
    public function no0HdGDSYXW(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
    }

    //五分彩
    public function no0HdWFC(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
    }

    //新疆时时彩
    public function noxHd(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        if ($actionNo >= 84) {
            $time -= 24 * 3600;
        }
        $num = substr(100 + $actionNo, 1);
        if (mb_strlen($num) < 3) {
            $actionNo = date('Ymd-', $time) . '0' . $num;
        } else {
            $actionNo = date('Ymd-', $time) . $num;
        }
    }

    //新疆时时彩(new)
    public function noxHdXJSSC(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        if ($actionNo >= 84) {
            $time -= 24 * 3600;
        }
        $num = substr(100 + $actionNo, 1);
        if (mb_strlen($num) < 3) {
            $actionNo = date('Ymd-', $time) . '0' . $num;
        } else {
            $actionNo = date('Ymd-', $time) . $num;
        }
    }

    //福彩3D、排列三
    public function pai3(&$actionNo, &$actionTime, $time = null,$kjTime=0)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Yz', $time);

        $actionNo = substr($actionNo, 0, 4) . substr(substr($actionNo, 4) + 994, 1);

        if ($actionTime >= date('Y-m-d H:i:s', $time)) {

        } else {
//            $kjTime = $this->getTypeFtime($this->type);
            if (date('Y-m-d H:i:s', time() + $kjTime) < date('Y-m-d 19:30:00', time())) {
                $actionTime = date('Y-m-d 19:30', time() + 24 * 60 * 60);
            } else {
                $actionNo   = $actionNo + 1;
                $actionTime = date('Y-m-d 19:30', time() + 24 * 60 * 60);
            }
        }

    }

    //福彩3D
    public function FCSD(&$actionNo, &$actionTime, $time = null,$kjTime=0)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Yz', $time);
        $actionNo = substr($actionNo, 0, 4) . substr(substr($actionNo, 4) + 994, 1);

        if ($actionTime >= date('Y-m-d H:i:s', $time)) {

        } else {
//            $kjTime = $this->getTypeFtime($this->type);
            if (date('Y-m-d H:i:s', time() + $kjTime) < date('Y-m-d 19:30:00', time())) {
                $actionTime = date('Y-m-d 19:30', time() + 24 * 60 * 60);
            } else {
                $actionNo   = $actionNo + 1;
                $actionTime = date('Y-m-d 19:30', time() + 24 * 60 * 60);
            }
        }

    }

    //北京PK10

    public function BJpk10(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = 179 * (strtotime(date('Y-m-d', $time)) - strtotime('2007-11-11')) / 3600 / 24 + $actionNo - 3793-1253;

    }

    //北京快乐8
    public function Kuai8(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = 179 * (strtotime(date('Y-m-d', $time)) - strtotime('2004-09-19')) / 3600 / 24 + $actionNo - 3856;
    }

    // 韩国1.5分彩
    public function hgssc(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
       /* if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
        /*}*/
    }

    /**
     * 重庆11选5
     * @param $actionNo
     * @param $actionTime
     * @param null $time
     */
    public function Cqsyxw(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
    }

    /**
     * 山东11选5
     * @param $actionNo
     * @param $actionTime
     * @param null $time
     */
    public function Sdsyxw(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
    }

    /**
     * 江西11选5
     * @param $actionNo
     * @param $actionTime
     * @param null $time
     */
    public function Jxsyxw(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
    }

    //秒秒彩
    public function mmc(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
       /* if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time - 24 * 3600);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
       /* }*/
    }

    //极速3D
    public function js3d(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
       /* if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
        /*}*/
    }
    //东京1.5分彩
    public function jdssc(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
       /* if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time - 24 * 3600);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
        /*}*/
    }
    //台湾5分彩
    public function twwfc(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
        // dump($actionNo);
    }
    //30秒11选5
    public function scm(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
       /* if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time - 24 * 3600);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
       /* }*/
        // dump($actionNo);
    }
    //一分钟11选5
    public function yfz(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
      /*  if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time - 24 * 3600);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
        /*}*/
        // dump($actionNo);
    }
    //加拿大3.5分彩
    public function jnd(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
        // dump($actionNo);
    }
    //新德里1.5分彩
    public function xdl(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        /*if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time - 24 * 3600);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
        /*}*/
    }
    //腾讯分分彩
    public function txffc(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        /*if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time - 24 * 3600);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo-1, 1);
        /*}*/
    }
    public function setTimeNo(&$actionTime, &$time = null)
    {
        if (!$time) {
            $time = $this->time;
        }

        $actionTime = date('Y-m-d ', $time) . $actionTime;
    }
    /**
     * 广东快乐十分 no0Hd
     * @param $actionNo
     * @param $actionTime
     * @param null $time
     */
    public function Gdklsf(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
    }

    /**
     * 江苏快3
     * @param $actionNo
     * @param $actionTime
     * @param null $time
     */
    public function Jsks(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
    }

    /**
     * 二分彩
     * @param $actionNo
     * @param $actionTime
     * @param null $time
     */
    public function Efc(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
        $actionNo = date('Ymd-', $time) . substr(1000 + $actionNo, 1);
    }

    /**
     * [hjlf 皇家龙凤]
     * @param  [type] &$actionNo   [description]
     * @param  [type] &$actionTime [description]
     * @param  [type] $time        [description]
     * @return [type]              [description]
     */
    public function hjlf(&$actionNo, &$actionTime, $time = null)
    {
        $this->setTimeNo($actionTime, $time);
       /* if ($actionNo == 0 || $actionNo == 120) {
            //echo 999;
            $actionNo   = date('Ymd-120', $time - 24 * 3600);
            $actionTime = date('Y-m-d 00:00', $time);

        } else {*/
            $actionNo = date('Ymd-', $time) . substr(10000 + $actionNo, 1);
       /* }*/
    }

    //获取延迟时间
    public function getTypeFtime($typeArr)
    {
        $Ftime = 0;
        if ($typeArr) {
            $Ftime = $typeArr['data_ftime'];
        }
        return intval($Ftime);
    }

    public function bankLists(){
        return BankList::where(array('isDelete'=>0))->order('sort')->select();
    }

    public static function getFileInfoByTypeId($typeId){
        $type = Type::where(array('id'=>$typeId))->find();
        if(empty($type)){
            return array('fileName'=>'xx','fileTitle'=>'没有此玩法');
        }else{
            if(isset(self::$arr[$type['type']])){
                $file_info = self::$arr[$type['type']];
                $file_info['fileTitle'] = $type['title'];
                return $file_info;
            }else{
                return array('fileName'=>'xx','fileTitle'=>'没有此玩法');
            }
        }
    }

    /**
     * 用户资金变动
     *
     * 请在一个事务里使用
     */
    public function addCoin($log)
    {
        if (!isset($log['uid'])) {
            $user = Session::get('userData');
            $log['uid'] = $user['uid'];
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

    public function addLog($type, $extfield0 = 0, $extfield1 = '')
    {
        $user = Session::get('userData');
        $log = array(
            'uid' => $user['uid'],
            'username' => $user['username'],
            'type' => $type,
            'actionTime' => time(),
            'actionIP' => get_client_ip(1),
            'action' => '前台撤单',
            'extfield0' => $extfield0,
            'extfield1' => $extfield1
        );
        AdminLog::insert($log);
    }
}