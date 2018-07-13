<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;


use think\Model;

class Content extends Model
{
    protected $pk = 'id';

    public function getNotice(){
        return Content::limit(5)->order('addTime desc')->select();
    }
}