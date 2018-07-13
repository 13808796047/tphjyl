<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;


use think\Model;

class Members extends Model
{
    protected $pk = 'uid';

    public function getList($where,$page=1,$pageSize=10){
        return $this->where($where)->page($page,$pageSize)->select();
    }

    /**
     * 查询用户信息
     * @param $uid
     * @return array|false|\PDOStatement|string|Model
     */
    public static function getMemberInfo($uid)
    {
        $m = self::where(array('uid'=>$uid))->find();
        return $m;
    }
}