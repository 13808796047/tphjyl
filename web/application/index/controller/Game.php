<?php
/**
 * Created by PhpStorm.
 * FUCK
 * Date: 2017/9/9 0009
 * Time: 16:13
 */

namespace app\index\controller;


use app\common\Common;
use app\index\model\AdminLog;
use app\index\model\Bets;
use app\index\model\Data;
use app\index\model\Members;
use app\index\model\Params;
use app\index\model\Type;
use app\index\service\dynamicConfig;
use think\Config;
use think\Controller;
use think\Db;
use think\Request;
use think\Session;

class Game extends Controller
{
    public $play_list = [
        '1' => array(
            array(
                'id'=>'36',
                'title'=>'秒秒时时彩',
            ),
            array(
                'id'=>'5',
                'title'=>'一分时时彩',
            ),
            array(
                'id'=>'34',
                'title'=>'两分时时彩',
            ),
            array(
                'id'=>'43',
                'title'=>'腾讯分分彩',
            ),
            array(
                'id'=>'1',
                'title'=>'重庆时时彩',
            ),
        ),
        '2' => array(
            array(
                'id'=>'38',
                'title'=>'秒秒11选5',
            ),
            array(
                'id'=>'39',
                'title'=>'一分11选5',
            ),
            array(
                'id'=>'16',
                'title'=>'江西11选5',
            ),
            array(
                'id'=>'44',
                'title'=>'山东11选5',
            ),
            array(
                'id'=>'6',
                'title'=>'广东11选5',
            ),
        ),
        '3' => array(
            array(
                'id'=>'45',
                'title'=>'极速3D',
            ),
            array(
                'id'=>'9',
                'title'=>'福彩3D',
            ),
            array(
                'id'=>'10',
                'title'=>'排列三',
            ),
        ),
        '6' => array(
            array(
                'id'=>'20',
                'title'=>'北京PK拾',
            ),
        ),
        '10' => array(
            array(
                'id'=>'46',
                'title'=>'皇家龙凤',
            ),
        ),
    ];

    public $modeConfig = [
        '2' => '元',
        '0.2' => '角',
        '0.02' => '分',
        '0.002' => '厘',
    ];

    /**
     * @param Request $request
     * @return mixed
     */
    public function bridge(Request $request)
    {
        $param = $request->param();
        if(isset($param['flag'])){
            if(method_exists($this,$param['flag'])){
//                $fun = strval($param['flag']);
                $fun = $param['flag'];
                return $this->$fun($request);

            }
        }elseif (isset($param['tag'])){
            if(method_exists($this,$param['tag'])){
//                $fun = strval($param['flag']);
                $fun = $param['tag'];
                return $this->$fun($request);
            }
        }
        return $this->getGamePlay($request);
    }

    /**
     * 获取投注页面
     * @param Request $request
     * @return \think\response\View
     */
    private function getGamePlay(Request $request)
    {
        $curmid = $request->param('curmid','36');
        $type_info = Type::getType($curmid);

        $lottery = [
            'lotterycnname' => $type_info?$type_info['title']:"",
            'lotteryid' => $type_info?$type_info['type']:"1",
            'curmid' => $curmid,
        ];
        $this->assign('lottery',$lottery);
        $this->assign('multilingual',_loadGameConfigByJson('multilingual'));

        $dynamicConfig['data'] = dynamicConfig::config($curmid);
        $dynamicConfig["isSuccess"]  =  1;
        $dynamicConfig["msg"] = "success";
        $file_info = Common::getFileInfoByTypeId($curmid);
        $gameConfigData = _replaceMethodId($file_info['fileName'],$file_info['fileTitle']);
        $play_list = $this->subMenu($lottery['lotteryid'],$curmid);
        $cur_play_name = '';
        foreach ($play_list as $value) {
            if ($value['id'] == $curmid) {
                $cur_play_name = $value['title'];
            }
        }
        $this->assign('dynamicConfig',json_encode($dynamicConfig));
        $this->assign('gameConfigData',$gameConfigData);
        $this->assign('jsPrizePoint',json_encode(dynamicConfig::getCurUserPoint($curmid)));
        $this->assign('play_type',$lottery['lotteryid']);
        $this->assign('play_list',$play_list);
        $this->assign('game_js',$this->getGameJs($lottery['lotteryid']));
        $this->assign('curmid',$curmid);
        $this->assign('cur_play_name',$cur_play_name);
        $this->assign('play_lists',$this->play_list);
        $betkey = Params::getParams('BetYanKey')['BetYanKey'];
        $this->assign('betkey',$betkey);
        $this->assign('today',date('YmdH'));
        return view('game/play');
    }

    /**
     * @param Request $request
     * @return array
     */
    private function dynamicConfig(Request $request)
    {
        $data = dynamicConfig::config($request->get('curmid'));
        return json(["isSuccess" => 1,"msg" => "success","data"=>$data]);
    }

    /**
     * @param Request $request
     * @return array
     */
    private function getuserbalance(Request $request)
    {
        $uid = $request->get('uid')?$request->get('uid'):session('userData.uid');
        $map = ['uid' => $uid];
        $user             = Members::where($map)->find();
        $user['sessionId'] = Session::get('userData.sessionId');
        $config = Config::get('session');
        ini_set('session.gc_maxlifetime', $config['expire']);
        ini_set('session.cookie_lifetime', $config['expire']);
        Session::set('userData',$user);
        return json(["isSuccess" => 1,"availablebalance" => $user['coin']]);
    }

    /**
     * 貌似是查询用户消息，具体有什么用还不知道 前端需要 么就写一个
     * @param Request $request
     * @return array
     */
    private function getusermessage(Request $request)
    {
        $data = [
            "isSuccess" =>  0,
            "type" => "msgPush",
            "msg" => "",
            "time" => 30,
            "data" => [
                "name" => "messageTips",
                "tplData" => 'sdad'
            ]
        ];
        return json($data);
    }
    /**
     * 获取开奖号码
     * @param Request $request
     */
    private function getopencodes(Request $request)
    {
        $historyBall = Data::getHistory($request->get('curmid'),6);

        $period = $historyBall[0]['issue'];
        $ball = $historyBall[0]['data'];
        unset($historyBall[0]);
        unset($historyBall[0]);
        $data = [
            "historyBall" => $historyBall,

            "lastballsTrans" => dynamicConfig::lastballsTrans($request->get('curmid'),$ball),
            "isSuccess" => 1,
            "period" => $period,
            "ball" => $ball
        ];

        return json($data);
    }

    public function getUpload()
    {
        return json([]);
    }

    public function getNowTime()
    {
        return json([]);
    }
    /**
     * 查询投注记录
     * @param $request
     * @return \think\response\View
     */
    private function projectRecords($request){
        $uid = Session::get('userData.uid');
        $param = $request->param();
        if(isset($param['uid'])){
            $uid = $param['uid'];
        }
        $list = Bets::alias('b')
                ->join('gygy_type t ','b.type=t.id','left')
                ->join('gygy_played p ','p.id=b.playedId','left')
                ->where(array('b.type'=>$param['curmid'],'b.uid'=>$uid))
                ->order('b.id desc')
                ->limit($param['size'])
                ->field('b.id,b.isDelete,b.zjCount,b.bets_money,b.actionTime,b.bonus,t.title,p.name,b.actionNo,b.beiShu,b.mode,b.actionNum,b.fpEnable,b.actionData,b.lotteryNo')
                ->select();
        foreach ($list as $key=>$item) {
            $list[$key]['actionTime'] = date('H:i:s',$item['actionTime']);
            $list[$key]['mode_cn'] = _array_get($this->modeConfig,$item['mode']);
            $list[$key]['bonus'] = $item['bonus']>0?"<font color='red'>".$item['bonus']."</font>":$item['bonus'];
        }
        $this->assign('list',$list);
        return view('game/project_records');
    }
    /**
     * 查询追号记录
     * @param $request
     * @return \think\response\View
     */
    private function traceRecords($request){
        $param = $request->param();
        $user = Session::get('userData');
        $list = Bets::alias('b')
            ->join('gygy_type t ','b.type=t.id','left')
            ->where(array('b.zhuiHao'=>1,'b.type'=>$param['curmid'],'b.uid'=>$user['uid']))
            ->order('b.id desc')
            ->limit($param['size'])
            ->field('b.bets_money,b.actionTime,b.zhuiHaoMode,t.title,b.actionNo,b.actionData,b.mode,b.beiShu,b.actionNum,b.fpEnable,b.bonus,b.zhuiHaoMode,b.lotteryNo')
            ->select();
        foreach ($list as $key=>$item) {
            $list[$key]['actionTime'] = date('H:i:s',$item['actionTime']);
            $list[$key]['zhuiHaoMode'] = $item['zhuiHaoMode']==1?"否":"是";
            $list[$key]['mode_cn'] = _array_get($this->modeConfig,$item['mode']);
            $list[$key]['zhuiHaoMode_money'] = $item['zhuiHaoMode']==0?$item['mode']*$item['beiShu']*$item['actionNum']*($item['fpEnable']+1):0;
        }
        $this->assign('username',$user['username']);
        $this->assign('list',$list);
        return view('game/trace_records');
    }

    public function getGameNumbers(){
        if(isset($_GET['type'])&&isset($_GET['num'])){
            $type = $_GET['type'];
            $num = intval($_GET['num'])+1;
            $dynamicConfig = new dynamicConfig();
            $code_nos = $dynamicConfig->gameNumbers($type,$num);
            if(isset($code_nos)){
                unset($code_nos[0]);
            }
            return json($code_nos);
        }else{
            return json(array());
        }
    }

    public function subMenu($type,$curmid){
        $type_arr = $this->play_list;
        $play_list = isset($type_arr[$type])?$type_arr[$type]:array();
        $this->assign('lotterycnname','-');
        foreach ($play_list as $item) {
            if($item['id']==$curmid){
                $this->assign('lotterycnname',$item['title']);
            }
        }
        return $play_list;
    }

    /**
     * 获取彩种js
     * @param $type
     * @return mixed
     */
    private function getGameJs($type){
        $jsArr = [
            "1" => [
                "name" => "SSC",
                "game_css" => "/ssc/ssc.css",
                "module_js" => "/ssc.js",
                "bet_js" => "/phoenix.Games.SSC.bet.js",
                "phoenix_js" => "/ssc/phoenix.Games.SSC.Danshi.js",
                "game_js" => "/ssc/ssc.js"
              ],
            "2" => [
                "name" => "N115",
                "game_css" => "/n115/n115.css",
                "module_js" => "/n115.js",
                "bet_js" => "/phoenix.Games.N115.bet.js",
                "phoenix_js" => "/n115/phoenix.Games.N115.Danshi.js",
                "game_js" => "/n115/n115.js"
            ],
            "3" => [
                "name" => "FC3D",
                "game_css" => "/fc3d/fc3d.css",
                "module_js" => "/fc3d.js",
                "bet_js" => "/phoenix.Games.FC3D.bet.js",
                "phoenix_js" => "/fc3d/phoenix.Games.FC3D.Danshi.js",
                "game_js" => "/fc3d/fc3d.js"
            ],
            "6" => [
                "name" => "SSCBJPK10",
                "game_css" => "/game-touzhu-bjpk10.css",
                "module_js" => "/bjpk10.js",
                "bet_js" => "/phoenix.Games.SSCBJPK10.bet.js",
                "phoenix_js" => "/bjpk10/phoenix.Games.SSCBJPK10.Danshi.js",
                "game_js" => "/bjpk10/bjpk10.js"
            ],
            "10" => [
                "name" => "HJLF",
                "game_css" => "/ssc/ssc.css",
                "module_js" => "/hjlf.js",
                "bet_js" => "/phoenix.Games.HJLF.bet.js",
                "phoenix_js" => "/hjlf/phoenix.Games.HJLF.Danshi.js",
                "game_js" => "/hjlf/hjlf.js"
              ],
        ];
        return isset($jsArr[$type]) ? $jsArr[$type] : $jsArr[1];
    }

    public function postDelBet(){
        $id = isset($_POST['id'])?$_POST['id']:"";
        if(empty($id)){
            $this->error('请选择撤单的投注数据。');
        }
        if (!$data = Bets::where(array('id' => $id))->find()) $this->error('找不到定单或已经撤单。');
        if ($data['isDelete']) $this->error('这单子已经撤单过了。');

        if ($data['qz_uid']) $this->error('单子已经被人抢庄，不能撤单');
        $exp_time = $data['kjTime']-time();
        if($exp_time<=10){
            $this->error('这单子已过撤单时间，不能撤单。');
        }

        $comm = new Common();
        // 开始事物处理
        $Model = db();
        $Model->startTrans();

        $amount = $data['beiShu'] * $data['mode'] * $data['actionNum'] * (intval($data['fpEnable'] ? '2' : '1'));
        $amount = abs($amount);
        // 添加用户资金变更日志
        $return1 = $comm->addCoin(array(
            'uid' => $data['uid'],
            'type' => $data['type'],
            'playedId' => $data['playedId'],
            'liqType' => 7,
            'info' => "撤单",
            'extfield0' => $id,
            'coin' => round($amount-$data['bonus'],4),
        ));

        // 更改定单为已经删除状态
        $return2 = Bets::where(array('id' => $id))->update(array('isDelete' => 1));
        if ($return1 && $return2) {
            //将投注记录写入文件
/*            $fp = fopen(ROOT_PATH . "Record/record.txt", "a+");
            $tz_content = $data['wjorderId'] . " 撤单 " . date('m-d H:i:s', time()) . $_SERVER['REMOTE_ADDR'] . "\r\n\r\n";
            $flag = fwrite($fp, $tz_content);
            if (!$flag) {
                $Model->rollback();//不成功，则回滚
                $this->error('创建投注记录文件失败');
            }
            fclose($fp);*/
            $Model->commit();//成功则提交
            $comm->addLog(181, $data['id'], '');
            $this->success('撤单成功');
        } else {
            $Model->rollback();//不成功，则回滚
            $this->error('撤单失败');
        }
    }
}