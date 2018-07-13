<?php if (!defined('THINK_PATH')) exit();?>
<?php  $para=I('get.'); ?>
<div>
<form action="/admin.php?s=/admin/data/add/type/5/actionNo/20180614-1320/actionTime/2018-06-14+23%3A59%3A20.html" target="ajax" method="post">
	<input type="hidden" name="type" value="<?=$para['type']?>"/>
	<table class="popupModal">
		<tr>
			<td class="title" width="180">期号：</td>
			<td><input type="text" name="number" value="<?=$para['actionNo']?>"/></td>
		</tr>
		<tr>
			<td class="title">开奖时间：</td>
			<td><input type="text" name="time" value="<?=$para['actionTime']?>"/></td>
		</tr>
		<tr>
			<td class="title">开奖号码：</td>
			<td><input type="text" name="data"/></td>
		</tr>
		<tr>
			<td colspan=2><font color="red">请确认【期号】和【开奖号码】正确，输入后不可更改！号码格式如: 1,2,3,4,5</font></td>
		</tr>
	</table>
</form>
</div>