<?php

$dealOrder = $_REQUEST['dealOrder'];
$dealFee = $_REQUEST['dealFee'];
$dealState = $_REQUEST['dealState'];
$dealSignature = $_REQUEST['dealSignure'];

$param = "?dealOrder=".$dealOrder."&dealFee=".$dealFee.'&dealState='.$dealState.'&dealSignure='.$dealSignature;
file_get_contents('http://taapay.cn/recharge/jq_callback'.$param);
echo "notify_success";exit;