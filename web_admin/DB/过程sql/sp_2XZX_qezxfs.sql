drop PROCEDURE if exists sp_2XZX_qezxfs;
CREATE PROCEDURE `sp_2XZX_qezxfs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星组选 - 前二组选复式 万位 千位 对应数 加 一 	1,2|3,1|2,3
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 2;
	declare _data varchar(32);
	declare _newdata varchar(250);

	set _newdata = REPLACE(_actionData,' ','');
  	set _cnt = _cnt * _beiShu;

  	REPEAT
  	# 循环
		set _len = LENGTH(_newdata);
		set _i = 1;
	  	REPEAT
	  		set _num = SUBSTR(_newdata FROM _i FOR 1);
	  		# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
			call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j);
	  		set _i = _i+1;
	  	UNTIL 
	  		_i > _len
	  	END REPEAT;
	  	set _j = _j+1;
  	UNTIL 
	  	_j > _jLen
	END REPEAT;
end;