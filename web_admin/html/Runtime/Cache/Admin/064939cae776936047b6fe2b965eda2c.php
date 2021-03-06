<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    
    <title><?php echo ($meta_title); ?>|时彩后台管理</title>
    <link href="/Public/favicon.ico" type="image/x-icon" rel="shortcut icon">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/base.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/common.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/module.css">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/style.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/blue_color.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/jquery-ui-1.8.21.custom.css" media="all">
    <!--[if lt IE 9]>
    <script type="text/javascript" src="/Public/static/jquery-1.10.2.min.js"></script>
    <![endif]--><!--[if gte IE 9]><!-->
    <script type="text/javascript" src="/Public/static/jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="/Public/Admin/js/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="/Public/Admin/js/jquery.mousewheel.js"></script>
    <script type="text/javascript" src="/Public/Admin/js/jquery-ui-1.8.23.custom.min.js"></script>

    <script>
        function goToDealWithCash() {
            window.location.href = "<?php echo U('business/cash');?>";
            //$('.yw_b_2').trigger('click');
            $(this).dialog('destroy');
        }

        function goToDealWithRec() {
            window.location.href = "<?php echo U('business/recharge');?>";
            //$('.yw_b_2').trigger('click');
            $(this).dialog('destroy');
        }
        function defaultCloseModal() {
            $(this).dialog('destroy');
        }
    </script>
    <!--<![endif]-->
    
    <style>
        .module {
            border: 1px solid #9BA0AF;
            margin: 20px 3% 0 3%;
            margin-top: 20px;
            background: #fff;
            border-radius: 5px;
            display: block;
            height: 100%;
            overflow: hidden;
        }

        .tabs_involved {
            border: 1px solid #dddddd;
            border-radius: 5px;
            float: left;
            line-height: 32px;
            color: #1F1F20;
            font-size: 13px;
            margin: 0px 0px;
            width: 100%;
            background: #eee;
        }

        .stats_overview {

            float: right;
            width: 60%;

        }

        .overview_today, .overview_previous {
            width: 25%;
            float: left;
            display: block;
        }

        .stats_overview p.overview_count {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            color: #333;;
            margin-bottom: 50px;
        }

        .module .module_content {
            text-transform: none;
            text-shadow: 0 1px 0 #fff;
            margin: 38px 20px;
            display: block;
        }

        .module .module_content .cztz {
            width: 23%;
            height: 32px;
            line-height: 30px;
            float: left;
            display: block;
        }

        .tablesorter {
            width: 95%;
            margin: 0px 0 0 0;
            text-align: center;
        }
    </style>

</head>
<body>
<!-- 头部 -->
<?php $__base_menu__ = $__controller__->getMenus(); ?>
<div class="header">
    <!-- Logo -->
    <span class="logo"></span>
    <!-- /Logo -->

    <!-- 主导航 -->
    <ul class="main-nav">
        <?php if(is_array($__base_menu__["main"])): $i = 0; $__LIST__ = $__base_menu__["main"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($i % 2 );++$i;?><li class="<?php echo ((isset($menu["class"]) && ($menu["class"] !== ""))?($menu["class"]):''); ?>"><a href="<?php echo (u($menu["url"])); ?>"><?php echo ($menu["title"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
    </ul>
    <!-- /主导航 -->

    <!-- 用户栏 -->
    <div class="user-bar">
        <a href="javascript:;" class="user-entrance"><i class="icon-user"></i></a>
        <ul class="nav-list user-menu hidden">
            <li class="manager">你好，<em title="<?php echo session('user_auth.username');?>"><?php echo session('user_auth.username');?></em>
            </li>
            <li><a href="<?php echo U('User/updatePassword');?>">修改密码</a></li>
            <!-- <li><a href="<?php echo U('User/updateNickname');?>">修改昵称</a></li> -->
            <li><a href="<?php echo U('Public/logout');?>">退出</a></li>
        </ul>
    </div>
</div>
<!-- /头部 -->

<!-- 边栏 -->
<div class="sidebar">
    <!-- 子导航 -->
    
        <div id="subnav" class="subnav">
            <?php if(!empty($_extra_menu)): ?>
                <?php echo extra_menu($_extra_menu,$__base_menu__); endif; ?>
            <?php if(is_array($__base_menu__["child"])): $i = 0; $__LIST__ = $__base_menu__["child"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$sub_menu): $mod = ($i % 2 );++$i;?><!-- 子导航 -->
                <?php if(!empty($sub_menu)): if(!empty($key)): ?><h3><i class="icon icon-unfold"></i><?php echo ($key); ?></h3><?php endif; ?>
                    <ul class="side-sub-menu">
                        <?php if(is_array($sub_menu)): $i = 0; $__LIST__ = $sub_menu;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($i % 2 );++$i;?><li>
                                <a class="item" href="<?php echo (u($menu["url"])); ?>"><?php echo ($menu["title"]); ?></a>
                            </li><?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul><?php endif; ?>
                <!-- /子导航 --><?php endforeach; endif; else: echo "" ;endif; ?>
        </div>
    
    <!-- /子导航 -->
</div>
<!-- /边栏 -->

<!-- 内容区 -->
<div id="main-content">
    <div id="top-alert" class="fixed alert alert-error" style="display: none;">
        <button class="close fixed" style="margin-top: 4px;">&times;</button>
        <div class="alert-content">这是内容</div>
    </div>
    <div id="main" class="main">
        
            <!-- nav -->
            <?php if(!empty($_show_nav)): ?><div class="breadcrumb">
                    <span>您的位置:</span>
                    <?php $i = '1'; ?>
                    <?php if(is_array($_nav)): foreach($_nav as $k=>$v): if($i == count($_nav)): ?><span><?php echo ($v); ?></span>
                            <?php else: ?>
                            <span><a href="<?php echo ($k); ?>"><?php echo ($v); ?></a>&gt;</span><?php endif; ?>
                        <?php $i = $i+1; endforeach; endif; ?>
                </div><?php endif; ?>
            <!-- nav -->
        

        
    <!-- 标题栏 -->

    <div class="module">
        <div class="search-form fr cf">
            <div class="sleft">
                时间：<input style="width:100px" type="text" name="fromTime" id="fromTime" class="search-input" value="<?=$this->iff(I('fromTime'),I('fromTime'),date('Y-m-d',time())) ?>" placeholder="开始时间">
                -
                <input style="width:100px" type="text" name="toTime" id="toTime" class="search-input" value="<?=$this->iff(I('fromTime'),I('fromTime'),date('Y-m-d',time())) ?>" placeholder="结束时间">
            </div>
            <div class="sbtn">
                <button type="submit" class="btn" id="search">查 找</button>
            </div>
        </div>
        <header><h2 class="tabs_involved" style="padding-left: 20px">统计概况</h2></header>
        <table class="table" style="width: 100%;margin-top: 80px;margin-bottom: 40px;">
            <caption></caption>
            <thead>
            <tr style="height: 40px;">
                <th style="width: 5%"></th>
                <th style="width: 14%">投注总额</th>
                <th style="width: 14%">返奖总额</th>
                <th style="width: 14%">返点总额</th>
                <th style="width: 14%">领取活动总额</th>
                <th style="width: 14%">盈亏总额</th>
                <th style="width: 14%">充值总额</th>
                <th style="width: 16%">提现总额</th>
            </tr>
            </thead>
            <tbody>
            <tr style="height: 50px;">
                <th>统计：</th>
                <th style="font-size: 18px;font-weight: bold;color: #333;" id="ztTCount"><?php echo ($todayData['betAmount']?number_format($todayData['betAmount'],2):0); ?></th>
                <th style="font-size: 18px;font-weight: bold;color: #333;" id="zjAmount"><?php echo ($todayData['zjAmount']?number_format($todayData['zjAmount'],2):0); ?></th>
                <th style="font-size: 18px;font-weight: bold;color: #333;" id="fanDianAmount"><?php echo ($todayData['fanDianAmount']?number_format($todayData['fanDianAmount'],2):0); ?></th>
                <th style="font-size: 18px;font-weight: bold;color: #333;"><span id="brokerageAmount"><?php echo ($todayData['brokerageAmount']?number_format($todayData['brokerageAmount'],2):0); ?></span>
                    <!--/<span id="brokerageAmount1"><?php echo ($todayData['betAmount']?number_format($todayData['betAmount']/10000*200,2):0); ?></span>-->
                </th>
                <th style="font-size: 18px;font-weight: bold;color: #333;" id="ztYKCount"><?php echo ($todayData['zyk']?number_format($todayData['zyk'],2):0); ?></th>
                <th style="font-size: 18px;font-weight: bold;color: #333;" id="rechargeAmount"><?php echo ($todayData['rechargeAmount']?number_format($todayData['rechargeAmount'],2):0); ?></th>
                <th style="font-size: 18px;font-weight: bold;color: #333;" id="cashAmount"><?php echo ($todayData['cashAmount']?number_format($todayData['cashAmount'],2):0); ?></th>
            </tr>
            </tbody>
        </table>
        <p style="margin-bottom: 30px; font-size: 14px;font-weight: bold;color:#333;text-align: center">
            <span style="margin-right: 40px;">用户总数：<?php echo ($userTotal); ?>(会员：<?php echo ($userTotalNotTest); ?>)</span>
            <span style="margin-right: 40px;">今日注册：<?php echo ($todayUserTotal); ?>(会员：<?php echo ($todayUserTotalNotTest); ?>)</span>
            <span>在线用户：<?php echo ($onlineUserTotal); ?>(会员：<?php echo ($onlineUserTotalNotTest); ?>)</span>
        </p>
    </div>

    </div>
    <div class="cont-ft">
        <div class="copyright">
            <div class="fl" id="withdrawNotify">
                <img src="/Public/Admin/images/new.gif" alt=""/>
                <span style="font-weight: bold; background-color: yellow;">待处理提现请求: <span id="withdrawCount"><?php echo ($withdrawCount); ?></span>条.</span>
                <a href="<?php echo U('business/cash');?>">&gt;&gt;去处理</a>
                <!--   <audio id="widthdrawNotifySound" src="/Public/Admin/sound/sound/cash.mp3" preload="auto"></audio> -->
                <audio id="widthdrawNotifySound" preload="auto">
                    <source src="/Public/Admin/sound/cash.mp3" type="audio/mpeg">
                </audio>
                <audio id="widthdrawNotifySound2" preload="auto">
                    <source src="/Public/Admin/sound/msg.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>
    </div>
</div>
<!-- /内容区 -->
<script type="text/javascript">
    (function () {
        var ThinkPHP = window.Think = {
            "ROOT": "", //当前网站地址
            "APP": "/index.php?s=", //当前项目地址
            "PUBLIC": "/Public", //项目公共目录地址
            "DEEP": "<?php echo C('URL_PATHINFO_DEPR');?>", //PATHINFO分割符
            "MODEL": ["<?php echo C('URL_MODEL');?>", "<?php echo C('URL_CASE_INSENSITIVE');?>", "<?php echo C('URL_HTML_SUFFIX');?>"],
            "VAR": ["<?php echo C('VAR_MODULE');?>", "<?php echo C('VAR_CONTROLLER');?>", "<?php echo C('VAR_ACTION');?>"]
        }
    })();
</script>
<script type="text/javascript" src="/Public/static/think.js"></script>
<script type="text/javascript" src="/Public/Admin/js/common.js"></script>
<script type="text/javascript">
    +function(){
        var $window = $(window), $subnav = $("#subnav"), url;
        $window.resize(function(){
            $("#main").css("min-height", $window.height() - 130);
        }).resize();

        /* 左边菜单高亮 */
        url = window.location.pathname + window.location.search;
        url = url.replace(".html", "")
            .replace(/(\/(p)\/\d+)|(&p=\d+)|(\/(id)\/\d+)|(&id=\d+)/, "");
        $subnav.find("a[href^='" + url + "']").parent().addClass("current");

        /* 左边菜单显示收起 */
        $("#subnav").on("click", "h3", function(){
            var $this = $(this);
            $this.find(".icon").toggleClass("icon-fold");
            $this.next().slideToggle("fast").siblings(".side-sub-menu:visible").
            prev("h3").find("i").addClass("icon-fold").end().end().hide();
        });

        $("#subnav h3 a").click(function(e){e.stopPropagation()});

        /* 头部管理员菜单 */
        $(".user-bar").mouseenter(function(){
            var userMenu = $(this).children(".user-menu ");
            userMenu.removeClass("hidden");
            clearTimeout(userMenu.data("timeout"));
        }).mouseleave(function(){
            var userMenu = $(this).children(".user-menu");
            userMenu.data("timeout") && clearTimeout(userMenu.data("timeout"));
            userMenu.data("timeout", setTimeout(function(){userMenu.addClass("hidden")}, 100));
        });

        /* 表单获取焦点变色 */
        $("form").on("focus", "input", function(){
            $(this).addClass('focus');
        }).on("blur","input",function(){
            $(this).removeClass('focus');
        });
        $("form").on("focus", "textarea", function(){
            $(this).closest('label').addClass('focus');
        }).on("blur","textarea",function(){
            $(this).closest('label').removeClass('focus');
        });

        // 导航栏超出窗口高度后的模拟滚动条
        var sHeight = $(".sidebar").height();
        var subHeight  = $(".subnav").height();
        var diff = subHeight - sHeight; //250
        var sub = $(".subnav");
        if(diff > 0){
            $(window).mousewheel(function(event, delta){
                if(delta>0){
                    if(parseInt(sub.css('marginTop'))>-10){
                        sub.css('marginTop','0px');
                    }else{
                        sub.css('marginTop','+='+10);
                    }
                }else{
                    if(parseInt(sub.css('marginTop'))<'-'+(diff-10)){
                        sub.css('marginTop','-'+(diff-10));
                    }else{
                        sub.css('marginTop','-='+10);
                    }
                }
            });
        }
    }();

    //提现请求提醒
    $(function(){
        //参数
        var getCountTimespan=30000; //毫秒
        var playSoundTimespan=8000;
        var holderEl=$('#withdrawNotify');
        var textEl=$('#withdrawCount');
        var ado= document.getElementById('widthdrawNotifySound');
        var ado2= document.getElementById('widthdrawNotifySound2');
        //变量
        var count=0;
        var getCount=function(){
            $.get("<?php echo U('business/withdrawCount');?>",function(data){
                count=parseInt(data);
                if(count>0){
                    holderEl.show();
                }
                else{
                    holderEl.hide();
                }
                textEl.html(count);
            });
        };
        var playSound=function(){
            if(count>0){
                ado.loop=false;
                ado.play();
            }
        };
        var betmoney = 0;
        var betCount=function(){
            $.get("<?php echo U('business/betsCount');?>",function(data){
                betmoney=parseInt(data);
            });
        };
        //开始
        holderEl.hide();
        getCount();
        betCount();
        setInterval(playSound,playSoundTimespan);
        setInterval(getCount,getCountTimespan);

        var playSound2=function(){
            if(betmoney>0){
                ado2.loop=false;
                ado2.play();
            }
        };
        setInterval(playSound2,playSoundTimespan);
        setInterval(betCount,getCountTimespan);
    });


    /*setInterval(function () {
     $.ajax({
     type: "GET",
     url: "<?php echo U('public/logoutUser');?>",
     data: {},
     dataType: "json",
     global: false,
     success: function(result) {
     if (result['isOnLine'] == 1){
     window.location.reload();
     }
     },
     error: function() {}
     });
     },3000);*/
</script>

    <link href="/Public/static/datetimepicker/css/datetimepicker.css" rel="stylesheet" type="text/css">
    <link href="/Public/static/datetimepicker/css/datetimepicker_blue.css" rel="stylesheet" type="text/css">
    <link href="/Public/static/datetimepicker/css/dropdown.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="/Public/static/datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
    <script type="text/javascript" src="/Public/static/datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"
            charset="UTF-8"></script>
    <script>
        $(function () {
            $('#fromTime,#toTime').datetimepicker({
                format: 'yyyy-mm-dd',
                language: "zh-CN",
                minView: 2,
                autoclose: true,
            });
            //showTab();
        });
    </script>
    <script>
        //使用json方式
        $("#search").click(function(){
            var fromTime = $("#fromTime").val();
            var toTime = $("#toTime").val();
            $.ajax({
                url:"<?php echo U('count/everyd');?>",
                dataType:'json',
                data: { "fromTime": fromTime,'toTime': toTime}, //参数值
                type: "GET", //请求方式 get 或者post
                success:function(data){
                    //console.log(data[0].betAmount);
                    var ztTCount = data.betAmount?(parseFloat(data.betAmount) ).toFixed(2):0;
                    var zjAmount = data.zjAmount?(parseFloat(data.zjAmount) ).toFixed(2):0;
                    var fanDianAmount = (parseFloat(data.fanDianAmount) ).toFixed(2);
                    var rechargeAmount = (parseFloat(data.rechargeAmount) ).toFixed(2);
                    var brokerageAmount = (parseFloat(data.brokerageAmount) ).toFixed(2);
//                    var brokerageAmount1 = (parseFloat(data.betAmount/10000*200) ).toFixed(2);
                   // var withdrawAmount = (parseFloat(data.withdrawAmount) ).toFixed(2);
                   var cashAmount = (parseFloat(data.cashAmount) ).toFixed(2);
                    var ztYKCount = (parseFloat(ztTCount-zjAmount-fanDianAmount-brokerageAmount) ).toFixed(2);
                    $("#ztTCount").html(ztTCount);
                    $("#zjAmount").html(zjAmount);
                    $("#fanDianAmount").html(fanDianAmount);
                    $("#ztYKCount").html(ztYKCount);
                    $("#rechargeAmount").html(rechargeAmount);
                    $("#cashAmount").html(cashAmount);
                    $("#brokerageAmount").html(brokerageAmount);
//                    $("#brokerageAmount1").html(brokerageAmount1);
                   // $("#withdrawAmount").html(withdrawAmount);
                }
            });
        });
    </script>

</body>
</html>