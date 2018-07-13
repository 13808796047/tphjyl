drop PROCEDURE if exists sp_3XZHX_qsfs;
CREATE PROCEDURE `sp_3XZHX_qsfs`(
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
	declare _jLen int DEFAULT 3;
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
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j);
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