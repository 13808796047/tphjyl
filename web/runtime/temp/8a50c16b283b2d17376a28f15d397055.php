<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:88:"/Users/sky/Desktop/code/yhyl/web/public/../application/index/view/activity/chongzhi.html";i:1530857421;}*/ ?>
<script type="text/javascript" src="__JS__/util/jquery-1.9.1.min.js"></script>

<script type="text/javascript" src="__JS__/common/model/details.js"></script>

<script>
    function hrefother(url) {
        window.location.href = url;
    }

    function checkrechargetime(recharge_start, recharge_end, current) {
        window.open("user_userbankinfo.html", '_self');
    }
</script>
<link rel="stylesheet" href="__CSS__/default_content.min.css">
<link rel="stylesheet" href="__CSS__/gift.min.css">
<link rel="stylesheet" href="/static/todo/images/game/game-touzhu.css">

<div class="ys-content">
    <div class="main">
        <div class="section">
            <h2>充值送礼!</h2>
            <h3>【活动时间】<?php echo $settings['ChongZhiFanLiStartDate']; ?> 至 <?php echo $settings['ChongZhiFanLiEndDate']; ?></h3>
            <h3>【活动内容】</h3>
            <!-- <h3>三、活动明细：</h3> -->
            <div class="content">
                <div class="step">
                    <div class="formTable">
                        <ul>
                            <li>每次充值赠送充值金额的<?php echo $settings['ChongZhiFanLiBiLi'] * 1000; ?>‰。</li>
                            <li>不限次数,充值就送。</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>