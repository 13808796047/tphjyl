<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:85:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/user/user_list.html";i:1528683058;}*/ ?>
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
    .caozhili{
      font-size: 18px;
      display: block;
    }
  </style>
</head>
<body id="lan">
<div class="ys-content">
	<div class="header">
		用户列表  </div>
  <div class="main">
    <form action="" method="get" name="search" onsubmit="return">
      <input type="hidden" name="controller" value="user" />
      <input type="hidden" name="action" value="list" />
      <input type="hidden" name="frame" value="show" />
      <input type="hidden" name="flag" value="search" />
      <input type="hidden" name="new" value="1" />
      <div class="section form">
        <div class="inline-fields">
          <div class="field">
            <label for="username" style="min-width: 140px">用户名</label>
            <input type="text" name="username" id="username" class="custom_input" value="">
          </div>
          <div class="field">
            <label class="bank_min">用户余额</label>
            <input name="bank_min" value="" onkeyup="checkMoney(this)" type="text"  size="10" class="custom_input" />
            至            <input name="bank_max" value="" onkeyup="checkMoney(this)" type="text"  size="10" class="custom_input" />
          </div>
        </div>
        <input type="submit" value="查询" class="btn">
      </div>
    </form>
    <div id="zz_parent" class="j-ui-mask" style="position: absolute; left: 0px; top: 0px; opacity: 0.5; background-color: rgb(51, 51, 51); z-index: 600; width: 980px; height: 1176px; display: none;"></div>
    <div id="zz_wind" class="j-ui-miniwindow pop w-9" style="z-index: 700; position: fixed; display: none; left: 212.5px; top: 132.5px;">
      <div class="hd"><i class="close closeBtn"></i><span class="title">充值</span></div>
      <div class="bd_box">
        <div class="bd">
          <ul class="ui-form">
            <li class="caozhili">自身账户余额：<span id="zszhye"><?php echo $userCoin; ?></span></li>
            <li class="caozhili">充值用户账号： <span id="czyhzh">yy888</span></li>
            <li class="caozhili">充值账户余额：<span id="czzhye">83082.3110</span></li>
            <li class="caozhili">充值金额：<input type="number" id="cz_money"></li>
            <li class="caozhili">资金密码：<input type="password" id="zjmm"></li>
            <li class="caozhili" <?php if($is_test == 1): ?> style="display: none" <?php endif; ?>>验证银行卡号：<input type="text" id="bankno"></li>
          </ul>
        </div>
      </div><a style="" href="javascript:chongzhi();" class="btn confirm">确认<b class="btn-inner"></b></a>
      <a style="display: inline-block;" href="javascript:hiddeZz();" class="btn cancel">取消<b class="btn-inner"></b></a>
      <a href="javascript:void(0);" style="display: none;" class="btn closeTip">关闭<b class="btn-inner"></b></a>
    </div>
    <div id="fd_parent" class="j-ui-mask" style="position: absolute; left: 0px; top: 0px; opacity: 0.5; background-color: rgb(51, 51, 51); z-index: 600; width: 980px; height: 1176px; display: none;"></div>
    <div id="fd_wind" class="j-ui-miniwindow pop w-9" style="z-index: 700; position: fixed; display: none; left: 212.5px; top: 132.5px;">
      <div class="hd"><i class="close closeBtn"></i><span class="title">返点设置</span></div>
      <div class="bd_box">
        <div class="bd">
          <ul class="ui-form">
            <li class="caozhili">返点：
              <select id="fandian">
                <?php echo $fandian; ?>
              </select>
            </li>
            <span style="color:red;font-size: 12px; display: block;">（自身保留返点为给您自己预留各彩种的统一返点，上下级最小点差为0.1）</span>
          </ul>
        </div>
      </div><a style="" href="javascript:fagndian();" class="btn confirm">确认<b class="btn-inner"></b></a>
      <a style="display: inline-block;" href="javascript:hiddefd();" class="btn cancel">取消<b class="btn-inner"></b></a>
    </div>
    <div class="list">
      <form action="" method="get" class="form">
        <div class="intro_content">
          &nbsp;&nbsp;&nbsp;&nbsp;当前用户位置：          &nbsp;&nbsp;&nbsp;&nbsp;<a href="/user/user_list.html?frame=show&uid=<?php echo $uid; ?>"><?php echo $username; ?></a>
                  </div>
        <table id="userlistDL">
          <thead>
            <tr>
              <th>用户名</th>
              <th>用户类型</th>
              <th>余额</th>
              <th>用户返点</th>
              <th>冻结资金</th>
              <th>用户操作</th>
            </tr>
          </thead>
          <tbody>
          <?php if(is_array($data_list) || $data_list instanceof \think\Collection || $data_list instanceof \think\Paginator): $i = 0; $__LIST__ = $data_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
              <tr>
                  <td><strong><a href="user_list.html?frame=show&uid=<?php echo $vo['uid']; ?>" target="mainFrame"><?php echo $vo['username']; ?></a></strong></td>
                  <!--会员用户-->
                  <td><?php echo $vo['type']; ?></td>
                  <td><?php echo $vo['coin']; ?></td>
                  <td><?php echo $vo['fanDian']; ?>%</td>
                  <td><?php echo $vo['fcoin']; ?></td>
                  <td class="userlist-td">
                    <?php if($userType==1): ?>
                    <a href="javascript:void(0);" onclick="showZz('<?php echo $vo['uid']; ?>','<?php echo $vo['username']; ?>','<?php echo $vo['coin']; ?>')">充值</a>
                    <?php endif; if($login_uid==$vo['parentId']): ?>
                    <a href="javascript:void(0);" onclick="shezhefangdian('<?php echo $vo['uid']; ?>')">设置返点</a>
                    <?php endif; ?>
                    <a href="./user_userinfo.html?uid=<?php echo $vo['uid']; ?>">详情</a>
                                    <a href="./user_userteam.html?uid=<?php echo $vo['uid']; ?>">团队余额</a>
                    <a href="/game_record/betlist.html?username=<?php echo $vo['username']; ?>">投注记录</a>
                    <!--<a href="./user_edituserpoint.html?uid=<?php echo $vo['uid']; ?>">返点设定</a>-->
                    <!-- <a><a href="./user_messagestoparent.html?flag=towhom&userid=<?php echo $vo['uid']; ?>">发信</a>              </td> -->
                </tr>
          <?php endforeach; endif; else: echo "" ;endif; ?>
           </tbody>
          <tfoot>
            <tr>
              <th colspan="7" height="20">
                <!--
                <div style="float: left">共有  3  会员 共 1/1 页 每页20会员</div>
                -->
                <div style="float: left">共有 <?php echo $total; ?> 会员 共 <?php echo $currentPage; ?>/<?php echo $totalPage; ?> 页 每页 10 会员</div>
                <div style="float: right;display: inline-flex" class="page_right">
                    <!--<STRONG>1</STRONG>-->
                    &nbsp;&nbsp;
                  <?php echo $page; ?>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  </div>
</div>
</body>
<script type="text/javascript">
	
	
	try {
		var msgCount = 0;
		window.parent.parent.$('.notification').text(msgCount);
		if(msgCount < 1)
		{
			//window.parent.parent.$('.notification').hide();
		}else{
			//window.parent.parent.$('.notification').show();
		}	
		
	} catch (e) {
		// TODO: handle exception
	}
</script></html>

<script type="text/javascript">
  var touid = 0;
  function showZz(uid,username,coin){
    touid = uid;
    document.getElementById ("czyhzh").innerHTML=username;
    document.getElementById ("czzhye").innerHTML=coin;
    document.getElementById('zz_parent').style.display = "block";
    document.getElementById('zz_wind').style.display = "block";
  }
  function hiddeZz(){
    document.getElementById('zz_parent').style.display = "none";
    document.getElementById('zz_wind').style.display = "none";
  }
  function chongzhi(){
    var cz_money = document.getElementById ("cz_money").value;
    var zjmm = document.getElementById ("zjmm").value;
    var bankno = document.getElementById ("bankno").value;
    if (confirm("是否确定充值？")){
      $.ajax({
        type: "POST",
        url: "/user/chongzhi.html",
        data: { touid: touid,money:cz_money,zjmm:zjmm,bankno:bankno },
        dataType: "json",
        global: false,
        success: function (data) {
          if (data.code==1) {
            alert(data.msg);
            document.location.reload();
          }
          else {
            alert(data.msg);
          }
        },
        error: null,
        cache: false
      });
    }
  }
  var tofdId = 0;
  function shezhefangdian(uid){
    tofdId = uid;
    document.getElementById('fd_parent').style.display = "block";
    document.getElementById('fd_wind').style.display = "block";
  }
  function hiddefd(){
    document.getElementById('fd_parent').style.display = "none";
    document.getElementById('fd_wind').style.display = "none";
  }
  function fagndian(){
    var fandian = document.getElementById ("fandian").value;
    if(!fandian){
        alert('请选择返点');return;
    }
    if (confirm("是否确定？")){
      $.ajax({
        type: "POST",
        url: "/user/fandian.html",
        data: { touid: tofdId,fandian:fandian },
        dataType: "json",
        global: false,
        success: function (data) {
          if (data.code==1) {
            alert(data.msg);
            document.location.reload();
          }
          else {
            alert(data.msg);
          }
        },
        error: null,
        cache: false
      });
    }
  }
</script>