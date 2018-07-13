<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;


use think\Model;

class Type extends Model
{
    protected $pk = 'id';

    public static function getType($type)
    {
        return self::where('id',$type)->find();
    }

    public static function getLists($type)
    {
        return self::cache(true, 10 * 60, 'xcache')
            ->where(array('type'=>$type,'enable'=>1))
            ->order('sort')
            ->select();
    }
}