<?php
/**
 * Created by PhpStorm.
 * FUCK
 * Date: 2017/9/23 0023
 * Time: 11:45
 */

namespace app\index\controller;


use app\index\model\Data;
use app\index\service\dynamicConfig;
use app\index\service\Http;
use think\Controller;
use think\Request;

class Test extends Controller
{
    public function test(Request $request)
    {
        dump(date('YmdHis').getUuidNum(11));
//        dump(Http::httpGet("https://gateway.gopay.com.cn/time.do",[]));
        exit();
        dump(uniqid());
        dump(date('YmdHis').rand(1000,9999));
        dump( substr(implode(NULL, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 11));
//        $data = dynamicConfig::config(36);
//        return json($data);
    }

}