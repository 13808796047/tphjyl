<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:89:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/game/trace_records.html";i:1528683058;}*/ ?>
<script type="text/javascript">
    function show_no(id)
    {
        $("#code_"+id).show("slow");
    }
    function close_no(id)
    {
        $("#code_"+id).hide("slow");
    }
</script>
<table class="chart-table table table-border"
       style="width: 100%; white-space: nowrap !important; overflow: hidden !important;">
    <thead class="thead">
    <tr class="title-text">
        <th  width="11%">追号时间</th>
        <th >用户</th>
        <th style="width:8%">彩种</th>
        <th >开始期数</th>
        <th  width="12%">追号内容</th>
        <th >追号总金额</th>
        <th >完成金额</th>
        <th   width="9%">取消金额</th>
        <th >追中即停</th>
        <th style="width:auto">追号状态</th>
    </tr>
    </thead>
    <tbody>
    <?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
    <tr align="center">
        <td>
            <a href="/game_record/index.html" target="_blank" title="查看追号详情">
                <?php echo $vo['actionTime']; ?></a>
        </td>
        <td title=''><?php echo $username; ?></td>
        <td title=''><?php echo $vo['title']; ?></td>
        <td><?php echo $vo['actionNo']; ?></td>
        <td><?php echo $vo['actionData']; ?></td>
        <td><?php echo $vo['mode']*$vo['beiShu']*$vo['actionNum']*($vo['fpEnable']+1); ?></td>
        <td><?php echo $vo['bonus']; ?></td>
        <td><?php echo $vo['zhuiHaoMode_money']; ?></td>
        <td  title='(高奖金)'><?php echo $vo['zhuiHaoMode']; ?></td>
        <td>
            <a href="/game_record/index.html" target="_blank">
                <span style="color: #ff4800;">进行中</span>
            </a>
        </td>
    </tr>
    <?php endforeach; endif; else: echo "" ;endif; ?>
    </tbody>
</table>