<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:87:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/user/showmessage.html";i:1530951526;}*/ ?>
﻿
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/js/jquery-1.9.1.js"></script>-->
	<!--<script type="text/javascript" src="http://upccry1.3smao.net/sy2/todo/js/common/model/details.js" ></script>-->
	<!--<link rel="stylesheet" type="text/css" href="http://upccry1.3smao.net/sy2/css/default_content.min.css"/>-->

</head>
<body id="lan">
<div class="content_mid">
	<div class="ys-content">
		<div class="header">
				</div>
		<div class="main yhlb_back info_message">
			<div class="section">
				<div class="message_content">
					<h3 class="title"><?php echo $data['title']; ?></h3>
					<div><?php echo $data['content']; ?></div>
					<div align="right">
						发送时间：<?php echo date("Y-m-d H:i:m",$data['addTime']); ?> &nbsp;&nbsp;</div>
				</div>
				<div style="margin-right:20px;">

				</div>

				<p style="clear:both;margin:1px;">&nbsp;</p>

				<!--<div align="right">-->
					<!--<input type="button" onclick="javascript:window.location.href='user_messages.html?flag=list1';return true;" class="btn" value="返回" />-->
				<!--</div>-->

			</div>
		</div>
	</div>
	<script>
		(function ($) {
			function _setImmediate(callback) {
				return (window.setImmediate) ? setImmediate(callback) : setInterval(callback, 0);
			}

			function setNotification(count) {
				if (parent && parent.parent) {
					var $notification = $('.notification', parent.parent.document);
					if (count == 0) {
						$notification.remove();
					} else {
						_setImmediate(function() {
							$notification.text(count);
						});
					}
				}
			}

			setNotification(0);
		})(jQuery);
	</script>
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