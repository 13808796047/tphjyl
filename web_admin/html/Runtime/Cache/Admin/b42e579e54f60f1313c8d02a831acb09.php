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
	<div class="main-title">
		<h2>用户列表</h2>
	</div>
	<form action="<?php echo U('index');?>" method="post">
		<div class="cf">
			<?php if($user["sb"] == 9): ?><a class="btn" href="<?php echo U('User/add_2');?>">新 增</a>
				<button style="display:none"></button><!-- 屏蔽回车时，默认点击form内部的第一个按钮 -->
				<button class="btn ajax-post" url="<?php echo U('User/changeStatus',array('method'=>'resumeUser'));?>" target-form="ids">启 用</button>
				<button class="btn ajax-post" url="<?php echo U('User/changeStatus',array('method'=>'forbidUser'));?>" target-form="ids">禁 用</button>
				<button class="btn ajax-post confirm" url="<?php echo U('User/changeStatus',array('method'=>'deleteUser'));?>" target-form="ids">删 除</button><?php endif; ?>
			<!-- 高级搜索 -->		
			<div class="search-form fr cf">
				<div class="sleft">
					<select style="width:100px;" name="isTest">
						<option value="1">全部号</option>
						<?php
 if($isTest == 2){ echo '<option value="2" selected="selected">会员号</option>'; }else{ echo '<option value="2">会员号</option>'; } ?>
						<?php
 if($isTest == 3){ echo '<option value="3" selected="selected">测试号</option>'; }else{ echo '<option value="3">模拟号</option>'; } ?>
					</select>
				</div>
				<!--<div class="sleft">
					<select style="width:100px;" name="isOnline">
						<option value="1">全部</option>
						<?php
 if($isOnline == 2){ echo '<option value="2" selected="selected">在线</option>'; }else{ echo '<option value="2">在线</option>'; } ?>
						<?php
 if($isOnline == 3){ echo '<option value="3" selected="selected">离线</option>'; }else{ echo '<option value="3">离线</option>'; } ?>
					</select>
				</div>-->
				<div class="sleft">
					用户名：<input type="text" name="username" class="search-input" value="<?php echo I('username');?>" placeholder="请输入用户名">
					<!-- <a class="sch-btn" href="javascript:;" id="search" url="<?php echo U('index');?>"><i class="btn-search"></i></a> -->
				</div>
				<div class="sbtn">
					<button type="submit" class="btn" id="search">查 找</button>
				</div>	
			</div>
		</div>
	</form>
    <!-- 数据列表 -->
    <div class="data-table table-striped">
	<table class="">
    <thead>
        <tr>
		<th class="row-selected row-selected"><input class="check-all" type="checkbox"/></th>
		<th class="">用户UID</th>
		<th class="">昵称</th>
		<th class="">类型</th>
		<th class="">来源</th>
		<th class="">可用|冻结</th>
		<th class="">积分|等级</th>
		<th class="">返点|不定点</th>
		<th class="">最后登录</th>
		<th class="">类型</th>
		<th class="">状态</th>
		<th class="">操作</th>
		</tr>
    </thead>
    <tbody>
		<?php if(is_array($_list)): $i = 0; $__LIST__ = $_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
            <td><input class="ids" type="checkbox" name="id[]" value="<?php echo ($vo["uid"]); ?>" /></td>
			<td><?php echo ($vo["uid"]); ?> </td>
			<td><a href="<?php echo U('User/edit?id='.$vo['uid']);?>"><?php echo ($vo["username"]); ?></a></td>
			<td><?php if($vo["type"] == 1): ?>代理
				<?php else: ?> 会员<?php endif; ?>
			</td>
			<td><?php if($vo['regPath']) echo '<a href="'.$vo['regPath'].'" target="_blank">链接</a>'; ?></td>
			<td><?php echo number_format($vo['coin'],2);?>|<?php echo number_format($vo['fcoin'],2);?></td>
			<td><?php echo ($vo["score"]); ?>|<?php echo ($vo["grade"]); ?></td>
			<td><?php echo ($vo["fanDian"]); ?>|<?php echo ($vo["fanDianBdw"]); ?></td>
			<td><span><?php echo long2ip($vo['loginIP']);?></span></td>
			<td><span><?php echo ($vo['is_test']); ?></span></td>
			<td><?php
 if( $vo['loginIP']>0 && $vo['accessTime']>0 && (time()-$vo['accessTime'])<C('SESSION_TIME') ) echo '<font color="#FF0000">在线</font>'; else echo '离线'; ?>
			</td>
			<td><a href="<?php echo U('User/index?parentId='.$vo['uid']);?>">下级</a>
				<a href="<?php echo U('User/edit?id='.$vo['uid']);?>">编辑</a>
				<?php if(($vo["enable"]) == "1"): ?><a href="<?php echo U('User/changeStatus?method=forbidUser&id='.$vo['uid']);?>" class="ajax-get">禁用</a>
				<?php else: ?>
				<a href="<?php echo U('User/changeStatus?method=resumeUser&id='.$vo['uid']);?>" class="ajax-get">启用</a><?php endif; ?>

				<?php if($user["sb"] == 9): if(($vo["isDelete"]) == "0"): ?><a href="<?php echo U('User/changeStatus?method=deleteuser&id='.$vo['uid']);?>" class="confirm ajax-get">删除</a>
						<?php else: ?>
						<a href="<?php echo U('User/changeStatus?method=undeleteuser&id='.$vo['uid']);?>" class="confirm ajax-get">恢复</a><?php endif; endif; ?>
				<?php if($user["sb"] == 9): if(($vo["is_sleep"]) == "0"): ?><a href="<?php echo U('User/changeStatus?method=is_sleep&id='.$vo['uid']);?>" class="confirm ajax-get">睡眠</a>
						<?php else: ?>
						<a href="<?php echo U('User/changeStatus?method=unis_sleep&id='.$vo['uid']);?>" class="confirm ajax-get">解除睡眠</a><?php endif; endif; ?>
                </td>
		</tr><?php endforeach; endif; else: echo "" ;endif; ?>
	</tbody>
    </table> 
	</div>
    <div class="page">
        <?php echo ($_page); ?>
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

	<script src="/Public/static/thinkbox/jquery.thinkbox.js"></script>

	<script type="text/javascript">
	//回车搜索
	$("body").keyup(function(e){
		if(e.keyCode === 13){
			$("#search").click();
			return false;
		}
	});
    //导航高亮
    $('.side-sub-menu').find('a[href="<?php echo U('User/index');?>"]').closest('li').addClass('current');
	</script>

</body>
</html>