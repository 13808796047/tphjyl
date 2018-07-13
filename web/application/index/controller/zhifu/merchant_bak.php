<?php
/**
1）merchant_private_key，商户私钥;merchant_public_key,商户公钥；商户需要按照《密钥对获取工具说明》操作并获取商户私钥，商户公钥。
2）demo提供的merchant_private_key、merchant_public_key是测试商户号1111110166的商户私钥和商户公钥，请商家自行获取并且替换；
3）使用商户私钥加密时需要调用到openssl_sign函数,需要在php_ini文件里打开php_openssl插件
4）php的商户私钥在格式上要求换行，如下所示；
*/
        /*$merchant_private_key='-----BEGIN PRIVATE KEY-----
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
-----END PRIVATE KEY-----';*/
        $merchant_private_key='-----BEGIN PRIVATE KEY-----
		MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAOFkr3lRehSVSSqg
        srr70VVJ1SK3xVEMZBqfsNuWQNIzlhPlRoev60iv5A8Z67XLfbjDZ8T0SER5Yemu
        04d6bMz0HcdFj/4Zfp8hKBAkeESN48+SxVmAT1fb22VpFoptM8Y6FdIAazYVH4w7
        zTG32wgfjj28p6F8vbU10n9OW20zAgMBAAECgYEAyVKP0gNO0hfONL85Jf9Lqay7
        LbmMC6rPt2AwLtN0rszZHohKiWQ++rvxLvPuMIHEmEYh6DByZIcvR/Wah4Z4qqOR
        R7Jz3anAhhGTJwsx4shMyOVqTcxlrn7p31u+ql6CykTDQXy4wR6OstccbD3eJt1O
        W1GlucB82Q9udEt9dJECQQD2804uM3IIrQbaOnX6K/eUO43j3+i+fuoFvypItdjl
        jiXokJ+EcTO6R+uLHGHPjbJ5o6+wwgH0DiFh/GCVSQutAkEA6acl8JueCFe0e+Qt
        +FWQMx1XE34jtxofbjfgl/WKR4WKdEofX5Wk8hqyuemkBDXWoC6VAjXHQCqW7mbJ
        nsN4XwJBAJJGLcHaASq4an2q8SS9FEn+OJ6Ii1EC1dWPlRk6dX4Lg9LMj2AguXYW
        kaN1rU4GbXf1h+SYFhYcpJNorUDf4oUCQQDOZLLz5lLjpa2tXrNo0RQuwrUfZ+Ze
        oLmw37UKJoB+iyzxamRqR8LLhd/or8UNXw12s482w5B9UuG+N5fUIXDbAkBGu4eo
        OvqLHOb+z1pCq/oZXNRjCq5Csgq3BQTzd+q7Du82uJu9yXfIXUhq27t9uYowr68y
        1fLsNy8br7L39Eof
-----END PRIVATE KEY-----';

    //merchant_public_key,商户公钥，按照说明文档上传此密钥到DD4商家后台，位置为"支付设置"->"公钥管理"->"设置商户公钥"，代码中不使用到此变量
    //demo提供的merchant_public_key已经上传到测试商家号后台
    /*$merchant_public_key = '-----BEGIN PUBLIC KEY-----
		MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDQ0LnRLfpgejmkAF4gj/5td3ch
		LYutPRgTY+hsooypSHWpIPLUnrvP7QI0nfqKSaA3esj71SMVdwa4ITp+5q2PUfM4
		KZyidV+zF5hf2p6mMZVdvquOVfman8z2cCdYn5qNXiYAY0LAHE/PaUqadNj15s13
		SmVJZZXW3t+SjMRHeQIDAQAB
-----END PUBLIC KEY-----';*/
    $merchant_public_key = '-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDhZK95UXoUlUkqoLK6+9FVSdUi
    t8VRDGQan7DblkDSM5YT5UaHr+tIr+QPGeu1y324w2fE9EhEeWHprtOHemzM9B3H
    RY/+GX6fISgQJHhEjePPksVZgE9X29tlaRaKbTPGOhXSAGs2FR+MO80xt9sIH449
    vKehfL21NdJ/TlttMwIDAQAB
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
            /*$DD4_public_key = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCkFhO4rq957Rb3egLAk9Wem1roH6
SJq6uOa+deFE3fhCE+7+oe+DtH43pMvZLKY+rxl5isE/XDtuq/cbi+RShom3hgx2Ex
pW3/bmeAqyj+8sWxeMB6HHXKGeJSzgMLcmiYd9XncpC3XaTEBc3trrpWg4utWOATv8
yeezMwCkOSEQIDAQAB
-----END PUBLIC KEY-----';*/
            $DD4_public_key = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCb/Nv+NEZIFQJnBIVHD7keh9MmsU4G
evH83FpIrhuQ0VER9+e934/y3uN7Gk5AxqYLKZy5tvwbZDY8ePOktcOruTcNlhsGb3pn
69Q1HKQE+I9RC2ZJQPbzPB0npzsMTOKYcdTPyFdvR3AvzY8lq0z78K9jky9bbCbL3wjq
gz2d0wIDAQAB
-----END PUBLIC KEY-----';
