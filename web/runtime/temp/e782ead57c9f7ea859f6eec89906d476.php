<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:88:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/user/user_setmenu.html";i:1530856746;}*/ ?>
﻿
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.min.css"/>
</head>
<body id="lan">
<div class="ys-content">
	<div class="header">
		安全中心	</div>
<div class="main">
	<div class="section">
		<div class="csmsg-block">
			<?php if($is_test==0): ?>
      				<span>
        	<a href="user_userbankinfo.html" target="mainFrame_menu">卡号绑定</a>
        </span>
			<?php endif; ?>
        					<span>
        	<a href="user_changeloginpass.html" target="mainFrame_menu">修改密码</a>
        </span>
        					<span>
        	<a href="user_bindsequestion.html" target="mainFrame_menu" style="display:none">密保设置</a>
        </span>
        					<span>
        	<a href="user_emailbind.html" target="mainFrame_menu" style="display:none">绑定邮箱</a>
        </span>
        				<!--	<span>
        	<a href="user_changename.html" target="mainFrame_menu">修改昵称</a>
        </span>-->
        						</div>
	</div>
  <iframe src="user_userbankinfo.html" allowtransparency="true"  name="mainFrame_menu" width="100%" scrolling="no" frameborder="0" id="mainFrame_menu" border="0" noresize="noresize" framespacing="0" ></iframe>
</div>
<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/js/jquery-1.9.1.js"></script>-->
<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/todo/js/common/model/details.js" ></script>-->
<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/todo/js/module/main.js" ></script>-->
<script>
	$(function(){
		$(".csmsg-block > span > a").click(function(){
	   		$(".csmsg-block > span > a").not($(this)).parent().removeClass("cur");
	   		$(this).parent().addClass("cur");
	   	}).eq(0).parent().addClass("cur");
	})

	$('#mainFrame_menu').load(function(e){
		var dm = $(this).contents()[0];

		//適用所有瀏覽器的取得 body 高度方式 for user_setmenu.html
		var height = Math.max(
			dm.body.scrollHeight, dm.documentElement.scrollHeight,
			dm.body.offsetHeight, dm.documentElement.offsetHeight,
			dm.body.clientHeight, dm.documentElement.clientHeight
		);
		$(this).height(height);
	});

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