<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:88:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/recharge/recharge.html";i:1531458792;}*/ ?>
﻿<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <script type="text/javascript" src="__JS__/jquery-1.9.1.js"></script>
  <link href="__CSS__/dialogUI/dialogUI.css" media="all" type="text/css" rel="stylesheet">
  <link rel="stylesheet" href="http://cdn.amazeui.org/amazeui/2.7.2/css/amazeui.min.css">
  <link rel="stylesheet" href="__CSS__/default_content.min.css">
  <link rel="stylesheet" href="__CSS__/recharge/recharge.css">
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
          if($("#secpass").val()>'');
            //$("#secpass").val($.md5($("#secpass").val()));
        });
        changeIframeHeight($(".ys-content").outerHeight(true) + 200);
      });
    })(jQuery);
    var old_line = "<?php echo $old_line; ?>";
    var old_pay = 1;
    var min = <?php echo $bank_check['min']; ?>;
    var max = <?php echo $bank_check['max']; ?>;
    var fl_id = <?php echo $def_id; ?>;
    function chooseLine(id){
      if(id=='105'){
        $('#paytype').hide();
      }else if(id=='104'){
        $('#paytype').show();
      }
      if(old_line){
        $('#line_'+old_line).removeClass('choose');
      }
      $('#line_'+id).addClass('choose');
      $('#def-w-label').val(id);
      old_line = id;
      fl_id = old_line;
      console.log(fl_id);
      var dataid = $('#pay_'+old_pay).attr('data-id');
      if(fl_id==6||dataid != "onlinepay"){
        min = <?php echo $code_check['min']; ?>;
        max = <?php echo $code_check['max']; ?>;
      }else{
        min = <?php echo $bank_check['min']; ?>;
        max = <?php echo $bank_check['max']; ?>;
      }
      $("#shang_pay_txt").html("单笔最低充值金额为<span>"+min+"</span>元，最高<span>"+max+"</span>元" );
    }
    function choosePayType(id){
      window.location.href = window.location.href+'#'+id;
      if(old_pay){
        $('#pay_'+old_pay).removeClass('pay_type_choose');
      }
      $('#pay_'+id).addClass('pay_type_choose');
      old_pay = id;
      var dataid = $('#pay_'+old_pay).attr('data-id');
      if(dataid == "onlinepay"){
        min = <?php echo $bank_check['min']; ?>;
        max = <?php echo $bank_check['max']; ?>;
      }else{
        min = <?php echo $code_check['min']; ?>;
        max = <?php echo $code_check['max']; ?>;
      }
      $("#shang_pay_txt").html("单笔最低充值金额为<span>"+min+"</span>元，最高<span>"+max+"</span>元" );
    }
    function pay_next_pay(){
      var amount = parseFloat($('#amt').val());
        console.log(amount);
        if (isNaN(amount) || amount < min || amount > max) {
        alert('充值金额必须在' + min + '元和' + max + '元之间');
        return false;
      }else if((fl_id==5||fl_id==8 ||fl_id==12 )){
        document.getElementById("recharge").action = "/recharge/zfwy";
      }else if(fl_id==9){
        yinshen(amount);return;
      }else if((fl_id==10||fl_id==11)&&$('#pay_'+old_pay).attr('data-id')!='qq'){

        yibao(amount,fl_id,$('#pay_'+old_pay).attr('data-id'));return;
      }
      $('#recharge').submit();
    }
    function pay_pre(){
        $('#userIpt').hide();
      document.getElementById('pre_id').style.display='none';
      document.getElementById('next_id').style.display='block';
      document.getElementById('next_id_pay').style.display='none';
      document.getElementById('tongdao').style.display='none';
      document.getElementById('zfpt').style.display='block';
    }
    function pay_next(){
      if(old_pay==4){
        fl_id = 10;
        $('#def-w-label').val(10);
        $('#payLinks').val('qq');
        pay_next_pay();
        document.getElementById('next_id').innerHTML = "请稍后...";
        document.getElementById('next_id').disabled=true;
        return;
      }
      if(old_pay == 5){
//          debugger;
          fl_id = 10;
          $('#def-w-label').val(10);
          $('#payLinks').val('kjzf');
          $('#userIpt').show();
          $('#next_id_pay').show();
          $('#pre_id').show();
          $('#next_id').hide();
          $('#zfpt').hide();
          return;
      }
      document.getElementById('pre_id').style.display='block';
      document.getElementById('next_id').style.display='none';
      document.getElementById('next_id_pay').style.display='block';
      document.getElementById('tongdao').style.display='block';
      document.getElementById('zfpt').style.display='none';
    }
    function yinshen(amount){
      $.ajax({
        type: "POST",
        url: "/recharge/yinshen.html",
        data: { amount: amount},
        dataType: "json",
        global: false,
        async: false,
        success: function (data) {
          if (data.code==1) {
            var arr = data.msg;
            var html = "";
            arr.forEach(function(val){
              html += "<input type = 'hidden' name='"+val.name+"' value='"+val.value+"' />";
            });
            document.getElementById('yshen').innerHTML=html;
            document.yshen.submit();
          }
          else {
            alert(data.msg);
          }
        },
        error: null,
        cache: false
      });
    }
    function yibao(amount,fl_id,link){
        var userNameHF,userPhoneHF,userAcctNo,quickPayCertNo,is_kjzf = 0;
        if(link == 'kuaijie'){
            is_kjzf = 1;
            userNameHF = $('#userNameHF').val();
            userPhoneHF = $('#userPhoneHF').val();
            userAcctNo = $('#userAcctNo').val();
            quickPayCertNo = $('#quickPayCertNo').val();
            if(!userNameHF){
                alert('开户名（姓名）不能为空！');
                return false;
            }
            if(!userAcctNo){
                alert('开户行银行卡号不能为空！');
                return false;
            }
            if(!userPhoneHF){
                alert('银行绑定手机号：不能为空！');
                return false;
            }
            if(!quickPayCertNo){
                alert('开户行身份证号不能为空！');
                return false;
            }
        }
      $.ajax({
        type: "POST",
        url: "/recharge/yibao.html",
        data: { amount: amount,fl_id:fl_id,pay_type:'onlinepay',is_kjzf:is_kjzf,
            userNameHF:userNameHF,userAcctNo:userAcctNo,userPhoneHF:userPhoneHF,quickPayCertNo:quickPayCertNo
        },
        dataType: "json",
        global: false,
        async: false,
        success: function (data) {
          if (data.code==1) {
            var arr = data.msg;
            var html = "";
            arr.forEach(function(val){
              html += "<input type = 'hidden' name='"+val.name+"' value='"+val.value+"' />";
            });
            document.getElementById('yibao').innerHTML=html;
            document.yibao.submit();
          }else {
            alert(data.msg);
          }
        },
        error: null,
        cache: false
      });
    }
  </script>
</head>
<body id="lan" style="background:none">

<div class="am-panel am-panel-default">
  <div class="am-panel-hd">充值</div>
  <div class="am-panel-bd">
    <div class="am-u-md-8 am-u-sm-centered">
      <form id="recharge" action="" mothd="get" target="_blank" class="am-form am-form-horizontal" role="form">
        <!--<div class="cz_money">&nbsp;&nbsp;充值金额：-->
        <!--<input type="member" id="amt" class="am-form-field" name="amount" placeholder="请输入充值金额" min="<?php echo $code_check['min']; ?>" max="<?php echo $bank_check['max']; ?>">元,-->
        <!--<span id='shang_pay_txt'>单笔最低充值金额为<span><?php echo $bank_check['min']; ?></span>元，最高<span><?php echo $bank_check['max']; ?></span>元</span>-->
        <!--</div>-->

        <div class="am-form-group">
         <label for="amt" class="am-u-sm-3 am-form-label">充值金额</label>
          <div class="am-u-sm-9">
            <input type="number" id="amt" name="amount" placeholder="请输入<?php echo $code_check['min']; ?>到<?php echo $bank_check['max']; ?>充值金额" minlength="<?php echo $code_check['min']; ?>" maxlength="<?php echo $bank_check['max']; ?>" required>
          </div>

        </div>

        <div class="am-form-group ">
          <label for="paytype" class="am-u-sm-3 am-form-label">选择银行</label>
          <div class="am-u-sm-9">
            <select name="paytype" data-am-selected="{maxHeight: 200,btnWidth: '100%', btnSize: 'lg', btnStyle: 'secondary'}">
              <option value="962">中信银行</option>
              <option value="963">中国银行</option>
              <option value="964">农业银行</option>
              <option value="965">建设银行</option>
              <option value="967">工商银行</option>
              <option value="970">招商银行</option>
              <option value="971">邮储银行</option>
              <option value="972">兴业银行</option>
              <option value="976">上海农村商业银行</option>
              <option value="977">浦发银行</option>
              <option value="979">南京银行</option>
              <option value="980">民生银行</option>
              <option value="981">交通银行</option>
              <option value="983">杭州银行</option>
              <option value="985">广发银行</option>
              <option value="986">光大银行</option>
              <option value="987">东亚银行</option>
              <option value="989">北京银行</option>
              <option value="990">平安银行</option>
              <option value="991">华夏银行</option>
              <option value="992">上海银行</option>
              <option value="1000">微信扫码</option>
              <option value="1002">微信直连</option>
              <option value="1003">支付宝扫码</option>
              <option value="1004">支付宝直连</option>
              <option value="1005">QQ钱包扫码</option>
              <option value="1006">QQ钱包直连</option>
              <option value="1007">京东钱包扫码</option>
              <option value="1008">京东钱包直连</option>
              <option value="1009">银联扫码</option>
              <option value="1012">银联在线</option>
            </select>
          </div>
        </div>

        <!--<div style="font-size: 20px;" id="paytype">-->
        <!--&nbsp;&nbsp;选择银行：-->
        <!--<select Name="paytype" style="width:150px;height: 32px;">-->
        <!--<option value="962">中信银行</option>-->
        <!--<option value="963">中国银行</option>-->
        <!--<option value="964">农业银行</option>-->
        <!--<option value="965">建设银行</option>-->
        <!--<option value="967">工商银行</option>-->
        <!--<option value="970">招商银行</option>-->
        <!--<option value="971">邮储银行</option>-->
        <!--<option value="972">兴业银行</option>-->
        <!--<option value="976">上海农村商业银行</option>-->
        <!--<option value="977">浦发银行</option>-->
        <!--<option value="979">南京银行</option>-->
        <!--<option value="980">民生银行</option>-->
        <!--<option value="981">交通银行</option>-->
        <!--<option value="983">杭州银行</option>-->
        <!--<option value="985">广发银行</option>-->
        <!--<option value="986">光大银行</option>-->
        <!--<option value="987">东亚银行</option>-->
        <!--<option value="989">北京银行</option>-->
        <!--<option value="990">平安银行</option>-->
        <!--<option value="991">华夏银行</option>-->
        <!--<option value="992">上海银行</option>-->
        <!--<option value="1000">微信扫码</option>-->
        <!--<option value="1002">微信直连</option>-->
        <!--<option value="1003">支付宝扫码</option>-->
        <!--<option value="1004">支付宝直连</option>-->
        <!--<option value="1005">QQ钱包扫码</option>-->
        <!--<option value="1006">QQ钱包直连</option>-->
        <!--<option value="1007">京东钱包扫码</option>-->
        <!--<option value="1008">京东钱包直连</option>-->
        <!--<option value="1009">银联扫码</option>-->
        <!--<option value="1012">银联在线</option>-->
        <!--</select>-->
        <!--</div>-->
        <div class="section" id="tongdao" style="display: none">
          <style>
            .btn:hover{
              background:#f46b0a;
            }
          </style>
          <ul>
            <?php if(is_array($busines) || $busines instanceof \think\Collection || $busines instanceof \think\Paginator): $k = 0; $__LIST__ = $busines;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;if($k==1): ?>
            <li id="line_<?php echo $vo['id']; ?>" class="btn choose"  onclick="chooseLine(<?php echo $vo['id']; ?>)"><?php echo $vo['business_alias']; ?></li>
            <?php else: ?>
            <li id="line_<?php echo $vo['id']; ?>" class="btn"   onclick="chooseLine(<?php echo $vo['id']; ?>)"><?php echo $vo['business_alias']; ?></li>
            <?php endif; endforeach; endif; else: echo "" ;endif; ?>
          </ul>
        </div>
        <div class="section" id="userIpt" style="display: none;">
          <hr>
          <h4>请填写快捷支付信息</h4>
          <div class="userInput">开户名（姓名）：<input type="text" placeholder="如:张XX" style="width: 100px;"  id="userNameHF"/> <b style="color: red">*</b></div>
          <div class="userInput">银行绑定手机号：<input type="text" placeholder="如:1382222xxxx" style="width: 200px;" id="userPhoneHF"/> <b style="color: red">*</b></div>
          <div class="userInput">开户行银行卡号：<input type="text" placeholder="如:622185468971255xxx" style="width: 200px;" id="userAcctNo"/> <b style="color: red">*</b></div>
          <div class="userInput">开户行身份证号：<input type="text" placeholder="如:102826198101013xxx" style="width: 200px;" id="quickPayCertNo"/> <b style="color: red">*</b></div>
        </div>
        <div class="recharge_center">

          <ul id="zfpt">
            <li style="display:none" id="pay_5" data-id="kuaijie" style="" onclick="choosePayType(5)"><img style="width: 163px;height: 45px;" src="__IMG__/pay/timg.jpg" alt=""></li>
            <li id="pay_1" data-id="onlinepay" onclick="choosePayType(1)" class="pay_type_choose"><img src="__IMG__/pay/onlinepay.png" alt=""></li>
            <li style="display:none" id="pay_2" data-id="weixin" onclick="choosePayType(2)"><img src="__IMG__/pay/weixin.png" alt=""></li>
            <!--<li id="pay_3" data-id="alipay" onclick="choosePayType(3)"><img src="__IMG__/pay/alipay.png" alt=""></li>-->
            <li style="display:none" id="pay_4" data-id="qq" style="" onclick="choosePayType(4)"><img src="__IMG__/pay/qq.png" alt=""></li>

          </ul>
          <input type="hidden" name="def-w-label" id="def-w-label" value="<?php echo $def_id; ?>">
          <input size="50" type="hidden" name="payLinks" id="payLinks" value="<?php echo $direct_pay; ?>" />
          <input hidden="" id="" name="" value=""/>
          <hr/>
          <ul>
            <li class="btn_submit" onclick="pay_pre()" style="display: none;" id="pre_id">上一步</li>
            <li class="btn_submit" onclick="pay_next()" id="next_id">下一步</li>
            <li class="btn_submit" onclick="pay_next_pay()" style="display: none;" id="next_id_pay">下一步</li>
          </ul>
        </div>
      </form>
      <form id="yshen" name='yshen' style='text-align:center;display:none' method=post action='https://openapi.ysepay.com/gateway.do' target='_blank'>
        <?php if(is_array($param) || $param instanceof \think\Collection || $param instanceof \think\Paginator): $k = 0; $__LIST__ = $param;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?>
        <input type = 'hidden' name='<?php echo $vo['name']; ?>' value='<?php echo $vo['value']; ?>' />
        <?php endforeach; endif; else: echo "" ;endif; ?>
        <input type=submit value="去充值">
      </form>
      <form id="yibao" name='yibao' style='text-align:center;display:none' method=post action='https://cashier.etonepay.com/NetPay/BankSelect.action' target='_blank'>
        <input type=submit value="去充值">
      </form>
    </div>
  </div>
</div>




<script src="http://cdn.amazeui.org/amazeui/2.7.2/js/amazeui.min.js"></script>
</body>
</html>