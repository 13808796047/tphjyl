<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:88:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/user/user_adduser.html";i:1528683058;}*/ ?>
﻿
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="__JS__/jquery-1.9.1.js"></script>
<script src="__JS__/main.min.js"></script>
<script type="text/javascript" src="__JS__/common/model/details.js" ></script>
<script type="text/javascript" src="__JS__/select2.min.js"></script>
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.min.css"/>
<link rel="stylesheet" type="text/css" href="__CSS__/select2.min.css"/>
<style>
  .not-table td + td {font-size: 13px;}
</style>
</head>
<body id="lan">
<div class="ys-content">
	<div class="header">
		添加用户 <font color="red" style="margin-left: 200px;font-size: 16px">初始资金密码为初始登陆密码</font>
    </div>
  <div class="main">
		<form action="" method="post" name="updateform" onsubmit="return checkform(this)">
      <input type="hidden" name="flag" value="insert" />
      <input type="hidden" name="controller" value="user" />
      <input type="hidden" name="action"	value="adduser" />
      <div class="section form">
        <table class="not-table">
  					                                        	<tr class="field">
                  		<td><label>用户类型</label></td>
                  		<td style="font-size: 14px;"><label for="dl" class="user_type_radio"><input type="radio" name="usertype"  id="dl" value="1"  checked="checked"  /> 代理</label>&nbsp;&nbsp;&nbsp;&nbsp;<label for="vip" class="user_type_radio"><input type="radio" name="usertype"  id="vip" value="0"/> 会员</label></td>
                  	</tr>
                  	<tr class="field">
                  		<td><label>用户名</label></td>
                  		<td class="td-long-note">
                  			<input type="text" class="txt custom_input" maxlength="11" minlength="6" name="username" id="FIXusername"/>
                  			<span>（字母或数字组成的6 - 11 个字符，不能连续四位相同字符，首字母為英文）</span>
                  		</td>
                  	</tr>
                  	<tr class="field">
                  		<td><label>密码</label></td>
                  		<td class="td-long-note">
                  			<input type="password" class="txt custom_input" name="userpass" class="custom_input" id="FIXuserpass" />
                  			<span>（请输入6-16位包含英文數字，且不允许连续三位相同）</span>
                  		</td>
                  	</tr>
                  	<!--<tr class="field">
                  		<td><label>用户昵称</label></td>
                  		<td><input type="text" class="txt custom_input" name="nickname" class="custom_input" />（由2至10个字符或汉字组成）</td>
                  	</tr>
                    <tr class="field">
                        <td><label>QQ</label></td>
                        <td><input type="text" class="txt custom_input" name="qq" class="custom_input" />（用户QQ，用于找回密码等安全操作）</td>
                    </tr>-->
                  	<tr class="field">
                  		<td><label>返点</label></td>
                  		<td>
                            <select id="point" name="point" class="selection">
                                  <option value=''> 请选择</option>
                                    <?php echo $option; ?>
                            </select>
                              <span style="color:red;font-size: 12px; display: block;">（自身保留返点为给您自己预留各彩种的统一返点，上下级最小点差为0.1）</span></td>
                  	</tr>
                      <tr class="field">
                  		<td><label>使用币种</label></td>
                  		<td>CNY</td>
                  	</tr>
                  </table>
                <input type="submit" class="btn" value="提交"/>
              </div>
        <div class="list" style="display: none">
  					<table>
              <thead>
                <tr>
                  <th>彩种</th>
                  <th>赔率</th>
                  <th>返点范围</th>
                  <th>高奖金</th>
                  <th>高返点</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <!-- 重庆时时彩 -->
                  <td>重庆时时彩</td>
                  <td>1800</td>
                                                <td>
                      0-7.7%
                  </td>
                  <td>
                      <input type="text" class="highprize" value="1954+0%" readOnly />
                      <input type="hidden" class="maxprize" value="1954" />
                      <input type="hidden" class="totalprize" value="2000" />
                      <input type="hidden" class="maxpoint" value="7.7" />
                      <input type="hidden" class="lowprize" value="1800" />
                  </td>
                  <td>
                      <input type="text" class="highpoint" value="1800+7.7%" readOnly />
                      <input type="hidden" class="maxpoint" value="7.7" />
                      <input type="hidden" class="lowprize" value="1800" />
                  </td>
              </tr>
                              <!-- 山东11选5 -->
                              <td>山东11选5</td>
                              <td>1782</td>
                              <td>
                                  0-7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1921+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1921" />
                                  <input type="hidden" class="totalprize" value="1980" />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1782+7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 江西11选5 -->
                              <td>江西11选5</td>
                              <td>1782</td>
                                                            <td>
                                  0-7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1921+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1921" />
                                  <input type="hidden" class="totalprize" value="1980" />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1782+7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 广东11选5 -->
                              <td>广东11选5</td>
                              <td>1782</td>
                                                            <td>
                                  0-7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1921+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1921" />
                                  <input type="hidden" class="totalprize" value="1980" />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1782+7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 福彩3D -->
                              <td>福彩3D</td>
                              <td>1800</td>
                                                            <td>
                                  0-6.1%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1922+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1922" />
                                  <input type="hidden" class="totalprize" value="2000" />
                                  <input type="hidden" class="maxpoint" value="6.1" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1800+6.1%" readOnly />
                                  <input type="hidden" class="maxpoint" value="6.1" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 体彩P3 -->
                              <td>体彩P3</td>
                              <td>1800</td>
                                                            <td>
                                  0-6.1%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1922+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1922" />
                                  <input type="hidden" class="totalprize" value="2000" />
                                  <input type="hidden" class="maxpoint" value="6.1" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1800+6.1%" readOnly />
                                  <input type="hidden" class="maxpoint" value="6.1" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 两分时时彩 -->
                              <td>两分时时彩</td>
                              <td>1800</td>
                                                            <td>
                                  0-7.7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1954+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1954" />
                                  <input type="hidden" class="totalprize" value="2000" />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1800+7.7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 一分时时彩 -->
                              <td>一分时时彩</td>
                              <td>1800</td>
                                                            <td>
                                  0-7.7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1954+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1954" />
                                  <input type="hidden" class="totalprize" value="2000" />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1800+7.7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 两分11选5 -->
                              <td>两分11选5</td>
                              <td>1782</td>
                                                            <td>
                                  0-7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1921+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1921" />
                                  <input type="hidden" class="totalprize" value="1980" />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1782+7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 极速3D -->
                              <td>极速3D</td>
                              <td>1800</td>
                                                            <td>
                                  0-7.7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1954+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1954" />
                                  <input type="hidden" class="totalprize" value="2000" />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1800+7.7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 一分11选5 -->
                              <td>一分11选5</td>
                              <td>1782</td>
                                                            <td>
                                  0-7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1921+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1921" />
                                  <input type="hidden" class="totalprize" value="1980" />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1782+7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 秒秒时时彩 -->
                              <td>秒秒时时彩</td>
                              <td>1800</td>
                                                            <td>
                                  0-7.7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1954+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1954" />
                                  <input type="hidden" class="totalprize" value="2000" />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1800+7.7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 秒秒11选5 -->
                              <td>秒秒11选5</td>
                              <td>1782</td>
                                                            <td>
                                  0-7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1921+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1921" />
                                  <input type="hidden" class="totalprize" value="1980" />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1782+7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 越南一分彩 -->
                              <td>越南一分彩</td>
                              <td>1956</td>
                                                            <td>
                                  0-10%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="2173+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="2173" />
                                  <input type="hidden" class="totalprize" value="2173.3333333333" />
                                  <input type="hidden" class="maxpoint" value="10" />
                                  <input type="hidden" class="lowprize" value="1956" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1956+10%" readOnly />
                                  <input type="hidden" class="maxpoint" value="10" />
                                  <input type="hidden" class="lowprize" value="1956" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 五分时时彩 -->
                              <td>五分时时彩</td>
                              <td>1800</td>
                                                            <td>
                                  0-7.7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1954+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1954" />
                                  <input type="hidden" class="totalprize" value="2000" />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1800+7.7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 五分11选5 -->
                              <td>五分11选5</td>
                              <td>1782</td>
                                                            <td>
                                  0-7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1921+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1921" />
                                  <input type="hidden" class="totalprize" value="1980" />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1782+7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7" />
                                  <input type="hidden" class="lowprize" value="1782" />
                              </td>
                                                        </tr>
                                                                                                    <tr>
                              <!-- 北京PK10 -->
                              <td>北京PK10</td>
                              <td>1800</td>
                                                            <td>
                                  0-7.7%
                              </td>
                              <td>
                                  <input type="text" class="highprize" value="1954+0%" readOnly />
                                  <input type="hidden" class="maxprize" value="1954" />
                                  <input type="hidden" class="totalprize" value="2000" />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                              <td>
                                  <input type="text" class="highpoint" value="1800+7.7%" readOnly />
                                  <input type="hidden" class="maxpoint" value="7.7" />
                                  <input type="hidden" class="lowprize" value="1800" />
                              </td>
                                </tr>
                              </tbody>
                      <tfoot>
                        <tr>
                          <th colspan="5" class="align-left">
                            <span>为方便代理查看，此处小数点后数字去除，如果小数点后奖金有所不同，请以投注处奖金为准</span>
                          </th>
                        </tr>
                      </tfoot>
                  </table>
  				</div>
          </form>
      </div>
</div>
<script type="text/javascript">
$(function(){
  $('.list tbody tr').each(function() {
    var me = $(this);
    if(me.find('td').length === 2) {
      me.append('<td></td><td></td><td></td>');
    }
  })
  $("#point").select2()
  $("#point").on('select2:select', function(){
    $iAllPoint=$(this).val();
    $(".highprize").each(function(){
        $point=$iAllPoint/100;
        $maxpoint=$(this).next().next().next(".maxpoint").val();
        $number=$iAllPoint-$maxpoint;
        if($number>0){
            $iPoint=$(this).next().next().next().next(".lowprize").val();
        }else{
            $iPoint=Number($(this).next(".maxprize").val()-$point*$(this).next().next(".totalprize").val()).toFixed(0);
        }
        if($iPoint<0){
            $iPoint=0;
        }
        $(this).val(Number($iPoint).toFixed(0)+"+0%");
    });
    $(".highpoint").each(function(){
        $iPoint=Number($(this).next(".maxpoint").val()-$iAllPoint).toFixed(2);
        if($iPoint<0){
            $iPoint=0;
        }
        $(this).val($(this).next().next(".lowprize").val()+"+"+Number($iPoint).toFixed(1)+"%");
    });
  });
});
function checkform(obj){
	if( !validateUserName(obj.username.value) )
	{
		window.top.sAlert("登陆帐户名不符合规则，请重新输入");
		//obj.username.focus();
		return false;
	}
	if( !validateUserPss(obj.userpass.value) )
	{
		window.top.sAlert("密码不符合规则，需要包含英数 6-11 位，且不能连续三位相同，请重新输入");
		//obj.userpass.focus();
		return false;
	}
  if($("#FIXuserpass").val() === $("#FIXusername").val())
  {
    window.top.sAlert("密码不可与帐户相同");
    //obj.userpass.focus();
		return false;
  }
	/*if( !validateNickName(obj.nickname.value) )
	{
		window.top.sAlert("呢称不符合规则，请重新输入");
		//obj.nickname.focus();
		return false;
	}*/
	if( $("#point").val()=="" )
	{
		window.top.sAlert("请选择自身保留返点");
		//$("#point").focus();
		return false;
	}
	return true;
}
// 用户名验证
function validateUserName( str )
{
  // 不能連續四位數相同
  var partern = /(.)\1{3,}/g;
  if( partern.exec(str)){
    return false;
  }
  // 首字母英文，總長度6-16為英數字，不區分大小寫
	var patrn = /^[a-zA-Z0-9]{6,11}$/i;
        if(patrn.exec(str)){
		return true;
	}else{
		return false;
	}
}

//密码验证
function validateUserPss( str )
{
  // 8－16位数字和字母，區分大小寫
	var patrn = /^[0-9a-zA-Z]{6,16}$/g;
	if( !patrn.exec(str) ){
		return false;
	}
  // 不能只是數字
	patrn = /^\d+$/g;
	if( patrn.exec(str) ){
		return false;
	}
  // 不能只是英文
	patrn = /^[a-zA-Z]+$/g;
	if( patrn.exec(str) ){
		return false;
	}
  // 不能連續三位相同
	/*patrn = /(.)\1{2,}/g;
	if( patrn.exec(str) ){
		return false;
	}*/
	return true;
}
//呢称验证
function validateNickName( str )
{
  // 由2至6個字符或漢字組成
	var patrn = /^.{2,10}$/g;
	if( patrn.exec(str) )
	{
		return true;
	}
	return false;
}
// 未使用function
function fxidselect(){
  var fxid = $("#fxid").val();
  if(fxid!=1){
    sAlert("尚未开放，敬请期待");
    $('#fxid option').filter('[value="1"]').prop("selected",true);
  }
}

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