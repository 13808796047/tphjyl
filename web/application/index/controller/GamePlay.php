<?php
/**
 * Created by PhpStorm.
 * FUCK
 * Date: 2017/9/14 0014
 * Time: 20:53
 */

namespace app\index\controller;


use app\index\model\Bets;
use app\index\model\CoinLog;
use app\index\model\Members;
use app\index\model\Params;
use app\index\model\Played;
use app\index\model\Type;
use app\index\PlayedConst;
use app\index\service\dynamicConfig;
use think\Controller;
use Think\Db;
use think\Exception;
use think\Log;
use think\Request;
use think\Validate;

class GamePlay extends Controller
{
    private $error = [
        'isSuccess' => 0,
        'type' => 'serverError',
        'msg' => '错误操作(error:9)',
        'data' => [
            "tplData" => ["msg" => "错误操作(error:9)"]
        ],
    ];
    private $success = [
        "isSuccess" => 1,
        "type" => "success",
        "time" => "1",
        "msg" => "投注成功!",
        "created" => [
            "projects" => [],
            "traces" => []
        ]
    ];
    /**
     * 投注模式 元角分厘
     * @var array
     */
    private $modes = [
        1 => 2,
        2 => 0.2,
        3 => 0.02,
        4 => 0.002,
    ];

    public $before_stop_time = 6; //提前3秒关停
    //提前时间配置
    public $stop_time = [
        '36' => 6,
        '46' => 6,
        '5' => 6,
        '43' => 6,
        '1' => 30,
        '38' => 6,
        '39' => 6,
        '16' => 30,
        '15' => 30,
        '6' => 30,
        '20' => 30,
        '34' => 6,
        '44' => 30,
        '45' => 3,
        '9' => 7200,
        '10' => 7200,
    ];

    protected $liqType = 101;
    protected $liqInfo = '投注！';
    private $stopCode = [
        17, 20, 23, 60, 198, 200, 202, 272
    ];
    protected $gc_id = [1, 43, 16, 44, 6, 9, 10, 20];
    protected $zhushu_curmids = [
//        16,44,6,
//        1
    ];
    protected $zhushu_playeds = [
        45, 46, 47, 48, 49, 50, 51, 52, 152, 56, 53, 54,
        1, 7, 13, 274, 11, 275, 270, 276, 28, 26, 34, 32, 30, 36, 15, 9, 253, 254, 255, 256, 257, 258, 278, 279, 280, 281, 3
    ];
    protected $maxzs = 0;

    public $mus = [];

    public $openSet = [
        'types' => [1, 16, 6, 20, 43, 44],
        'time_at' => [
            1 => ['start' => '02:00:00', 'end' => '10:00:00', 'tj' => 'and'],
            16 => ['start' => '09:00:00', 'end' => '22:00:00', 'tj' => 'or'],
            6 => ['start' => '09:00:00', 'end' => '23:00:00', 'tj' => 'or'],
            20 => ['start' => '09:00:00', 'end' => '23:57:00', 'tj' => 'or'],
            43 => ['start' => '02:00:00', 'end' => '09:00:00', 'tj' => 'and'],
            44 => ['start' => '08:00:00', 'end' => '23:00:00', 'tj' => 'or'],
        ],
        'titles' => [
            1 => '重庆时时彩投注时间为每日的 09:00 - 次日02:00',
            16 => '江西11选5投注时间为每日的 09:00 - 22:00',
            6 => '广东11选5投注时间为每日的 09:00 - 23:00',
            20 => '北京PK拾投注时间为每日的 09:00 - 23:57',
            43 => '腾讯分分彩投注时间为每日的 09:00 - 次日02:00',
            44 => '山东11选5投注时间为每日的 08:00 - 23:00',
        ]
    ];

    /**
     * 投注
     * @param Request $request
     * @return \think\response\Json|void
     */
    public function postCode(Request $request)
    {
//        ini_set('memory_limit', 0);
        ini_set('memory_limit', '2048M');

        /*lotteryid:56
          curmid:3773
          flag:save
          gameType:ssc
          lt_trace_if:no
          lt_trace_stop:no
          lt_project[]:{"digitstr":"","methodid":"3342","codes":"U2FsdGVkX1/fsP0AdLqrC0qEqECBCvMY/hrxpNhNSAikMnOi6tZM5j4l4sSYvDKa","showCodes":"01234,01234,01234","nums":125,"type":"digital","typeName":"housan.zhixuan.fushi","money":250,"omodel":2,"mode":1,"times":1,"methodName":"后三复式","desc":"housan.zhixuan.fushi"}
          lt_trace_money:0
          lt_price_h:
          lt_total_nums:1
          lt_issue_start:20170909-1776
          lt_trace_times_margin:1
          lt_total_money:250
        */
        $rules = [
            'lotteryid' => 'require|integer',
            'curmid' => 'require|integer',
            'flag' => 'require',
            'gameType' => 'require',
            'lt_trace_if' => 'require|alpha|in:yes,no',
            'lt_trace_stop' => 'require|alpha|in:yes,no',
            'lt_project' => 'require|array',
            'lt_trace_money' => 'require|number',
//            'lt_price_h'   => 'require',
            'lt_total_nums' => 'require|number',
            'lt_issue_start' => 'require',
            'lt_trace_times_margin' => 'require',
            'lt_total_money' => 'require|number',
        ];
        $message = [
            'lt_issue_start.require' => '停止投注',
        ];
        $validate = new Validate($rules, $message);
        $data = $request->param();
        $re = $validate->check($data);
        if (!$re) {
            return $this->sendError($validate->getError());
        }
        $user = \Think\Session::get('userData');
        //1.验证用户是否可用
        $uid = isset($data['uid']) ? $data['uid'] : $user['uid'];
        $memberInfo = Members::getMemberInfo($uid);
        if (empty($memberInfo) || intval($memberInfo['is_sleep']) == 1) {
            return $this->sendError('网络异常，请重新投注！');
        }

        //2、系统配置检查
        $sysParams = Params::getParams();
        if ($sysParams['switchBuy'] == 0) {
            return $this->sendError('本平台已经停止购买！');
        }

        if ($sysParams['switchDLBuy'] == 0 && $memberInfo['type'] == 1) {
            return $this->sendError('代理不能买单！');
        }

        //3、注数判断
        $lt_project = $data['lt_project'];
        if (!isset($lt_project[0])) {
            $this->sendError('请先选择号码再提交投注');
        }


        //4、获取彩种核对期号
        $lottery_type = $data['lotteryid'];
        $lottery_id = $data['curmid'];
        if (in_array($lottery_id, $this->openSet['types'])) { //北京pk投注时间控制
            $t = time();
            $st = strtotime(date('Y-m-d ' . $this->openSet['time_at'][$lottery_id]['start'], $t));
            $et = strtotime(date('Y-m-d ' . $this->openSet['time_at'][$lottery_id]['end'], $t));
            if ($this->openSet['time_at'][$lottery_id]['tj'] == 'and') {
                if ($t > $st && $t < $et) {
                    return $this->sendError($this->openSet['titles'][$lottery_id]);
                }
            } else {
                if ($t < $st || $t > $et) {
                    return $this->sendError($this->openSet['titles'][$lottery_id]);
                }
            }
        }

        $typeRe = Type::getType($lottery_id);
        if (stristr($memberInfo['username'], 'fxh99') === false && stristr($memberInfo['username'], 'nbcs') === false) {
            //验证彩种是否停用
            if (!$typeRe) {
                return $this->sendError('停止投注！');
            } else {
                if ($typeRe['enable'] == 0) {
                    return $this->sendError('停止投注！');
                }
            }
        }
        $curNum = dynamicConfig::gameNumbers($lottery_id, 1)[0];
        if ($curNum['number'] != $data['lt_issue_start']
            || intval(str_replace('-', '10', $data['lt_issue_start'])) !== intval($curNum['issueCode'])) {
            return $this->sendError($data['lt_issue_start'] . '已过投注期！');
        }
        // 5、核对时间
        $time = time() + $this->stop_time[$lottery_id];
        /*dump($curNum['number'] !== $data['lt_issue_start']
            || intval(str_replace('-','10',$data['lt_issue_start'])) !== intval($curNum['issueCode']));
        dump($curNum);
        dump($data['lt_issue_start']);
        dump($time);
        dump(strtotime($curNum['time']));
        exit();*/

        if ($time > strtotime($curNum['time'])) {
            return $this->sendError($data['lt_issue_start'] . '已过投注时间！');
        }
        // 6、获取并验证投注号码
        $codes = [];
        $total_money = 0;
        foreach ($lt_project as $item) {
            if (!isJson($item)) {
                return $this->sendError('非法提交，已被拒绝json');
            }
            $item = json_decode($item, true);
            if (empty($item)) {
                return $this->sendError('非法提交，已被拒绝jsonEmpty');
            }

            if (in_array($item['methodid'], $this->stopCode) && mb_strlen(str_replace(',', '', $item['showCodes'])) > 9) {
                return $this->sendError('最多只能选9个号');
            }

            $playedInfo = Played::getPlayed($item['methodid']);
            if (empty($playedInfo)) {
                return $this->sendError('玩法升级中...，投注已被拒绝！1');
            }

            if (intval($playedInfo['type']) !== intval($data['lotteryid'])) {
                return $this->sendError('非法提交，已被拒绝！2');
            }

            //官方玩法关闭判断
            if ($playedInfo['is_official_open'] != 1 && $typeRe['is_official'] == 1) {
                return $this->sendError($playedInfo['name'] . '已停止投注！');
            }
            //私彩玩法关闭判断
            if ($playedInfo['enable'] != 1 && $typeRe['is_official'] != 1) {
                return $this->sendError($playedInfo['name'] . '已停止投注！');
            }
            $preCode = Db::table('gygy_data')->where('number', $curNum['number'] - 1)->value('data');



            $codeData['wjorderId'] = getUuidNum();
            $codeData['orderId'] = getUuidNum();
            $codeData['serializeId'] = uniqid();
            $codeData['uid'] = $memberInfo['uid'];
            $codeData['username'] = $memberInfo['username'];
            $codeData['istest'] = $memberInfo['is_test'];
            $codeData['type'] = $lottery_id;
            $codeData['playedGroup'] = $playedInfo['groupId'];
            $codeData['playedId'] = $playedInfo['id'];
            $codeData['actionNo'] = $curNum['number'];
            $codeData['actionTime'] = time();
            $codeData['actionIP'] = get_client_ip();
            $codeData['actionNum'] = $item['nums']; //投注注数
            $codeData['actionData'] = trim($item['showCodes']); //投注号码
            $codeData['weiShu'] = $this->getWeishu($item['digitstr']); //位数 g_s_b_q_w_
            $fanDian = $this->getFanDian($item['omodel'], $item['methodid'], $lottery_id);
            $codeData['fanDian'] = $fanDian['fanDian']; //返点
            $codeData['bonusProp'] = $fanDian['bonusProp']; //奖金比例
            $codeData['mode'] = $this->modes[$item['mode']]; //模式，可以是2，0.20，0.02，分别代表元角分基数
            $codeData['beiShu'] = $item['times']; //倍数
            $codeData['bets_money'] = round(abs($codeData['actionNum'] * $codeData['mode'] * $codeData['beiShu']), 4); //投注金额
            $codeData['kjTime'] = strtotime($curNum['time']); //开奖时间
            if ($codeData['bets_money'] != $item['money']) {
                return $this->sendError('提交数据不合法3！');
            }

            if (!$this->MaxBetMoney($item['money'], $lottery_id)) {
                return $this->sendError();
            }
            $total_money += $item['money'];

            if (!$this->MaxZhuShu($lottery_id, $item['methodid'], $item['nums'], $curNum['number'], $memberInfo['uid'])) {
                return $this->sendError();
            }
            if (!$this->ZhuShuMax($lottery_id, $playedInfo, $item['nums'], $curNum['number'], $memberInfo['uid'], $codeData['actionData'])) {
                return $this->sendError();
            }


            if (!$this->isCheating($codeData, $item)) {
                return $this->sendError();
            }

            $codes[] = $codeData;
            //lt_project[]:{"digitstr":"",
            //"methodid":"3342",
            //"codes":"U2FsdGVkX1/fsP0AdLqrC0qEqECBCvMY/hrxpNhNSAikMnOi6tZM5j4l4sSYvDKa",
            //"showCodes":"01234,01234,01234",
            //"nums":125,
            //"type":"digital",
            //"typeName":"housan.zhixuan.fushi",
            //"money":250,
            //"omodel":2,
            //"mode":1,
            //"times":1,
            //"methodName":"后三复式",
            //"desc":"housan.zhixuan.fushi"}
        }
        $payMoney = 0;
        //追号处理
        $liqType = 101;
        $info = '投注';
        $lt_total_money = $data['lt_total_money'];
        if (round($total_money, 3) != $lt_total_money) {
            return $this->sendError('提交数据不合法！4');
        }
        if ($total_money > $memberInfo['coin']) {
            return $this->sendError('余额不足！');
        }

        if (isset($data['lt_trace_if']) && $data['lt_trace_if'] == 'yes') {
            $liqType = 102;
            $info = '追号投注';

            $total_money = 0;
            $lt_trace_issues = $data['lt_trace_issues'];
            $lt_trace_count_input = $data['lt_trace_count_input'];//追号期数
//            $data['lt_trace_stop']   no | yes  是否中奖停止
            if (empty($lt_trace_issues) || count($lt_trace_issues) != $lt_trace_count_input) {
                return $this->sendError('追号数据不合法！5');
            }
            $newCodes = $codes;
            $codes = [];
            foreach ($lt_trace_issues as $k => $lt_trace_issue) {
                //追号期数验证
                if (str_replace('-', '', $curNum['number']) > str_replace('-', '', $lt_trace_issue)) {
                    return $this->sendError('追号数据期数不合法！6');
                }
                if (!isset($data['lt_trace_times_' . $lt_trace_issue])) {
                    return $this->sendError('追号数据倍数不合法！7');
                }
                $lt_times = $data['lt_trace_times_' . $lt_trace_issue];
                foreach ($newCodes as $newCode) {
                    $newCode['actionNo'] = $lt_trace_issue;
                    $newCode['zhuiHao'] = $lt_trace_count_input - $k; //追号剩余期数
                    $newCode['zhuiHaoMode'] = $data['lt_trace_stop'] == 'yes' ? 1 : 0; //是否中奖停止追号
                    $newCode['beiShu'] = $lt_times; //倍数
                    $newCode['bets_money'] = abs($newCode['actionNum'] * $newCode['mode'] * $newCode['beiShu']);; //投注金额
                    $total_money += $newCode['bets_money'];
                    if ($total_money > $memberInfo['icon']) {
                        return $this->sendError('余额不足！');
                    }
                    $codes[] = $newCode;
                }
            }
            if ($total_money != $data['lt_trace_money']) {
                return $this->sendError('追号数据不合法！8');
            }
        }

        $model = model('bets');
        //开启事务
        $model->startTrans();
        //循环投注
        $isBetSuccess = array();
        $i = 0;
        try {
            foreach ($codes as $code) {
                //留存处理，每次投注增加 千分之五 的收费
//                $code['bets_money'] += $code['bets_money']*0.005;
                $re = Bets::create($code);
                if (!$re) {
                    throw new Exception('投注插入数据失败');
                }
                $isBetSuccess[$i] = $re->id;
                $i++;
                $re = CoinLog::setCoin([
                    'coin' => -$code['bets_money'],
                    'uid' => $code['uid'],
                    'liqType' => $liqType,
                    'type' => $code['type'],
                    'info' => $info,
                    'extfield0' => $re->id,
                    'extfield1' => $code['serializeId'],
                ]);
                if (!$re) {
                    throw new Exception('投注设置账变失败');
                }
            }
        } catch (Exception $e) {
            $model->rollback();
            Log::record("投注失败:" . $e->getMessage() . 'Line:' . $e->getLine() . 'File:' . $e->getFile());
            $this->sendError('投注失败，请刷新重试！');
        }
        $model->commit();

        if (in_array(strtolower($user['username']), [
            'cswt001', 'cswt002', 'cswt003', 'cswt004', 'cswt005', 'cswt006'])) { //委托账户批量投注
            $Model = db();
            foreach ($isBetSuccess as $value) {
                if ($value) {
                    if ($Model->query(" call sp_EntrustBet({$value},'{$user['username']}')") === false) {
                        $this->sendError('投注成功，wt账户投注失败！');
                    }
                }

            }
        }
        //获取投注记录

        //获取追号记录

        return json($this->success);

    }

    protected function setSuccess(array $projects = [], array $traces = [], $time = 1)
    {
        $this->success['created']['projects'] = $projects;
        $this->success['created']['traces'] = $traces;
        $this->success['time'] = $time;
    }

    protected function setError($msg, array $tplData = [])
    {
        $this->error['msg'] = $msg;
        $this->error['data']['tplData']['msg'] = $msg;
    }

    /**
     * 发送错误
     * @param $msg
     * @param array $tplData
     */
    protected function sendError($msg = '', array $tplData = [])
    {
        if ($msg)
            $this->setError($msg, $tplData);
        $res = json($this->error);
        $res->send();
        exit();
    }

    /**
     * 投注号码作弊检查
     * @param $codeData
     * @return bool
     */
    protected function isCheating(&$codeData, $item)
    {
        $del_douhou = [259, 260, 261, 262]; //需要删除逗号的玩法
//        $douhao2kong = [45]; //逗号替换成空的
        if (in_array($codeData['playedId'], $del_douhou)) {
            $codeData['actionData'] = str_replace(',', '', $codeData['actionData']);
        }
        /*if(in_array($codeData['playedId'],$douhao2kong)){
            $codeData['actionData'] = str_replace(',',' ',$codeData['actionData']);
        }*/
        $betkey = Params::getParams('BetYanKey')['BetYanKey'];
        $codes = md5($item['showCodes'] . $item['methodid'] . $item['nums'] . $betkey);
        if ($codes !== $item['codes']) {
            $this->setError('投注错误，请联系客服！');
            return false;
        }
        if (trim($item['showCodes']) === '' || trim($item['showCodes']) === null) {
            $this->setError('投注号码不能为空！');
            return false;
        }
        $reg_arr = PlayedConst::$PLAYED_REG;

        if (isset($reg_arr[$codeData['playedId']])) {
            $reg = $reg_arr[$codeData['playedId']];
            if (in_array($codeData['playedId'], PlayedConst::$PLAYED_DAN)) {
                foreach (explode(' ', $codeData['actionData']) as $v) {
                    if (!preg_match($reg, $v)) {
                        $this->setError('投注号码不正确！');
                        return false;
                    }
                }
            } else if (in_array($codeData['playedId'], PlayedConst::$PLAYED_DAN_11)) {
                foreach (explode(',', $codeData['actionData']) as $v) {
                    if (!preg_match($reg, $v)) {
                        $this->setError('投注号码不正确！');
                        return false;
                    }
                }
            } else {
                if (!preg_match($reg, $codeData['actionData'])) {
                    $this->setError('投注号码不正确！');
                    return false;
                }
            }
        }
        return true;
    }

    protected function getFanDian($mode, $playedId, $type)
    {
        $point = dynamicConfig::getCurUserPoint($type);
        $arr = ['fanDian' => 0, 'bonusProp' => 0];
        if (empty($point) || !isset($point[$playedId])) {
            return $arr;
        }
        $point = $point[$playedId];
        if ($mode == 1) { //去最小的加返点
            $arr['fanDian'] = $point['point'];
            $arr['bonusProp'] = $point['prize'];
        } else {
            $arr['fanDian'] = 0;
            $arr['bonusProp'] = $point['hprize'];
        }
        return $arr;
    }

    protected function getWeishu($w)
    {
        if ($w == '') {
            return 0;
        }
        $ws = [
            'g' => 1,
            's' => 2,
            'b' => 4,
            'q' => 8,
            'w' => 16,
            '' => 0,
        ];
        $w = explode('_', $w);
        $weishu = 0;
        foreach ($w as $item) {
            if (isset($ws[$item]))
                $weishu += $ws[$item];
        }
        return $weishu;
    }

    /**
     * 玩法注数统一控制
     * @param $curmid
     * @param $played_id
     * @param $num
     * @param $actionNo
     * @param $uid
     * @return bool
     */
    protected function MaxZhuShu($curmid, $played_id, $num, $actionNo, $uid)
    {
        /*if(in_array($played_id,$this->zhushu_playeds)) {
            $this->sendError('玩法正在升级中...');
            return false;
        }*/
        if (in_array($curmid, $this->zhushu_curmids)) {
            if (in_array($played_id, $this->zhushu_playeds)) {
                if ($played_id == 3) {
                    $maxzs = 9999;
                } else {
                    $maxzs = Params::getParams('gc_syxw_ds_zs')['gc_syxw_ds_zs'];
                }

                if ($maxzs < 0) {
                    $this->sendError('玩法正在升级中...');
                    return false;
                } else if ($maxzs > 0) {
                    $this->mus[$curmid][$played_id] = isset($this->mus[$curmid][$played_id]) ? $this->mus[$curmid][$played_id] + $num : $num;
                    $num = $this->mus[$curmid][$played_id];
                    $betRe = Bets::where(['actionNo' => $actionNo,
                        'type' => $curmid,
                        'playedId' => $played_id,
                        'uid' => $uid,
                        'isDelete' => 0
                    ])->sum('actionNum');
                    $num = $num + $betRe;
                    if ($num > $maxzs) {
                        $this->sendError('该玩法当期累计最大投注注数不能超过' . $maxzs . '注');
                        return false;
                    }
                }
            }
        }
        return true;
    }

    /**
     * 彩种玩法最大注数单独控制
     * @param $curmid
     * @param $playedInfo
     * @param $num
     * @param $actionNo
     * @param $uid
     * @return bool
     */
    protected function ZhuShuMax($curmid, $playedInfo, $num, $actionNo, $uid, $data)
    {

        //查询官方id
        $gf = Type::where(array('is_official' => 1))->select();
        $guoTypes = array();
        foreach ($gf as $key => $item) {
            $guoTypes[] = $item['id'];
        }

        if (in_array($curmid, $guoTypes)) {
            //国彩定位胆位数注数限制
            if ($playedInfo['id'] == 37) {
                $dataArr = explode(',', $data);


                if ($playedInfo['wcount'] > 0 && strlen(str_replace('-', '', $dataArr[0])) > $playedInfo['wcount']) {
                    $this->sendError('万位注数不能超过' . $playedInfo['wcount'] . '注');
                    return false;
                }
                if ($playedInfo['qcount'] > 0 && strlen(str_replace('-', '', $dataArr[1])) > $playedInfo['qcount']) {
                    $this->sendError('千位注数不能超过' . $playedInfo['qcount'] . '注');
                    return false;
                }
                if ($playedInfo['bcount'] > 0 && strlen(str_replace('-', '', $dataArr[2])) > $playedInfo['bcount']) {
                    $this->sendError('百位注数不能超过' . $playedInfo['bcount'] . '注');
                    return false;
                }
                if ($playedInfo['scount'] > 0 && strlen(str_replace('-', '', $dataArr[3])) > $playedInfo['scount']) {
                    $this->sendError('十位注数不能超过' . $playedInfo['scount'] . '注');
                    return false;
                }
                if ($playedInfo['gcount'] > 0 && strlen(str_replace('-', '', $dataArr[4])) > $playedInfo['gcount']) {
                    $this->sendError('个位注数不能超过' . $playedInfo['gcount'] . '注');
                    return false;
                }

            }
            if ($playedInfo['id'] == 96 || $playedInfo['id'] == 265) {
                $dataArr = explode(',', $data);
                $t = trim($dataArr[0]);
                if ($playedInfo['dy'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['dy']) {
                    $this->sendError('冠军位注数不能超过' . $playedInfo['dy'] . '注');
                    return false;
                }
                $t = trim($dataArr[1]);
                if ($playedInfo['de'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['de']) {
                    $this->sendError('亚军位注数不能超过' . $playedInfo['de'] . '注');
                    return false;
                }
                $t = trim($dataArr[2]);
                if ($playedInfo['ds'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['ds']) {
                    $this->sendError('第三位注数不能超过' . $playedInfo['ds'] . '注');
                    return false;
                }
                $t = trim($dataArr[3]);
                if ($playedInfo['dx'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['dx']) {
                    $this->sendError('第四位注数不能超过' . $playedInfo['dx'] . '注');
                    return false;
                }
                $t = trim($dataArr[4]);
                if ($playedInfo['dw'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['dw']) {
                    $this->sendError('第五位注数不能超过' . $playedInfo['dw'] . '注');
                    return false;
                }
                $t = trim($dataArr[5]);
                if ($playedInfo['dl'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['dl']) {
                    $this->sendError('第六位注数不能超过' . $playedInfo['dl'] . '注');
                    return false;
                }
                $t = trim($dataArr[6]);
                if ($playedInfo['dq'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['dq']) {
                    $this->sendError('第七位注数不能超过' . $playedInfo['dq'] . '注');
                    return false;
                }
                $t = trim($dataArr[7]);
                if ($playedInfo['db'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['db']) {
                    $this->sendError('第八位注数不能超过' . $playedInfo['db'] . '注');
                    return false;
                }
                $t = trim($dataArr[8]);
                if ($playedInfo['dj'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['dj']) {
                    $this->sendError('第九位注数不能超过' . $playedInfo['dj'] . '注');
                    return false;
                }
                $t = trim($dataArr[9]);
                if ($playedInfo['dsh'] > 0 && $t != '-' && count(explode(' ', $t)) > $playedInfo['dsh']) {
                    $this->sendError('第十位注数不能超过' . $playedInfo['dsh'] . '注');
                    return false;
                }

            }
//        if(in_array($curmid,dynamicConfig::$guoTypes)){
            $maxzs = $playedInfo['gmaxCount'];
        } else {
            $maxzs = $playedInfo['maxCount'];
        }
        if ($maxzs < 0) {
            $this->sendError('玩法正在升级中...');
            return false;
        } else if ($maxzs > 0) {
            $played_id = $playedInfo['id'];
            $this->mus[$curmid][$played_id] = isset($this->mus[$curmid][$played_id]) ? $this->mus[$curmid][$played_id] + $num : $num;
            $num = $this->mus[$curmid][$played_id];
            $betRe = Bets::where(['actionNo' => $actionNo,
                'type' => $curmid,
                'playedId' => $played_id,
                'uid' => $uid,
                'isDelete' => 0
            ])->sum('actionNum');
            $num = $num + $betRe;
            if ($num > $maxzs) {
                $this->sendError('该玩法当期累计最大投注注数不能超过' . $maxzs . '注');
                return false;
            }
        }
        return true;
    }

    /**
     * 玩法注数统一控制
     * @param $betMoney
     * @return bool
     */
    protected function MaxBetMoney($betMoney, $curmid)
    {
        if (in_array($curmid, $this->gc_id)) {
            $maxMoney = Params::getParams('MaxBetMoney')['MaxBetMoney'];
            if ($betMoney > $maxMoney) {
                $this->setError('投注金额超限，最大允许金额为：' . $maxMoney);
                return false;
            }
        }
        return true;
    }

}