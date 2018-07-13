drop PROCEDURE if exists sp_BD_qezxbd;
CREATE PROCEDURE `sp_BD_qezxbd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 前二包胆  万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	set _num = _actionData;
  	set _cnt = _cnt * _beiShu;
  	# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,1);
	# 加千位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,2);
end;