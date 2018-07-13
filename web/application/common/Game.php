<?php
/**
 * Created by PhpStorm.
 * FUCK
 * Date: 2017/9/18 0018
 * Time: 21:41
 */

namespace app\common;


use app\index\model\DataTime;
use app\index\model\Type;

class Game
{
    public $type = 0;
    public $typeArr = null;
    public $time = 0;
    public  $before_stop_time = 6; //提前3秒关停
    public  $stop_time = 30; //提前30秒关停

    public function __construct($type,$time=null)
    {
        $this->type = $type;
        $this->typeArr = Type::getType($type);
        if($time){
            $this->time = $time;
        }
    }

    public function getGameLastNo($time = null)
    {
        if ($time === null) {
            $time = time();
        }

        $kjTime = $this->getTypeFtime();
        $time  = date('H:i:s', $time + $kjTime);
        //$sql="select actionNo, actionTime from {$this->prename}data_time where type=$type and actionTime<='".$atime."' order by actionTime desc limit 1";
        /*$return = DataTime::where(array('type' => $type, 'actionTime' => array('elt', $atime)))->order('actionTime desc')->limit(1)->find();
        if (!$return) {
            //$sql="select actionNo, actionTime from {$this->prename}data_time where type=$type order by actionNo desc limit 1";
            $return = DataTime::where(array('type' => $type))->order('actionNo desc')->limit(1)->find();
            $time   = $time - 24 * 3600;
        }*/
        $return = DataTime::getDataTime($this->type,$time);
        $fun = @$this->typeArr['onGetNoed'];
        if (method_exists($this, $fun)) {
            $this->$fun($return['actionNo'], $return['actionTime'], $time);
        }
        return $return;
    }

    //获取延迟时间
    public function getTypeFtime()
    {
        $Ftime = 0;
        if ($this->typeArr) {
            $Ftime = $this->typeArr['data_ftime'];
        }
        return intval($Ftime);
    }


    /**
     * 读取将要开奖期号
     *
     * @params $type        彩种ID
     * @params $time        时间，如果没有，当默认当前时间
     * @params $flag        如果为true，则返回最近过去的一期（一般是最近开奖的一期），如果为flase，则是将要开奖的一期
     */
    protected function getGameNo($time = null)
    {

        if ($time === null) {
            $time = $this->time;
        }
        $kjTime = $this->getTypeFtime();
        $time  = date('H:i:s', $time + $kjTime);

        $return = DataTime::getDataTime($this->type,$time);

        $fun = @$this->typeArr['onGetNoed'];
        if (method_exists($this, $fun)) {
            $this->$fun($return['actionNo'], $return['actionTime'], $time);
        }
        return $return;
    }

    public function getGameActionTime($old = 0)
    {
        $actionNo = $this->getGameNo();
        if ($this->type == 1 && $actionNo['actionTime'] == '00:00') {
            $actionTime = strtotime($actionNo['actionTime']) + 24 * 3600;
        } else {
            $actionTime = strtotime($actionNo['actionTime']);
        }

        if (!$actionTime) {
            $actionTime = $old;
        }
        // 提前截止开奖数组  重庆时时彩，天津时时彩，新疆时时彩，广东11选5，江西11选5，北京快乐8，和北京PK10
        $actionTime = $this->get2difftime($actionTime);
        $actionTime = $actionTime < 0 ? 0 : $actionTime;
        return $actionTime;
    }

    public function get2difftime($diffTime)
    {
        $type_arr = array(1,3,12,6,16,20,24);
        if(in_array($this->type,$type_arr)){
            $diffTime = $diffTime-$this->stop_time; // 提前 60秒 封停投注
        }
        return $diffTime;
    }

}