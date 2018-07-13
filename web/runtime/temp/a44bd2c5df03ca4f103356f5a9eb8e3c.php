<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:96:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/report_manage/report_list.html";i:1530954009;}*/ ?>
<link href="__CSS__/sy/base.css" rel="stylesheet" type="text/css" media="all" />
<link href="__CSS__/sy/subpage.css" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" type="text/css" media="all" href="__CSS__/calendar/calendar-green.css"  />
<link href="__CSS__/houtai.css" type="text/css" rel="stylesheet"/>
<link href="__CSS__/common.css" type="text/css" rel="stylesheet"/>
<link rel="stylesheet" href="__CSS__/default_content.min.css">
<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css">
<script src="__JS__/sy/subPage.js"></script>
<script src="__JS__/sy/tab.js"></script>
<script src="__JS__/sy/dialogUI/jquery-1.7.min.js"></script>
<script src="__JS__/main.min.js"></script>
<script src="__JS__/calendar/jquery.dyndatetime.js"></script>
<script src="__JS__/calendar/calendar-utf8.js"></script>
<script src="__JS__/sy/iframe.js"></script>
<script src="__JS__/sy/main.js"></script>
<script src="__JS__/select2.min.js"></script>

<script language="javascript">
var localpath='';
function firadio_cookie_set(name,value,expire,path){
	//expire=expire||30*24*60*60*1000;
	var curdate=new Date();
	var cookie=name+"="+encodeURIComponent(value)+"; ";
	if(expire!=undefined||expire==0){
		if(expire==-1){
			expire=366*(86400*1000);//保存一年
		}else{
			expire=parseInt(expire);
		}
		curdate.setTime(curdate.getTime()+expire);
		cookie+="expires="+curdate.toUTCString()+"; ";
	}
	path=path||"/";
	cookie+="path="+path;
	document.cookie=cookie;
}
function firadio_cookie_get(name){
	var re = "(?:; )?" + encodeURIComponent(name) + "=([^;]*);?";
	re = new RegExp(re);
	if (re.test(document.cookie)) {
		return decodeURIComponent(RegExp.$1);
	}
	return '';
}
</script>
<script>
// jQuery(document).ready(function() {
// 	if(jQuery('#date0').val()=='1'){
// 		jQuery('#lol').hide();jQuery('#lol1').show();jQuery('#lol2').hide();jQuery('#lol3').hide();jQuery('#lol4').hide();
// 	}
// 	else if(jQuery('#date0').val()=='2'){
// 		jQuery('#lol').show();jQuery('#lol2').show();jQuery('#lol1').hide();jQuery('#lol3').hide();jQuery('#lol4').hide();
// 	}
// 	else if(jQuery('#date0').val()=='3'){
// 		jQuery('#lol').show();jQuery('#lol3').show();jQuery('#lol1').hide();jQuery('#lol2').hide();jQuery('#lol4').show();
// 	}
//
// 	$("#lottery").val();
// 	$("#lottery").change();
// 	$("#method").val();
// 	$("select").select2();
// });

</script>

<div class="ys-content">
	<div class="header">盈亏查询</div>
	<div class="main">
		<div class="form section">
			<form action="" method="GET" class="list-form">
				<input type="hidden" name="isquery" value="1">
				<input type="hidden" name="controller" value="report">
				<input type="hidden" name="action" value="list">
				<input type="hidden" name="isgetdata" value="1">
				<dl class="clearfix field">
					<label>投注时间</label>
					<select class="selection" id="date0" name="date0"
								onchange="if(jQuery(this).val()=='1') {jQuery('#lol').hide();jQuery('#lol1').show();jQuery('#lol2').hide();jQuery('#lol3').hide();jQuery('#lol4').hide();};
										  if(jQuery(this).val()=='2' ) {jQuery('#lol').show();jQuery('#lol2').show();jQuery('#lol1').hide();jQuery('#lol3').hide();jQuery('#lol4').hide();};
										  if(jQuery(this).val()=='3' ) {jQuery('#lol').show();jQuery('#lol3').show();jQuery('#lol1').hide();jQuery('#lol2').hide();jQuery('#lol4').show();}">
								<option  value="1" <?php if(1 == @$_GET['date0']): ?> selected <?php endif; ?>>今天统计</option>
								<option  value="2" <?php if(2 == @$_GET['date0']): ?> selected <?php endif; ?>>历史总计</option>
								<!-- <option  value="3">历史详情</option> -->
						</select> &nbsp;&nbsp;&nbsp;
						<span id="lol">
							<select class="selection" name="date1">
								<?php if(is_array($days) || $days instanceof \think\Collection || $days instanceof \think\Paginator): $i = 0; $__LIST__ = $days;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
		                        <option  value="<?php echo $vo; ?>" <?php if($vo == @$_GET['date1']): ?> selected <?php endif; ?>><?php echo $vo; ?></option>
		                        <?php endforeach; endif; else: echo "" ;endif; ?>
	                        </select>
							&nbsp; ~ &nbsp;
							<select class="selection" name="date2">
								<?php if(is_array($days) || $days instanceof \think\Collection || $days instanceof \think\Paginator): $i = 0; $__LIST__ = $days;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
		                        <option  value="<?php echo $vo; ?>" <?php if($vo == @$_GET['date2']): ?> selected <?php endif; ?>><?php echo $vo; ?></option>
		                        <?php endforeach; endif; else: echo "" ;endif; ?>
		                    </select> &nbsp;&nbsp;&nbsp;
						</span>
					</dl>
										<dl id="lol4" class="field">
						<label>用户名</label>
							<input type="text" name="username" id="username" size="16" class="custom_input" value="" />
							<label for="include" class="user_type_checkbox"><input type="checkbox" name="include" id="include" value="1" > 包含下级 </label>
					</dl>
					<dl class="field">
						<dd>备注</dd>
						<span style="color:red" >
								<span id="lol1">※今天统计※ 统计您与下级今日的盈亏总和，统计时间为早上7点至次日凌晨5点</span>
								<span id="lol2">※历史总计※ 会统计您与下级查询时间内的盈亏总和</span>
								<!-- <span id="lol3">※历史详情※ 输入下级名称可查看下级每日盈亏记录，不输入为查询自己的</span> -->
						</span>
					</dl>
					<input type="submit" value="查询" class="alert_btn">
					<!-- <input type="button" id="show-detail" class="alert_btn hidden" value="显示详情" style="margin: 20px 0 0;"> -->
				</form>
			</div>
			<div class="list">
		    <div style=" overflow-x:auto">
				<table style="width:753px" class="yingkui_chaxun">
					<thead>
						<tr>
							<th>用户名</th>
							<th>所属组</th>
							<!-- <th>充值总额</th>
							<th>提现总额</th> -->
							<th>投注总额</th>
							<th>中奖总额</th>
							<th>返点总额</th>
							<th>活动总额</th>
							<th>游戏总盈亏</th>
						</tr>
					</thead>
					<tbody>
						<?php if(is_array($data) || $data instanceof \think\Collection || $data instanceof \think\Paginator): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
						<tr align="center">
							<td><?php echo $vo['username']; ?></td>
							<td><?php echo $vo['type']; ?></td>
							<!-- <td><?php echo $vo['rechargeAmount']; ?></td>
													    <td><?php echo $vo['cashAmount']; ?></td> -->
						    <td><?php echo $vo['betAmount']; ?></td>
							<td><?php echo $vo['zjAmount']; ?></td>
							<td><?php echo $vo['fanDianAmount']; ?></td>
							<td><?php echo $vo['brokerageAmount']; ?></td>
							<td><?php echo $vo['zyk']; ?></td>
                        </tr>
						<?php endforeach; endif; else: echo "" ;endif; if(empty($data) || (($data instanceof \think\Collection || $data instanceof \think\Paginator ) && $data->isEmpty())): ?>
		                <tr>
		                    <td height="37" colspan="8" align="center">请选择查询条件之后进行查询</td>
		                </tr>
		                <?php endif; ?>
						<tr>
							<td style="text-align:center">合计</th>
							<!-- <td style="text-align:center"><?php echo $all['rechargeAmount']; ?></td>
													    <td style="text-align:center"><?php echo $all['cashAmount']; ?></td> -->
						    <td style="text-align:center"></td>
							<td style="text-align:center"><?php echo $all['betAmount']; ?></td>
							<td style="text-align:center"><?php echo $all['zjAmount']; ?></td>
							<td style="text-align:center"><?php echo $all['fanDianAmount']; ?></td>
							<td style="text-align:center"><?php echo $all['brokerageAmount']; ?></td>
			                <td style="text-align:center"><?php echo $all['zyk']; ?></td>
		            	</tr>
					</tbody>
				</table>
		    </div>
			</div>
		</div>
	</div>
	<script type="text/javascript">

            jQuery("#starttime").dynDateTime({
                ifFormat: "%Y-%m-%d %H:%M:00",
                daFormat: "%l;%M %p, %e %m,  %Y",
                align: "Br",
                electric: true,
                singleClick: false,
                button: ".next()", //next sibling
                onUpdate:function(){
                    $("#starttime").change();
                },
                showOthers: true,
                weekNumbers: true,
                showsTime: true
            });
            jQuery("#starttime").change(function(){
                if(! validateInputDate(jQuery("#starttime").val()) )
                {
                    jQuery("#starttime").val('');
                    alert("时间格式不正确,正确的格式为:2009-06-10 10:59");
                }
                if($("#endtime").val()!="")
                {
                    if($("#starttime").val()>$("#endtime").val())
                    {
                        $("#starttime").val("");
                        alert("输入的时间不符合逻辑");
                    }
                }
            });
            jQuery("#endtime").dynDateTime({
                ifFormat: "%Y-%m-%d %H:%M:00",
                daFormat: "%l;%M %p, %e %m,  %Y",
                align: "Br",
                electric: true,
                singleClick: false,
                button: ".next()", //next sibling
                onUpdate:function(){
                    $("#endtime").change();
                },
                showOthers: true,
                weekNumbers: true,
                showsTime: true
            });
            jQuery("#endtime").change(function(){
                if(! validateInputDate(jQuery("#endtime").val()) )
                {
                    jQuery("#endtime").val('');
                    alert("时间格式不正确,正确的格式为:2009-06-10 10:59");
                }
                if($("#starttime").val()!="")
                {
                    if($("#starttime").val()>$("#endtime").val())
                    {
                        $("#endtime").val("");
                        alert("输入的时间不符合逻辑");
                    }
                }
            });
            jQuery(function(){
	            var parentWindow = window.parent,
					height = Number($('.ys-content').outerHeight(true));
				parentWindow.autoResizeHeight(height);
				$("#show-detail").click(function(){
					if($(this).hasClass("hidden")){
						$(".hidable").show();
						$(".no-records").attr("colspan","10");
						$(".yingkui_chaxun").css("width","1000px");
						$(this).removeClass("hidden").addClass("showing").val("隐藏详情");
					}
					else{
						$(".hidable").hide();
						$(".no-records").attr("colspan","7");
						$(".yingkui_chaxun").css("width","753px");
						$(this).removeClass("showing").addClass("hidden").val("显示详情");
					}
				});
			});
        </script>
