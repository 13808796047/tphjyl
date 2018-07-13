<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:89:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/user/user_userteam.html";i:1528683058;}*/ ?>
﻿
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.min.css"/>
<script type="text/javascript" src="__JS__/jquery-1.9.1.js"></script>
<script src="__JS__/common.js"></script>
<script type="text/javascript">
jQuery("document").ready( function(){
	jQuery("#chineseMoney").html(changeMoneyToChinese(77.7600));
  $(parent.document).find("#mainFrame").height($(".content_mid").outerHeight(true));
});
</script>
<div class="content_mid">
<div class="ys-content">
	<div class="header">
		团队余额	</div>
</div>
<div class="team_table intro_content">
 <table width="100%" border="0">
  <tr>
    <td>用户名称：</td>
    <td><?php echo $member['username']; ?></td>
  </tr>
  <tr>
    <td>用户昵称：</td>
    <td><?php echo $member['nickname']; ?></td>
  </tr>
  <tr>
    <td>团队余额：</td>
    <td><?php echo $team_coin; ?> 元</td>
  </tr>
<!--
  <tr>
    <td align="right" >团队余额（大写）：</td>
    <td ><span id="chineseMoney"></span></td>
  </tr>
-->
</table>
</div>
<div class="height5">
<div class="right_02_24"></div>
<div class="right_02_25"></div>
</div>
</div>