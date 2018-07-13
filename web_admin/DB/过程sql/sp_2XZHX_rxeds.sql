drop PROCEDURE if exists sp_2XZHX_rxeds;
CREATE PROCEDURE `sp_2XZHX_rxeds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星直选 - 任选二单式 万位 千位 对应数 加 一 0 1 2 3 4 5 6 7 8 9
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
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