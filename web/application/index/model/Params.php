<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;


use think\Model;

class Params extends Model
{
    protected $pk = 'id';

    public static function getParams($name='')
    {
        $re = [];
        if($name){
            $data = self::where('name',$name)->select();
        }else{
            $data = self::select();
        }
        if($data){
            foreach ($data as $var) {
                $re[$var['name']] = $var['value'];
            }
        }
        return $re;
    }
}