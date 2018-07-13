<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:85:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/user/user_team.html";i:1530856712;}*/ ?>
﻿
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.min.css"/>
</head>
<body id="lan">
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.css" />
<link rel="stylesheet" type="text/css" href="__CSS__/user_team.css" />
<link rel="stylesheet" type="text/css" href="__JS__/doubleDate.css">
<div class="ys-content">
    <div class="header">
        团队统计    </div>
    <div class="section form">
        <ul class="ulstyle_none">
            <li class="radius_linebox">
                <span>团队余额</span>
                <p><?php echo $team_coin; ?></p>
            </li>
            <li class="radius_linebox">
                <span>团队总人数</span>
                <p><?php echo $team_man; ?></p>
            </li>
            <li class="radius_linebox">
                <span>今日新增人数</span>
                <p><?php echo $today_add; ?></p>
            </li>
            <!--<li class="radius_linebox">
                <span>今日投注人数</span>
                <p><?php echo $today_bets; ?></p>
            </li>-->
            <li class="radius_linebox">
                <span>当前在线人数</span>
                <p><?php echo $online; ?></p>
            </li>
            <li class="radius_linebox">
                <span>备注</span>
                <p>团队余额包含您的余额</p>
            </li>
        </ul>
    </div>
    <div class="header" style="display: none">
        走势图    </div>
    <form class="section form" style="display: none">
        <dl class="field">
            <label>查询时间</label>            
            <input id="starttime" type="text" readonly="true" class="doubledate ipticon mr10" value="2017-08-29" name="starttime" /> 至            <input type="text" id="endtime" readonly="true" class="doubledate ipticon ml10" value="2017-08-29" name="endtime" />
        </dl>
        <dl class="field">
            <label>查询项目</label>
            <input id = 'GetUsers' type="checkbox" checked="checked"> 新增人数 <input id = 'GetOrders' type="checkbox" checked="checked"> 投注人数        </dl>
        <input id="gameInfoBtn" type="button" class="btn" value="搜索" />
        <div id="userTeam" style="min-width: 310px; height: 700px; margin: 20px auto 0"></div>
    </form>
</div>
<script type="text/javascript" src="__JS__/jquery-1.9.1.js"></script>
<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/js/main.js"></script>-->
<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/js/highcharts/v5.0.6/highcharts.js"></script>-->
<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/js/doubleDate2.0_notime.js"></script>-->
<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/js/userTeam.js"></script>-->
<script type="text/javascript">
    var translate = {};
    $(document).ready(function() {
        $('.doubledate').kuiDate({
            className: 'doubledate',
            isDisabled: "1" // isDisabled为可选参数，“0”表示今日之前不可选，“1”标志今日之前可选
        });
        $('#userTeam').myCharts({
            url: 'user_team.html?op=api',
        }, ( translate || {}));
        $('#gameInfoBtn').on('click', function(event) {
            var GetUsers = 0;
            if ($('#GetUsers:checked').val() == 'on') {
                GetUsers = 1;
            }
            var GetOrders = 0;
            if ($('#GetOrders:checked').val() == 'on') {
                GetOrders = 1;
            }
            var starttime = '';
            if ($('#starttime').val() != '') {
                starttime = $('#starttime').val();
            }
            var endtime = '';
            if ($('#endtime').val() != '') {
                endtime = $('#endtime').val();
            }
            
            
            var error = '';
            if($.trim(starttime).length == 0 )
            {
            	error += "请选择开始时间。\n";
            }

            if($.trim(endtime).length == 0 )
            {
            	error += "请选择结束时间。\n";
            }

           var startUTC = Date.UTC(parseInt(starttime.substr(0,4)), parseInt(starttime.substr(5,2)), parseInt(starttime.substr(8,2)));
           var endUTC = Date.UTC(parseInt(endtime.substr(0,4)), parseInt(endtime.substr(5,2)), parseInt(endtime.substr(8,2)));
           //var todayUTC
           
           if(endUTC < startUTC)
           {
        	   error += "结束时间必须大于开始时间。\n";
           }
           
           var today = new Date();
           var todayUTC = Date.UTC(today.getFullYear(), (today.getMonth()+1), today.getDate());
           if(startUTC > todayUTC|| endUTC > todayUTC) 
           {
        	   error += "请不要选择未来的时间。\n";
           }
        	   
           
           if(GetUsers < 1 &&  GetOrders <1 )
           {
           		error += "新增人数与投注人数最少要选择一个。\n";
           }
            
           if(error.length > 0)
        	{
        	   alert(error);
        	   event.preventDefault();
        	   return ;
            }else{
                $('#userTeam').myCharts({
                    url: 'user_team.html?op=api',
                    startDate: starttime,
                    endDate: endtime,
                    count: {
                        user: GetUsers,
                        order: GetOrders
                    }
                }, ( translate || {}));
            	
            }   
        });
    })
</script>
<script type="text/javascript">
	
	
	try {
		var msgCount = 0;
		window.parent.parent.$('.notification').text(msgCount);
		if(msgCount < 1)
		{
			window.parent.parent.$('.notification').hide();
		}else{
			window.parent.parent.$('.notification').show();
		}	
		
	} catch (e) {
		// TODO: handle exception
	}
</script></body>
</html>