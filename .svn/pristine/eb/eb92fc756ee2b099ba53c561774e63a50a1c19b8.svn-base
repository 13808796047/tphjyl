<?php
$dealOrder = $_REQUEST['dealOrder'];
$dealFee = $_REQUEST['dealFee'];
$dealSignure = $_REQUEST['dealSignure'];
$dealReturn = $_REQUEST['dealReturn'];
$dealNotify = $_REQUEST['dealNotify'];
$def_url  = '<br />';
$def_url  .= '<form id="ifrm" method="post" action="https://user.ecpay.cn/paygate.html"  >';
    $def_url .= '	<input type = "hidden" name = "merId"	value = "291657">';
    $def_url .= '	<input type = "hidden" name = "dealOrder" 				value = "'.$dealOrder.'">';
    $def_url .= '	<input type = "hidden" name = "dealFee" 			value = "'.$dealFee.'">';
    $def_url .= '	<input type = "hidden" name = "dealSignure"			value = "'.$dealSignure.'">';
    $def_url .= '	<input type = "hidden" name = "dealReturn"			value = "'.$dealReturn.'">';
    $def_url .= '	<input type = "hidden" name = "dealNotify"			value = "'.$dealNotify.'">';
    $def_url .= '	<input type=submit value="立即付款">';
    $def_url .= '</form>';
$def_url .= "<script> document.getElementById('ifrm').submit();</script>";
echo $def_url;exit;