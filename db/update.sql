DROP TRIGGER `coin_createReport_trigger`;

CREATE DEFINER=`root`@`localhost` TRIGGER `coin_createReport_trigger` AFTER INSERT ON `gygy_coin_log`
FOR EACH ROW #这句话是固定的
Begin
  set @istest=0;
	#当天的时间
	set @to_day = 0;
	select UNIX_TIMESTAMP(date_format(now(),'%Y-%m-%d')) into @to_day from dual;
  #返点 liqType=(2,3)
  set @fanDianAmount = 0;
	#投注 liqType= '101','102','7'
  set @betAmount = 0;
  #中奖 liqType=6
  set @zjAmount = 0;
  #提现 liqType= 107
  set @cashAmount = 0;
  #充值 liqType= 1
  set @rechargeAmount = 0;
  #活动 liqType= '50','51','52','53'
  set @brokerageAmount = 0;
  set @liqType = new.liqType;
  #用户名
  set @username = '';
  #余额
  set @coin = 0;
  #总盈亏 =zjAmount+fanDianAmount+brokerageAmount-betAmount
  set @zyk = 0;
  #是否存在当天数据
  set @report_id = 0;
  #当前金额
	set @cur_price = abs(new.coin);
  select username,coin,is_test into @username,@coin,@istest from gygy_members where uid=new.uid;
  #查询是否存在当天的report
  select id,zyk into @report_id,@zyk from gygy_coin_log_report where uid=new.uid and actionTime=@to_day;
  
    #判断当前数据是那种类型，同时赋相应的值
			if @liqType=2 or @liqType=3 then
				set @fanDianAmount = @cur_price;
				set @zyk = @fanDianAmount;
			end if;

			#101 投注 
			if @liqType=101 then 	
				set @betAmount = @cur_price;
				-- set @zyk = -@betAmount;
			end if;

			if @liqType=6 then 			
				set @zjAmount = @cur_price;
				set @zyk = @zjAmount;
			end if;

			if @liqType=107 then		
				set @cashAmount = abs(new.fcoin);
			end if;

			#充值
			if @liqType=1 then 			
				set @rechargeAmount = @cur_price;
			end if;

			#撤单
			if @liqType=7 then 			
				set @betAmount = -@cur_price;
				set @zyk = @cur_price;
			end if;

			if @liqType=50 or @liqType=51 or @liqType=52 or @liqType=53 then 			
				set @brokerageAmount = @cur_price;
				set @zyk = @brokerageAmount;
			end if;
	#如果是新增
  if @report_id = 0 then
	 INSERT INTO `gygy_coin_log_report` (`fanDianAmount`, `betAmount`, `zjAmount`, `cashAmount`, `rechargeAmount`, `brokerageAmount`, `zyk`, `actionTime`, `uid`, `username`, `coin`,`istest`) VALUES ( @fanDianAmount, @betAmount, @zjAmount, @cashAmount, @rechargeAmount, @brokerageAmount, @zyk, @to_day, new.uid, @username, @coin,@istest);
  #如果是修改 
	else 
		UPDATE  `gygy_coin_log_report` SET `fanDianAmount`=fanDianAmount+@fanDianAmount, `betAmount`=betAmount+@betAmount, `zjAmount`=zjAmount+@zjAmount, `cashAmount`=cashAmount+@cashAmount, `rechargeAmount`=rechargeAmount+@rechargeAmount, `brokerageAmount`=brokerageAmount+@brokerageAmount, `zyk`=zjAmount+fanDianAmount+brokerageAmount-betAmount,`coin`=@coin,`istest`=@istest WHERE (`id`=@report_id);
   end if;
END;

