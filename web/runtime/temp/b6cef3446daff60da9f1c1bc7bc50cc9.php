<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:82:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/index/index.html";i:1530952913;s:77:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/header.html";i:1531405841;s:77:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/footer.html";i:1531405715;}*/ ?>
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
    <!-- menu-container -->
    <link rel="stylesheet" href="__CSS__/index.min.css" />
    <script type="text/javascript" src="__JS__/jquery.SuperSlide.2.1.2.js" ></script>
    <!--<script type="text/javascript" src="__JS__/script.js" ></script>-->
    <script type="text/javascript" src="__JS__/vimeoPlayer.js" ></script>
    <!--<script type="text/javascript" src="__JS__/indexVideos.js" ></script>-->
    <div id="showdialog">
    </div>
    <div id="banner" class="sy-m-banner">
        <ul class="pic">
            <li><a href="/newgame_play.html?curmid=20" ><img src="__IMG__/index/BJPK10-banner24.jpg"/></a></li>
            <!--<li><a href="#opener0"><img src="__IMG__/index/R88-wap-banner-0801.jpg"/></a></li>-->
            <li><a href="/recharge/index?tag=cz"><img src="__IMG__/index/banner_20170323141710.jpg"/></a></li>
            <li><a href="/activity/index.html" ><img src="__IMG__/index/banner_20160714-2.jpg"/></a></li>
            <li><a href="/recharge/index?tag=cz"><img src="__IMG__/index/R_bnr_QQ_01_20170509.jpg"/></a></li>
        </ul>
        <a class="arrow-left" href="javascript:void(0)"></a>
        <a class="arrow-right" href="javascript:void(0)"></a>
        <ul class="banner-page"></ul>
    </div>

    <script type="text/javascript">
        function topBarAnimation(e) {
            $(".topBar ul li").each(function (t) {
                $(this).delay(3e3 * t).animate({
                    top: 0
                }, function () {
                    $(this).delay(2e3).animate({
                        top: "-48px"
                    }, function () {
                        $(this).css("top", "48px"), t === e && topBarAnimation(e)
                    })
                })
            })
        }
        $(function () {
            $(".sy-top-msg").slide({
                mainCell: "ul",
                autoPlay: !0,
                effect: "topLoop"
            }), $(".gongg").slide({
                mainCell: "ul",
                autoPlay: !0,
                effect: "leftMarquee",
                interTime: 50,
                vis: 1
            }), $(".program").slide({}), $(".sy-m-banner").slide({
                titCell: ".banner-page",
                mainCell: ".pic",
                effect: "leftLoop",
                autoPage: "<li><a></a></li>",
                autoPlay: !0,
                delayTime: 1e3,
                interTime: 3e3,
                prevCell: ".arrow-left",
                nextCell: ".arrow-right",
                pnLoop: !0,
                trriger: "click",
                vis: "auto"
            }), $(".smallbanner").slide({
                mainCell: ".pic",
                effect: "left",
                pnLoop: !1
            });
            var e = $(".topBar ul li").length - 1;
            topBarAnimation(e)
        });
        $(function(){jQuery("#qoo").slide({mainCell:".bonus-message",autoPlay:true,effect:"topMarquee",vis:5,interTime:50});});
    </script>
    <div class="clear" id="content">



        <div id="lottery">
            <div class="lottery-1">
                <a href="/newgame_play.html?curmid=36">

                    <span class="lottery-win">开始游戏</span>
                </a>
            </div><!-- lottery-1 -->
            <div class="lottery-2">
                <a href="/newgame_play.html?curmid=6">

                    <span class="lottery-win">开始游戏</span>
                </a>
            </div><!-- lottery-2 -->
            <div class="lottery-3">
                <a href="/newgame_play.html?curmid=45">

                    <span class="lottery-win">开始游戏</span>
                </a>
            </div><!-- lottery-3 -->

            <div class="lottery-bjpk10">
                <a href="/newgame_play.html?curmid=20">

                    <span class="lottery-win">开始游戏</span>
                </a>
            </div><!-- lottery-bjpk10 -->

            <!--<div class="lottery-4">
                <a href="/newgame_play.html?curmid=4346">
                </a>
                <a class="inner-btn" href="/newgame_play.html?curmid=4346">
                    <span class="lottery-win">开始游戏</span>
                </a>
                <a class="inner-btn" href="http://xosothudo.com.vn/" target="_blank">
                    <span class="lottery-win">官方网站</span>
                </a>
            </div>--><!-- lottery-4 -->

        </div><!-- lottery -->


        <div class="clear" id="news-and-events">
            <div class="events">
                <div class="events-title">中奖信息</div>
                <div id="qoo">
                    <ul class="bonus-message">
                        <li>恭喜8＊＊在极速3D中了6,000.00元</li>
                        <li>恭喜y＊在一分11选5中了16,840.00元</li>
                        <li>恭喜亮＊在一分11选5中了6,336.00元</li>
                        <li>恭喜8＊＊在秒秒时时彩中了29,280.00元</li>
                        <li>恭喜8＊＊在一分11选5中了145,530.00元</li>
                        <li>恭喜8＊＊在秒秒时时彩中了174,600.00元</li>
                        <li>恭喜8＊＊在秒秒时时彩中了262,752.00元</li>
                        <li>恭喜捷＊＊在秒秒时时彩中了28,800.00元</li>
                    </ul>
                </div>
            </div><!-- events -->
            <div class="news">
                <div class="news-title">平台公告</div>
                <ul>
                    <?php if(is_array($notice) || $notice instanceof \think\Collection || $notice instanceof \think\Paginator): $i = 0; $__LIST__ = $notice;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                    <li><a href="/user/showmessage?id=<?php echo $vo['id']; ?>" title="平台公告" target="_blank"><?php echo $vo['title']; ?></a></li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div><!-- news -->
        </div><!-- news-and-events -->
    </div><!-- content -->
    <div class="latest_news" hash="<?php echo $hash; ?>">
        <div class="latest_news_inner">
            <div class="latest_news_header"><?php echo $notice_first['title']; ?><i class="btn_close"></i></div>
            <div class="latest_news_content">
                <!--<div class="latest_news_title" style="text-align: center;"></div>-->
                <div class="anno_content">
                        <?php echo $notice_first['content'] ?>
                    <!--<div style="clear:both;"></div>
                    <div style="margin: 0">
                        <img src="__IMG__/announcement/1.png" alt=""  style="width:24px;vertical-align:middle"> 可以通过手动指定DNS，详情请
                        <a href="help_center/index.html?tag=cjwt" target="_blank" class="link">点此查看</a>
                    </div>-->
                </div>
                <p> <style type="text/css">
                    .latest_news {
                        height: 420px !important;
                    }
                    .latest_news_content {
                        height: 370px !important;
                        background-color: #dadada;
                    }
                    .anno_content {
                        padding-left: 5px;
                        font-size: 21px !important;
                        padding-top: 20px;
                        padding-right: 5px;
                    }
                    .link {
                        text-decoration: underline !important;
                    }
                    .tongzhiviewinfo {
                        text-align: center;
                        color: #999;
                        padding-bottom: 10px;
                    }
                    .tongzhiviewtxt {
                        padding-top: 20px;
                        font-size: 21px;
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                    .tongzhiviewtxt p {
                        font-size: 21px;
                    }

                    .gifts {
                        text-align: center;
                    }

                    .gifts::after {
                        clear: both;
                        content: "";
                        display: block;
                        height: 0;
                        visibility: hidden;
                    }

                    .gifts .title_gifts {
                        color: #000000;
                        font-size: 16px;
                        font-weight: bold;
                        margin-bottom: 9px;
                        white-space: nowrap;
                    }
                    /*Download*/

                    .gifts .download {
                        display: inline-block;
                        padding: 0 20px 5px;
                        vertical-align: top;
                    }

                    .gifts .download a,
                    .btn_event[href] {
                        border: none;
                        border-radius: 2px;
                        color: #ffffff !important;
                        cursor: pointer;
                        display: inline-block;
                        font-size: 13px;
                        line-height: 14px;
                        text-align: center;
                        text-decoration: none !important;
                        outline: none;
                    }

                    .gifts .download .btn_video {
                        background: #0c7b70;
                        margin: 4px 0 0 30px;
                        padding: 8px 0;
                        width: 170px;
                    }

                    .btn_event {
                        background: #0c7b70;
                        margin: 0 10px;
                        padding: 8px;
                        width: auto;
                    }

                    .btn_event:hover,
                    .gifts .download .btn_video:hover {
                        background: #018f81;
                    }

                    .gifts .download .btn_download,
                    .gifts .download .btn_download.zip {
                        background-color: #ffffff;
                        border-radius: 2px;
                        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
                        color: #4d4d4d !important;
                        display: block;
                        overflow: hidden;
                        padding: 8px 10px 8px 40px;
                        position: relative;
                        -webkit-transition: 0.25s all ease;
                        -moz-transition: 0.25s all ease;
                        -ms-transition: 0.25s all ease;
                        -o-transition: 0.25s all ease;
                        transition: 0.25s all ease;
                        width: 120px;
                    }

                    .gifts .download .btn_download:before,
                    .gifts .download .btn_download:after,
                    .gifts .download .btn_download.zip:before,
                    .gifts .download .btn_download.zip:after {
                        content: "";
                        display: block;
                        position: absolute;
                    }
                    .gifts .download .btn_download.zip:before {
                        background: #96CD01 url(http://ucaaar1.bjewx.com/sy2/images/btn/btn_download.png) 6px center no-repeat;
                        border-radius: 2px 0 0 2px;
                        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
                        height: 100%;
                        top: 0;
                        left: 0;
                        -webkit-transition: 0.25s all ease;
                        -moz-transition: 0.25s all ease;
                        -ms-transition: 0.25s all ease;
                        -o-transition: 0.25s all ease;
                        transition: 0.25s all ease;
                        width: 28px;
                    }
                    .gifts .download .btn_download:before {
                        background: #0c7b70 url(http://ucaaar1.bjewx.com/sy2/images/btn/btn_download.png) 6px center no-repeat;
                        border-radius: 2px 0 0 2px;
                        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
                        height: 100%;
                        top: 0;
                        left: 0;
                        -webkit-transition: 0.25s all ease;
                        -moz-transition: 0.25s all ease;
                        -ms-transition: 0.25s all ease;
                        -o-transition: 0.25s all ease;
                        transition: 0.25s all ease;
                        width: 28px;
                    }

                    .gifts .download .btn_download:after,
                    .gifts .download .btn_download.zip:after {
                        background: #fff;
                        height: 86%;
                        top: 7%;
                        left: 29px;
                        width: 1px;
                    }

                    .gifts .download .btn_download:hover,
                    .gifts .download .btn_download.zip:hover {
                        color: #ffffff !important;
                    }

                    .gifts .download .btn_download:hover:before,
                    .gifts .download .btn_download.zip:hover:before {
                        border-radius: 3px;
                        width: 100%;
                    }

                    .gifts .download .btn_download span,
                    .gifts .download .btn_download.zip span {
                        position: relative;
                        z-index: 2;
                    }
                    /*QRcode*/

                    .gifts * {
                        box-sizing: content-box;
                    }

                    .gifts .qr_code {
                        display: inline-block;
                        vertical-align: top;
                    }

                    .gifts .qr_code span {
                        display: block;
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .gifts .qr_code a {
                        color: #000000 !important;
                        display: inline-block;
                        outline: none;
                        text-decoration: none;
                        padding: 0 20px;
                    }

                    .gifts .qr_code a:hover div {
                        border-color: #ff931e;
                    }

                    .gifts .qr_code a div {
                        border: 3px solid #00c4bf;
                        display: inline-block;
                        height: 72px;
                        -webkit-transition: 0.3s all ease;
                        -moz-transition: 0.3s all ease;
                        -ms-transition: 0.3s all ease;
                        -o-transition: 0.3s all ease;
                        transition: 0.3s all ease;
                        width: 72px;
                    }

                    .gifts .qr_code_android,
                    .gifts .qr_code_wap {
                        background: none;
                    }

                    .gifts .qr_code_wap div {
                        background-image: url(http://ucaaar1.bjewx.com/sy2/images/qr_code/qr_code_wap.png);
                    }

                    .gifts .qr_code_android div {
                        background-image: url(http://ucaaar1.bjewx.com/sy2/images/qr_code/qr_code_android.png);
                    }
                </style>
                    <script type="text/javascript">
                        function getCookieNotices( name ) {
                            var arr = document.cookie.match( new RegExp("(^| )"+name+"=([^;]*)(;|$)") );
                            if( arr != null) return unescape( arr[2] ); return null;
                        }
                        $(function() {
                            var wapUrl = '#';
                            var urlStr = window.location.href;
                            var urlAry = urlStr.split('/');
                            var hostAry = urlAry[2].split('.');
                            if (hostAry[0] == 'm' || hostAry[0] == '139') {
                                $('div.description').html(
                                    '由于近期浏览器出现漏洞，导致您浏览平台页面时，会跳转到陌生页面 <br />' +
                                    '如果无法正常开启平台页面，请依照下述步骤操作 <br /><br />' +
                                    '1. 使用目前平台推出的「客户端加强版」。 <br />' +
                                    '2. 使用目前全新线路 <br />'
                                );
                            } else {
                                var clienttag = getCookieNotices('clienttag');
                                if (clienttag == 'use') {
                                    $('a.clienttag').click(function(event){
                                        event.preventDefault();
                                        ShowVideo($(this).attr('href'));
                                    });
                                }
                            }
                        });
                    </script></p>
            </div>
        </div>
    </div>
    <div class="mask_pop"></div>


    <script language="JavaScript">

    </script>
    <script type="text/javascript">

        //设置cookie
        function SetCookie( name, value, expire ) {
            var exp  = new Date();
            exp.setTime( expire.getTime() );
            document.cookie = name + "="+ escape ( value ) + ";expires=" + exp.toGMTString();
        }
        //获取cookie
        function getCookie( name ) {
            var arr = document.cookie.match( new RegExp("(^| )"+name+"=([^;]*)(;|$)") );
            if( arr != null) return unescape( arr[2] ); return null;
        }

        $( document ).ready( function () {
            var newsUser = getCookie("user");
            var cookies = document.cookie;
            var search1 = newsUser+"=";
            var search2 = "; "+newsUser;
            var cStart1 = cookies.indexOf( search1 );
            var cStart2 = cookies.indexOf( search2 );

            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate() + 1;

            var nextDay = new Date( year, month, day, 00, 00, 00 );

            var latestNewsHash = $(".latest_news").attr("hash");

            if( (cStart1 == -1 && cStart2 == -1) || getCookie(newsUser) != latestNewsHash ) {
                latestNews();
                SetCookie( newsUser, latestNewsHash, nextDay );
            }

            function latestNews() {
                $( parent.document ).find( ".latest_news, .mask_pop" ).show();
                $( parent.document ).find( ".btn_close" ).click(function(){
                    $( parent.document ).find( ".latest_news, .mask_pop" ).remove();
                })
            }


        });
        $( document ).ready( function () {
            for(i=0;i<$("#guide > a").length;i++){
                $("#guide > a:eq("+i+")").click({id:i},function(e) {
                    n=e.data.id;
                    $("#guide > a, #guide #guide-inner > div").removeClass("current");
                    $("#guide > a:eq("+n+"), #guide #guide-inner > div:eq("+n+")").addClass("current");
                });
            }
            $("#guide > a").on("click", function(e){
                e.stopPropagation();
            });
        });

    </script>
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
