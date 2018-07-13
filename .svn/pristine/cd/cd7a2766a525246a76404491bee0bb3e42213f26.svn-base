
DROP TRIGGER IF EXISTS betStatTrigger;
CREATE TRIGGER `betStatTrigger` AFTER INSERT ON `gygy_bets` FOR EACH ROW #这句话是固定的

Begin
IF new.istest = 0 THEN
# 判断是什么彩种什么玩法 
	CASE WHEN new.playedGroup=1 AND new.playedId=2 THEN 
	 # 五星直选 - 五星复式
		CALL sp_5XZHX_wxfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=1 AND new.playedId=3 THEN 
	 # 五星直选 - 五星单式
		CALL sp_5XZHX_wxds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=73 AND new.playedId=253 THEN 
	 # 五星组选 - 组选120
		CALL sp_5XZX_zx120(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=73 AND new.playedId=254 THEN 
	 # 五星组选 - 组选60
		CALL sp_5XZX_zx60(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=73 AND new.playedId=255 THEN 
	 # 五星组选 - 组选30
		CALL sp_5XZX_zx30(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=73 AND new.playedId=256 THEN 
	 # 五星组选 - 组选20
		CALL sp_5XZX_zx20(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=73 AND new.playedId=257 THEN 
	 # 五星组选 - 组选10
		CALL sp_5XZX_zx10(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=73 AND new.playedId=258 THEN 
	 # 五星组选 - 组选5
		CALL sp_5XZX_zx5(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=66 AND new.playedId=4 THEN 
	 # 四星直选 - 前四复式
		CALL sp_4XZHX_qsfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=66 AND new.playedId=5 THEN 
	 # 四星直选 - 前四单式
		CALL sp_4XZHX_qsds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=66 AND new.playedId=6 THEN 
	 # 四星直选 - 后四复式
		CALL sp_4XZHX_hsfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=66 AND new.playedId=7 THEN 
	 # 四星直选 - 后四单式
		CALL sp_4XZHX_hsds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=66 AND new.playedId=8 THEN 
	 # 四星直选 - 任选四复式
		CALL sp_4XZHX_rxsfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=66 AND new.playedId=9 THEN 
	 # 四星直选 - 任选四单式
		CALL sp_4XZHX_rxsds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=2 AND new.playedId=10 THEN 
	 # 三星直选 - 前三复式
		CALL sp_3XZHX_qsfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=2 AND new.playedId=11 THEN 
	 # 三星直选 - 前三单式
		CALL sp_3XZHX_qsds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=2 AND new.playedId=12 THEN 
	 # 三星直选 - 后三复式
		CALL sp_3XZHX_hsfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=2 AND new.playedId=13 THEN 
	 # 三星直选 - 后三单式
		CALL sp_3XZHX_hsds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=2 AND new.playedId=14 THEN 
	 # 三星直选 - 任选三复式
		CALL sp_3XZHX_rxsfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=2 AND new.playedId=15 THEN 
	 # 三星直选 - 任选三单式
		CALL sp_3XZHX_rxsds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=3 AND new.playedId=16 THEN 
	 # 三星直选 - 前三组三
		CALL sp_3XZX_qszs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=3 AND new.playedId=17 THEN 
	 # 三星直选 - 前三组六
		CALL sp_3XZX_qszl(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=3 AND new.playedId=19 THEN 
	 # 三星直选 - 后三组三
		CALL sp_3XZX_hszs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=3 AND new.playedId=20 THEN 
	 # 三星直选 - 后三组六
		CALL sp_3XZX_hszl(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=3 AND new.playedId=22 THEN 
	 # 三星直选 - 任选三组三
		CALL sp_3XZX_rxszs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=3 AND new.playedId=23 THEN 
	 # 三星直选 - 任选三组六
		CALL sp_3XZX_rxszl(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=3 AND new.playedId=24 THEN 
	 # 三星直选 - 任选三混全组选
		CALL sp_3XZX_rxshqzx(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=4 AND new.playedId=25 THEN 
	 # 二星直选 - 前二复式
		CALL sp_2XZHX_qefs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=4 AND new.playedId=26 THEN 
	 # 二星直选 - 前二单式
		CALL sp_2XZHX_qeds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=4 AND new.playedId=27 THEN 
	 # 二星直选 - 后二复式
		CALL sp_2XZHX_hefs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=4 AND new.playedId=28 THEN 
	 # 二星直选 - 后二单式
		CALL sp_2XZHX_heds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=4 AND new.playedId=29 THEN 
	 # 二星直选 - 任选二复式
		CALL sp_2XZHX_rxefs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=4 AND new.playedId=30 THEN 
	 # 二星直选 - 任选二单式
		CALL sp_2XZHX_rxeds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=5 AND new.playedId=31 THEN 
	 # 二星组选 - 前二组选复式
		CALL sp_2XZX_qezxfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=5 AND new.playedId=32 THEN 
	 # 二星组选 - 前二组选单式
		CALL sp_2XZX_qezxds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=5 AND new.playedId=33 THEN 
	 # 二星组选 - 后二组选复式
		CALL sp_2XZX_hezxfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=5 AND new.playedId=34 THEN 
	 # 二星组选 - 后二组选单式
		CALL sp_2XZX_hezxds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=5 AND new.playedId=35 THEN 
	 # 二星组选 - 任选二组选复式
		CALL sp_2XZX_rxezxfs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=5 AND new.playedId=36 THEN 
	 # 二星组选 - 任选二组选单式
		CALL sp_2XZX_rxezxds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=6 AND new.playedId=37 THEN 
	 # 定位胆 - 五星定位胆
		CALL sp_DWD_wxdwd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=7 AND new.playedId=38 THEN 
	 # 不定胆 - 后三不定胆
		CALL sp_BDWD_hsbdd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=7 AND new.playedId=39 THEN 
	 # 不定胆 - 前三不定胆
		CALL sp_BDWD_qsbdd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=7 AND new.playedId=40 THEN 
	 # 不定胆 - 中三不定胆
		CALL sp_BDWD_zsbdd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=7 AND new.playedId=41 THEN 
	 # 不定胆 - 任选三不定胆
		CALL sp_BDWD_rxsbdd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=7 AND new.playedId=142 THEN 
	 # 不定胆 - 前三二码
		CALL sp_BDWD_qsem(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=7 AND new.playedId=143 THEN 
	 # 不定胆 - 后三二码
		CALL sp_BDWD_hsem(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=8 AND new.playedId=42 THEN 
	 # 大小单双 - 前二大小单双
		CALL sp_DXDS_qedxds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=8 AND new.playedId=43 THEN 
	 # 大小单双 - 后二大小单双
		CALL sp_DXDS_hedxds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=8 AND new.playedId=44 THEN 
	 # 大小单双 - 任选大小单双
		CALL sp_DXDS_rxdxds(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=72 AND new.playedId=250 THEN 
	 # 包胆 - 前二组选包胆
		CALL sp_BD_qezxbd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=72 AND new.playedId=249 THEN 
	 # 包胆 - 后二组选包胆
		CALL sp_BD_hezxbd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=72 AND new.playedId=252 THEN 
	 # 包胆 - 前三组选包胆
		CALL sp_BD_qszxbd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=72 AND new.playedId=251 THEN 
	 # 包胆 - 后三组选包胆
		CALL sp_BD_hszxbd(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=74 AND new.playedId=259 THEN 
	 # 趣味 - 一帆风顺
		CALL sp_QW_yffs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=74 AND new.playedId=260 THEN 
	 # 趣味 - 好事成双
		CALL sp_QW_hhcs(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=74 AND new.playedId=261 THEN 
	 # 趣味 - 三星报喜
		CALL sp_QW_sxbx(new.type,new.actionNo,new.actionData,new.beiShu);
	WHEN new.playedGroup=74 AND new.playedId=262 THEN 
	 # 趣味 - 四季发财
		CALL sp_QW_sjfc(new.type,new.actionNo,new.actionData,new.beiShu);
	END CASE;
END IF;
End;