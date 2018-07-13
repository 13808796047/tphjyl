<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;


use think\Log;
use think\Model;

class Played extends Model
{
    protected $pk = 'id';
    protected static $playedLists = null;
    public static function getPlayed($id)
    {
        if(empty(self::$playedLists)){
            self::$playedLists = self::select();
//            self::$playedLists = self::where(['enable'=> 1])->select();
        }
        if(empty(self::$playedLists)){
            return [];
        }
        foreach (self::$playedLists as $item){
            if(intval($item['id']) === intval($id)){
                return $item;
            }
        }
        return [];
    }
}