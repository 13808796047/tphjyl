<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:105:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/recharge/emaildeposit_getmoneylist.html";i:1530950906;}*/ ?>
﻿
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="format-detection" content="telephone=no, email=no, adress=no">
<link href="__CSS__/sy/base.css" rel="stylesheet" type="text/css" media="all" />
<link href="__CSS__/sy/subpage.css" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" type="text/css" media="all" href="__CSS__/calendar/calendar-green.css"  />
<link href=__CSS__/css/houtai.css" type="text/css" rel="stylesheet"/>
<link href="__CSS__/ss/common.css" type="text/css" rel="stylesheet"/>
<link href="__CSS__/page.css" type="text/css" rel="stylesheet"/>

<script src="__JS__/sy/subPage.js"></script>
<script src="__JS__/sy/tab.js"></script>
<script src="__JS__/sy/dialogUI/jquery-1.7.min.js"></script>
<script src="__JS__/main.min.js"></script>
<script src="__JS__/calendar/jquery.dyndatetime.js"></script>
<script src="__JS__/calendar/calendar-utf8.js"></script>
<script src="__JS__/sy/iframe.js"></script>
<script src="__JS__/sy/main.js"></script>

  <script type="text/javascript" src="__JS__/jeDate/jedate.js"></script>

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
</head>
<body id="lan">
<script type="text/javascript" src="__JS__/jquery-1.9.1.js"></script>
<link rel="stylesheet" href="__CSS__/default_content.min.css">
<!--[if IE 7] -->
<link rel="stylesheet" href="/sy2/todo/images/game/iconfont/font-awesome-ie7.css" />
<!--[endif]   -->
<div class="ys-content">
  <div class="header">
    我的提现  </div>
  <div class="main">
    <form action="" method="GET" class="form section">
      <input type="hidden" name="controller" value="emaildeposit">
      <input type="hidden" name="action" value="getmoneylist">
      <div class="field">
        <label>提现时间</label>
        <input type="text" value="<?php echo $starttime; ?>" style="width:150px;" name="starttime" id="starttime" class="doubledate mr10">

        至：
        <input type="text" value="<?php echo $endtime; ?>" style="width:150px;" id="endtime" name="endtime" class="doubledate mr10">
      </div>
      <input type="submit" value="查询" class="formCheck btn">
    </form>
    <div class="list">
      <table>
        <thead>
          <tr>
            <th style="width:8%">用户名</th>
            <th style="width:10%">申请时间</th>
            <th style="width:18%">提现银行</th>
            <th style="width:10%">尾号</th>
            <th style="width:12%">提现金额</th>
            <!-- <th style="width:10%">等候人数</th> -->
            <th style="width:10%">状态</th>
            <th >备注</th>
          </tr>
        </thead>
        <tbody>
        <?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
        <tr>
          <td style="width:8%"><?php echo $vo['username']; ?></td>
          <td style="width:10%"><?php echo date("Y-m-d",$vo['actionTime']); ?></td>
          <td style="width:18%"><?php echo $vo['bankId']; ?></td>
          <td style="width:10%"><?php echo $vo['account']; ?></td>
          <td style="width:10%"><?php echo $vo['amount']; ?></td>
          <!-- <td style="width:10%">等候人数</td> -->
          <td style="width:10%"><?php echo $vo['state']; ?></td>
          <td ><?php echo $vo['info']; ?></td>
        </tr>
        <?php endforeach; endif; else: echo "" ;endif; ?>
        <!-- <tr>
            <td colspan="7">请选择查询条件之后进行查询</td>
          </tr>-->
         </tbody>
        <tfoot>
          <tr>
            <td colspan="7">总计： <b style="color:#ece9c2;">0.0000</b></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <font color="red" size="4" style="margin:0 15px">※用户提现时会因银行作业流程而产生等待时间，敬请见谅。</font>
    <br></br>
    <div class="page" style="margin:0 15px">总计<?php echo $total; ?>个记录, 分为<?php echo $totalPage; ?> 页, 当前第 <?php echo $currentPage; ?>页
      <SPAN ID="tPages">
      &nbsp;<?php echo $page; ?>
      </SPAN>
</div>
  </div>
</div>
<script type="text/javascript">
jQuery(document).ready(function() {
  $('.doubledate').kuiDate({
    className:'doubledate',
    isDisabled: "1"  // isDisabled为可选参数，“0”表示今日之前不可选，“1”标志今日之前可选  });
});
</script>
<script type="text/javascript">
  //jeDate.skin('gray');
  jeDate({
    dateCell:"#starttime",//isinitVal:true,
    format:"YYYY-MM-DD",
    isinitVal:true,
    isTime:false //isClear:false,
    /*minDate:"2015-10-19 00:00:00",
    maxDate:"2016-11-8 00:00:00"*/
  })
  jeDate({
    dateCell:"#endtime",
    format:"YYYY-MM-DD",
    isinitVal:true,
    isTime:true, //isClear:false,
    maxDate:"<?php echo $maxDate; ?>",
    okfun:function(val){alert(val)}
  })
</script>