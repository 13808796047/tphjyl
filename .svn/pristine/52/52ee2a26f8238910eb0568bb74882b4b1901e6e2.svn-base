<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/8/31 0031
 * Time: 0:30
 */

namespace app\index\behavior;


use app\index\model\MemberSession;
use think\Session;
use app\index\model\Members;

class CheckAuth
{
    public function appInit(&$params)
    {
        //如果手机打开，跳到手机站
        $request = request();
        $uri = str_replace(strstr($request->url(),'?'),'',$request->url());
        if($uri ==  '/account/dataEtl' || $uri == '/account/oneCheck')
        {
            return;
        }
        if(isset($_SERVER['HTTP_USER_AGENT'])){
            $agent = $_SERVER['HTTP_USER_AGENT'];
            if(str_replace(strstr($request->url(),'?'),'',$request->url()) != '/set'){
                if (strpos($agent, "comFront") || strpos($agent, "iPhone") || strpos($agent, "MIDP-2.0") || strpos($agent, "Opera Mini") || strpos($agent, "UCWEB") || strpos($agent, "Android") || strpos($agent, "Windows CE") || strpos($agent, "SymbianOS")) {
                    header('location: http://' . $_SERVER['HTTP_HOST'].':8081');
                    exit;
                }
            }
        }
        $except = [
            url('/login/login'),
            '/index.php/login/login',
            url('login/logout'),
            url('/captcha'),
            '/recharge/respond_notify',
            '/recharge/zf_server',
            '/recharge/zf_server1',
            '/recharge/gfb_callback',
            '/recharge/zesheng_server',
            '/recharge/payResult',
            '/recharge/zb_callback',
            '/recharge/jq_callback',
            '/getinfo',
            '/getcurno',
            '/rgz',
            '/game_play',
            '/getkj',
            '/account/dataEtl',
            '/account/oneCheck',
            '/set',
            '/getqq',
            '/gettxssc',
        ];
        $result = [
            'isSuccess'=>0,
            'type'=>'serverError',
            'data'=>[
                "tplData" => ["msg" =>"登录失效！",'url'  => url('login/login')]
            ],

            'code' => 0,
            'msg'  => '登录失效！',
            'data' => [],
            'url'  => url('login/login'),
            'wait' => 3,
        ];
       // dump(str_replace(strstr($request->url(),'?'),'',$request->url()));
        if(!in_array(str_replace(strstr($request->url(),'?'),'',$request->url()),$except)){

            if(!Session::get('isLogin')
                || !Session::get('userData')
                || Session::get('user_auth_sign2') != data_auth_sign($_SERVER['HTTP_USER_AGENT'])
                || !Session::get('userData.sessionId')){

                Session::set('user_auth_sign2', data_auth_sign($_SERVER['HTTP_USER_AGENT']));
                if($request->isAjax()){
                    $result['msg'] = '账户异常请联系管理员！';
                    echo json_encode($result);
                }else{
                    redirect('login/login')->send();
                }
                exit();
            }else{
                $memberInfo = Members::getMemberInfo(Session::get('userData.uid'));
                if(empty($memberInfo) || intval($memberInfo['isDelete'])==1 || intval($memberInfo['enable'])==0){
                    if($request->isAjax()){
                        echo json_encode($result);
                    }else{
                        redirect('login/login')->send();
                    }
                    exit();
                }
            }

            // 同一个用户登录踢出登录 begin
            $curMemberSession = MemberSession::where("id = '".Session::get('userData.sessionId')."'")->find();
            if ($curMemberSession && $curMemberSession['isOnLine'] != 1) {
//        if (!in_array(str_replace(strstr($request->url(),'?'),'',$request->url()),$except) && (!$curMemberSession  || @$curMemberSession['isOnLine'] != 1)) {
                Session::set('user', null);
                Session::set('user_auth_sign2', null);
                if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
                    exit();
                }
                Session::clear();
                Session::destroy();
                header('location: ' . '/login/login');
                return;
            }
            //  同一个用户登录踢出登录 end

        }

        MemberSession::where("id = '".Session::get('userData.sessionId')."'")->update(['accessTime' => time()]);
        $map['username'] = Session::get('userData.username');
        $user             = Members::where($map)->find();
        Session::set('userData.coin',$user['coin']);
    }
}