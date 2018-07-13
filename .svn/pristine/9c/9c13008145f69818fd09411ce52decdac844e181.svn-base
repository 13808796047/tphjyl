<?php
/**
1）merchant_private_key，商户私钥;merchant_public_key,商户公钥；商户需要按照《密钥对获取工具说明》操作并获取商户私钥，商户公钥。
2）demo提供的merchant_private_key、merchant_public_key是测试商户号1111110166的商户私钥和商户公钥，请商家自行获取并且替换；
3）使用商户私钥加密时需要调用到openssl_sign函数,需要在php_ini文件里打开php_openssl插件
4）php的商户私钥在格式上要求换行，如下所示；
 */
$merchant_private_key='-----BEGIN PRIVATE KEY-----
		MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANDQudEt+mB6OaQA
		XiCP/m13dyEti609GBNj6GyijKlIdakg8tSeu8/tAjSd+opJoDd6yPvVIxV3Brgh
		On7mrY9R8zgpnKJ1X7MXmF/anqYxlV2+q45V+ZqfzPZwJ1ifmo1eJgBjQsAcT89p
		Spp02PXmzXdKZUllldbe35KMxEd5AgMBAAECgYEAi2Wrhi7xZBJ0BD2SmJ5HtP/5
		cRacleug9ODPOiZRTHjowx0RvkqxCh8oR8PmiwaXhDHdlfA02ZF51NWp3SlVVo+S
		0kVb8QVRmXumArSwl6g2szUPqWvdhA1k0skJ3Ng3iqr6+hyxQFOJnLfVO51cCx7t
		xtvLYebSbbolRQVBpDkCQQD/y1YjJBhIQRsrCihtQM/v1nIz+L+VMh6Pcxh6rvVD
		gUpwF9kJSX3aGb4n0RuFcZNZWP7c3AYx2b7YHby+as/XAkEA0Pu3nPHoaXeuv7+N
		vk6/+0fhy3H+j94VVLPKbXeyxl68cwZ1Y1b1J9VUgO2CbkzIFLMa+KuHvplSSqO9
		hQD5LwJACZ/7E8Nt7noUrZ/qOYIw0NN+5Jm9i72hDMDF8QfYTrv0sxcSoZjUVXqW
		fyUNJg5J/xisLl9RFFsfJT6pNXkLbQJBAIhiXhfsv7JkywSUbFqwZhYFeVQeVvVp
		CB65HviFz4QqO24N3vovu9p9HKLvXdnB/imUIZv7xaEbylqvtXVhhz0CQB4O2l2X
		81Eg2Lgjrh8MhLoYukdR7pQOJEHhS3b+z87D22O4y6InKOeRTBR4wLLljyXPkKiG
		2TiyFeKop1RzGnY=
-----END PRIVATE KEY-----';

//merchant_public_key,商户公钥，按照说明文档上传此密钥到DD4商家后台，位置为"支付设置"->"公钥管理"->"设置商户公钥"，代码中不使用到此变量
//demo提供的merchant_public_key已经上传到测试商家号后台
$merchant_public_key = '-----BEGIN PUBLIC KEY-----
		MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDQ0LnRLfpgejmkAF4gj/5td3ch
		LYutPRgTY+hsooypSHWpIPLUnrvP7QI0nfqKSaA3esj71SMVdwa4ITp+5q2PUfM4
		KZyidV+zF5hf2p6mMZVdvquOVfman8z2cCdYn5qNXiYAY0LAHE/PaUqadNj15s13
		SmVJZZXW3t+SjMRHeQIDAQAB
-----END PUBLIC KEY-----';


$merchant_private_key2='-----BEGIN PRIVATE KEY-----
MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAND4XjRBkABtXvv4
D2VtSQOyOouB576X5M0SQZFZBY/oTSXTvHj/5btgNXhO3TcEbivhuDCK2Z1Fssij
vflNgAmSvFzGvKLUtvDukhnV28kioQpSkEMM3QBIE7cufrxxdAm6YbO/6IpAkKCl
CKXqi8r5u1e5PvCota2vQgxYLIZBAgMBAAECgYEApzwdJ/TQKYdd3IhIygMLy8l2
0O7FZ+JnWTajAo8bxG9ETmGFE9C3KZ11LTLwFneVM8kQfsigHx0IV0mzXzCGpa63
4dEu/bgNW6+HNGTKSLTtVZJlQzdhZU8Q4DAxrqlWbGOoUZcfpDXMekfcZK7GUrVk
X2uMVEXzT30ApJ8zWYECQQD+z4VzWymfaCod1ZkkLXuv7607ux0aw2Hhcc8/nO2O
m3qYkDnPDLc9OBjcLJSrkqAxjI5WAKSF9KMlW5SapqRbAkEA0fISKohK8NdZVuRQ
Dz8u/oizxwsV382Rqz++EXg6NwJQDyFX5L9rgj/GAZpnuOf6ig/CSAIp/xrnUM+n
2TVSkwJBAN4KzjqgpRugtJq86C8rZ03/6JBVVF5fBetjtnqzcBtGB0Xs4EM5zG+P
c7JhMsh0BB5JYjs1YijM7mH+dPdy4WMCQQCiCanHtgXROQS1MeYwvl1xCuVmnMG3
SJxDhiEWrqqPxnMwGlYSMUOy9bHHjvq7FiCi6mLS3Qi44nTiREOSO7uNAkALv/qu
ILXu35X5zutasqx80moNWCpJt+n8Fe7kOipz+UJO3D7nAR3ezNNZLjdZ9ftaKie7
FrtUwgTyc/ZsbXXJ
-----END PRIVATE KEY-----';
$merchant_public_key2 = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDQ+F40QZAAbV77+A9lbUkDsjqL
gee+l+TNEkGRWQWP6E0l07x4/+W7YDV4Tt03BG4r4bgwitmdRbLIo735TYAJkrxc
xryi1Lbw7pIZ1dvJIqEKUpBDDN0ASBO3Ln68cXQJumGzv+iKQJCgpQil6ovK+btX
uT7wqLWtr0IMWCyGQQIDAQAB
-----END PUBLIC KEY-----';
/**
1)DD4_public_key，DD4公钥，每个商家对应一个固定的DD4公钥（不是使用工具生成的密钥merchant_public_key，不要混淆），
即为DD4商家后台"公钥管理"->"DD4公钥"里的绿色字符串内容,复制出来之后调成4行（换行位置任意，前面三行对齐），
并加上注释"-----BEGIN PUBLIC KEY-----"和"-----END PUBLIC KEY-----"
2)demo提供的DD4_public_key是测试商户号1111110166的DD4公钥，请自行复制对应商户号的DD4公钥进行调整和替换。
3）使用DD4公钥验证时需要调用openssl_verify函数进行验证,需要在php_ini文件里打开php_openssl插件
 */
/*            $DD4_public_key = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFL1NR8Q9Y2ASQ3LOxgQnPFKFly
YM4fdtW3swMweaQLPrUUMbriwc5uxLbpF/aResv+1BKGmDcB7B9PYRhYTmTy/MDk5
A0urevlzfaQCBzRtF96RwmF6Tx2782aD4CZcrxem6Kb5DOrFD2j7UTuZpwXY0U7JT
guZ0v5iwRfIzYjwIDAQAB
-----END PUBLIC KEY-----';*/
$DD4_public_key = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCkFhO4rq957Rb3egLAk9Wem1roH6
SJq6uOa+deFE3fhCE+7+oe+DtH43pMvZLKY+rxl5isE/XDtuq/cbi+RShom3hgx2Ex
pW3/bmeAqyj+8sWxeMB6HHXKGeJSzgMLcmiYd9XncpC3XaTEBc3trrpWg4utWOATv8
yeezMwCkOSEQIDAQAB
-----END PUBLIC KEY-----';
$DD4_public_key2 = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQRZ2VlaI4J5zmmO4RrWIS8kLX
j3th8+1pCNbueYypqMKvIiLZ+6JRRGkjvdiBeJriuuO0cN/lUoArGookb6PgKr/DW
js+vZTQCk+iDzOv747sKDMnX+YwoBTolCkIOOa+Kic0g3MLx5XqRMzzP5rGzPXC7Y
X8JUVCoqC0dQu5PwIDAQAB
-----END PUBLIC KEY-----';
