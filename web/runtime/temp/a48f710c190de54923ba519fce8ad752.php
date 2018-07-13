<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:98:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/report_manage/recharge_list.html";i:1528683058;}*/ ?>
<script src="__JS__/sy/dialogUI/jquery-1.7.min.js"></script>
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.min.css"/>
<link rel="stylesheet" type="text/css" href="__CSS__/select2.min.css"/>
<link rel="stylesheet" href="__CSS__/page.css" />
<div class="ys-content">
    <div class="header">
        充值记录
    </div>
    <div class="main">
        <div class="form section">
            <form action="" method="get" name="search" >
                <input type="hidden" name="isquery" value="1">
                <input type="hidden" name="controller" value="report" />
                <input type="hidden" name="action" value="bankreport" />
                <dl class="field">
                    <label>充值时间</label>
                    <select name="days" class="dept_select selection">
                        <?php if(is_array($days) || $days instanceof \think\Collection || $days instanceof \think\Paginator): $i = 0; $__LIST__ = $days;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <option  value="<?php echo $vo; ?>" <?php if($vo == @$_GET['days']): ?> selected <?php endif; ?>><?php echo $vo; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </select> ~
                    <select name="days2" class=" dept_select selection">
                        <?php if(is_array($days) || $days instanceof \think\Collection || $days instanceof \think\Paginator): $i = 0; $__LIST__ = $days;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <option  value="<?php echo $vo; ?>" <?php if($vo == @$_GET['days2']): ?> selected <?php endif; ?>><?php echo $vo; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </dl>
                <dl class="field">
                    <label>用户名</label>
                    <select name="utype" id="ordertype"  class="dept_select selection">
                        <option value="1" selected="selected">仅自己</option>
                        <option value="2" <?php if(2 == @$_GET['utype']): ?> selected <?php endif; ?> >直属下级</option>
                        <option value="3" <?php if(3 == @$_GET['utype']): ?> selected <?php endif; ?> >所有下级</option>
                    </select>
                </dl>
                <dl class="field">
                    <label>充值会员</label>
                    <input name="username" id="username" class="selection" value="<?php echo !empty($_GET['username'])?$_GET['username'] : ''; ?>" placeholder="用户名" style="height: 28px"/>
                </dl>
                <input id="gameInfoBtn" type="submit" class="btn" value="搜索" />
            </form>
        </div>
        <div class="list">
            <table>
                <thead>
                <tr>
                    <!-- <th>充值编号</th> -->
                    <th>用户名</th>
                    <th>时间</th>
                    <th>金额</th>
                    <th>实际到账金额</th>
                    <th>状态</th>
                    <th>备注</th>
                </tr>
                </thead>
                <tbody>
                <?php  $rechargeTotal=0;$successTotal=0;if(is_array($data) || $data instanceof \think\Collection || $data instanceof \think\Paginator): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                <tr>
                    <?php
                    $rechargeTotal+=$vo['amount'];
                    $successTotal+=$vo['rechargeAmount'];
                    ?>
                    <!-- <td><?php echo $vo['rechargeId']; ?></td> -->
                    <td><?php echo $vo['username']; ?></td>
                    <td><?=date("Y-m-d",$vo['actionTime'])?></td>
                    <td><?php echo $vo['amount']; ?></td>
                    <td><?php echo $vo['rechargeAmount']; ?></td>
                    <td>
                        <?php switch($vo['state']): case "0": ?>用户申请<?php break; case "1": ?>成功到账<?php break; case "2": ?>成功到账<?php break; case "9": ?>成功到账<?php break; default: ?>充值失败
                        <?php endswitch; ?>
                    </td>
                    <td><?php echo $vo['info']; ?></td>
                </tr>
                <?php endforeach; endif; else: echo "" ;endif; if(empty($data) || (($data instanceof \think\Collection || $data instanceof \think\Paginator ) && $data->isEmpty())): ?>
                <tr>
                    <td height="37" colspan="9" align="center">请选择查询条件之后进行查询</td>
                </tr>
                <?php endif; ?>
                </tbody>
                <tfoot>
                <tr>
                    <th colspan="2"></th>
                    <th><?php echo $rechargeTotal; ?></th>
                    <th><?php echo $successTotal; ?></th>
                    <th colspan="2"></th>
                </tr>
                </tfoot>
            </table>
        </div>
        <div class="page" style="margin-left:15px">总计<?php echo $total; ?>个记录, 分为<?php echo $totalPage; ?> 页, 当前第 <?php echo $currentPage; ?>页<SPAN ID="tPages"> &nbsp;
             <div style="display: inline-flex" class="page_right">
			  <?php echo $page; ?>
		  </div>
&nbsp;</SPAN>
        </div>
    </div>
</div>

<script type="text/javascript" src="__TODO__/js/common/model/details.js" ></script>
<script type="text/javascript" src="__JS__/select2.min.js" ></script>
<script type="text/javascript">
    $(function(){
        $("select[name='days']").select2();
        $("select[name='days2']").select2();
        $("#ordertype").select2();
    });
</script>