<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:81:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/user/index.html";i:1528683058;s:77:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/header.html";i:1531405841;s:77:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/footer.html";i:1531405715;}*/ ?>
﻿<!DOCTYPE html>
<html>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="format-detection" content="telephone=no, email=no, adress=no">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>皇家娱乐平台</title>
    <!--[endif]   -->

    <!-- 工具类 -->
    <script type="text/javascript" src="__JS__/util/util.js"></script>
    <script type="text/javascript" src="__JS__/main.min.js"></script>
    <!-- -->
    <link rel="stylesheet" href="http://cdn.amazeui.org/amazeui/2.7.2/css/amazeui.min.css">
    <link rel="stylesheet" href="__CSS__/index.css">
    <link rel="stylesheet" href="__CSS__/themes/base/jquery-ui.min.css" />
    <link rel="stylesheet" href="__CSS__/util.min.css" />
    <link rel="stylesheet" href="__CSS__/default.min.css" />
    <link rel="stylesheet" href="__CSS__/openintro.min.css" />

    <script type="text/javascript" src="__JS__/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="__JS__/ui/jquery-ui.min.js"></script>
    <script type="text/javascript" src="__JS__/util/localstorage.js"></script>
    <script type="text/javascript" src="__JS__/module/main.js"></script>
    <link rel="stylesheet" href="__CSS__/iconfont/font-awesome.css" />

    <!--[if IE 7] -->
    <link rel="stylesheet" href="__CSS__/iconfont/font-awesome-ie7.css" />
</head>
<body id="lan">
<div id="wrap">
    <!-- dice -->
    <div id="toolbar">
        <div class="index">
            <a href="/"></a><span>返回首页</span></div>
        <div class="faq">
            <a href="<?php echo url('/help_center/index',['tag'=>'cjwt']); ?>"></a><span>常见问题</span></div>

        <!--&lt;!&ndash;[if gte IE 9 | !IE ]>&lt;!&ndash;dash;&gt;
            &lt;!&ndash;<script type="text/javascript" src="__JS__/clipboard.min.js"></script>&ndash;&gt;
            <!--<script type="text/javascript" src="https://rysslyun.b0.upaiyun.com/sy2/js/clipboard.min.js"></script>-->
            <!--<script>-->
                <!--var clients = ['click-to-copy0','click-to-copy1','click-to-copy2','click-to-copy3','click-to-copy4','click-to-copy5'];-->
                <!--var selector = [];-->
                <!--var clipboard = new Clipboard('i[id^="click-to-copy"]');-->
                <!--clipboard.on('success', function(e) {-->
                    <!--sAlert("复制到剪贴板：" + e.text)-->
                    <!--e.clearSelection();-->
                <!--});-->

                <!--clipboard.on('error', function(e) {-->
                    <!--console.error('Action:', e.action);-->
                    <!--console.error('Trigger:', e.trigger);-->
                <!--});-->
            <!--</script>-->
            <!--&lt;!&ndash;<![endif]&ndash;&gt;-->
            <!--&lt;!&ndash;[if lt IE 9]>-->
            <script>
                $('i[id^="click-to-copy"]').click(function(){
                    sAlert("抱歉，您所使用的浏览器无法完成此操作。请手动添加");
                });
            </script>
            <![endif]&ndash;&gt;

        </div>
        <!-- screen -->
    </div>
    <!-- toolbar -->
    <div id="header">
            <div class="clear" id="nav">
            <div id="logo">
                <a href="/"></a>
            </div>
            <!-- logo -->
            <div class="header-dropdown" id="all-games">
                <span>全部游戏</span>
                <div class="dropdown-box">
                    <div class="dropdown-box-inner clear">
                        <div class="all-games1">
                            <?php if(is_array($play_lists['1']) || $play_lists['1'] instanceof \think\Collection || $play_lists['1'] instanceof \think\Paginator): $i = 0; $__LIST__ = $play_lists['1'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                            <a href="/newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
                            <!--<a href="./newgame_play.html?curmid=5">一分时时彩</a>
                            <a href="./newgame_play.html?curmid=34">两分时时彩</a>
                            <a href="./newgame_play.html?curmid=14">腾讯时时彩</a>
                            <a href="./newgame_play.html?curmid=1">  重庆时时彩</a>-->
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </div>
                        <!-- all-games1 -->
                        <div class="all-games2">
                            <?php if(is_array($play_lists['2']) || $play_lists['2'] instanceof \think\Collection || $play_lists['2'] instanceof \think\Paginator): $i = 0; $__LIST__ = $play_lists['2'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                                <a href="/newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                            <!--<a href="./newgame_play.html?curmid=38">秒秒11选5</a>
                            <a href="./newgame_play.html?curmid=39">一分11选5</a>-->
                            <!--<a href="./newgame_play.html?curmid=2726">两分11选5</a>
                            <a href="./newgame_play.html?curmid=4655">五分11选5</a>
                            <a href="./newgame_play.html?curmid=174"> 山东11选5</a>-->
                            <!--<a href="./newgame_play.html?curmid=16"> 江西11选5</a>
                            <a href="./newgame_play.html?curmid=6"> 广东11选5</a>-->
                        </div>
                        <!-- all-games2 -->
                        <div class="all-games3">
                            <?php if(is_array($play_lists['3']) || $play_lists['3'] instanceof \think\Collection || $play_lists['3'] instanceof \think\Paginator): $i = 0; $__LIST__ = $play_lists['3'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                            <a href="/newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                            <!--<a href="./newgame_play.html?curmid=2872">极速3D</a>-->
                            <!--<a href="./newgame_play.html?curmid=9"> 福彩3D</a>-->
                            <!--<a href="./newgame_play.html?curmid=615"> 体彩P3</a>-->

                            <!-- <a href="#" onclick="sAlert('敬请期待')">福彩3D</a> -->
                            <!-- <a href="#" onclick="sAlert('敬请期待')">体彩P3</a> -->
                            <!--<a href="./game_play.html?curmid=341">北京快乐8</a>-->
                        </div>
                        <!-- all-games3 -->
                        <div class="all-games4">
                            <?php if(is_array($play_lists['6']) || $play_lists['6'] instanceof \think\Collection || $play_lists['6'] instanceof \think\Paginator): $i = 0; $__LIST__ = $play_lists['6'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                            <a href="/newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </div><!-- all-games4 -->
                        <div class="all-games5">
                            <a href="/newgame_play.html?curmid=46">皇家龙凤</a>
                        </div><!-- all-games5 -->
                    </div>
                    <!-- dropdown-box-inner -->
                </div>
                <!-- dropdown-box -->
            </div>
            <!-- all-games -->
            <div class="clear" id="navbar">
                <ul>
                    <li id="userbar"><a href="/user/index" style="color:#666">
                        <?php echo session('userData.username'); ?></a></li>
                    <li class="balance">
                        <span class="J-balance-show"><?php echo session('userData.coin'); ?></span>
                        <a class="refresh"><i class="icon-refresh"></i></a>
                        <span class="J-balance-star toggle">*****</span>
                    </li>
                    <li class="hideAmtli">
                        <img class="hideAmt" src="/static/images/matt/eye-open-black.png">
                    </li>
                </ul>
                <div id="settings">
                    <div>
                        <a href="/recharge/index?tag=cz">
                            充值                                </a>
                    </div>
                    <div>
                        <a href="/recharge/index">
                            提现                                </a>
                    </div>
                    <!--<div class="header-dropdown" id="language">
                        <a href="#">
                            语言                                </a>
                        <div class="dropdown-box">
                            <div class="dropdown-box-inner clear">
                                <a href="./default_chamgelang.html?code=1">中文</a>
                                <a href="./default_chamgelang.html?code=2">English</a>
                                <a href="./default_chamgelang.html?code=3">Tiếng Việt</a>
                            </div>
                            &lt;!&ndash; dropdown-box-inner &ndash;&gt;
                        </div>
                        &lt;!&ndash; dropdown-box &ndash;&gt;
                    </div>-->
                    <div class="logout">
                        <a href="<?php echo url('//login/logout'); ?>" title="登出"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 退出</a>
                    </div>
                </div>
                <!-- settings -->
            </div>
            <!-- navbar -->
        </div>
        <!-- nav -->
    </div>
    <!-- header -->
    <div id="menu-container">
        <div class="clear" id="menu">
            <ul class="left">
                <li ><a href="/">首页</a></li>
                <li ><a href="/newgame_play.html?curmid=36">时时彩</a></li>
                <li ><a href="/newgame_play.html?curmid=6">11选5</a></li>
                 <li ><a href="/newgame_play.html?curmid=45">3D/P3</a></li>
                <li ><a href="/newgame_play.html?curmid=20">北京PK10</a></li>
                <!--<li ><a href="./newgame_play.html?curmid=4346">越南彩</a></li>-->
                <li><a href="/newgame_play.html?curmid=46">皇家小游戏</a></li>
            </ul>
            <ul class="right">
                <li><a class="highlight" href="<?php echo url('/activity/index'); ?>">活动</a></li>
                <li><a href="<?php echo url('/game_record/index'); ?>">游戏记录</a></li>
                <li><a href="/user/index">帐户中心</a></li>
                <li><a href="<?php echo url('/report_manage/index'); ?>">报表管理</a></li>
                <li><a href="<?php echo url('/help_center/index',['tag'=>'cjwt']); ?>">帮助中心</a></li>
                <li><a href="/user/index?tag=messages">消息</a>
                </li>
                <!-- <li><a href="#" onclick="LC_API.open_chat_window();return false">客服</a></li> -->
                <!-- <li><a href="#" onclick="$zopim.livechat.window.toggle();">客服</a></li> -->
            </ul>
        </div>

    </div>

    <script>
        $(function () {
            $(document).on('click', '.refresh', function () {
                //自动刷新
                $.ajax({
                    url: '/newgame_play.html?tag=getuserbalance',
                    dataType: 'json',
                    method: 'GET',
                    success: function (r) {
                        if (Number(r['isSuccess']) == 1) {
                            $('.J-balance-show').text(r['availablebalance']);
                        }
                    }
                });
            })
        })
    </script>
<head>
    <script>
        function setIframeHeight(iframe) {
            if (iframe) {
                var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
                if (iframeWin.document.body) {
                    iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
                }
            }
        };
        window.onload = function () {
            setIframeHeight(document.getElementById('mainFrame'));
        };
    </script>
</head>
<body id="lan">
    <div id="wrap">

<div class="main-header">
	<div class="main-title">平台管理</div>
</div>
<div class="main-section">
	<div class="left-aside">
		<div class="header">
                <!-- 账户中心 -->
      		<span>账户中心</span>
    	</div>
		<div class="content">
				                        <!-- menu title = 用户列表-->
							<div class="row  <?=$tag!='messages'?'active':''?>">
					<a href="user_list.html" target="mainFrame">
						<i class="arrow-right"></i>用户列表
					</a>
				</div>
					                        <!-- menu title = 添加用户-->
			<?php if($user_type==1): ?>
				<div class="row ">
					<a href="user_adduser.html" target="mainFrame">
						<i class="arrow-right"></i>添加用户
					</a>
				</div>
			<?php endif; ?>
					                        <!-- menu title = 自助开户-->
						<!--	<div class="row ">
					<a href="user_otheradduser.html" target="mainFrame">
                                               
						<i class="arrow-right"></i>自助开户					</a>
				</div>-->
					                        <!-- menu title = 彩种信息-->
							<!--<div class="row ">
					<a href="user_userset.html" target="mainFrame">
                                               
						<i class="arrow-right"></i>彩种信息					</a>
				</div>-->
					                        <!-- menu title = 安全中心-->
							<div class="row ">
					<a href="user_setmenu.html" target="mainFrame">
                                               
						<i class="arrow-right"></i>安全中心					</a>
				</div>
					                        <!-- menu title = 消息管理-->
							<div class="row <?=$tag=='messages'?'active':''?>">
					<a href="user_messages.html" target="mainFrame">
                                               
						<i class="arrow-right"></i>消息管理					</a>
				</div>
					                        <!-- menu title = 团队统计-->
							<div class="row ">
					<a href="user_team.html" target="mainFrame">
                                               
						<i class="arrow-right"></i>团队统计					</a>
				</div>
			<?php if($user_rigongzi==true && $settings['RiGongZiKaiGuan']== 1): ?>
				<div class="row ">
					<a href="user_rigongzi.html" target="mainFrame">
					<i class="arrow-right"></i>日工资管理</a>
				</div>
			<?php endif; ?>
			</div>
	</div><!--menu-->

	<div class="right-aside">
		<div class="navigation">
			<a href="/">首页</a>
			<span>&gt;</span>
                        <!-- 账户中心 -->
			<a href="#">账户中心</a>
			<span>&gt;</span>
                        <!-- 用户列表 -->
                        <a href="#" class="navgiate1">用户列表</a>
			
		</div><!--navigation-->
				<iframe onload="setIframeHeight(this)" src="<?php echo $page_url; ?>" allowtransparency="true"  name="mainFrame" width="100%" scrolling="no" frameborder="0" id="mainFrame" border="0" noresize="noresize" framespacing="0"  ></iframe>
			</div>
</div>
<!--//foot//-->
        <div id="client" class="client" >
    <div class="container">
        <div class="qr_code">
            <a class="qr_code_wap" href="http://taapay.cn:8081" target="_blank">
                <span class="title_client">WAP</span>
                <div></div>
            </a>
        </div>
        <div class="info">
            <span class="title_client"></span>
            <a href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/" target="_blank">
                <svg>
                    <image xlink:href="__IMG__/icon/icon_chrome.svg" src="__IMG__/icon/icon_chrome.png" width="50" height="50">
                </svg>
                <span>Chrome</span>
            </a>
            <a href="https://www.mozilla.org/zh-CN/firefox/new/" target="_blank">
                <svg>
                    <image xlink:href="__IMG__/icon/icon_firefox.svg" src="__IMG__/icon/icon_firefox.png" width="50" height="50">
                </svg>
                <span>Firefox</span>
            </a>
            <a href="/cs" target="_blank">
                <svg>
                    <image xlink:href="__IMG__/icon/icon_speed.svg" src="__IMG__/icon/icon_speed.png" width="50" height="50">
                </svg>
                <span>测速网站</span>
            </a>
        </div>
    </div>
</div>
<div class="footer">
    <div class="container">
        <div class="license">
            <div class="license_1"></div>
            <div class="license_2"></div>
        </div>
        <div class="warning">郑重提示：彩票有风险，投注需谨慎，不向未满18周岁的青少年出售彩票</div>
        <div class="declare">菲律宾政府合法博彩牌照证</div>
        <div>浏览器建议:首选为Chrome浏览器,其次为火狐和IE9,IE10浏览器 分辨率建议:使用1366*768分辨率</div>
    </div><!-- container -->
</div><!-- footer -->
</div><!-- wrap -->
</body>
<!-- Google Analytics -->
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-86467011-1', 'auto');
    ga('send', 'pageview');

</script>

<script type="text/javascript">

    //呼叫客戶端內的瀏覽器,另開網頁視窗
    function ShowVideo(name) {
        cef.showvideo(name);
    }

    var __LAN__ = ''.replace('_','').toUpperCase() ;
    window.__lc = window.__lc || {};
    window.__lc.license = 9117575;
    (function() {
        var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
        lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
    })();
    for(i=0;i<$(".client_pop").length;i++){
        $(".client_pop:eq("+i+")").click({id:i},function(e) {
            n=e.data.id;
            $(".client_popup:eq("+n+")").addClass("display");
            $(".client_popup:not(:eq("+n+"))").removeClass("display");
            if( $(".client_popup").hasClass("display") ) {
                $(".client .client_popup .close, body").on('click', function(e) {
                    $(".client .client_popup").removeClass("display");
                });
            }
        });
    }
    $(".client_pop").on("click", function(e){
        e.stopPropagation();
    });

    $("body").on('click', ".display", function(e) {
        if(!$(e.target).attr('target')) {
            return false;
        }
    });


    $('a[href$="#client"]').click(function(e){
        $("html, body").animate({scrollTop: $(document).height()}, 500);
    });

</script>

<script src="http://cdn.amazeui.org/amazeui/2.7.2/js/amazeui.min.js"></script>



</html>
	</div><!-- wrap -->
</body>
<!-- Google Analytics -->
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-86467011-1', 'auto');
	ga('send', 'pageview');
</script>
</html>