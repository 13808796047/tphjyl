<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:80:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/game/play.html";i:1530858471;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no, email=no, adress=no">

    <title>皇家娱乐</title>


    <link rel="stylesheet" href="__STATIC__/todo/images/common/base.css"/>
    <link rel="stylesheet" href="__STATIC__/css/util.min.css"/>
    <link rel="stylesheet" href="__STATIC__/todo/images/game<?php echo $game_js['game_css']; ?>"/>
    <link rel="stylesheet" href="__CSS__/iconfont/font-awesome.css"/>
    <link rel="stylesheet" href="__STATIC__/css/flipTimer.min.css"/>
    <link rel="stylesheet" href="__STATIC__/css/openintro.min.css"/>
    <!--[if IE 7] -->
    <link rel="stylesheet" href="__CSS__/iconfont/font-awesome-ie7.css"/>
    <!--[endif]   -->
    <script>
        var __LAN__ = ''.replace('_', '').toUpperCase();
        window.GamesInitData = {
            curmid: <?php echo $lottery['curmid']; ?>,
            lotteryid: <?php echo $lottery['lotteryid']; ?>,
            mode: 1,
            isTestUser: <?php echo session('userData.is_test'); ?>,
        lotterycnname: '<?php echo $lottery['lotterycnname']; ?>',
            LANG:'' === __LAN__ ? 'CN' : __LAN__,
            multilingual:
        <?php echo json_encode($multilingual); ?>
        }

    </script>
    <!-- 工具类 -->
    <script type="text/javascript" src="__STATIC__/todo/js/release/util.js"></script>
    <script src="__STATIC__/js/main.min.js"></script>
    <script type="text/javascript" src="__STATIC__/todo/js/release/gamebase.js"></script>
    <link rel="stylesheet" href="__STATIC__/todo/images/game/game-touzhu.css">
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
    <script src="__STATIC__/todo/js/release/jquery.cookie.js"></script>

</head>
<body id="lan" class="type_lottery56">
<div id="toolbar">
    <div class="index"><a href="/"></a><span>返回首页</span></div>
    <div class="faq"><a href="/"></a><span>常见问题</span></div>
</div><!-- toolbar -->
<div id="header">
    <div class="clear" id="nav">
        <div id="logo"><a href="/"></a></div><!-- logo -->
        <div class="header-dropdown" id="all-games">
            <span>全部游戏</span>
            <div class="dropdown-box">
                <div class="dropdown-box-inner clear">
                    <div class="all-games1">
                        <?php if(is_array($play_lists['1']) || $play_lists['1'] instanceof \think\Collection || $play_lists['1'] instanceof \think\Paginator): $i = 0; $__LIST__ = $play_lists['1'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <a href="./newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
                        <!--<a href="./newgame_play.html?curmid=5">一分时时彩</a>
                        <a href="./newgame_play.html?curmid=34">两分时时彩</a>
                        <a href="./newgame_play.html?curmid=14">腾讯时时彩</a>
                        <a href="./newgame_play.html?curmid=1">  重庆时时彩</a>-->
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </div>
                    <!-- all-games1 -->
                    <div class="all-games2">
                        <?php if(is_array($play_lists['2']) || $play_lists['2'] instanceof \think\Collection || $play_lists['2'] instanceof \think\Paginator): $i = 0; $__LIST__ = $play_lists['2'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <a href="./newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
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
                        <a href="./newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
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
                        <a href="./newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </div><!-- all-games4 -->
                    <div class="all-games5">
                        <a href="./newgame_play.html?curmid=46">皇家龙凤</a>
                    </div><!-- all-games5 -->
                </div>
                <!-- dropdown-box-inner -->
            </div>
            <!-- dropdown-box -->
        </div><!-- all-games -->
        <!--<div id="toogle_bell" class="bell_on"></div>--><!-- toogle_bell -->
        <div class="clear" id="navbar">
            <ul>
                <li id="userbar"><a href="user/index" style="color:#666"><?php echo session('userData.username'); ?></a></li>

                <li class="balance">
                    <span class="J-balance-show"><?php echo session('userData.coin'); ?></span>
                    <a class="refresh"><i class="icon-refresh"></i></a>
                    <span class="J-balance-star toggle">*****</span>
                </li>
                <li class="hideAmtli">
                    <img class="hideAmt" src="__STATIC__/images/matt/eye-open-black.png">
                </li>
            </ul>
            <div id="settings">

                <div>
                    <a href="recharge/index?tag=cz">
                        充值 </a>
                </div>
                <div>
                    <a href="recharge/index">
                        提现 </a>
                </div>
                <!--<div class="header-dropdown" id="language">
                    <a href="#">
                        语言                            </a>
                    <div class="dropdown-box">
                        <div class="dropdown-box-inner clear">
                            <a href="./default_chamgelang.html?code=1">中文</a>
                            <a href="./default_chamgelang.html?code=2">English</a>
                            <a href="./default_chamgelang.html?code=3">Tiếng Việt</a>
                        </div>
                    </div>
                </div>-->

                <div class="logout">
                    <a href="login/logout.html" title="登出"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 退出</a>
                </div>
            </div>
            <!-- settings -->
        </div><!-- navbar -->
    </div><!-- nav -->
</div><!-- header -->
<div class="countdown countdown-current">
    <a href="javascript:void(0);"></a>
    <span>截止时间</span>
    <strong></strong>
</div>
<div id="menu-container">
    <div class="clear" id="menu">
        <ul class="left">
            <li><a href="/">首页</a></li>
            <li
            <?=$play_type==1?"class=\"active\"":""?>> <a href="/newgame_play.html?curmid=36">时时彩</a></li>
            <li
            <?=$play_type==2?"class=\"active\"":""?>><a href="/newgame_play.html?curmid=38">11选5</a></li>
            <li
            <?=$play_type==3?"class=\"active\"":""?> ><a href="/newgame_play.html?curmid=45">3D/P3</a></li>
            <li
            <?=$play_type==6?"class=\"active\"":""?> ><a href="/newgame_play.html?curmid=20">北京PK10</a></li>
            <li
            <?=$play_type==10?"class=\"active\"":""?> ><a href="/newgame_play.html?curmid=46">皇家小游戏</a></li>
        </ul>
        <ul class="right">
            <li><a class="highlight" href="/activity/index.html">活动</a></li>
            <li><a href="/game_record/index.html">游戏记录</a></li>
            <li><a href="/user/index">帐户中心</a></li>
            <li><a href="/report_manage/index.html">报表管理</a></li>
            <li><a href="/help_center/index.html?tag=cjwt">帮助中心</a></li>
            <li><a href="/user/index?tag=messages">消息 </a>
            </li>
        </ul>
    </div>
    <div class="topBar">
        <div class="clear topBar-inner">
            <ul class="lottery-name">
                <?php if(is_array($play_list) || $play_list instanceof \think\Collection || $play_list instanceof \think\Paginator): $i = 0; $__LIST__ = $play_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                <li
                <?=$_GET['curmid']==$vo['id']?"class=\"current\"":""?>>
                <a href="newgame_play.html?curmid=<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
                </li>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </ul>
        </div>
    </div>
</div><!-- menu -->
<div class="header">
    <div class="g_33">
        <a href="javascript:void(0);" id="J-header-toggle" class="hide-header">收起顶部</a>
        <h1 class="logo"><a title="" href="#" style="padding-top:5px;"><?php echo $lotterycnname; ?></a></h1>
        <div class="deadline">
            <div class="deadline-text">
                <span class="first">第					<strong id="J-lotter-info-number"></strong> 期</span>
                <br/>投注截止时间                    <!-- <br />游戏特色：全天一共2638期					<br />本期销截止售时间：2017-09-09 12:54:25 -->
            </div>
            <div class="flipTimer">
                <!-- <p>剩余投注时间</p> -->
                <div class="hours"></div>
                <div class="minutes"></div>
                <div class="seconds"></div>
            </div>
        </div>
        <div class="lottery">
            <div id="clock" class="clock-area">
                <div class="arrow a-s">
                    <img src="__STATIC__/todo/images/game/s-arrow.png" class="s">
                </div>
                <div class="arrow a-m">
                    <img src="__STATIC__/todo/images/game/m-arrow.png" class="m">
                </div>
                <div class="arrow a-h">
                    <img src="__STATIC__/todo/images/game/h-arrow.png" class="h">
                </div>
            </div>

            <div class="period-area">
                <div class="lottery-text">
                    <div>
                        第<strong id="J-lotter-info-lastnumber"></strong>期
                    </div>
                    <!-- <div>
                        <a href="./game_bonuscode.html?lotteryid=56&issuecount=30" target="_blank" class="chart">查看号码走势</a>
                    </div> -->
                    <!-- <div>全天总计2638期</div>-->
                </div>
                <div class="lottery-number" id="J-lottery-info-balls">
                    <?php if($play_type == 10): ?>
                    <em> </em>
                    <?php else: if($play_type == 3): ?>
                    <em> </em>
                    <em> </em>
                    <em> </em>
                    <?php else: ?>
                    <em> </em>
                    <em> </em>
                    <em> </em>
                    <em> </em>
                    <em> </em>
                    <?php if($play_type==6): ?>
                    <em> </em>
                    <em> </em>
                    <em> </em>
                    <em> </em>
                    <em> </em>
                    <?php endif; endif; endif; ?>
                </div>
                <div id="J-lottery-info-status">
                    <span class="f-left ml10"></span>
                    <span></span>
                    <span class="f-right mr10"></span>
                </div>
            </div>
        </div>
        <div class="header-links">
            <?php if(($curmid == 6) OR ($curmid == 15) OR ($curmid == 16) OR ($curmid == 38) OR ($curmid == 39)): ?>
            <a href="./newgame_trend.html?type=<?php echo $curmid; ?>&issuecount=30&mod=five&type_name=<?php echo $cur_play_name; ?>"
               target="_blank">号码走势</a>
            <?php elseif($curmid == 24): ?>
            <a href="./newgame_trend_k18.html?type=<?php echo $curmid; ?>&issuecount=30&mod=five&type_name=<?php echo $cur_play_name; ?>"
               target="_blank">号码走势</a>
            <?php elseif($curmid == 20): ?>
            <a href="./newgame_trend_pk10.html?type=<?php echo $curmid; ?>&issuecount=30&mod=five&type_name=<?php echo $cur_play_name; ?>"
               target="_blank">号码走势</a>
            <?php elseif(($curmid == 9) OR ($curmid == 10) OR ($curmid == 45)): ?>
            <a href="./newgame_trend_p3.html?type=<?php echo $curmid; ?>&issuecount=30&mod=top_three&type_name=<?php echo $cur_play_name; ?>"
               target="_blank">号码走势</a>
            <?php elseif($curmid == 46): ?>
            <a href="./newgame_trend_hjlf.html?type=<?php echo $curmid; ?>&issuecount=30&mod=top_three&type_name=<?php echo $cur_play_name; ?>"
               target="_blank">号码走势</a>
            <?php else: ?>
            <a href="./newgame_trend.html?type=<?php echo $curmid; ?>&issuecount=30&mod=five&type_name=<?php echo $cur_play_name; ?>"
               target="_blank">号码走势</a>
            <?php endif; ?>
            <a href="/help_center/playintroduce.html" target="_blank">玩法说明</a>
        </div>
        <!---->
        <div id="J-right-toolbar" class="right-toolbar">
            <div class="lottery-details">
                <div id="J-period-container">
                    <table class="table text-center">
                        <tbody>
                        <!-- 历史号码区域 -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- header end -->


<!-- header end -->
<div class="g_33 main">
    <!--<div class="chart-switch switch-selected" style="top:130px;">选号投注</div> -->
    <div class="plan-switch control-btn" style="top:134px;">我的方案</div>
    <div class="chart-switch control-btn" style="top:229px;">近期开奖</div>
    <div class="public-notice">
        <i class="ico-close"></i>
        <div class="inner clearfix">
            <i class="ico-volume"></i>
            <ul>
                <li>尊敬的客户您好，娱乐平台提醒您，重启时时彩2月16日</li>
                <li>尊敬的客户您好，娱乐平台提醒您，重启时时彩2月16日</li>
            </ul>
        </div>
    </div>
    <div class="play-section">
        <div id="J-menu-fake">

            <div class="prompt">
                <a class="example-button" href="javascript:void(0);">选号示例</a>
                <div class="example-tip">投注方案：345； 开奖号码后三位：345；即中后三直选一等奖。</div>
                <i class="icon-question"></i>
                <span class="method-tip">从百、十、个位各选一个号码组成一注。</span>
            </div>
        </div>
        <div id="J-play-select" class="play-select" style="display:none">
            <div class="prompt">
                <a class="example-button" href="javascript:void(0);">选号示例</a>
                <div class="example-tip"></div>
                <i class="icon-question"></i>
                <span class="method-tip">从百、十、个位各选一个号码组成一注。</span>
            </div>
        </div>
    </div>
    <div id="C-global-area" class="">
        <a href="#" id="J-close-fnarea" class="close close-fn-area">&times;</a>
        <!-- 走势图开始 -->
        <div class="chart-section" id="J-game-chart">
            <div class="inner-content"></div>
        </div>
    </div>
    <!-- 走势图结束 -->
    <!-- 选球统计开始 -->
    <div class="number-section clearfix">
        <div id="J-balls-main-panel"></div>
        <div id="J-balls-fake">
            <!-- 选号渲染区 -->
        </div>
        <div class="clear" id="J-balls-statistics-panel">
            <ul class="bet-statistics">
                <li class="multiple-limit" style="display: none">倍数限额：<em id="J-balls-statistics-multipleLimit">无限制</em>
                </li>
                <li class="choose-bet"><em id="J-balls-statistics-lotteryNum">0</em>注，</li>
                <!--
                <li class="choose-multiple">
                    <div class="choose-list" style="display:none;">
                        <a href="javascript:void(0);">1倍</a>
                        <a href="javascript:void(0);">5倍</a>
                        <a href="javascript:void(0);">10倍</a>
                        <a href="javascript:void(0);">15倍</a>
                    </div>
                    <input type="text" value="8000" class="input" /><i></i><span class="text">倍，</span>
                </li>
                -->
                <li title="锁定倍数投注">
                    <input type="checkbox" id="J-balls-statistics-lockMultiple"></input>
                    <span class="icon-unlock"></span>
                </li>

                <span id="J-balls-statistics-multiple-text" style="display:none;">1</span>

                <select id="J-balls-statistics-multiple" class="J-ui-select" style="display:none;">
                    <option value="1" selected="selected">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="1500">1500</option>
                    <option value="2000">2000</option>
                    <option value="5000">5000</option>
                </select>
                <span class="mr10">倍</span>
                <!--奖金组-->
                <select id="J-balls-statistics-moneyUnit" class="J-ui-select ml10" style="display:none;">
                    <option value="1" selected="selected">元</option>
                    <option value="0.1">角</option>
                    <option value="0.01">分</option>
                    <option value="0.001">厘</option>
                </select>
                <!--奖金组-->
                <span class="ml10">奖金返点</span>
                <select id="J-balls-statistics-bonus" class="J-ui-select" style="display:none;"></select>
                <li class="total-money">共<strong class="price" id="J-balls-statistics-amount">300.00</strong>元</li>
            </ul>
            <div class="add-order-rob">
                <a href="/broker_bokerlist.html?flag=get&lotteryid=56" style="margin-left:2px;" id="qz-list"
                   class="add-order ajaxlist">抢庄单</a>
            </div>
            <div class="add-order-area">
                <input type="button" value="添加注单" id="J-add-order" class="add-order"/>
            </div>
            <div class="add-order-area">
                <input type="button" value="直接投注" id="J-bet-order" class="add-order"/>
            </div>
        </div>
    </div>
    <!-- 选球统计结束 -->
    <div class="panel-section clearfix">
        <div class="clearfix static-content">
            <div class="back"></div>
            <div class="panel-btn clearfix">
                <span class="desc">投注项</span>
                <a href="javascript:void(0);" id="randomone" class="take-one"><i class="icon-random"></i>机选一注</a>
                <a href="javascript:void(0);" id="randomfive" class="take-five"><i class="icon-random"></i>机选五注</a>
                <a href="javascript:void(0);" id="restdata" class="empty-number"><i class="icon-remove"></i>全部取消</a>
            </div>
            <div class="panel-select">
                <ul id="J-balls-order-container">
                </ul>
            </div>
        </div>
        <div class="clearfix static-bottom">
            <ul class="bet-statistics clearfix">
                <li>方案注数 <em id="J-gameOrder-lotterys-num">0</em> 注，</li>
                <li>金额<strong class="price"> <dfn>&yen;</dfn> <span id="J-gameOrder-amount">0.00</span> </strong>元</li>
                <!-- <li><label class="label" for="J-trace-switch"><input id="J-trace-switch" type="checkbox" class="checkbox">我要追号</label></li>
                <li><span class="bet-tips"><i></i>追号能提高中奖率</span></li> -->
            </ul>
            <!--
            <a href="javascript:void(0);" class="s-small-game" onclick="window.open ('/newgame_play.html?curmid=3685&from=client', '小游戏', 'height=639, width=574, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')">小游戏</a>
            -->
            <div class="bet-btn bet-submit-btn">
                <a class="bet-submit-btn" type="button" id="J-submit-order">
                    <span class="sub">确认投注</span>
                    <span class="time">
							<em>截止时间</em>
							<em id="J-submit-count">00:00</em>
						</span>
                </a>
            </div>
        </div>
        <!-- 追号开始 -->
        <div id="J-trace-panel" style="display:none;">
            <div class="chase-tab">
                <div class="chase-tab-title clearfix">
                    <ul>
                        <li class="chase-tab-t current">普通追号</li>
                        <li class="chase-tab-t">高级追号</li>
                    </ul>
                    <h3>追号设置</h3>
                    <div id="J-trace-iswinstop-panel" class="chase-stop" style="display:none;">
                        <label class="label" for="J-trace-iswinstop"><input id="J-trace-iswinstop" type="checkbox"
                                                                            class="checkbox"/>累计盈利</label>&gt;<input
                            id="J-trace-iswinstop-money" disabled="disabled" type="text" class="input" value="1000"/>元时停止追号&nbsp;
                        <i class="icon-question" id="J-trace-iswinstop-hover">
                            <div id="chase-stop-tip-2" class="chase-stop-tip">
                                当追号计划中，累计盈利金额（已获奖金扣除已投本金）大于设定值时，即停止继续追号。<br/>如果您不考虑追号的盈利情况，，<a href="#"
                                                                                               id="J-chase-stop-switch-2">点这里</a>。
                            </div>
                        </i>
                    </div>
                    <div id="J-trace-iswintimesstop-panel" class="chase-stop">
                        <label class="label"><input id="J-trace-iswintimesstop" type="checkbox" class="checkbox"/>中奖后停止追号</label><input
                            style="display:none;" id="J-trace-iswintimesstop-times" type="text" class="input"
                            disabled="disabled" value="1"/>&nbsp;
                        <i class="icon-question" id="J-trace-iswintimesstop-hover">
                            <div id="chase-stop-tip-1" class="chase-stop-tip">
                                当追号计划中，一个方案内的任意注单中奖时，即停止继续追号。<br/>如果您希望考虑追号的实际盈利，<a href="#" id="J-chase-stop-switch-1"
                                                                                    style="color: #666;">点这里</a>。
                            </div>
                        </i>

                    </div>
                </div>
                <div class="chase-tab-content chase-tab-content-current">
                    <ul class="chase-select-normal clearfix">
                        <li id="J-function-select-tab">
                            连续追：
                            <ul class="function-select-title">
                                <li>5期</li>
                                <li>10期</li>
                                <li>15期</li>
                                <li>20期</li>
                            </ul>
                            <ul class="function-select-panel" style="display:none;">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <input id="J-trace-normal-times" type="text" class="input" value="10"/>&nbsp;&nbsp;期
                        </li>
                        <li>
                            倍数：
                            <select id="J-trace-normal-multiple">
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                            </select>
                        </li>
                    </ul>
                    <div class="chase-table-container">
                        <table id="J-trace-table" class="chase-table">
                            <tbody id="J-trace-table-body">
                            <tr>
                                <th style="width:125px;" class="text-center">序号</th>
                                <th><label class="label"><input type="checkbox" class="checkbox"/>追号期次</label>
                                </td>
                                <th>倍数</th>
                                <th>金额</th>
                                <th>预计开奖时间</th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="chase-tab-content">
                    <div class="chase-select-high">
                        <div class="title">基本参数</div>
                        <ul class="base-parameter">
                            <li>
                                起始期号：
                                <select id="J-traceStartNumber">
                                    <option value="201212141245">201212141245(当前期)</option>
                                    <option value="201212141246">201212141246</option>
                                    <option value="201212141247">201212141247</option>
                                    <option value="201212141248">201212141248</option>
                                    <option value="201212141249">201212141249</option>
                                </select>
                            </li>
                            <li>
                                追号期数：
                                <input id="J-trace-advanced-times" type="text" class="input" value="10"/>&nbsp;&nbsp;期（最多可以追<span
                                    id="J-trace-number-max">0</span>期）
                            </li>
                            <li>
                                起始倍数：
                                <input id="J-trace-advance-multiple" type="text" class="input" value="1"/>&nbsp;&nbsp;倍
                            </li>
                        </ul>

                        <div class="title">高级参数</div>
                        <div id="J-trace-advanced-type-panel" class="high-parameter">
                            <ul class="tab-title">
                                <li>翻倍追号</li>
                                <li>盈利金额追号</li>
                                <li>盈利率追号</li>
                            </ul>
                            <ul class="tab-content">
                                <li>
                                    <p data-type="a">
                                        <input class="trace-advanced-type-switch" type="radio" class="checkbox"
                                               name="trace-advanced-type1" checked="checked"/>
                                        每隔&nbsp;<input id="J-trace-advanced-fanbei-a-jiange" type="text" class="input"
                                                       value="2"/>&nbsp;期 倍数x<input
                                            id="J-trace-advanced-fanbei-a-multiple" type="text"
                                            class="input trace-input-multiple" value="2"/>
                                    </p>
                                    <p data-type="b">
                                        <input class="trace-advanced-type-switch" type="radio" class="checkbox"
                                               name="trace-advanced-type1"/>
                                        前&nbsp;<input id="J-trace-advanced-fanbei-b-num" type="text" class="input"
                                                      value="5" disabled="disabled"/>&nbsp;期 倍数=起始倍数，之后倍数=<input
                                            id="J-trace-advanced-fanbei-b-multiple" type="text"
                                            class="input trace-input-multiple" value="3" disabled="disabled"/>
                                    </p>
                                </li>
                                <li>
                                    <p data-type="a">
                                        <input class="trace-advanced-type-switch" type="radio" class="checkbox"
                                               name="trace-advanced-type2" checked="checked"/>
                                        预期盈利金额≥&nbsp;<input id="J-trace-advanced-yingli-a-money" type="text"
                                                            class="input" value="100"/>&nbsp;元 </p>
                                    <p data-type="b">
                                        <input class="trace-advanced-type-switch" type="radio" class="checkbox"
                                               name="trace-advanced-type2"/>
                                        前&nbsp;<input id="J-trace-advanced-yingli-b-num" type="text" class="input"
                                                      value="2" disabled="disabled"/>&nbsp;期 预期盈利金额≥&nbsp;<input
                                            id="J-trace-advanced-yingli-b-money1" type="text" class="input" value="100"
                                            disabled="disabled"/>&nbsp;元，之后预期盈利金额≥&nbsp;<input
                                            id="J-trace-advanced-yingli-b-money2" type="text" class="input" value="50"
                                            disabled="disabled"/>&nbsp;元 </p>
                                </li>
                                <li>
                                    <p data-type="a">
                                        <input class="trace-advanced-type-switch" type="radio" class="checkbox"
                                               name="trace-advanced-type3" checked="checked"/>
                                        预期盈利率≥&nbsp;<input id="J-trace-advanced-yinglilv-a" type="text" class="input"
                                                           value="10"/>&nbsp;%
                                    </p>
                                    <p data-type="b">
                                        <input class="trace-advanced-type-switch" type="radio" class="checkbox"
                                               name="trace-advanced-type3"/>
                                        前&nbsp;<input id="J-trace-advanced-yinglilv-b-num" type="text" class="input"
                                                      value="5" disabled="disabled"/>&nbsp;期 预期盈利率≥&nbsp;<input
                                            id="J-trace-advanced-yingli-b-yinglilv1" type="text" class="input"
                                            value="30" disabled="disabled"/>&nbsp;%，之后预期盈利率≥&nbsp;<input
                                            id="J-trace-advanced-yingli-b-yinglilv2" disabled="disabled" type="text"
                                            class="input" value="10"/>&nbsp;%
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="chase-btn">
                        <input id="J-trace-builddetail" type="button" value="生成">
                    </div>
                    <div class="chase-table-container">
                        <table id="J-trace-table-advanced" class="chase-table">
                            <tbody id="J-trace-table-advanced-body">
                            <tr>
                                <th style="width:125px;" class="text-center">序号</th>
                                <th><label class="label"><input type="checkbox" class="checkbox"/>追号期次</label>
                                </td>
                                <th>倍数</th>
                                <th>金额</th>
                                <th>预计开奖时间</th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="clearfix static-container">
                <ul class="bet-statistics">
                    <li>共追号 <span id="J-trace-statistics-times">0</span> 期，<em><span
                            id="J-trace-statistics-lotterys-num">0</span> </em>注，
                    </li>
                    <li>总投注金额 <strong class="price"><dfn>&yen;</dfn><span
                            id="J-trace-statistics-amount">0.00</span></strong> 元
                    </li>
                </ul>
            </div>
        </div>
        <!-- 追号结束 -->
        <!--投注记录追号记录开始-->
        <div class="history-section" id="J-history-control">
            <div class="menu-button-title">
                <a href="javascript:void(0);" class="bet current">投注记录</a>
                <!--<a href="javascript:void(0);" class="trace">追号记录</a>-->
            </div>
            <div class="bet-content inner-content">
                <table class="chart-table table table-border"
                       style="width: 100%; white-space: nowrap !important; overflow: hidden !important;">
                    <thead class="thead">
                    <tr class="title-text">
                        <th>投注时间</th>
                        <th>彩种</th>
                        <th>玩法</th>
                        <th>奖期</th>
                        <th>模式</th>
                        <th>倍数</th>
                        <th>投注内容</th>
                        <th>金额</th>
                        <th>中奖金额</th>
                        <!-- 	<th>是否追号			</th> -->
                    </tr>
                    <tbody>

                    <tr>
                        <td height="37" colspan="10" align="center">当前没有投注记录</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="trace-content inner-content" style="display:none">
                <script type="text/javascript">
                    function show_no(id) {
                        $("#code_" + id).show("slow");
                    }

                    function close_no(id) {
                        $("#code_" + id).hide("slow");
                    }
                </script>
                <table class="chart-table table table-border"
                       style="width: 100%; white-space: nowrap !important; overflow: hidden !important;">
                    <thead class="thead">
                    <tr class="title-text">
                        <th width="11%">追号时间</th>
                        <th>用户</th>
                        <th style="width:8%">彩种</th>
                        <th>开始期数</th>
                        <th width="12%">追号内容</th>
                        <th>追号总金额</th>
                        <th>完成金额</th>
                        <th width="9%">取消金额</th>
                        <th>追中即停</th>
                        <th style="width:auto">追号状态</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td height="37" colspan="10" align="center">当前没有追号记录</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--投注记录追号记录结束-->
    </div>
    <!-- 提交按钮结束 -->
</div>
<!-- 底部开始 -->
<div class="foot  g_33 "></div>
<!-- 底部结束 -->
<script type="text/javascript">
    var jsDynamicConfig = <?php echo $dynamicConfig; ?>;
    Storage.betYanKey = '<?php echo $betkey; ?>';
    var jsPrizePoint = <?php echo $jsPrizePoint; ?>;//{"3397":{"hprize":"4.77","prize":"4.39","point":7.7},"3402":{"hprize":"1954.00","prize":"1800.00","point":7.7},"3405":{"hprize":"651.33","prize":"600.00","point":7.7},"3509":{"hprize":"1628.33","prize":"1500.00","point":7.7},"3510":{"hprize":"3256.67","prize":"3000.00","point":7.7},"3511":{"hprize":"6513.33","prize":"6000.00","point":7.7},"3512":{"hprize":"9770.00","prize":"9000.00","point":7.7},"3513":{"hprize":"19540.00","prize":"18000.00","point":7.7},"3514":{"hprize":"39080.00","prize":"36000.00","point":7.7},"3384":{"hprize":"814.17","prize":"750.00","point":7.7},"3385":{"hprize":"1628.33","prize":"1500.00","point":7.7},"3386":{"hprize":"3256.67","prize":"3000.00","point":7.7},"3387":{"hprize":"4885.00","prize":"4500.00","point":7.7},"3339":{"hprize":"1954.00","prize":"1800.00","point":7.7},"3342":{"hprize":"1954.00","prize":"1800.00","point":7.7},"3345":{"hprize":"651.33","prize":"600.00","point":7.7},"3351":{"hprize":"651.33","prize":"600.00","point":7.7},"3357":{"hprize":"7.21","prize":"6.64","point":7.7},"3375":{"hprize":"19.54","prize":"18.00","point":7.7},"3382":{"hprize":"7.82","prize":"7.20","point":7.7},"3389":{"hprize":"195400.00","prize":"180000.00","point":7.7},"3391":{"hprize":"19540.00","prize":"18000.00","point":7.7},"3398":{"hprize":"23.99","prize":"22.09","point":7.7},"3406":{"hprize":"325.67","prize":"300.00","point":7.7},"3418":{"hprize":"1954.00","prize":"1800.00","point":7.7},"3360":{"hprize":"36.19","prize":"33.33","point":7.7},"3364":{"hprize":"195.40","prize":"180.00","point":7.7},"3369":{"hprize":"97.70","prize":"90.00","point":7.7},"3399":{"hprize":"228.27","prize":"210.28","point":7.7},"3403":{"hprize":"1954.00","prize":"1800.00","point":7.7},"3417":{"hprize":"1954.00","prize":"1800.00","point":7.7},"3340":{"hprize":"1954.00","prize":"1800.00","point":7.7},"3343":{"hprize":"1954.00","prize":"1800.00","point":7.7},"3346":{"hprize":"325.67","prize":"300.00","point":7.7},"3352":{"hprize":"325.67","prize":"300.00","point":7.7},"3358":{"hprize":"7.21","prize":"6.64","point":7.7},"3381":{"hprize":"7.82","prize":"7.20","point":7.7},"3400":{"hprize":"4247.83","prize":"3913.04","point":7.7},"3419":{"hprize":"651.33","prize":"600.00","point":7.7},"3361":{"hprize":"36.19","prize":"33.33","point":7.7},"3366":{"hprize":"195.40","prize":"180.00","point":7.7},"3371":{"hprize":"97.70","prize":"90.00","point":7.7},"3420":{"hprize":"325.67","prize":"300.00","point":7.7},"3363":{"hprize":"195.40","prize":"180.00","point":7.7},"3372":{"hprize":"97.70","prize":"90.00","point":7.7},"3368":{"hprize":"97.70","prize":"90.00","point":7.7},"3365":{"hprize":"195.40","prize":"180.00","point":7.7},"3370":{"hprize":"97.70","prize":"90.00","point":7.7},"3373":{"hprize":"97.70","prize":"90.00","point":7.7},"3411":{"hprize":"195.40","prize":"180.00","point":7.7},"3410":{"hprize":"195.40","prize":"180.00","point":7.7},"3412":{"hprize":"97.70","prize":"90.00","point":7.7},"3413":{"hprize":"97.70","prize":"90.00","point":7.7},"3424":{"hprize":"19540.00","prize":"18000.00","point":7.7},"3423":{"hprize":"19540.00","prize":"18000.00","point":7.7}};
</script>

<script type="text/javascript" src="__STATIC__/js/colorbox.js"></script>
<!-- 实例类 -->
<script type="text/javascript" src="__STATIC__/todo/js/release/module<?php echo $game_js['module_js']; ?>?_time=<?php echo $today; ?>"></script>
<script type="text/javascript">
    (function (host, name, Event, undefined) {
        var gameConfigData = <?php echo json_encode($gameConfigData); ?>;
        var defConfig = {
                //当前彩种名称
                gameType: gameConfigData['gameType'],
                gameTypeCn: gameConfigData['gameTypeCn']
            },
            instance;


        var pros = {
            init: function () {
                var me = this;
                me.types = gameConfigData['gameMethods'];
            },
            //获取玩法类型
            getTypes: function (isFilterClose) {
                return this.types;
            },
            getGameTypeCn: function () {
                return this.defConfig.gameTypeCn;
            },
            getDefaultMethod: function () {
                return gameConfigData['defaultMethod'];
            },
            getDynamicConfigUrl: function () {
                return gameConfigData['dynamicConfigUrl'];
            },
            getUploadPath: function () {
                return gameConfigData['uploadPath'];
            },
            //name  wuxing.zhixuan.fushi
            getTitleByName: function (name) {
                var me = this,
                    nameArr = name.split('.'),
                    nameLen = nameArr.length,
                    types = me.types,
                    i = 0,
                    len = types.length,
                    i2,
                    len2,
                    i3,
                    len3,
                    tempArr = [],
                    result = [];
                //循环一级
                for (; i < len; i++) {
                    if (types[i]['name'] == nameArr[0]) {
                        result.push(types[i]['title'].replace(/&nbsp;/g, ''));
                        if (nameLen > 1 && types[i]['childs'].length > 0) {
                            tempArr = types[i]['childs'];
                            len2 = tempArr.length;
                            //循环二级
                            for (i2 = 0; i2 < len2; i2++) {
                                //console.log(tempArr[i2]['name']);
                                if (tempArr[i2]['name'] == nameArr[1]) {
                                    //result.push(tempArr[i2]['title'].replace(/&nbsp;/g,''));
                                    if (nameLen > 2 && tempArr[i2]['childs'].length > 0) {
                                        tempArr = tempArr[i2]['childs'];
                                        len3 = tempArr.length;
                                        //循环三级
                                        for (i3 = 0; i3 < len3; i3++) {
                                            if (tempArr[i3]['name'] == nameArr[2]) {
                                                if (tempArr[i3]['headline']) {
                                                    return tempArr[i3]['headline'];
                                                }
                                                result.push(tempArr[i3]['title'].replace(/&nbsp;/g, ''));
                                                return result;
                                            }
                                        }
                                    } else {
                                        return result;
                                    }
                                }
                            }
                        } else {
                            return result;
                        }
                    }
                }
                return '';
            },
            getChildData: function (name) {
                var me = this,
                    nameArr = name.split('.'),
                    nameLen = nameArr.length,
                    types = me.types,
                    i = 0,
                    len = types.length,
                    i2,
                    len2,
                    i3,
                    len3,
                    tempArr = [],
                    result = [];
                //循环一级
                for (; i < len; i++) {
                    if (types[i]['name'] == nameArr[0]) {
                        result.push(types[i]['title'].replace(/&nbsp;/g, ''));
                        if (nameLen > 1 && types[i]['childs'].length > 0) {
                            tempArr = types[i]['childs'];
                            len2 = tempArr.length;
                            //循环二级
                            for (i2 = 0; i2 < len2; i2++) {
                                //console.log(tempArr[i2]['name']);
                                if (tempArr[i2]['name'] == nameArr[1]) {
                                    //result.push(tempArr[i2]['title'].replace(/&nbsp;/g,''));
                                    if (nameLen > 2 && tempArr[i2]['childs'].length > 0) {
                                        tempArr = tempArr[i2]['childs'];
                                        len3 = tempArr.length;
                                        //循环三级
                                        for (i3 = 0; i3 < len3; i3++) {
                                            if (tempArr[i3]['name'] == nameArr[2]) {
                                                if (tempArr[i3]) {
                                                    return tempArr[i3];
                                                }
                                                return '';
                                            }
                                        }
                                    } else {
                                        return result;
                                    }
                                }
                            }
                        } else {
                            return result;
                        }
                    }
                }
                return '';
            },
            //name  wuxing.zhixuan.fushi
            getMethodId: function (name) {
                var me = this,
                    nameArr = name.split('.'),
                    nameLen = nameArr.length,
                    types = me.types,
                    i = 0,
                    len = types.length,
                    i2,
                    len2,
                    i3,
                    len3,
                    tempArr = [],
                    result = [];
                //循环一级
                for (; i < len; i++) {
                    if (types[i]['name'] == nameArr[0]) {
                        result.push(types[i]['title'].replace(/&nbsp;/g, ''));
                        if (nameLen > 1 && types[i]['childs'].length > 0) {
                            tempArr = types[i]['childs'];
                            len2 = tempArr.length;
                            //循环二级
                            for (i2 = 0; i2 < len2; i2++) {
                                //console.log(tempArr[i2]['name']);
                                if (tempArr[i2]['name'] == nameArr[1]) {
                                    //result.push(tempArr[i2]['title'].replace(/&nbsp;/g,''));
                                    if (nameLen > 2 && tempArr[i2]['childs'].length > 0) {
                                        tempArr = tempArr[i2]['childs'];
                                        len3 = tempArr.length;
                                        //循环三级
                                        for (i3 = 0; i3 < len3; i3++) {
                                            if (tempArr[i3]['name'] == nameArr[2]) {
                                                if (tempArr[i3]['methodId']) {
                                                    return tempArr[i3]['methodId'];
                                                }
                                                return '';
                                            }
                                        }
                                    } else {
                                        return result;
                                    }
                                }
                            }
                        } else {
                            return result;
                        }
                    }
                }
                return '';
            }

        };

        var Main = host.Class(pros, Event);
        Main.defConfig = defConfig;
        Main.getInstance = function (cfg) {
            return instance || (instance = new Main(cfg));
        };

        host.Games.<?php echo $game_js['name']; ?>
        [name] = Main;

    })(phoenix, "Config", phoenix.Event);

</script>
<script type="text/javascript" src="__STATIC__/todo/js/release/bet<?php echo $game_js['bet_js']; ?>"></script>
<script type="text/javascript" src="__STATIC__/todo/js/release/game<?php echo $game_js['phoenix_js']; ?>"></script>

<script type="text/javascript" src="__STATIC__/todo/js/release/notice.js"></script>
<script>
    $(function () {
        $("#J-balls-main-panel div.number-select-content ul.ball-section div.ball-title strong").each(function () {
            if ($(this).html().length < 1) {
                $(this).parent().hide();
            }
        })
    })
    setTimeout(function () {
        (function (d) {
            var s = d.createElement("script");
            s.type = type = "text/javascript";
            s.src = "__STATIC__/todo/js/release/game<?php echo $game_js['game_js']; ?>";
            s.async = true;
            d.body.appendChild(s);
        })(document);
    }, 0);
    $(function () {
        //投注记录初始化
        var bet_content = $("#J-history-control .bet-content"),
            bet_content_url = "/newgame_play.html?curmid=" + window.GamesInitData.curmid + "&flag=projectRecords&size=5";
        $.ajax({
            url: bet_content_url,
            dataType: "html",
            success: function (t) {
                bet_content.html(t)
            },
            error: function (t, a) {
                bet_content.html(translate.FailToBetRecordWording + t.responseText)
            }
        })
        //追号记录初始化
        var trace_content = $("#J-history-control .trace-content"),
            trace_content_url = "/newgame_play.html?curmid=" + window.GamesInitData.curmid + "&flag=traceRecords&size=5";
        $.ajax({
            url: trace_content_url,
            dataType: "html",
            success: function (t) {
                trace_content.html(t)
            },
            error: function (t, a) {
                trace_content.html(translate.FailToBetRecordWording + t.responseText)
            }
        })
    });

    function chedan(id) {
        if (confirm("是否确定撤单？")) {
            $.ajax({
                type: "POST",
                url: "/game/delBet.html",
                data: {id: id},
                dataType: "json",
                global: false,
                success: function (data) {
                    if (data.code == 1) {
                        alert(data.msg);
                        //document.location.reload();
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
</body>
</html>