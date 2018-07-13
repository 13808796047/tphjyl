<?php
 date_default_timezone_set('PRC');
 $merchantId = "888201711160119"; //商户代码
 $bussId = "883077"; //业务代码
 $datakey = "o6f28p0u5SkAi6VV"; //数据密钥
// $payUrl = "http://192.168.10.36:7002/NetPay/BankSelect.action"; //支付网关地址
 $payUrl = "https://cashier.etonepay.com/NetPay/BankSelect.action"; //支付网关地址
 $queryUrl = "https://cashier.etonepay.com/NetPay/MerOrderQuery.action"; //订单状态查询地址
 $version = "1.0.0"; //版本号
 $transCode = "8888"; //交易代码
 $currencyType = "156"; //币种 156=人民币
 $merUrl = "http://localhost/payClient/payResult.php"; //页面返回地址
 $backUrl = "http://localhost/payClient/payResult.php"; //后台通知地址
?>