<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Admin\Controller;
use Think\Db;

/**
 * 后台系统控制器
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */

class SystemController extends AdminController {

    public function index(){
        $this->display();
    }

    private function execCmd($cmd){
        exec($cmd,$out);
        print_r($out);
    }

    public function account_refresh()
    {

    }
}
