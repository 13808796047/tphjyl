<?php
/**
 * Created by PhpStorm.
 * Author: Hon
 * Date: 2017/12/31 0031
 * Time: 14:53
 */

namespace app\index\service;


class Http
{
    public static function httpGet($url,$header_host='',$header_origin='',$referer ='')
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_URL, $url);
        if($header_host && $header_origin ){
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:'.$header_host,'Origin:'.$header_origin,'Upgrade-Insecure-Requests:1','Content-Type:application/x-www-form-urlencoded;charset=UTF-8'));
        }
        if($referer){
            curl_setopt ($ch, CURLOPT_REFERER, $referer);
        }
        $User_Agent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
//        curl_setopt($ch, CURLOPT_USERAGENT, $User_Agent);
//        curl_setopt($ch,CURLOPT_POST,1);
//        curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($params));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

    public static function httpPost($url,$params,$header_host='',$header_origin='',$referer ='')
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_URL, $url);
        $header = [
            'Upgrade-Insecure-Requests:1',
            'Content-Type:application/x-www-form-urlencoded;charset=UTF-8',
            'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
        ];
        if($header_host ){
            $header[] = 'Host:'.$header_host;
//            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host:'.$header_host,'Origin:'.$header_origin,));
        }
        if($header_origin ){
            $header[] = 'Origin:'.$header_origin;
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        if($referer){
            curl_setopt ($ch, CURLOPT_REFERER, $referer);
        }
        $User_Agent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
        curl_setopt($ch, CURLOPT_USERAGENT, $User_Agent);
        curl_setopt($ch,CURLOPT_POST,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($params));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }


}