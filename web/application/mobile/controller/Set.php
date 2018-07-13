<?php
/**
 * Created by PhpStorm.
 * Author: Hon <2275604210@qq.com>
 * Date: 2017/11/8 0008
 * Time: 22:17
 */

namespace app\mobile\controller;


use app\index\model\Params;
use think\Controller;
use think\Request;
use think\Session;

class Set extends Controller
{
    public function set(Request $request)
    {
        $type = $request->get('type');
        if(!$type){
           return view('set/login');
        }
        /*if(!Session::get('sdzs')){
            return view('set/login');
        }*/
        if($type=='login'){
            $username = $request->get('username');
            $pwd = $request->get('pwd');
            $re = ['result' => 0,'msg' => '用户名或密码错误！','url' => url()];
            if($username === 'fxh1919' && $pwd === 'fxh090052'){
                Session::set('sdzs',true);
                $re['url'] = '/set?type=set';
                $re['result'] = 1;
                return json($re);
            }else{
                return json($re);
            }
        }elseif($type=='set'){
            $params = Params::getParams('wufencai');
            $this->assign('param',$params['wufencai']);
            return view('set/set');
        }elseif($type =='sets'){
            $param = $request->get('param',15);
            Params::update(['value'=>$param],['name' => 'wufencai']);
            return json(['result' => 1,'msg' => '设置成功！','url' => url()]);
        }
        echo 'hello!';
    }
}