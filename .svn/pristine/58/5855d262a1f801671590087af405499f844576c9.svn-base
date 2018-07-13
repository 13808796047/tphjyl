drop PROCEDURE if exists sp_QW_sxbx;
CREATE PROCEDURE `sp_QW_sxbx`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ·趣味 - 三星报喜 万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int DEFAULT 1;
	set _len = LENGTH(_actionData);
  	set _cnt = _cnt * _beiShu;

  	# 循环
  	REPEAT
  		set _num = SUBSTR(_actionData FROM _i FOR 1);
  		# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
		call sp_AddBetNum(_type,_actionNo,_num,_cnt,1);
		# 加千位  5:个位，4:十位，3:百位，2:千位，1:万位
		call sp_AddBetNum(_type,_actionNo,_num,_cnt,2);
		# 加百位  5:个位，4:十位，3:百位，2:千位，1:万位
		call sp_AddBetNum(_type,_actionNo,_num,_cnt,3);
		# 加十位  5:个位，4:十位，3:百位，2:千位，1:万位
		call sp_AddBetNum(_type,_actionNo,_num,_cnt,4);
		# 加个位  5:个位，4:十位，3:百位，2:千位，1:万位
		call sp_AddBetNum(_type,_actionNo,_num,_cnt,5);
  		set _i = _i+1;
  	UNTIL 
  		_i >= _len
  	END REPEAT;
  	
end;