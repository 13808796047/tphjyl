<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:91:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/game_record/bet_list.html";i:1528683058;}*/ ?>
<script src="__JS__/sy/subPage.js"></script>
<script src="__JS__/sy/tab.js"></script>
<script src="__JS__/sy/dialogUI/jquery-1.7.min.js"></script>
<script src="__JS__/main.min.js"></script>
<script src="__JS__/calendar/jquery.dyndatetime.js"></script>
<script src="__JS__/calendar/calendar-utf8.js"></script>
<script src="__JS__/sy/iframe.js"></script>
<script src="__JS__/sy/main.js"></script>
<link rel="stylesheet" type="text/css" href="__CSS__/default_content.min.css"/>
<link rel="stylesheet" type="text/css" href="__CSS__/select2.min.css"/>
<link rel="stylesheet" href="__CSS__/page.css" />

<div class="ys-content">
    <div class="header">
        投注查询  </div>
    <div class="main">
        <form id="gameinfoTable" action="" method="GET" class="form section">
            <input type="hidden" name="controller" value="gameinfo">
            <input type="hidden" name="action" value="gamelist">
            <input type="hidden" name="isgetdata" value="1">
            <input type="hidden" name="new" value="1">
            <div class="field">
                <label>投注时间</label>
                <select name="days" id="days" class="dept_select selection">
                    <?php if(is_array($days) || $days instanceof \think\Collection || $days instanceof \think\Paginator): $i = 0; $__LIST__ = $days;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($p_days == $vo): ?>
                        <option  value="<?php echo $vo; ?>" selected="selected"><?php echo $vo; ?></option>
                        <?php else: ?>
                        <option  value="<?php echo $vo; ?>"><?php echo $vo; ?></option>
                        <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                </select>
            </div>
            <div class="inline-fields">
                <div class="field">
                    <label>彩种名称</label>
                    <select  name="lotteryid" id="lotteryid" class="dept_select selection">
                        <option value="0">所有游戏</option>
                        <?php if(is_array($types_data) || $types_data instanceof \think\Collection || $types_data instanceof \think\Paginator): $i = 0; $__LIST__ = $types_data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($lotteryid == $vo['id']): ?>
                            <option  value="<?php echo $vo['id']; ?>" selected="selected"><?php echo $vo['title']; ?></option>
                            <?php else: ?>
                            <option  value="<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></option>
                            <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </div>
                <div class="field">
                    <label>游戏玩法</label>
                    <select name="methodid" id="methodid" class="dept_select selection">
                        <option value="0">所有玩法</option>
                    </select>
                </div>
                <div class="field">
                    <label>彩种奖期</label>
                    <select name="issue" id="issue" class="dept_select selection">
                        <option value="0">所有奖期</option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label>用户名</label>
                <input type="text" name="username" id="username" class="custom_input" value="<?php echo $cur_username; ?>" />
                <label class="user_type_checkbox">
                    <?php if($include == 1): ?>
                        <input type="checkbox" name="include" id="include" value="1" checked="checked" class="v-am ml10"> 包含下级        
                    <?php else: ?>
                        <input type="checkbox" name="include" id="include" value="1" class="v-am ml10"> 包含下级
                    <?php endif; ?>
                </label>
            </div>
            <input type="submit" value="搜索" class="btn">
        </form>
        <div class="list" id="touzhu_record">
            <table>
                <thead>
                <tr>
                    <th>用户</th>
                    <th>彩种</th>
                    <th>玩法</th>
                    <th>投注期号</th>
                    <th style="max-width: 217px;">投注内容</th>
                    <th>投注金额</th>
                    <th>奖金</th>
                    <th>开奖号</th>
                    <th>状态</th>
                </tr>
                </thead>
                <tbody>
                <?php  $touzhuTotal=0;$zjTotal=0;if(is_array($bets) || $bets instanceof \think\Collection || $bets instanceof \think\Paginator): $i = 0; $__LIST__ = $bets;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                <tr>
                    <?php
                    $touzhuTotal+=$vo['mode']*$vo['beiShu']*$vo['actionNum']*($vo['fpEnable']+1);
                    $zjTotal+=$vo['zj_money_num'];
                    ?>
                    <td><?php echo $vo['username']; ?></td>
                    <td><?php echo $vo['type']; ?></td>
                    <td><?php echo $vo['playedId']; ?></td>
                    <td><?php echo $vo['actionNo']; ?></td>
                    <td style="max-width: 190px; word-wrap:break-word;word-break:break-all;">
                    <?php if(strlen($vo['actionData'])>32): ?>
                    <a href="javascript:void(0)" onclick="$('.task_div').hide();$('.task_div',$(this).parent()).show();">详细号码</a>
                        <div class="task_div" style="display: none;">
                        号码详情[<a href="javascript:void(0)" onclick="$(this).parent().hide();" class="fff600">关闭</a>]<br>
                        <!-- <p class="code" readonly="readonly"><?php echo $vo['actionData']; ?></p> -->
                        <textarea class="code" readonly="readonly" style="width: 208px;"><?php echo $vo['actionData']; ?></textarea></div>
                    <?php else: ?>
                        <?php echo $vo['actionData']; endif; ?>
                    </td>
                    <td><?php echo $vo['mode']*$vo['beiShu']*$vo['actionNum']*($vo['fpEnable']+1); ?></td>
                    <td><?php echo $vo['zj_money']; ?></td>
                    <td><?php echo $vo['lotteryNo']; ?></td>
                    <td>
                        <a href="./betDetail.html?id=<?php echo $vo['id']; ?>" title="查看注单详情" style="color: lightblue;">
                            <span style="color: pink;text-decoration: underline;"><?php echo $vo['status_name']; ?></span>
                        </a>
                    </td>
                </tr>
                <?php endforeach; endif; else: echo "" ;endif; if(empty($bets) || (($bets instanceof \think\Collection || $bets instanceof \think\Paginator ) && $bets->isEmpty())): ?>
                <tr>
                    <td height="37" colspan="9" align="center">请选择查询条件之后进行查询</td>
                </tr>
                <?php endif; ?>
                </tbody>
                <tfoot>
                <tr align="center">
                    <th>小结</th>
                    <th colspan="4"></th>
                    <th><?php echo $touzhuTotal; ?></th>
                    <th><?php echo $zjTotal; ?></th>
                    <th></th>
                    <th></th>
                </tr>
                </tfoot>
            </table>
        </div>
        <div>
      <span class="page" style="padding:0 15px">总计<?php echo $total; ?>个记录, 分为<?php echo $totalPage; ?> 页, 当前第 <?php echo $currentPage; ?>页<SPAN ID="tPages"> &nbsp;
          <!--<A  HREF="/?controller=gameinfo&action=gamelist&p=1&pn=25">1</A>-->
&nbsp;</SPAN>
          <div style="display: inline-flex" class="page_right">
			  <?php echo $page; ?>
		  </div>
</span>
        </div>
    </div>
</div>
<script type="text/javascript" src="__JS__/select2.min.js"></script>
<script type="text/javascript" src="__TODO__/js/common/base.js" ></script>
<script type="text/javascript" src="__TODO__/js/common/select.js" ></script>
<script type="text/javascript" src="__TODO__/js/common/model/details.js" ></script>
<script type="text/javascript">
    //將所有篩選項目(投注時間、彩種名稱.etc)返回SUBMIT之前的值
    function prevPost()
    {
        /*var $_get_lotteryid = ''.length > 0 ? '' : '0';
        var $_get_methodid = ''.length > 0 ? '' : '0';
        var $_get_issue = ''.length > 0 ? '' : '0';*/
        var $_get_lotteryid = <?=$lotteryid?>;
        var $_get_methodid = <?=$methodid?>;
        var $_get_issue = "<?=$issue?>";
        if($_get_lotteryid)
        {            
            Selected($('select[name="lotteryid"]'), $_get_lotteryid);
        }

        if($_get_methodid)
        {
            Selected($('select[name="methodid"]'), $_get_methodid);
        }

        if($_get_issue)
        {
            Selected($('select[name="issue"]'), $_get_issue);
        }

        if('')
        {
            $('input[name="include"]')[0].checked = true;
        }

        function Selected($obj, value)
        {
            $obj.children('option').each(function(){
                if($(this).val() == value)
                {
                    this.selected = true;
                    $obj.trigger('change');
                    return;
                }
            });

        }
    }

    $(function(){
        var data_method = <?php echo $data_method; ?>;
        var data_issue = <?php echo $data_issue; ?>;

        $("#lotteryid, #methodid, #issue, #days").select2();

        jQuery("#lotteryid").change(function(){
            var i =  $("#lotteryid").val();
            if(i>0)
            {
                html_method = "<option value='0'>所有玩法</option>";
                if(data_method[i]){
                    $.each(data_method[i],function(j,k){
                        html_method = html_method +"<option value='"+k.methodid+"'>"+k.methodname+"</option>";
                    });}
                html_issue = "<option value='0'>所有奖期</option>";
                if(data_issue[i]){
                    $.each(data_issue[i],function(j,k){

                        html_issue = html_issue +"<option value='"+k.issue+"'>"+k.issue+"</option>";


                    });}
            }
            else
            {
                html_method = "<option value='0'>所有玩法</option>";
                //html = html + "&nbsp;&nbsp;";
                html_issue = "<option value='0'>所有奖期</option>";
            }
            $("#methodid").html(html_method).trigger("change.select2");
            $("#issue").html(html_issue).trigger("change.select2");


        });

        //if(window.console){console.log('xxxx');}
        prevPost();

    });
</script>