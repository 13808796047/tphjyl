<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Admin\Controller;

/**
 * 后台首页控制器
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */
class PayConfigController extends AdminController
{
    protected static $allow = array( 'verify');

    /**
     * 后台首页
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    public function index()
    {
        /* 查询条件初始化 */
        $map = array();
        $list = M('paybusiness')->where(array())->order('id desc')->select();
        $this->recordList($list);
        $this->meta_title = '支付配置';
        $this->display();
    }

    public function add()
    {
        if (IS_POST) {
            $data['business_id'] = I('business_id');
            $data['business_name'] = I('business_name');
            $data['business_alias'] = I('business_alias');
            $data['business_key'] = I('business_key');
            $data['tj_url'] = I('tj_url');
            $data['enable'] = I('enable');
            $id = I('id');
            if($id){
                if (M('paybusiness')->where(array('id'=>$id))->save($data)) {
                    $this->success('更新成功', U('payConfig/index'));
                } else {
                    $this->error('更新失败');
                }
            }else{
                if (M('paybusiness')->add($data)) {
                    $this->success('新增成功', U('payConfig/index'));
                } else {
                    $this->error('新增失败');
                }
            }
        } else {
            $this->meta_title = '新增商户';
            $this->display();
        }
    }
    /**
     * 编辑配置
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    public function update()
    {
        if (IS_POST) {
//            $data['id'] = I('id', '', 'intval');
            $data['business_id'] = I('business_id');
            $data['business_name'] = I('business_name');
            $data['business_alias'] = I('business_alias');
            $data['business_key'] = I('business_key');
            $data['tj_url'] = I('tj_url');
            $data['enable'] = I('enable');
            if (M('paybusiness')->where(array('id'=>I('id', 0, 'intval')))->save($data)) {
                $this->success('更新成功', U('payConfig/index'));
            } else {
                $this->error('更新失败');
            }
        } else {
            $content = M('paybusiness')->find(I('id', '', 'intval'));

            $this->assign('content', $content);
            $this->meta_title = '编辑配置';
            $this->display('PayConfig/add');
        }
    }

    final public function delete()
    {
        if (M('paybusiness')->where(array('id'=>I('id', '', 'intval')))->delete()) {
            $this->success('删除成功', U('payConfig/index'));
        } else {
            $this->error('删除失败');
        }
    }

    final public function entry()
    {
        $list = M('payentry')->where(array('paybusiness_id'=>I('paybusiness_id')))->order('id desc')->select();
        $this->recordList($list);
        $this->assign('paybusiness_id', $_GET['paybusiness_id']);
        $this->display('PayConfig/entry');
    }

    final public function addEntry()
    {
        if (IS_POST) {
            $data['paybusiness_id'] = I('paybusiness_id');
            $data['entry_name'] = I('entry_name');
            $data['entry_code'] = I('entry_code');
            $data['enable'] = I('enable');
            if (M('payentry')->add($data)) {
                $this->success('新增成功', U('payConfig/entry?paybusiness_id='.I('paybusiness_id')));
            } else {
                $this->error('新增失败');
            }
        } else {
            $data['paybusiness_id'] = I('paybusiness_id');
            $this->assign('content', $data);
            $this->meta_title = '通道配置';
            $this->display();
        }
    }

    final public function updateEntry()
    {
        if (IS_POST) {
            $data['id'] = I('id', '', 'intval');
            $data['paybusiness_id'] = I('paybusiness_id');
            $data['entry_name'] = I('entry_name');
            $data['entry_code'] = I('entry_code');
            $data['enable'] = I('enable');
            if (M('payentry')->save($data)) {
                $this->success('更新成功', U('payConfig/entry?paybusiness_id='.I('paybusiness_id')));
            } else {
                $this->error('更新失败');
            }
        } else {
            $content = M('payentry')->find(I('id', '', 'intval'));
            $this->assign('content', $content);
            $this->meta_title = '编辑通道';
            $this->display('PayConfig/addEntry');
        }
    }

    final public function entryDelete()
    {
        if (M('payentry')->where(array('id'=>I('id', '', 'intval')))->delete()) {
            $this->success('删除成功', U('payConfig/entry?paybusiness_id='.I('paybusiness_id')));
        } else {
            $this->error('删除失败');
        }
    }
}
