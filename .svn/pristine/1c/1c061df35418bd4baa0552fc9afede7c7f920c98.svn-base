<?php
/**
 * Created by PhpStorm.
 * FUCK
 * Date: 2017/10/6 0006
 * Time: 16:10
 */

namespace app\index\controller;


use app\index\model\Data;
use app\index\model\Params;
use app\index\service\dynamicConfig;
use think\Controller;
use think\Request;

class Wufencai extends Controller
{
    public function getinfo(Request $request)
    {
        // 36=秒秒彩ID
        $type   = $request->get('type', '', 'intval');
        $lastNo = dynamicConfig::gameNumbers($type,1)[0];
        $flag   = 1; //开奖按钮
        $kjdata = ''; //开奖号码
        $kjtime = date('Y-m-d H:m:s');

        $data     = Params::getParams('wufencai');
        $wufencai = $data['wufencai'];
        $data               = array();
        $data['actionNo']   = $lastNo['number'];
        $data['orderID']   = $wufencai;
        $data['actionTime'] = $lastNo['time'];
        $data['flag']       = $flag;
       return json($data);
    }

    public function getcurno(Request $request){
        $type =  $request->get('type', '', 'intval');
        $lastNo = dynamicConfig::gameNumbers($type,1)[0];
        $open = Data::getHistory($type,1)[0];
        $data['lastNo'] = $open['number'];
        $data['Number'] = $open['data'];
        $data['ThisNo'] = $lastNo['number'];
        $data['NowTime'] = date('Y-m-d H:i:s', time());
        // $actionNo = $this->getGameNo($type);
        $data['StopTime'] =$lastNo['time'];
        return json($data);
    }

    protected $url_config = [  //type => url
        '43' =>[
            'url' =>  'https://www.ffcqq.com/xin/index1.txt', // 腾讯分分彩
            'dataFun' => 'getTXffc'
        ]
    ];
    protected $type = 0;


    public function queryKJData(Request $request)
    {
        $type =  $request->get('type', '', 'intval');
        //查询开奖区号相关
        $this->type = $type;
        $fun = $this->url_config[$type]['dataFun'];
        $data = $this->$fun();
        return json($data);
    }


    public function curlData($url="",$header="") {
        $postUrl = $url;
        $ch = curl_init();                                      //初始化curl
        curl_setopt($ch, CURLOPT_URL,$postUrl);                 //抓取指定网页
        curl_setopt($ch, CURLOPT_HEADER, 0);                    //设置header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);            //要求结果为字符串且输出到屏幕上
//        curl_setopt($ch, CURLOPT_HTTPHEADER,$header);           // 增加 HTTP Header（头）里的字段
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);        // 终止从服务端进行验证
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        $data = curl_exec($ch);                                 //运行curl
        curl_close($ch);
        return $data;
    }

    public function getQQDataBak()
    {
        $data = $this->curlData('http://cgi.im.qq.com/cgi-bin/minute_city');
        $data = json_decode($data,true);
        $newData['time'] = $data['time'];
        $newData['minute'] = $data['minute'];
        $actionNo = date('H', strtotime($data['time']))*60 + date('i', strtotime($data['time']));
        $newData['nowTime'] = time();
        $newData['number'] = date('Ymd-', strtotime($data['time'])) . substr(10000 + $actionNo+1, 1);
        $newData['actionTime'] = $data['time'];
        $data = Params::getParams('wufencai');
        $newData['wufencai'] = $data['wufencai'];
        return json($newData);
    }

    /**
     *助赢腾讯分分彩
     *
     */
    public function getQQData()
    {
        $url = 'http://77tj.org/api/tencent/onlineim';
        $data = $this->curlData($url);
        $data = json_decode($data,true)[0];
        $newData['time'] = strtotime($data['onlinetime']);
        $newData['datetime'] = $data['onlinetime'];
        $actionNo = date('H', strtotime($data['onlinetime']))*60 + date('i', strtotime($data['onlinetime']));
        $newData['number'] = date('Ymd-', strtotime($data['onlinetime'])) . substr(10000 + $actionNo, 1);
        $newData['base_number'] = $data['onlinenumber'];
        $kjnum = $data['onlinenumber'];

        $sum = 0;
        for($i=0;$i< strlen($kjnum); $i++){
            $sum = $sum + substr($kjnum,$i,1);
        }
        $num1 = substr($sum,-1);
        $kjnum = substr($kjnum,-4);
        //第二个数
        $num2 = substr($kjnum,0,1);
        //第三个数
        $num3 = substr($kjnum,1,1);
        //第四个数
        $num4 = substr($kjnum,2,1);
        //第五个数
        $num5 = substr($kjnum,3,1);
        // 第一个数
        $newData['data'] = $num1.','.$num2.','.$num3.','.$num4.','.$num5;
        return json($newData);
    }
    
    /**
     *
     *tx-ssc
     */
    public function gettxssc()
    {
         $url = 'http://tx-ssc.com/api/getData';
        $data = $this->curlData($url);
        $data = json_decode($data,true)[0];
        $newData['time'] = substr($data['time'], 0,10);
        $newData['datetime'] = date('Y-m-d H:i:s',$newData['time']);
        $actionNo = date('H', $newData['time'])*60 + date('i', $newData['time']);
        $newData['number'] = date('Ymd-', $newData['time']) . substr(10000 + $actionNo, 1);
        $newData['base_number'] = $data['code1'];
        $newData['code'] = $data['code'];
        $kjnum = $data['code1'];

        $sum = 0;
        for($i=0;$i< strlen($kjnum); $i++){
            $sum = $sum + substr($kjnum,$i,1);
        }
        $num1 = substr($sum,-1);
        $kjnum = substr($kjnum,-4);
        //第二个数
        $num2 = substr($kjnum,0,1);
        //第三个数
        $num3 = substr($kjnum,1,1);
        //第四个数
        $num4 = substr($kjnum,2,1);
        //第五个数
        $num5 = substr($kjnum,3,1);
        // 第一个数
        $newData['data'] = $num1.','.$num2.','.$num3.','.$num4.','.$num5;
        return json($newData);
    }



    /**
     * 腾讯分分彩
     * @return int
     */
    protected function getTXffc_bak(){
        $url = $this->url_config[$this->type]['url'];
        $data = trim($this->curlData($url));

        $data = explode('||||',$data);
        $lastNo = dynamicConfig::gameNumbers($this->type,1)[0];
        $newData['time'] = date('Y-m-d H:i:s',time());
        $newData['number'] = $this->insertToStr($data[5],8,'-');
        $newData['actionTime'] = $lastNo['time'];
        $newData['lastNo'] = $lastNo['number'];
        $newData['data'] = $data[0].','.$data[1].','.$data[2].','.$data[3].','.$data[4];
        $newData['tx_data'] = $data[7];

        /* $data = json_decode($data,true);
         $lastNo = dynamicConfig::gameNumbers($this->type,1)[0];
         $newData['time'] = time();
         $newData['number'] = $lastNo['number'];
         $newData['actionTime'] = $lastNo['time'];*/
         $kjnum = $data[7];

         $sum = 0;
         for($i=0;$i< strlen($kjnum); $i++){
             $sum = $sum + substr($kjnum,$i,1);
         }
         $num1 = substr($sum,-1);
         $kjnum = substr($kjnum,-4);
         //第二个数
         $num2 = substr($kjnum,0,1);
         //第三个数
         $num3 = substr($kjnum,1,1);
         //第四个数
         $num4 = substr($kjnum,2,1);
         //第五个数
         $num5 = substr($kjnum,3,1);
         // 第一个数
         $newData['data'] = $num1.','.$num2.','.$num3.','.$num4.','.$num5;
        return $newData;
    }

    /**
     * 腾讯分分彩
     * @return int
     */
    protected function getTXffc(){
        $url = 'http://77tj.org/api/tencent/onlineim';
        $data = $this->curlData($url);
        $data = json_decode($data,true)[0];
        $newData['time'] = $data['onlinetime'];
        $actionNo = date('H', strtotime($data['onlinetime']))*60 + date('i', strtotime($data['onlinetime']));
        $newData['number'] = date('Ymd-', strtotime($data['onlinetime'])) . substr(10000 + $actionNo, 1);
        $newData['base_number'] = $data['onlinenumber'];
        $kjnum = $data['onlinenumber'];

         $sum = 0;
         for($i=0;$i< strlen($kjnum); $i++){
             $sum = $sum + substr($kjnum,$i,1);
         }
         $num1 = substr($sum,-1);
         $kjnum = substr($kjnum,-4);
         //第二个数
         $num2 = substr($kjnum,0,1);
         //第三个数
         $num3 = substr($kjnum,1,1);
         //第四个数
         $num4 = substr($kjnum,2,1);
         //第五个数
         $num5 = substr($kjnum,3,1);
         // 第一个数
         $newData['data'] = $num1.','.$num2.','.$num3.','.$num4.','.$num5;
        echo json_encode($newData,8);
        exit();
    }

    function insertToStr($str, $i, $substr){
        //指定插入位置前的字符串
        $startstr="";
        for($j=0; $j<$i; $j++){
            $startstr .= $str[$j];
        }

        //指定插入位置后的字符串
        $laststr="";
        for ($j=$i; $j<strlen($str); $j++){
            $laststr .= $str[$j];
        }

        //将插入位置前，要插入的，插入位置后三个字符串拼接起来
        $str = $startstr . $substr . $laststr;

        //返回结果
        return $str;
    }
}