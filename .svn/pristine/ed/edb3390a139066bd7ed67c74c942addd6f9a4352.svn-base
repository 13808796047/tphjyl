drop PROCEDURE if exists sp_2XZHX_hezxds;
CREATE PROCEDURE `sp_2XZHX_hezxds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星直选 - 后二组选单式 万位 千位 对应数 加 一 	1,2|3,1|2,3
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 2;
	declare _data varchar(32);
	declare _newdata varchar(250);
	# 计算手打长度
	set _len = length(_actionNo)-length(replace(_actionNo,'|',''))+1; 
  	set _cnt = _cnt * _beiShu;

  	REPEAT
  	# 循环 注数
		set _data = substring_index(_actionNo,'|', _i);
	  	REPEAT
	  		set _num = substring_index(substring_index(_data, ',', _j),',',-1);
	  		if _num <> '-' then
	  		# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+3);
			end if;	
	  		set _j = _j+1;
	  	UNTIL 
	  		_j > _jLen
	  	END REPEAT;
	  	set _i = _i+1;
  	UNTIL 
	  	_i > _len
	END REPEAT;
end;

drop PROCEDURE if exists sp_2XZHX_hefs;
CREATE PROCEDURE `sp_2XZHX_hefs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··二星直选 - 后二复式 万位 千位 对应数 加 一 0123456789,0123456789
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 2;
	declare _data varchar(32);

  	set _cnt = _cnt * _beiShu;
  	REPEAT
  		set _data = substring_index(substring_index(_actionData,',', _j), ',', -1);
  	# 循环
  		if _data <> '-' then 
			set _len = LENGTH(_data);
			set _i = 1;
		  	REPEAT
		  		set _num = SUBSTR(_data FROM _i FOR 1);
		  		# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+3);
		  		set _i = _i+1;
		  	UNTIL 
		  		_i > _len
		  	END REPEAT;
	  	end if;
	  	set _j = _j+1;
  	UNTIL 
	  	_j > _jLen
	END REPEAT;
end;

drop PROCEDURE if exists sp_2XZHX_qezxds;
CREATE PROCEDURE `sp_2XZHX_qezxds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星直选 - 前二组选单式 万位 千位 对应数 加 一 	1,2|3,1|2,3
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 2;
	declare _data varchar(32);
	declare _newdata varchar(250);
	# 计算手打长度
	set _len = length(_actionNo)-length(replace(_actionNo,'|',''))+1; 
  	set _cnt = _cnt * _beiShu;

  	REPEAT
  	# 循环 注数
		set _data = substring_index(_actionNo,'|', _i);
	  	REPEAT
	  		set _num = substring_index(substring_index(_data, ',', _j),',',-1);
	  		if _num <> '-' then
	  		# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j);
			end if;	
	  		set _j = _j+1;
	  	UNTIL 
	  		_j > _jLen
	  	END REPEAT;
	  	set _i = _i+1;
  	UNTIL 
	  	_i > _len
	END REPEAT;
end;