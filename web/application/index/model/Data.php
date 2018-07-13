<?php
/**
 * Created by PhpStorm.
 * FUCK
 * Date: 2017/9/23 0023
 * Time: 11:34
 */

namespace app\index\model;


use think\Model;

class Data extends Model
{
    protected $pk = 'id';

    public static function getHistory($type,$row=6,$sort='desc')
    {
        $history = self::where(array('type' => $type))
            ->order("time $sort,number $sort")
            ->limit($row)
            ->field('time,FROM_UNIXTIME(time,\'%Y/%m/%d %H:%i:%s\') as datetime,number as issue,data as code,number,data')
            ->select();
        if(empty($history)){
            return [];
        }

        foreach ($history as $key => $value){
//            $return[$key+1]['datetime'] = $value['datetime'];
//            $return[$key+1]['time'] = $value['time'];
//            $return[$key]['issue'] = $value['issue'];
            $history[$key]['code'] = str_replace(',',' ',$value['code']);
//            $return[$key+1]['number'] = $value['number'];
//            $return[$key+1]['data'] = $value['data'];
        }

        return $history;
    }

}