<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:89:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/user/user_messages.html";i:1528683058;}*/ ?>
﻿
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="__JS__/jquery-1.9.1.js"></script>
<script type="text/javascript" src="__JS__/details.js" ></script>
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.min.css"/>
	<link rel="stylesheet" href="__CSS__/page.css" />
<style type="text/css">
	.list table a {
		color: #272727;
	}
	.list table a:hover {
		color: blue;
	}
</style>
</head>
<body id="lan">
<div class="content_mid">
		<div class="ys-content">
		<div class="header">
			消息管理		</div>
		<div class="main">
			<div class="list">
								<div class="intro_content pd6">
					<!--<input type="button" onclick="javascript:window.location.href='user_messagestoparent.html';return true;" class="btn" value="发信给上级" />-->
				</div>
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<thead>
						<tr>
							<th style="padding: 10px 15px;text-align: left;">主题</th>
							<th width="20%">日期</th>
							<th width="20%">操作</th>
						</tr>
					</thead>
					<tbody>
					<?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
					<tr>
						<td style="padding: 10px 15px;text-align: left;">
							<a href="showmessage?id=<?php echo $vo['id']; ?>" ><?php echo $vo['title']; ?></a>
						</td>
						<td width="20%"><?php echo date("Y-m-d H:i:m",$vo['addTime']); ?></td>
						<td width="20%"></td>
					</tr>
					<?php endforeach; endif; else: echo "" ;endif; ?>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="3">
								总计<?php echo $total; ?>个记录, 分为<?php echo $totalPage; ?> 页, 当前第 <?php echo $currentPage; ?>页<SPAN ID="tPages"> &nbsp;
									&nbsp;&nbsp;
									<?php echo $page; ?>
&nbsp;</SPAN>
 转至 <SCRIPT LANGUAGE="JAVASCRIPT">function keepKeyNum(obj,evt){var  k=window.event?evt.keyCode:evt.which; if( k==13 ){ goPage(obj.value);return false; }} function goPage( iPage ){if( !isNaN(parseInt(iPage)) ) {window.location.href="/user/user_messages.html?page="+iPage;}}</SCRIPT><INPUT onKeyPress="return keepKeyNum(this,event);" TYPE="TEXT" ID="iGotoPage" NAME="iGotoPage" size="6"> 页 <input type="button" onClick="javascript:goPage( document.getElementById('iGotoPage').value );return false;" class="button" value="GO">&nbsp;							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
	</div>
<script>
	function changeIframeHeight(height){
		$(parent.document).find("#mainFrame").height(height);
	}
	$(function(){
		changeIframeHeight($(".content_mid").outerHeight(true));
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