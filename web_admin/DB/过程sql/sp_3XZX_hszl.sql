drop PROCEDURE if exists sp_3XZX_hszl;
CREATE PROCEDURE `sp_3XZX_hszl`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··三星直选 - 任选三组三 万位 千位 对应数 加 一 0123456789
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;

  	set _cnt = _cnt * _beiShu;
  	REPEAT
  	# 循环
		set _len = LENGTH(_actionData);
		set _i = 1;
	  	REPEAT
	  		set _num = SUBSTR(_actionData FROM _i FOR 1);
	  		# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
			call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+2);
	  		set _i = _i+1;
	  	UNTIL 
	  		_i > _len
	  	END REPEAT;
	  	set _j = _j+1;
  	UNTIL 
	  	_j > _jLen
	END REPEAT;
end;