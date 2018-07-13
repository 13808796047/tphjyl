───────
 代码文件结构
───────

demo for php(sign_type="RSA-S")
  │
  │
  ├merchant.php┈┈┈┈┈┈┈┈┈┈┈┈商家密钥文件（必选）
  │
  ├scan_pay.php┈┈┈┈┈┈┈┈┈┈┈┈DD4微信/支付宝/智汇宝支付接入文件（必选）
  │
  ├offline_notify.php┈┈┈┈┈┈┈┈┈┈┈┈┈┈服务器异步通知页面文件（必选）
  │
  ├phpqrcode.php ┈┈┈┈┈┈┈┈┈┈┈┈┈生成微信二维码的工具文件（必选）
  │
  ├order_query.php ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈DD4单笔查询文件（可选）
  │
  └readme.txt ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈使用说明文本

注意：技术调试API前要完成一项预备工作：获取商户私钥（merchant_private_key），获取商户公钥（merchant_public_key）并且将商户公钥上传到了到DD4商家后台，
      详情请看《密钥对获取工具说明》，否则调试接口时会报错