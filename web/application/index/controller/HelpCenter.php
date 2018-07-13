<?php
/**
 * Created by PhpStorm.
 * User: wtx
 * Date: 2017/8/30
 * Time: 20:44
 */

namespace app\index\controller;


use think\Controller;
use think\Db;
use think\Session;

class HelpCenter extends Controller
{

    protected function _initialize()
    {
        if(!empty(Session::get('userData'))){
            $this->assign('play_lists',(new Game())->play_list);
            return view('index/login');
        }else{
            $this->user = Session::get('userData');
        }
    }

    public function getIndex()
    {
        return view('help_center/index');
    }

    public function getAnswer()
    {
        return view('help_center/answer');
    }

    public function getPlayIntroduce()
    {
        return view('help_center/play_introduce');
    }

    public function getHowToRecharge()
    {
        return view('help_center/how_to_recharge');
    }

    public function getLatestNotice()
    {
        $pageSize = 20;
        $notices = Db::table('gygy_content')->where('enable',1)->order('addTime','DESC')->paginate($pageSize);
        $total = $notices->total();

        $this->assign('notices',$notices);
        $this->assign('total',$total);
        $this->assign('page',$notices->render());
        $this->assign('currentPage', $notices->currentPage());
        $this->assign('totalPage', ceil($total/$pageSize));

        return view('help_center/latest_notice');
    }

    public function getNoticeDetail(){
        $noticeId = isset($_GET['nid']) ? $_GET['nid'] : 0;
        $notice = Db::table('gygy_content')->where('id','=',$noticeId)->where('enable',1)->find();
        $this->assign('notice',$notice);
        return view('help_center/notice_detail');
    }

    public function getOperateGuide()
    {
        return view('help_center/operate_guide');
    }

    public function getRepairDns()
    {
        return view('help_center/repair_dns');
    }

    public function getClearCache()
    {
        return view('help_center/clear_cache');
    }


    public function getXieYi()
    {
        return view('help_center/xieyi');
    }
}