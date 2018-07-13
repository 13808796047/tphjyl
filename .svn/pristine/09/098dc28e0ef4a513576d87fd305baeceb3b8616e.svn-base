<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\Route;
//return [
//    '__pattern__' => [
//        'name' => '\w+',
//    ],
//    '[hello]'     => [
//        ':id'   => ['index/hello', ['method' => 'get'], ['id' => '\d+']],
//        ':name' => ['index/hello', ['method' => 'post']],
//    ],
//
//];

Route::get('/','index/Index/index');
Route::get('index','index/Index/index');
Route::get('newgame_play','index/Game/bridge');
Route::post('newgame_play','index/Game/bridge');

Route::get('newgame_trend','index/Trend/chart');
Route::post('newgame_trend','index/Trend/chart');
Route::get('newgame_trend_kl8','index/Trend/chartKl18');
Route::post('newgame_trend_kl8','index/Trend/chartKl18');
Route::get('newgame_trend_pk10','index/Trend/chartPk10');
Route::post('newgame_trend_pk10','index/Trend/chartPk10');
Route::get('newgame_trend_p3','index/Trend/chartP3');
Route::post('newgame_trend_p3','index/Trend/chartP3');
Route::get('newgame_trend_hjlf','index/Trend/chartHjlf');
Route::post('newgame_trend_hjlf','index/Trend/chartHjlf');

Route::post('game_play','index/GamePlay/postCode');
Route::get('test','index/Test/test');
//Route::controller('/','index/Index');
Route::controller('login','index/Login');

Route::controller('activity','index/Activity');
Route::controller('game_record','index/GameRecord');
Route::controller('help_center','index/HelpCenter');
Route::controller('report_manage','index/ReportManage');

//Route::controller('login','index/Login');
//Route::controller('login','index/Login');
Route::controller('user','index/User');
Route::controller('recharge','index/Recharge');
Route::controller('game','index/Game');
Route::controller('play','index/Play');
Route::get('getinfo','index/Wufencai/getinfo');
Route::get('getcurno','index/Wufencai/getcurno');
Route::get('getkj','index/Wufencai/queryKJData');
Route::get('rgz','index/Rigongzi/jisuan');
Route::any('account/dataEtl','index/Account/dataEtl');
Route::any('account/oneCheck','index/Account/oneCheck');
Route::get('set','mobile/Set/set');
Route::get('getqq','index/Wufencai/getQQData');
Route::get('gettxssc','index/Wufencai/gettxssc');