<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;


use think\Model;

class DataTime extends Model
{
    protected $pk = 'id';

    public static function getDataTime($type,&$time)
    {
        $return = self::cache(true, 10 * 60, 'xcache')->where(array('type' => $type, 'actionTime' => array('elt', $time)))->order('actionTime desc')->limit(1)->find();

        if (!$return) {
            $return = self::cache(true, 10 * 60, 'xcache')->where(array('type' => $type))->order('actionNo desc')->limit(1)->find();
            $time   = $time - 24 * 3600;
        }
        return $return;
    }
}