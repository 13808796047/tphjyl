<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

define('UC_AUTH_KEY', 'zaDcd)y:Y8@xfn,0KM3_W-t[C/^xfSw"Q4=sp%8H'); //加密KEY

/**
 * 系统非常规MD5加密方法
 * @param  string $str 要加密的字符串
 * @return string
 */
function think_ucenter_md5($str, $key = 'ThinkUCenter'){
    return '' === $str ? '' : md5(sha1($str) . $key);
}


/**
 * 系统加密方法
 * @param string $data 要加密的字符串
 * @param string $key  加密密钥
 * @param int $expire  过期时间 (单位:秒)
 * @return string
 */
function think_ucenter_encrypt($data, $key, $expire = 0) {
    $key  = md5($key);
    $data = base64_encode($data);
    $x    = 0;
    $len  = strlen($data);
    $l    = strlen($key);
    $char =  '';
    for ($i = 0; $i < $len; $i++) {
        if ($x == $l) $x=0;
        $char  .= substr($key, $x, 1);
        $x++;
    }
    $str = sprintf('%010d', $expire ? $expire + time() : 0);
    for ($i = 0; $i < $len; $i++) {
        $str .= chr(ord(substr($data,$i,1)) + (ord(substr($char,$i,1)))%256);
    }
    return str_replace('=', '', base64_encode($str));
}

/**
 * 系统解密方法
 * @param string $data 要解密的字符串 （必须是think_encrypt方法加密的字符串）
 * @param string $key  加密密钥
 * @return string
 */
function think_ucenter_decrypt($data, $key){
    $key    = md5($key);
    $x      = 0;
    $data   = base64_decode($data);
    $expire = substr($data, 0, 10);
    $data   = substr($data, 10);
    if($expire > 0 && $expire < time()) {
        return '';
    }
    $len  = strlen($data);
    $l    = strlen($key);
    $char = $str = '';
    for ($i = 0; $i < $len; $i++) {
        if ($x == $l) $x = 0;
        $char  .= substr($key, $x, 1);
        $x++;
    }
    for ($i = 0; $i < $len; $i++) {
        if (ord(substr($data, $i, 1)) < ord(substr($char, $i, 1))) {
            $str .= chr((ord(substr($data, $i, 1)) + 256) - ord(substr($char, $i, 1)));
        }else{
            $str .= chr(ord(substr($data, $i, 1)) - ord(substr($char, $i, 1)));
        }
    }
    return base64_decode($str);
}

/**
 * 数据签名认证
 * @param  array  $data 被认证的数据
 * @return string       签名
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */
function data_auth_sign($data) {
    //数据类型检测
    $key = "Kyeol@!$";
    return sha1($data.$key);
    // if(!is_array($data)){
    // $data = (array)$data;
    // }
    // ksort($data); //排序
    // $code = http_build_query($data); //url编码并生成query字符串
    // $sign = sha1($code); //生成签名
    // return $sign;
}

/**
 * 判断是不是json字符串
 * @param $param
 * @return bool
 */
function isJson($param)
{
    json_decode($param);
    if (json_last_error()) {
        return false;
    }

    if(!is_array(json_decode($param,true))){
        return false;
    }
    return true;
}

/**
 * 获取uuid
 * @param int $len
 * @return bool|string
 */
function getUuidNum($len = 11){
    return substr(implode(NULL, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, $len);
}

/**
 * 获取客户端IP地址
 * @param integer $type 返回类型 0 返回IP地址 1 返回IPV4地址数字
 * @return mixed
 */
function get_client_ip($type = 0) {
    $type       =  $type ? 1 : 0;
    static $ip  =   NULL;
    if ($ip !== NULL) return $ip[$type];
    if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $arr    =   explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $pos    =   array_search('unknown',$arr);
        if(false !== $pos) unset($arr[$pos]);
        $ip     =   trim($arr[0]);
    }elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {
        $ip     =   $_SERVER['HTTP_CLIENT_IP'];
    }elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ip     =   $_SERVER['REMOTE_ADDR'];
    }
    // IP地址合法验证
    $long = sprintf("%u",ip2long($ip));
    $ip   = $long ? array($ip, $long) : array('0.0.0.0', 0);
    return $ip[$type];
}

/**
 * 根据配置名称 加载游戏配置
 * @param $name
 * @return array|mixed
 */
function _loadGameConfigByJson($name)
{
    $file = APP_PATH.'gameConfig/'.$name.'.json';
    if (is_file($file)) {
       return json_decode(file_get_contents($file), true);
    }
    return [];
}

/**
 * 替换配置文件中的彩种ID
 * @param string $gameType
 * @param string $gameTypeCn
 * @param int $mid
 * @return array|mixed
 */
function _replaceMethodId($gameType='ssc', $gameTypeCn='秒秒时时彩', $mid=36){
    $gameConfigData = _loadGameConfigByJson($gameType);
    if (!empty($gameConfigData)){
        $gameConfigData['gameTypeCn'] = $gameTypeCn;
        $gameConfigData['dynamicConfigUrl'] = strstr($gameConfigData['dynamicConfigUrl'],'RPMETHODID') ? str_replace('RPMETHODID',$mid,$gameConfigData['dynamicConfigUrl']) : $gameConfigData['dynamicConfigUrl'];

        if (!empty($gameConfigData['gameMethods'])){
            foreach ($gameConfigData['gameMethods'] as $key => $value){
                if (!empty($value['childs'])){
                    foreach ($value['childs'] as $k => $v){
                        if (!empty($v['childs'])){
                            foreach ($v['childs'] as $ck => $cv){
                                if (!empty($cv['methodId'])){
                                    $gameConfigData['gameMethods'][$key]['childs'][$k]['childs'][$ck]['methodId'] = str_replace('RPMETHODID',$mid,$cv['methodId']);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return $gameConfigData;
}

/**
 * @param array $base_arr
 * @param $search
 * @param bool $strict
 * @return bool|mixed
 *
 */
function _array_get(array $base_arr,$search,$strict=false)
{
    foreach ($base_arr as $key => $item){
        if($strict){
            if($key === $search){
                return $item;
            }
        }else{
            if($key == $search){
                return $item;
            }
        }
    }
    return false;
}

function guid() {
    $chars = md5(uniqid(mt_rand(), true));
    $uuid  = substr($chars,0,8);
    $uuid .= substr($chars,8,4);
    $uuid .= substr($chars,12,4);
    $uuid .= substr($chars,16,4);
    $uuid .= substr($chars,20,12);
    return $uuid;
}

function base64EncodeImage ($image_file) {
    $base64_image = '';
    $image_info = getimagesize($image_file);
    $image_data = fread(fopen($image_file, 'r'), filesize($image_file));
    $base64_image = 'data:' . $image_info['mime'] . ';base64,' . chunk_split(base64_encode($image_data));
    return $base64_image;
}

function hexToStr($hex){
    $string='';
    for ($i=0; $i < strlen($hex)-1; $i+=2)
    {
        $string .= chr(hexdec($hex[$i].$hex[$i+1]));
    }
    return $string;
}

//字符串转16进制ascii码
function strToHex($string){
    $hex='';
    for ($i=0; $i < strlen($string); $i++)
    {
        $hex .= dechex(ord($string[$i]));
    }
    return strtoupper($hex);
}