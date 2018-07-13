<?php
namespace app\index\controller;


use think\Controller;
use think\Request;
use think\Session;
use think\Db;

class Trend extends Controller
{
    protected $mmcConfig = [1,3,12,41,42,43,37,40,35,36,5,34,14];
    protected $sscConfig = [38,39,6,16,15];
    protected $pk10Config = 20;

    public function chart(Request $request)
    {
        $type = $request->get('type') ? $request->get('type') : 36;
        $type_name = $request->get('type_name') ? str_replace('.html', '', $request->get('type_name')) : '';
        $issuecount = $request->get('issuecount') ? $request->get('issuecount') : 30;
        $mod = $request->get('mod') ? $request->get('mod') : 'five';
        $this->assign('type',$type);
        $this->assign('type_name',$type_name);
        $this->assign('issuecount',$issuecount);
        $this->assign('sscConfig',$this->sscConfig);
        //辅助位
        $assist = [
            'ns' => 5,
            'nts' => 60,
            'ntx' => 0,
            'ntd' => 9,
            'ntn' => 10
        ];
        if (in_array($type,$this->mmcConfig)) {
            $assist['ns'] = 5;
            $assist['nts'] = 60;
            $assist['ntx'] = 0;
            $assist['ntd'] = 9;
            $assist['ntn'] = 10;
        } else if(in_array($type,$this->sscConfig)) {
            $assist['ns'] = 5;
            $assist['nts'] = 66;
            $assist['ntx'] = 1;
            $assist['ntd'] = 11;
            $assist['ntn'] = 11;
        }else{
            if ($type == 10 || $type == 9) {
                $assist['ns'] = 3;
                $assist['nts'] = 40;
                $assist['ntx'] = 0;
                $assist['ntd'] = 9;
                $assist['ntn'] = 10;
            }
        }
        
        $rs = Db::table('gygy_data')
            ->cache(true, 15, 'xcache')
            ->where(array('type' => $type))
            ->order('time desc')
            ->limit($issuecount)
            ->select();
        foreach ($rs as $k => $v) {
            if ($mod == 'five') {
                continue;
            }else{
                $dataArr = explode(",",$v['data']);
                if ($mod == 'four') {
                    unset($dataArr[0]);
                    $rs[$k]['data'] = join(",",$dataArr);
                }elseif ($mod == 'top_three') {
                    unset($dataArr[3]);
                    unset($dataArr[4]);
                    $rs[$k]['data'] = join(",",$dataArr);
                }elseif ($mod == 'center_three') {
                    unset($dataArr[0]);
                    unset($dataArr[4]);
                    $rs[$k]['data'] = join(",",$dataArr);
                }elseif ($mod == 'last_three') {
                    unset($dataArr[0]);
                    unset($dataArr[1]);
                    $rs[$k]['data'] = join(",",$dataArr);
                }elseif ($mod == 'top_two') {
                    unset($dataArr[2]);
                    unset($dataArr[3]);
                    unset($dataArr[4]);
                    $rs[$k]['data'] = join(",",$dataArr);
                }elseif ($mod == 'last_two') {
                    unset($dataArr[0]);
                    unset($dataArr[1]);
                    unset($dataArr[2]);
                    $rs[$k]['data'] = join(",",$dataArr);
                }
            }
        }
        /*var_dump($rs);
        exit();*/
        if (!empty($rs[0]['data'])  && in_array($type,$this->mmcConfig)) {
            $assist['ns'] = count(explode(',',$rs[0]['data']));
            $assist['nts'] = ($assist['ns'] + 1) * 10;
        }
        $this->assign('assist',$assist);
        $rs = array_reverse($rs);
        $total = count($rs);    
        $this->assign('rs',$rs);
        $this->assign('total',$total);
        
        if (in_array($type,$this->sscConfig)) {
            return view('trend/chart_11_5');
        }
        return view('trend/chart');
    }

    /*public function chart11_5(){
        $type = I('type') ? I('type') : 38;
        $type_name = I('type_name') ? I('type_name') : '';
        $issuecount = I('issuecount') ? I('issuecount') : 30;
        $mod = I('mod') ? I('mod') : 'five';
        $this->assign('type',$type);
        $this->assign('type_name',$type_name);
        $this->assign('issuecount',$issuecount);
        //辅助位
        $assist = [
            'ns' => 5,
            'nts' => 60,
            'ntx' => 0,
            'ntd' => 9,
            'ntn' => 10
        ];
        if (in_array($type,$this->mmcConfig)) {
            $assist['ns'] = 5;
            $assist['nts'] = 60;
            $assist['ntx'] = 0;
            $assist['ntd'] = 9;
            $assist['ntn'] = 10;
        } else {
            if ($type == 10 || $type == 9) {
                $assist['ns'] = 3;
                $assist['nts'] = 40;
                $assist['ntx'] = 0;
                $assist['ntd'] = 9;
                $assist['ntn'] = 10;
            } else {
                if ($type == 6 || $type == 15 || $type == 16) {
                    $assist['ns'] = 5;
                    $assist['nts'] = 66;
                    $assist['ntx'] = 1;
                    $assist['ntd'] = 11;
                    $assist['ntn'] = 11;
                }
            }
        }
        $this->assign('assist',$assist);
        $rs = M('data')->cache(true, 15, 'xcache')->where(array('type' => $type))->order('time desc')->limit($issuecount)->select();
        $rs = array_reverse($rs);
        $total = count($rs);
        $this->assign('rs',$rs);
        $this->assign('total',$total);
        $this->display();
    }*/

    public function chartKl18(){
        return view('trend/chart_kl8');
        /*$id = I('id');
        $issuecount = I('issuecount');
        $wday = I('wday');
        $starttime = I('starttime');
        $endtime = I('endtime');
        if ($id == '') {
            $id = 1;
        }

        $refreshCnt = 0;
        $timestampcc = time();
        $cc_nowtime = $timestampcc;
        if($_SESSION['cc_lasttime']){
            $cc_lasttime = $_SESSION['cc_lasttime'];
            $cc_times = $_SESSION['cc_times']+1;
            $_SESSION['cc_times'] = $cc_times;
        }else{
            $cc_lasttime = $cc_nowtime;
            $cc_times = 1;
            $_SESSION['cc_times'] = $cc_times;
            $_SESSION['cc_lasttime'] = $cc_lasttime;
        }
        if(($cc_nowtime-$cc_lasttime)<30){
            if($cc_times>=3){
                $refreshCnt = 1;
            }
        }else{
            $cc_times = 0;
            $_SESSION['cc_lasttime'] = $cc_nowtime;
            $_SESSION['cc_times'] = $cc_times;
        }

        if ($issuecount >= 30) {
        $rs = M('data')->cache(true, 30, 'xcache')->where(array('type' => $id))->order('time desc')->limit($issuecount)->select();
        $rs = array_reverse($rs);
        foreach($rs as $k => $v){
            $rs[$k]['data'] = explode(',',substr($v['data'],0,-3));
            $rs[$k]['feipan'] = substr($v['data'],-2);
            $rs[$k]['total'] = array_sum($rs[$k]['data']);

            // 大小
            if($rs[$k]['total'] < 810){
                $rs[$k]['daxiao'] = "小";
            }elseif($rs[$k]['total'] == 810){
                $rs[$k]['daxiao'] = "和";
            }else{
                $rs[$k]['daxiao'] = "大";
            }

            // 单双
            if($rs[$k]['total'] % 2){
                $rs[$k]['danshaung'] = "单";
            }else{
                $rs[$k]['danshaung'] = "双";
            }

            // 上下盘/奇偶盘
            $upCnt = 0;
            $downCnt = 0;
            $jiCnt = 0;
            $ouCnt = 0;
            foreach($rs[$k]['data'] as $value){
                if((int)$value < 41){
                    $upCnt += 1;
                }else{
                    $downCnt += 1;
                }

                if((int)$value % 2){
                    $jiCnt += 1;
                }else{
                    $ouCnt += 1;
                }
            }
            if($upCnt > $downCnt){
                $rs[$k]['position'] = "上";
            }elseif($upCnt == $downCnt){
                $rs[$k]['position'] = "中";
            }else{
                $rs[$k]['position'] = "下";
            }

            if($jiCnt > $ouCnt){
                $rs[$k]['jioushu'] = "奇";
            }elseif($jiCnt == $ouCnt){
                $rs[$k]['jioushu'] = "和";
            }else{
                $rs[$k]['jioushu'] = "偶";
            }
        }
        $total = count($rs);
        }
        if (!empty($starttime) || !empty($endtime)) {
        $starttime = strtotime($starttime . ' 00:00:00');
        $endtime = strtotime($endtime . ' 23:59:59');
        //$sql="select * from gyy_data where type='".$id."' and time between ".$starttime." and ".$endtime." order by number desc";
        $rs = M('data')->where(array('type' => $id, 'time' => array('between', array($starttime, $endtime))))->order('number desc')->select();
        $total = count($rs);
        }
        if ($wday == 'b' || $wday == 'y' || $wday == 't') {
        if ($wday == 'b') {
        $starttime = strtotime(date('Y-m-d 00:00:00', time() - 24 * 60 * 60 * 2));
        $endtime = strtotime(date('Y-m-d 23:59:59', time() - 24 * 60 * 60 * 2));
        }
        if ($wday == 'y') {
        $starttime = strtotime(date('Y-m-d 00:00:00', time() - 24 * 60 * 60));
        $endtime = strtotime(date('Y-m-d 23:59:59', time() - 24 * 60 * 60));
        }
        if ($wday == 't') {
        $starttime = strtotime(date('Y-m-d 00:00:00', time()));
        $endtime = strtotime(date('Y-m-d 23:59:59', time()));
        }
        //$sql="select * from gyy_data where type='".$id."' and time between ".$starttime." and ".$endtime." order by number desc";
        $rs = M('data')->where(array('type' => $id, 'time' => array('between', array($starttime, $endtime))))->order('number desc')->select();
        $total = count($rs);
        }
        if ($id == 1 || $id == 3 || id == 12 || $id == 14 || $id == 34) {
            $ns = 5;
            $nts = 60;
            $ntx = 0;
            $ntd = 9;
            $ntn = 10;
        } else {
            if ($id == 10 || $id == 9) {
                $ns = 3;
                $nts = 40;
                $ntx = 0;
                $ntd = 9;
                $ntn = 10;
            } else {
                if ($id == 6 || $id == 15 || $id == 16 || $id==38 || $id==39) {
                    $ns = 5;
                    $nts = 66;
                    $ntx = 1;
                    $ntd = 11;
                    $ntn = 11;
                }else if($id == 20){
                    $ns = 5;
                    $nts = 66;
                    $ntx = 1;
                    $ntd = 11;
                    $ntn = 11;
                }
            }
        }*/
    }

    public function chartPk10(Request $request){
        $type = $request->get('type') ? $request->get('type') : 20;
        $type_name = $request->get('type_name') ? str_replace('.html', '', $request->get('type_name')) : '';
        $issuecount = $request->get('issuecount') ? $request->get('issuecount') : 30;
        $mod = $request->get('mod') ? $request->get('mod') : 'five';
        $this->assign('type',$type);
        $this->assign('type_name',$type_name);
        $this->assign('issuecount',$issuecount);
        $this->assign('sscConfig',$this->sscConfig);

        $ns = 10;
        $nts = 100;
        $ntx = 1;
        $ntd = 10;
        $ntn = 10;
        $this->assign('ns',$ns);
        $this->assign('nts',$nts);
        $this->assign('ntx',$ntx);
        $this->assign('ntd',$ntd);
        $this->assign('ntn',$ntn);

        $rs = Db::table('gygy_data')
            ->cache(true, 15, 'xcache')
            ->where(array('type' => $type))
            ->order('time desc')
            ->limit($issuecount)
            ->select();
        $total = count($rs);

        $rs = array_reverse($rs);
        $this->assign('rs',$rs);
        $this->assign('total',$total);

        return view('trend/chart_pk10');
    }

    public function chartP3(Request $request){
        $type = $request->get('type') ? $request->get('type') : 36;
        $type_name = $request->get('type_name') ? str_replace('.html', '', $request->get('type_name')) : '';
        $issuecount = $request->get('issuecount') ? $request->get('issuecount') : 30;
        $mod = $request->get('mod') ? $request->get('mod') : 'five';
        $this->assign('type',$type);
        $type_name1 = $type_name;
        if ($mod == 'top_three') {
            $type_name1 .= '三星';
        }elseif ($mod == 'top_two') {
            $type_name1 .= '前二';
        }elseif ($mod == 'last_two') {
            $type_name1 .= '后二';
        }
        $this->assign('type_name',$type_name);
        $this->assign('type_name1',$type_name1);
        $this->assign('issuecount',$issuecount);
        $this->assign('sscConfig',$this->sscConfig);
        //辅助位
        $assist = [
            'ns' => 3,
            'nts' => 40,
            'ntx' => 0,
            'ntd' => 9,
            'ntn' => 10
        ];

        $rs = Db::table('gygy_data')
            ->cache(true, 15, 'xcache')
            ->where(array('type' => $type))
            ->order('time desc')
            ->limit($issuecount)
            ->select();
        foreach ($rs as $k => $v) {
            if ($mod == 'top_three') {
                continue;
            }elseif ($mod == 'top_two') {
                $rs[$k]['data'] = substr($v['data'],0,3);

            }elseif ($mod == 'last_two') {
                $rs[$k]['data'] = substr($v['data'],-3);
            }
        }
        if (!empty($rs[0]['data'])) {
            $assist['ns'] = count(explode(',',$rs[0]['data']));
            $assist['nts'] = ($assist['ns'] + 1) * 10;
        }
        $this->assign('assist',$assist);
        /*dump($rs[0]['data']);
        exit();*/
        $rs = array_reverse($rs);
        $total = count($rs);
        $this->assign('rs',$rs);
        $this->assign('total',$total);

        return view('trend/chart_p3');
    }

    public function chartHjlf(Request $request){
        $type = $request->get('type') ? $request->get('type') : 46;
        $type_name = $request->get('type_name') ? str_replace('.html', '', $request->get('type_name')) : '';
        $issuecount = $request->get('issuecount') ? $request->get('issuecount') : 30;
        $mod = $request->get('mod') ? $request->get('mod') : 'five';
        $this->assign('type',$type);
        $type_name1 = $type_name;
        
        $this->assign('type_name',$type_name);
        $this->assign('type_name1',$type_name1);
        $this->assign('issuecount',$issuecount);
        $this->assign('sscConfig',$this->sscConfig);
        //辅助位
        $assist = [
            'ns' => 1,
            'nts' => 8,
            'ntx' => 0,
            'ntd' => 1,
            'ntn' => 2
        ];

        $rs = Db::table('gygy_data')
            // ->cache(true, 15, 'xcache')
            ->where(array('type' => $type))
            ->order('time desc')
            ->limit($issuecount)
            ->select();
        foreach ($rs as $k => $v) {
            
        }
        if (!empty($rs[0]['data'])) {
            $assist['ns'] = count(explode(',',$rs[0]['data']));
            $assist['nts'] = ($assist['ns'] + 1) * 10;
        }
        $this->assign('assist',$assist);
        $rs = array_reverse($rs);
        $total = count($rs);
        $this->assign('rs',$rs);
        $this->assign('total',$total);
        return view('trend/chart_hjlf');
    }
}