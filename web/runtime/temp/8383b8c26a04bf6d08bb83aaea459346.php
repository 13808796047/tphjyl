<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:91:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/game/project_records.html";i:1530857639;}*/ ?>
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
        <th>投注金额</th>
        <th>开奖号码</th>
        <th>中奖金额</th>
        <th>撤单</th>
        <!-- 	<th>是否追号			</th> -->
    </tr>
    <tbody>
    <?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
    <tr>
        <td><a href="/game_record/index.html"
               target="_blank" title="查看注单详情"> <?php echo $vo['actionTime']; ?></a></td>
        <td title='<?php echo $vo['title']; ?>'><?php echo $vo['title']; ?></td>
        <td title='<?php echo $vo['name']; ?>'><?php echo $vo['name']; ?></td>
        <td><?php echo $vo['actionNo']; ?></td>
        <td><?php echo $vo['mode_cn']; ?></td>
        <td><?php echo $vo['beiShu']; ?></td>
        <!--<td><?php echo $vo['actionData']; ?></td>-->
        <td><?php if(strlen($vo['actionData'])>32): ?>
            <a href="javascript:void(0)"
               onclick="$('.task_div').hide();$('.task_div',$(this).parent()).show();">详细号码</a>
            <div class="task_div" style="display: none;">
                号码详情[<a href="javascript:void(0)" onclick="$(this).parent().hide();" class="fff600">关闭</a>]<br>
                <!-- <p class="code" readonly="readonly"><?php echo $vo['actionData']; ?></p> -->
                <textarea class="code" readonly="readonly" style="width: 300px;"><?php echo $vo['actionData']; ?></textarea></div>
            <?php else: ?>
            <?php echo $vo['actionData']; endif; ?>
        </td>
        <td><?php echo $vo['mode']*$vo['beiShu']*$vo['actionNum']*($vo['fpEnable']+1); ?></td>
        <td><?php echo $vo['lotteryNo']; ?></td>
        <td><?php echo $vo['bonus']; ?></td>
        <td>
            <?php if($vo['isDelete']==1): ?>
            <label class="gray">已撤单</label>
            <?php elseif($vo['lotteryNo']===''): ?>
            <a id="cd_<?php echo $vo['id']; ?>" href="javascript:void(0);" onclick="chedan(<?php echo $vo['id']; ?>)" title="是否确定撤单" width="510">撤单</a>
            <?php elseif($vo['zjCount']): ?>
            <label class="red">已中奖</label>
            <?php else: ?>
            <label class="gray">未中奖</label>
            <?php endif; ?>
            <!--{if $vo['isDelete']==1 }
            <label class="gray">已撤单</label>
            {if !$vo['lotteryNo']}
            <label class="gray">未开奖</label>
            <?php if($vo['mode']*$vo['beiShu']*$vo['actionNum']*($vo['fpEnable']+1)): ?>
            <label class="red">已中奖</label>
            <?php else: ?>
            <label class="gray">未中奖</label>
            <?php endif; ?>-->
        </td>
        <!-- <td>否</td> -->
    </tr>
    <?php endforeach; endif; else: echo "" ;endif; ?>
    </tbody>
</table>