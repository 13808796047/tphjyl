<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:82:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/index/login.html";i:1528684457;s:77:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/footer.html";i:1531011381;}*/ ?>
<!DOCTYPE html PUBLIC "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="format-detection" content="telephone=no, email=no, adress=no">


    <title>皇家娱乐平台</title>

    <link rel="stylesheet" href="__CSS__/themes/base/jquery-ui.min.min.css" />
    <script src="__JS__/util/jquery-1.9.1.min.js"></script>
    <script src="__JS__/ui/jquery-ui.min.js"></script>
    <script src="__JS__/game/util/localstorage.js"></script>
    <script src="__JS__/module/main.js"></script>
    <script src="__JS__/module/header.js"></script>
    <link rel="stylesheet" href="__CSS__/util.min.css" />
    <link rel="stylesheet" href="__CSS__/logreg.min.css" />

    <link rel="stylesheet" href="__CSS__/iconfont/font-awesome.css" />
    <!--[if IE 7] -->
    <link rel="stylesheet" href="__CSS__/iconfont/font-awesome-ie7.css" />
    <!--[endif]   -->

    <script>
        window.$pcinfoid = "0";
        if($pcinfoid > 0) {
            window.appData = {
                clientVersion: "",
                SetupLocationPath: ""
            };
        }
        document.cookie = "state=show;"
        // function openKefu() {
        // 	$zopim.livechat.window.openPopout();
        // }
    </script>

</head>
<body id="lan">
<div id="wrap">
    <div id="login">
        <!--<h1 class="no-display">
            如果您不能正常浏览此页面，请点击链接下载安装平台客户端 <a href="http://pan.baidu.com/s/1eQRiBlg">客户端下载</a>
        </h1>-->
        <div class="logo"><a href="./">LOGO</a></div>
        <div class="slogan">我们专注的是您的需求</div>
        <div id="login-area">
            <h1>用户登录</h1>
            <form id="J-login-form" action="" method="post">
                <div class="user-name clear"><label>用户名：</label><input id="J-user-name" type="text" /></div>
                <div class="password clear"><label>密码：</label><input id="J-user-password" type="password" /></div>
                <div class="pin clear"><label>验证码：</label><input style="width:135px;" id="J-verification" type="text" /><img  style="width:120px;" id="validate" title="点击刷新" onclick="this.src=this.src+'?'+Math.random()" class='input-box code_2' src="<?php echo captcha_src(); ?>" /></div>
                <div class="login-status"></div>
                <input id="J-form-submit" type="submit" value="登录">
            </form>
        </div><!-- login-area -->
    </div><!-- login -->
    <script type="text/javascript" src="__JS__/util/jquery.md5.js"></script>
    <script type="text/javascript" src="__JS__/module/index.js"></script>
    <!--Start of Zendesk Chat Script-->
    <!--<script type="text/javascript">
        window.$zopim||(function(d,s){var z=$zopim=function(c){
            z._.push(c)},$=z.s=
            d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
        _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
            $.src='https://v2.zopim.com/?4h2KEGfpbotuyDuFFuPKHrEJJcZay335';z.t=+new Date;$.
                type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
    </script>-->
    <!--End of Zendesk Chat Script-->
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