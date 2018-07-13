CREATE PROCEDURE `sp_AddBetNum`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData tinyint(4),
 _cnt int(11),
 _position tinyint(4)
)
begin
	declare _id int;
	declare _has int DEFAULT 0;

	SELECT COUNT(id),id into _has , _id FROM gygy_bet_num WHERE type=_type AND actionNo=_actionNo AND position=_position;
	
	IF _has >0 THEN # 更新
		IF _actionData=0 THEN
			UPDATE gygy_bet_num set no0 = no0+_cnt WHERE id=_id;
		ELSEIF _actionData=1 THEN
			UPDATE gygy_bet_num set no1 = no1+_cnt WHERE id=_id;
		ELSEIF _actionData=2 THEN
			UPDATE gygy_bet_num set no2 = no2+_cnt WHERE id=_id;
		ELSEIF _actionData=3 THEN
			UPDATE gygy_bet_num set no3 = no3+_cnt WHERE id=_id;
		ELSEIF _actionData=4 THEN
			UPDATE gygy_bet_num set no4 = no4+_cnt WHERE id=_id;
		ELSEIF _actionData=5 THEN
			UPDATE gygy_bet_num set no5 = no5+_cnt WHERE id=_id;
		ELSEIF _actionData=6 THEN
			UPDATE gygy_bet_num set no6 = no6+_cnt WHERE id=_id;
		ELSEIF _actionData=7 THEN
			UPDATE gygy_bet_num set no7 = no7+_cnt WHERE id=_id;
		ELSEIF _actionData=8 THEN
			UPDATE gygy_bet_num set no8 = no8+_cnt WHERE id=_id;
		ELSEIF _actionData=9 THEN
			UPDATE gygy_bet_num set no9 = no9+_cnt WHERE id=_id;
		ELSEIF _actionData=10 THEN
			UPDATE gygy_bet_num set no10 = no10+_cnt WHERE id=_id;
		ELSEIF _actionData=11 THEN
			UPDATE gygy_bet_num set no11 = no11+_cnt WHERE id=_id;
		END IF;
	ELSE #插入
		IF _actionData=0 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no0) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=1 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no1) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=2 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no2) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=3 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no3) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=4 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no4) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=5 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no5) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=6 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no6) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=7 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no7) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=8 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no8) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=9 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no9) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=10 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no10) values(_type,_actionNo,_position,_cnt);
		ELSEIF _actionData=11 THEN
			INSERT INTO gygy_bet_num (type,actionNo,position,no11) values(_type,_actionNo,_position,_cnt);
		END IF;
	end IF;
end