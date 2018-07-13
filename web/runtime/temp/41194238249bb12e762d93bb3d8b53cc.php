<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:101:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/recharge/security_platwithdraw.html";i:1530950833;}*/ ?>
﻿

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <script type="text/javascript" src="__JS__/jquery-1.9.1.js"></script>
  <link rel="stylesheet" href="__CSS__/default_content.min.css">
  <script>
    function changeIframeHeight(height){
      var parentDOM = $(parent.document);
      var grandparentDOM = $(parent.parent.document);
      if(parentDOM.find("#mainFrame_menu").length > 0){
        parentDOM.find("#mainFrame_menu").height(height);
        grandparentDOM.find("#mainFrame").height($(parent.document).find(".ys-content").outerHeight(true));
      }
      else {
        parentDOM.find("#mainFrame").height($(parent.document).find(".ys-content").outerHeight(true));
      }
    }
    (function($){
      $(document).ready(function(){
        $("form[name='updateform']").submit(function(){
          if($("#secpass").val()>'')
            //$("#secpass").val($.md5($("#secpass").val()));
        });
        changeIframeHeight($(".ys-content").outerHeight(true) + 200);
      });
    })(jQuery);
  </script>

</head>
<body id="lan">
<div class="ys-content">
  <div class="header">
    用户提现 </div>
  <div class="main">
    <div class="section">
      <form action="" method="get" name="updateform" class="form">
        <input type="hidden" name="flag" value="check" />
        <input type="hidden" name="controller" value="security" />
        <input type="hidden" name="action"	value="checkpass" />
        <input type="hidden" name="nextcon" value="security" />
        <input type="hidden" name="nextact" value="platwithdraw" />
        <div class="field">
          <label>输入资金密码</label>
          <input name="secpass" id="secpass" type="password" class="custom_input" />
          <input type="hidden" name="nextcon"  id="nextcon" value="security" />
          <input type="hidden" name="nextact" id="nextact" value="platwithdraw" />
          <input type="hidden" name="flag" id="flag" value="check" />
        </div>
        <div class="ys-nxt-btn clearfix">
          <input name="" type="submit" value="提交" onclick="" class="btn" />
          <input name="" type="button" value="重置" class="formSubmit alert_btn"  onclick="this.form.reset()" />
        </div>
      </form>
    </div>
  </div>
</div>
</body>
</html>