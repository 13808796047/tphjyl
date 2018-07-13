<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:96:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/report_manage/orders_list.html";i:1528683058;}*/ ?>
<script src="__JS__/sy/subPage.js"></script>
<script src="__JS__/sy/dialogUI/jquery-1.7.min.js"></script>
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.min.css"/>
<link rel="stylesheet" type="text/css" href="__CSS__/select2.min.css"/>
<link rel="stylesheet" href="__CSS__/page.css" />

<div class="ys-content">
    <div class="header">
        帐变记录					</div>
    <div class="main">
        <div class="form section">
            <form action="" method="GET" >
                <input type="hidden" name="isquery" value="1">
                <input type="hidden" name="controller" value="report">
                <input type="hidden" name="action" value="orders">
                <input type="hidden" name="isgetdata" value="1">
                <input type="hidden" name="new" value="1">
                <div class="field">
                    <label>时间</label>
                    <select name="days" id="days" class="dept_select selection">
                        <?php if(is_array($days) || $days instanceof \think\Collection || $days instanceof \think\Paginator): $i = 0; $__LIST__ = $days;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <option  value="<?php echo $vo; ?>" <?php if($vo == @$_GET['days']): ?> selected <?php endif; ?>><?php echo $vo; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </div>
                <div class="inline-fields">
                    <div class="field">
                        <label>选择彩种</label>
                        <select  name="lotteryid" id="lotteryid" class="dept_select selection">
                            <option value="0">所有游戏</option>
                            <?php if(is_array($types_data) || $types_data instanceof \think\Collection || $types_data instanceof \think\Paginator): $i = 0; $__LIST__ = $types_data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                            <option  value="<?php echo $vo['id']; ?>"  <?php if($vo['id'] == @$_GET['lotteryid']): ?> selected <?php endif; ?>><?php echo $vo['title']; ?></option>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </select>
                    </div>
                    <div class="field">
                        <label>投注模式</label>
                        <select name="modes" id="modes" class="selection">
                            <option value="0">所有模式</option>
                            <option value="1" <?php if(1 == @$_GET['modes']): ?> selected <?php endif; ?>>元</option>
                            <option value="2" <?php if(2 == @$_GET['modes']): ?> selected <?php endif; ?>>角</option>
                            <option value="3" <?php if(3 == @$_GET['modes']): ?> selected <?php endif; ?>>分</option>
                            <option value="4" <?php if(4 == @$_GET['modes']): ?> selected <?php endif; ?>>厘</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>帐变类型</label>
                        <select name="ordertype" id="ordertype" class="selection">
                            <option  value="0">所有类型</option>
                            <option <?php if(1 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="1">账户充值</option>
                            <option <?php if(7 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="7">撤单返款</option>
                            <option <?php if(106 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="106">账户提现</option>
                            <option <?php if(8 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="8">提现失败</option>
                            <option <?php if(107 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="107">提现成功</option>
                            <option <?php if(9 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="9">系统充值</option>
                            <option <?php if(51 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="51">活动礼金</option>
                            <option <?php if(52 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="52">充值佣金</option>
                            <option <?php if(53 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="53">消费活动</option>
                            <option <?php if(101 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="101">投注扣款</option>
                            <option <?php if(6 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="6">中奖奖金</option>
                            <option <?php if(2 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="2">游戏返点</option>
                            <option <?php if(102 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="102">追号扣款</option>
                            <option <?php if(12 == @$_GET['ordertype']): ?> selected <?php endif; ?> value="12">下级转账</option>
                        </select>
                    </div>
                    <div class="field">
                        <label style="width: 140px;margin-left: 0;margin-right: 3px">用户名</label>
                        <select name="user_select" id="user_select" class="selection">
                            <option value="1" selected="selected">仅自己</option>
                            <option value="2" <?php if(2 == @$_GET['user_select']): ?> selected <?php endif; ?>  >直接下级</option>
                            <option value="3" <?php if(3 == @$_GET['user_select']): ?> selected <?php endif; ?>  >所有下级</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>下级用户名</label>
                        <input name="username" id="username" class="selection" value="<?php echo !empty($_GET['username'])?$_GET['username'] : ''; ?>" placeholder="用户名" style="height: 28px"/>
                    </div>
                </div>
                <input type="hidden" name="num" value="25">
                <input id="gameInfoBtn" type="submit" class="btn" value="搜索" />
            </form>
        </div>
        <div class="list">
            <table>
                <thead>
                <tr>
                    <th>用户名</th>
                    <th>时间</th>
                    <th>帐变类型</th>
                    <th>彩种</th>
                    <th>玩法</th>
                    <th>期号</th>
                    <th>模式</th>
                    <th>余额变动</th>
                    <th>余额</th>
                </tr>
                </thead>
                <tbody>
                <?php  $coinTotal=0;$userCoinTotal=0;if(is_array($data) || $data instanceof \think\Collection || $data instanceof \think\Paginator): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                <tr>
                    <?php
                    $coinTotal+=$vo['coin'];
                    $userCoinTotal+=$vo['userCoin'];
                    ?>
                    <td><?php echo $vo['username']; ?></td>
                    <td><?=date("Y-m-d",$vo['actionTime'])?></td>
                    <td><?php echo _array_get($liqTypeName,$vo['liqType']); ?></td>
                    <td><?php echo $vo['type_cn']; ?></td>
                    <td><?php echo $vo['played_name']; ?></td>
                    <td><?php echo $vo['actionNo']; ?></td>
                    <td><?php echo _array_get($modeConfig,$vo['mode']); ?></td>
                    <td><?php echo $vo['coin']; ?></td>
                    <td><?php echo $vo['userCoin']; ?></td>
                </tr>
                <?php endforeach; endif; else: echo "" ;endif; if(empty($data) || (($data instanceof \think\Collection || $data instanceof \think\Paginator ) && $data->isEmpty())): ?>
                <tr>
                    <td height="37" colspan="9" align="center">请选择查询条件之后进行查询</td>
                </tr>
                <?php endif; ?>
                <!-- <tr>
                    <td colspan="7">帐变总额： <font color="lightyellow"><b><?php echo $coinTotal; ?></b></font></td>
                    <td colspan="2"><font color="lightyellow"><?php echo $userCoinTotal; ?></font></td>
                </tr> -->
                </tbody>
            </table>
        </div>
        <div class="page" style="margin:0 15px">总计<?php echo $total; ?>个记录, 分为<?php echo $totalPage; ?>页, 当前第 <?php echo $currentPage; ?>页
            <SPAN ID="tPages"> &nbsp;
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
    $(function () {
        if($("#today").lenght > 0){
            $("#today").select2();
            $("#today").on('select2:select', function () {
                var number = $(this).val();
                if (number == 1) {
                    $("#time").show();
                } else {
                    $("#time").hide();
                }
            });
        }
        if($("select[name='pages']").length > 0) {
            $("select[name='pages']").select2({
                minimumResultsForSearch: Infinity
            });
        }

        $("#user_select").select2()
        $("#user_select").on('select2:select', function () {
            var number = $(this).val();
            if (number == 0 || number == 2) {
                $("#useridfield").hide();
            } else {
                $("#useridfield").show();
            }
        });
        $("#lotteryid, #modes, #ordertype, #userid").select2();
        $("select[name='days']").select2({
            minimumResultsForSearch: Infinity
        });

        /*$('#gameInfoBtn').click(function(){
            if( $("#user_select").val() == 1 && (!($("#userid").val())||0 == $("#userid").val().length )){
                alert("请输入直接下级的用户名");
                return false;
            }
        });*/
    });

</script>