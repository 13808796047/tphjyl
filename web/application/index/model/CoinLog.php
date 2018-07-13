<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;


use think\Model;

class CoinLog extends Model
{
    protected $pk = 'id';

    public static function setCoin($log=[]){
        $coin = isset($log['coin']) ? $log['coin'] : 0;
        $fcoin = isset($log['fcoin']) ? $log['fcoin'] : 0;
        $uid = isset($log['uid']) ? $log['uid'] : null;
        $liqType = isset($log['liqType']) ? $log['liqType'] : null;
        $type = isset($log['type']) ? $log['type'] : 0;
        $info = isset($log['info']) ? $log['info'] : '';
        $extfield0 = isset($log['extfield0']) ? $log['extfield0'] : 0;
        $extfield1 = isset($log['extfield1']) ? $log['extfield1'] : '';
        $extfield2 = isset($log['extfield2']) ? $log['extfield2'] : '';

        /*$istest = isset($log['istest']) ? $log['istest'] : 0;
        $playedId = isset($log['playedId']) ? $log['playedId'] : 0;
        $actionUID = session('userData.uid');
        $actionIP = isset($log['actionIP']) ? $log['actionIP'] : '';*/

        $sql = "call setCoin($coin, $fcoin, $uid, $liqType, $type, '$info', '$extfield0', '$extfield1', '$extfield2')";
        $result = self::execute($sql);
        if ($result === false) {
            return false;
        } else {
            return true;
        }
    }
}