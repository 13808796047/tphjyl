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
		<h2>充值记录</h2>
	</div>
	<form action="<?php echo U('recharge');?>" method="post">
		<div class="cf">
			<a class="btn" target="modal" width="470" title="新增充值" modal="true" href="<?php echo U('Business/to_recharge');?>" button="确定:dataAddCode|取消:defaultCloseModal" >新增充值</a>
			<!-- 高级搜索 -->
			<div class="search-form fr cf">
				<div class="sleft">
					用户名：<input style="width:100px" type="text" name="username" class="search-input" value="<?php echo I('username');?>" placeholder="用户名">
				</div>
				<div class="sleft">
					充值编号：<input style="width:70px" type="text" name="rechargeId" class="search-input" value="<?php echo I('rechargeId');?>" placeholder="充值编号">
				</div>
				<div class="sleft">
					<select style="width:100px" name="type">
						<option value="9999" <?php if(($type == '9999')): ?>selected="selected"<?php endif; ?> >所有类型</option>
						<option value="0" <?php if(($type == 0)): ?>selected="selected"<?php endif; ?> >正在申请</option>
						<option value="1" <?php if(($type == 1)): ?>selected="selected"<?php endif; ?> >手动到账</option>
						<option value="2" <?php if(($type == 2)): ?>selected="selected"<?php endif; ?> >自动到账</option>
						<option value="9" <?php if(($type == 9)): ?>selected="selected"<?php endif; ?> >管理员充值</option>
					</select>
				</div>
				<div class="sleft">
					时间从：<input type="text" name="fromTime" id="first" class="search-input" value="<?=$this->iff(I('fromTime'),I('fromTime'),date('Y-m-d',time())) ?>" placeholder="请输入开始时间">
				</div>
				<div class="sleft">
					到：<input type="text" name="toTime" id="end" class="search-input" value="<?=$this->iff(I('toTime'),I('toTime'),date('Y-m-d',time())) ?>" placeholder="请输入结束时间">
					<!-- <a class="sch-btn" href="javascript:;" id="search" url="<?php echo U('cash');?>"><i class="btn-search"></i></a> -->
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
		<th>UserID</th>
        <th>用户名</th>
        <th>上级关系</th>
        <th>充值金额</th>
        <th>实际到账</th>
        <th>充值前资金</th>       
        <th>充值编号</th>
        <th>充值银行</th>        
        <th>状态</th>
        <th>备注</th>
        <th>时间</th>
        <th>操作</th>
		</tr>
    </thead>
    <tbody>
	<tr>
		<th>合计</th>
		<th>-</th>
		<th>-</th>
		<th>-</th>
		<th><?php echo ($total_recharge); ?></th>
		<th>-</th>
		<th>-</th>
		<th>-</th>
		<th>-</th>
		<th>-</th>
		<th>-</th>
		<th>-</th>
	</tr>
		<?php if($_list): if(is_array($_list)): $i = 0; $__LIST__ = $_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
			<td><?php echo ($vo["uid"]); ?> </td>
			<td><a href="<?php echo U('recharge?username='.$vo['username']);?>"><?php echo ($vo["username"]); ?></a></td>
			<?php
 $sjgx = ""; $path = explode(',' , $vo['parents']); foreach($path as $p){ $sjgx .= $members_list[$p].'>'; } $show_title = ""; if(mb_strlen($sjgx)>15){ $show_title = substr($sjgx,0,15).'...'; }else{ $show_title = $sjgx; } ?>
			<td style="display: block;overflow: hidden;" title="<?php echo ($sjgx); ?>">
				<?php echo ($show_title); ?>
			</td>
			<td><?php echo ($vo["amount"]); ?></td>
			<td><?php echo ($vo["rechargeAmount"]); ?></td>
			<td><?php echo ($vo["coin"]); ?></td>
			<td><?php echo ($vo["rechargeId"]); ?></td>
			<td><a href="<?='http://'.$vo['home']?>" target="_blank"><?php echo ($vo["name"]); ?></a></td>
			<td><?=$this->iff($vo['state'], '充值成功', '正在充值')?></td>
			<?php
 $note = ""; if(mb_strlen($vo['info'])>10){ $note = substr($vo['info'],0,10).'..'; }else{ $note = $vo['info']; } ?>
			<td title="<?php echo ($vo["info"]); ?>">
				<?php echo ($note); ?>
			</td>
			<td><?php echo date('Y-m-d H:i:s',$vo['actionTime']);?></td>
			<td>
				<?php if(!$vo['state']){ ?>
				<a target="modal" width="360" title="到账处理" modal="true" button="确定:dataAddCode|取消:defaultCloseModal" href="<?php echo U('Business/toOn_recharge?id='.$vo['id'].'&username='.$vo['username'].'&amount='.$vo['amount']);?>">到账处理</a>
				<?php } ?>
				<a href="<?php echo U('business/del_recharge?id='.$vo['id']);?>" class="confirm ajax-get">删除</a>
            </td>
		</tr><?php endforeach; endif; else: echo "" ;endif; ?>
		<?php else: ?>
			<tr>
				<td colspan="11" align="center">暂时没有充值记录。</td>
			</tr><?php endif; ?>
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

    <link href="/Public/static/datetimepicker/css/datetimepicker.css" rel="stylesheet" type="text/css">
	<link href="/Public/static/datetimepicker/css/datetimepicker_blue.css" rel="stylesheet" type="text/css">
	<link href="/Public/static/datetimepicker/css/dropdown.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="/Public/static/datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
	<script type="text/javascript" src="/Public/static/datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>

	<script>
	$(function(){
		$('#first,#end').datetimepicker({
			format: 'yyyy-mm-dd',
			language:"zh-CN",
			minView:2,
			autoclose:true
		});
		//showTab();
	});
	</script>
	<script type="text/javascript">
		//回车搜索
		$("body").keyup(function(e){
			if(e.keyCode === 13){
				$("#search").click();
				return false;
			}
		});
		$('.side-sub-menu').find('a[href="<?php echo U('business/recharge');?>"]').closest('li').addClass('current');
	</script>

</body>
</html>