/*
 Navicat Premium Data Transfer

 Source Server         : 36.42.72.117
 Source Server Type    : MySQL
 Source Server Version : 50716
 Source Host           : 36.42.72.117:3306
 Source Schema         : hjyl

 Target Server Type    : MySQL
 Target Server Version : 50716
 File Encoding         : 65001

 Date: 13/07/2018 15:45:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `account_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '托管账户id',
  `account_name` varchar(255) NOT NULL COMMENT '托管账户名',
  `account_pwd` varchar(255) NOT NULL COMMENT '托管账户密码',
  `recommend_name` varchar(255) DEFAULT NULL COMMENT '推荐账户',
  `account_balance` decimal(16,4) DEFAULT '0.0000' COMMENT '账户余额',
  `deadline` date NOT NULL COMMENT '到期日期（20170601）',
  `is_verified` tinyint(4) DEFAULT '0' COMMENT '是否审核通过 1是 0 否',
  `verified_at` date DEFAULT NULL COMMENT '审核日期',
  `verified_user_id` int(11) DEFAULT NULL,
  `verified_user` varchar(255) DEFAULT NULL COMMENT '审核人id',
  `account_type` tinyint(4) DEFAULT '1' COMMENT '账户级别',
  `verified_remark` varchar(511) DEFAULT NULL,
  `is_cancel` tinyint(2) DEFAULT '0' COMMENT '是否取消托管：0否1是',
  `is_black` tinyint(2) DEFAULT '0' COMMENT '是不是黑名单：0否1是',
  `days` int(11) DEFAULT '0' COMMENT '托管天数',
  `created_at` int(11) DEFAULT NULL COMMENT '创建日期',
  `updated_at` int(11) DEFAULT NULL COMMENT '更新日期',
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `account_name_idx` (`account_name`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=1221 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gygy_activity
-- ----------------------------
DROP TABLE IF EXISTS `gygy_activity`;
CREATE TABLE `gygy_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `all` int(11) NOT NULL DEFAULT '0' COMMENT '消费总量',
  `amount` int(11) NOT NULL DEFAULT '0' COMMENT '奖励金额',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Table structure for gygy_activity_log
-- ----------------------------
DROP TABLE IF EXISTS `gygy_activity_log`;
CREATE TABLE `gygy_activity_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) NOT NULL COMMENT '活动id （1-消费活动，2-佣金活动，3-日工资，4-充值返利）',
  `uid` int(11) NOT NULL COMMENT '用户id',
  `money` decimal(14,2) NOT NULL DEFAULT '0.00' COMMENT '活动领取金额',
  `base_money` decimal(14,2) NOT NULL DEFAULT '0.00',
  `category` tinyint(4) DEFAULT NULL COMMENT '活动奖励类别：1、佣金活动-消费；2、佣金活动-亏损；',
  `created_at` int(11) NOT NULL,
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`),
  KEY `idx` (`type`,`uid`,`created_at`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=97124 DEFAULT CHARSET=utf8 COMMENT='活动领取表';

-- ----------------------------
-- Table structure for gygy_admin_log
-- ----------------------------
DROP TABLE IF EXISTS `gygy_admin_log`;
CREATE TABLE `gygy_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `type` int(11) NOT NULL COMMENT '操作类型',
  `actionTime` int(11) NOT NULL,
  `actionIP` varchar(255) NOT NULL,
  `action` varchar(21000) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '操作描述',
  `extfield0` int(11) DEFAULT '0',
  `extfield1` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `actionTime` (`actionTime`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=46880 DEFAULT CHARSET=latin1 COMMENT='管理员操作日志';

-- ----------------------------
-- Table structure for gygy_bank_list
-- ----------------------------
DROP TABLE IF EXISTS `gygy_bank_list`;
CREATE TABLE `gygy_bank_list` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) CHARACTER SET utf8 NOT NULL,
  `logo` varchar(255) NOT NULL,
  `home` varchar(255) NOT NULL,
  `sort` tinyint(4) NOT NULL DEFAULT '0',
  `isDelete` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1 COMMENT='银行信息';

-- ----------------------------
-- Table structure for gygy_bet_num
-- ----------------------------
DROP TABLE IF EXISTS `gygy_bet_num`;
CREATE TABLE `gygy_bet_num` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL COMMENT '彩种编号',
  `actionNo` varchar(36) NOT NULL COMMENT '开奖期号',
  `position` tinyint(2) NOT NULL COMMENT '5:个位，4:十位，3:百位，2:千位，1:万位',
  `no0` int(11) DEFAULT '0' COMMENT '0购买次数',
  `no1` int(11) DEFAULT '0' COMMENT '1号购买次数',
  `no2` int(11) DEFAULT '0' COMMENT '2号购买次数',
  `no3` int(11) DEFAULT '0' COMMENT '3号购买次数',
  `no4` int(11) DEFAULT '0' COMMENT '4号购买次数',
  `no5` int(11) DEFAULT '0' COMMENT '5号购买次数',
  `no6` int(11) DEFAULT '0' COMMENT '6号购买次数',
  `no7` int(11) DEFAULT '0' COMMENT '7号购买次数',
  `no8` int(11) DEFAULT '0' COMMENT '8号购买次数',
  `no9` int(11) DEFAULT '0' COMMENT '9号购买次数',
  `no10` int(11) DEFAULT '0' COMMENT '10号购买次数',
  `no11` int(11) DEFAULT '0' COMMENT '11号购买次数',
  `created_at` int(11) DEFAULT NULL COMMENT '创建时间',
  `updated_at` int(11) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `type_idx` (`type`) USING BTREE,
  KEY `actionNo_idx` (`actionNo`) USING BTREE,
  KEY `idx_all` (`type`,`actionNo`,`position`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='投注号码统计表';

-- ----------------------------
-- Table structure for gygy_bets
-- ----------------------------
DROP TABLE IF EXISTS `gygy_bets`;
CREATE TABLE `gygy_bets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wjorderId` char(11) NOT NULL COMMENT '随机订单号',
  `orderId` bigint(11) NOT NULL COMMENT '定单号，由前台生成',
  `serializeId` char(13) NOT NULL COMMENT '投注号，由后台生成',
  `uid` int(11) NOT NULL COMMENT '投注用户ID',
  `username` varchar(32) NOT NULL DEFAULT '' COMMENT '投注人帐号',
  `istest` tinyint(4) NOT NULL COMMENT '是不是测试用户 （1是，0否）',
  `type` tinyint(4) NOT NULL COMMENT '投注种类，对应gygy_type.id',
  `playedGroup` smallint(6) NOT NULL COMMENT '玩法组ID',
  `playedId` int(11) NOT NULL COMMENT '玩法ID',
  `actionNo` varchar(16) NOT NULL COMMENT '投注期号',
  `actionTime` int(11) NOT NULL COMMENT '投注时间',
  `actionIP` varchar(64) NOT NULL COMMENT '投注IP',
  `actionNum` int(10) unsigned NOT NULL COMMENT '投注注数',
  `actionData` longtext CHARACTER SET utf8 NOT NULL COMMENT '投注号码',
  `weiShu` tinyint(4) NOT NULL DEFAULT '0' COMMENT '附加位数，一般用在任选位数上，个数用1,十位用2，百位用4...多位存储时可以用其和表示。,0一般是不保存位数用',
  `fanDian` decimal(10,4) NOT NULL COMMENT '返点',
  `fanDianAmount` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '支付的所有返点',
  `mode` decimal(4,3) NOT NULL COMMENT '模式，可以是2，0.20，0.02，分别代表元角分基数',
  `beiShu` int(11) NOT NULL COMMENT '倍数',
  `bdwEnable` tinyint(1) NOT NULL DEFAULT '0' COMMENT '识别不定位投注',
  `qzEnable` tinyint(1) NOT NULL DEFAULT '1' COMMENT '庄内庄，是否可以抢庄',
  `hmEnable` tinyint(1) NOT NULL DEFAULT '0' COMMENT '合买',
  `fpEnable` tinyint(1) NOT NULL DEFAULT '0' COMMENT '飞盘，用于快8',
  `zhuiHao` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '追号剩下期数，为0时结束追号',
  `zhuiHaoMode` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否中奖停止追号',
  `bonusProp` decimal(10,2) NOT NULL COMMENT '奖金比例，中奖以这个为据',
  `lotteryNo` varchar(32) NOT NULL DEFAULT '' COMMENT '开奖号码，没开奖的留空串',
  `kjTime` int(11) NOT NULL DEFAULT '0' COMMENT '官方开奖时间',
  `isDelete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否已经取消购买，一般在开奖之前都可以取消购买',
  `zjCount` smallint(6) NOT NULL DEFAULT '0' COMMENT '中奖注数',
  `bonus` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '中奖金额',
  `qz_uid` int(11) NOT NULL DEFAULT '0' COMMENT '抢庄人UID，没有抢庄时为0',
  `qz_time` int(11) NOT NULL DEFAULT '0' COMMENT '抢庄时间',
  `qz_username` varchar(32) NOT NULL DEFAULT '' COMMENT '抢庄人帐号，没有抢庄时为空串',
  `qz_fcoin` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '抢庄冻结资金',
  `qz_chouShui` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '抢庄抽水',
  `qz_fanDian` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '抢庄返点',
  `betType` tinyint(1) NOT NULL DEFAULT '0',
  `flag` tinyint(1) NOT NULL DEFAULT '0' COMMENT '识别盈亏',
  `bets_money` decimal(15,4) DEFAULT '0.0000' COMMENT '投注金额',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`) USING BTREE,
  KEY `type` (`type`) USING BTREE,
  KEY `actionTime` (`actionTime`) USING BTREE,
  KEY `kjTime` (`kjTime`) USING BTREE,
  KEY `idx_type_actionNo_isDelete` (`type`,`actionNo`,`isDelete`) USING BTREE,
  KEY `idx_username_time` (`username`,`actionTime`) USING BTREE,
  KEY `idx_sum_bet` (`actionNo`,`type`,`playedId`,`uid`,`isDelete`) USING BTREE,
  KEY `idx_d_n` (`kjTime`,`isDelete`,`lotteryNo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=25981167 DEFAULT CHARSET=latin1 COMMENT='投注表';

-- ----------------------------
-- Table structure for gygy_coin_ff
-- ----------------------------
DROP TABLE IF EXISTS `gygy_coin_ff`;
CREATE TABLE `gygy_coin_ff` (
  `uid` int(11) NOT NULL COMMENT 'ID',
  `username` varchar(32) NOT NULL COMMENT '用户名',
  `ssz` char(12) NOT NULL COMMENT '所属组会员/代理',
  `czje` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '管理员充值',
  `tzje` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '投注总额',
  `zjje` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '中奖总额',
  `fjje` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '返奖总额',
  `hdje` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '活动总额',
  `yyje` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '盈余总额',
  `yqdata` char(10) NOT NULL COMMENT '日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gygy_coin_log
-- ----------------------------
DROP TABLE IF EXISTS `gygy_coin_log`;
CREATE TABLE `gygy_coin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户ID',
  `type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '彩种类，对应gygy_type.id，如果与彩票无关，这采用默认值(比如充值)',
  `playedId` int(11) NOT NULL DEFAULT '0',
  `coin` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '流动资金',
  `userCoin` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '余额',
  `fcoin` decimal(15,4) NOT NULL COMMENT '流动冻结资金，消费的用负值，充值的用正',
  `liqType` tinyint(3) unsigned NOT NULL COMMENT '1充值，2返点，3提现失败从冻结资金返回，4撤单资金，5中奖派奖... ，101提现，102投注，103提现资金冻结，104开奖扣除冻结资金...',
  `actionUID` int(11) NOT NULL DEFAULT '0' COMMENT '操作用户ID',
  `actionTime` int(11) NOT NULL DEFAULT '0',
  `actionIP` int(11) NOT NULL DEFAULT '0' COMMENT '由系统生成或管理员操作的采用默认值',
  `info` varchar(1000) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '备注信息',
  `extfield0` int(11) NOT NULL DEFAULT '0',
  `extfield1` varchar(1000) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extfield2` varchar(1000) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '扩展字段2',
  `istest` tinyint(2) DEFAULT '0' COMMENT '是不是测试用户 （1是，0否）',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`) USING BTREE,
  KEY `type` (`type`) USING BTREE,
  KEY `liqType` (`liqType`) USING BTREE,
  KEY `idx_actionTime_name` (`uid`,`actionTime`) USING BTREE,
  KEY `idx_time` (`actionTime`) USING BTREE,
  KEY `idx_extfield0` (`extfield0`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=160301452 DEFAULT CHARSET=latin1 COMMENT='用户资金流动日志表';

-- ----------------------------
-- Table structure for gygy_coin_log_report
-- ----------------------------
DROP TABLE IF EXISTS `gygy_coin_log_report`;
CREATE TABLE `gygy_coin_log_report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actionTime` int(11) DEFAULT '0' COMMENT '投注时间',
  `uid` int(11) DEFAULT '0' COMMENT '用户ID',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `istest` tinyint(2) DEFAULT NULL,
  `coin` decimal(15,4) DEFAULT '0.0000' COMMENT '余额',
  `rechargeAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '充值金额',
  `cashAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '提现总额',
  `betAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '投注总额',
  `zjAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '中奖金额',
  `fanDianAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '返点金额',
  `brokerageAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '活动',
  `zyk` decimal(15,4) DEFAULT '0.0000' COMMENT '总盈亏',
  PRIMARY KEY (`id`),
  KEY `actiontime` (`actionTime`,`uid`) USING BTREE,
  KEY `idx_username_time` (`username`,`actionTime`) USING BTREE,
  KEY `idx_actiontime` (`actionTime`) USING BTREE,
  KEY `idx_zyk` (`zyk`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=253032 DEFAULT CHARSET=utf8 COMMENT='消费汇总表';

-- ----------------------------
-- Table structure for gygy_coin_log_report1
-- ----------------------------
DROP TABLE IF EXISTS `gygy_coin_log_report1`;
CREATE TABLE `gygy_coin_log_report1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actionTime` int(11) DEFAULT '0' COMMENT '投注时间',
  `uid` int(11) DEFAULT '0' COMMENT '用户ID',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `istest` tinyint(2) DEFAULT NULL,
  `coin` decimal(15,4) DEFAULT '0.0000' COMMENT '余额',
  `rechargeAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '充值金额',
  `cashAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '提现总额',
  `betAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '投注总额',
  `zjAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '中奖金额',
  `fanDianAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '返点金额',
  `brokerageAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '活动',
  `zyk` decimal(15,4) DEFAULT '0.0000' COMMENT '总盈亏',
  PRIMARY KEY (`id`),
  KEY `actiontime` (`actionTime`,`uid`) USING BTREE,
  KEY `idx_username_time` (`username`,`actionTime`) USING BTREE,
  KEY `idx_actiontime` (`actionTime`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=123803 DEFAULT CHARSET=utf8 COMMENT='消费汇总表';

-- ----------------------------
-- Table structure for gygy_coin_log_report_25
-- ----------------------------
DROP TABLE IF EXISTS `gygy_coin_log_report_25`;
CREATE TABLE `gygy_coin_log_report_25` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actionTime` int(11) DEFAULT '0' COMMENT '投注时间',
  `uid` int(11) DEFAULT '0' COMMENT '用户ID',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `istest` tinyint(2) DEFAULT NULL,
  `coin` decimal(15,4) DEFAULT '0.0000' COMMENT '余额',
  `rechargeAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '充值金额',
  `cashAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '提现总额',
  `betAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '投注总额',
  `zjAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '中奖金额',
  `fanDianAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '返点金额',
  `brokerageAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '活动',
  `zyk` decimal(15,4) DEFAULT '0.0000' COMMENT '总盈亏',
  PRIMARY KEY (`id`),
  KEY `actiontime` (`actionTime`,`uid`) USING BTREE,
  KEY `idx_username_time` (`username`,`actionTime`) USING BTREE,
  KEY `idx_actiontime` (`actionTime`) USING BTREE,
  KEY `idx_zyk` (`zyk`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=132943 DEFAULT CHARSET=utf8 COMMENT='消费汇总表';

-- ----------------------------
-- Table structure for gygy_coin_log_report_copy
-- ----------------------------
DROP TABLE IF EXISTS `gygy_coin_log_report_copy`;
CREATE TABLE `gygy_coin_log_report_copy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actionTime` int(11) DEFAULT '0' COMMENT '投注时间',
  `uid` int(11) DEFAULT '0' COMMENT '用户ID',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `istest` tinyint(2) DEFAULT NULL,
  `coin` decimal(15,4) DEFAULT '0.0000' COMMENT '余额',
  `rechargeAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '充值金额',
  `cashAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '提现总额',
  `betAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '投注总额',
  `zjAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '中奖金额',
  `fanDianAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '返点金额',
  `brokerageAmount` decimal(15,4) DEFAULT '0.0000' COMMENT '活动',
  `zyk` decimal(15,4) DEFAULT '0.0000' COMMENT '总盈亏',
  PRIMARY KEY (`id`),
  KEY `actiontime` (`actionTime`,`uid`) USING BTREE,
  KEY `idx_username_time` (`username`,`actionTime`) USING BTREE,
  KEY `idx_actiontime` (`actionTime`) USING BTREE,
  KEY `idx_zyk` (`zyk`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=132773 DEFAULT CHARSET=utf8 COMMENT='消费汇总表';

-- ----------------------------
-- Table structure for gygy_coin_log_report_hist
-- ----------------------------
DROP TABLE IF EXISTS `gygy_coin_log_report_hist`;
CREATE TABLE `gygy_coin_log_report_hist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actionTime` int(11) DEFAULT '0' COMMENT '投注时间',
  `uid` int(11) DEFAULT '0' COMMENT '用户ID',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `istest` tinyint(2) DEFAULT NULL,
  `coin` decimal(11,4) DEFAULT '0.0000' COMMENT '余额',
  `rechargeAmount` decimal(11,4) DEFAULT '0.0000' COMMENT '充值金额',
  `cashAmount` decimal(11,4) DEFAULT '0.0000' COMMENT '提现总额',
  `betAmount` decimal(11,4) DEFAULT '0.0000' COMMENT '投注总额',
  `zjAmount` decimal(11,4) DEFAULT '0.0000' COMMENT '中奖金额',
  `fanDianAmount` decimal(11,4) DEFAULT '0.0000' COMMENT '返点金额',
  `brokerageAmount` decimal(11,4) DEFAULT '0.0000' COMMENT '活动',
  `zyk` decimal(11,4) DEFAULT '0.0000' COMMENT '总盈亏',
  PRIMARY KEY (`id`),
  KEY `actiontime` (`actionTime`,`uid`),
  KEY `idx_username_time` (`username`,`actionTime`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=248410 DEFAULT CHARSET=utf8 COMMENT='消费汇总历史表';

-- ----------------------------
-- Table structure for gygy_content
-- ----------------------------
DROP TABLE IF EXISTS `gygy_content`;
CREATE TABLE `gygy_content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nodeId` int(11) NOT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `addTime` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `content` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for gygy_count
-- ----------------------------
DROP TABLE IF EXISTS `gygy_count`;
CREATE TABLE `gygy_count` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(3) unsigned NOT NULL COMMENT '彩种ID',
  `playedId` smallint(6) NOT NULL COMMENT '玩法ID',
  `date` date NOT NULL COMMENT '统计日期,一天一次',
  `betCount` int(11) NOT NULL COMMENT '投注数',
  `betAmount` float(10,2) NOT NULL COMMENT '投注金额',
  `zjAmount` float(10,2) NOT NULL COMMENT '中奖金额',
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`type`,`playedId`,`date`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2554 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for gygy_data
-- ----------------------------
DROP TABLE IF EXISTS `gygy_data`;
CREATE TABLE `gygy_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(3) unsigned NOT NULL COMMENT '时时彩种类，对应gygy_type.id',
  `time` int(11) NOT NULL COMMENT '开奖时间',
  `number` varchar(32) NOT NULL COMMENT '期号(场次)',
  `data` varchar(80) CHARACTER SET utf8 NOT NULL COMMENT '开奖号码，半角逗号分开',
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`type`,`number`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=18991560 DEFAULT CHARSET=latin1 COMMENT='开奖数据';

-- ----------------------------
-- Table structure for gygy_data_time
-- ----------------------------
DROP TABLE IF EXISTS `gygy_data_time`;
CREATE TABLE `gygy_data_time` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) NOT NULL COMMENT '投注种类，对应gygy_type.id',
  `actionNo` int(4) unsigned NOT NULL COMMENT '开奖期号(当天)',
  `actionTime` time NOT NULL COMMENT '开奖时间',
  `stopTime` time NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type` (`type`) USING BTREE,
  KEY `idx_type_actionNo` (`type`,`actionNo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=433236 DEFAULT CHARSET=utf8 COMMENT='开奖时间对照表';

-- ----------------------------
-- Table structure for gygy_gongzi
-- ----------------------------
DROP TABLE IF EXISTS `gygy_gongzi`;
CREATE TABLE `gygy_gongzi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `uid` int(11) NOT NULL,
  `zhouqi` varchar(255) NOT NULL COMMENT '所属周期',
  `biaozhun` int(11) NOT NULL COMMENT '工资标准',
  `zx_biaozhun` int(11) DEFAULT '0' COMMENT '执行标准',
  `touzhu_ren` int(11) DEFAULT '0' COMMENT '投注总人数',
  `touzhu_ze` decimal(14,2) DEFAULT '0.00' COMMENT '投注总额',
  `yx_touzhu_ren` int(11) DEFAULT '0' COMMENT '有效投注人数',
  `d500` int(11) DEFAULT '0' COMMENT '大于500人数',
  `zonger` decimal(14,2) DEFAULT '0.00' COMMENT '工资总额',
  `yxtze` decimal(14,2) DEFAULT '0.00' COMMENT '有效投注总额',
  `zt` tinyint(4) DEFAULT '1' COMMENT '状态 1-未达标 2-未领取 3-已领取',
  `tz_at` int(11) DEFAULT NULL COMMENT '统计时间',
  `lq_at` int(11) DEFAULT NULL COMMENT '领取时间',
  PRIMARY KEY (`id`),
  KEY `idx` (`uid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=86102 DEFAULT CHARSET=utf8 COMMENT='日工资记录表';

-- ----------------------------
-- Table structure for gygy_links
-- ----------------------------
DROP TABLE IF EXISTS `gygy_links`;
CREATE TABLE `gygy_links` (
  `lid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `uid` int(11) DEFAULT NULL COMMENT '??????',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否代理：0会员，1代理',
  `regIP` int(11) NOT NULL,
  `regTime` int(11) NOT NULL,
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `fanDian` float(3,1) NOT NULL DEFAULT '0.0' COMMENT '用户设置的返点数',
  `fanDianBdw` float(3,1) NOT NULL DEFAULT '0.0' COMMENT '不定位返点',
  PRIMARY KEY (`lid`),
  KEY `parentId` (`uid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=718 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for gygy_member_bank
-- ----------------------------
DROP TABLE IF EXISTS `gygy_member_bank`;
CREATE TABLE `gygy_member_bank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '非普通用户信息',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `bankId` int(11) NOT NULL,
  `username` varchar(16) CHARACTER SET utf8 NOT NULL,
  `account` varchar(64) NOT NULL,
  `rechargeDemo` varchar(255) NOT NULL DEFAULT '' COMMENT '充值演示图片',
  `editEnable` tinyint(1) NOT NULL DEFAULT '0',
  `actionTime` int(11) DEFAULT NULL,
  `bankDetail` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15310 DEFAULT CHARSET=latin1 COMMENT='用户银行帐户信息';

-- ----------------------------
-- Table structure for gygy_member_cash
-- ----------------------------
DROP TABLE IF EXISTS `gygy_member_cash`;
CREATE TABLE `gygy_member_cash` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户ID',
  `actionTime` int(11) NOT NULL COMMENT '申请时间',
  `amount` decimal(15,2) NOT NULL COMMENT '提现金额',
  `bankId` int(11) NOT NULL COMMENT '银行ID',
  `memberBankId` int(11) NOT NULL COMMENT '提现用户银行卡id',
  `account` varchar(64) NOT NULL COMMENT '银行帐号',
  `username` varchar(16) CHARACTER SET utf8 NOT NULL COMMENT '银行开户名',
  `state` tinyint(4) NOT NULL DEFAULT '1' COMMENT '提现状态：1用户申请，2已取消，3已支付，4提现失败，0确认到帐, 5后台删除',
  `isDelete` tinyint(1) NOT NULL DEFAULT '0',
  `info` varchar(64) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '备注字段',
  `flag` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32955 DEFAULT CHARSET=latin1 COMMENT='用户提现表';

-- ----------------------------
-- Table structure for gygy_member_cash_split
-- ----------------------------
DROP TABLE IF EXISTS `gygy_member_cash_split`;
CREATE TABLE `gygy_member_cash_split` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cashId` int(11) NOT NULL COMMENT '提现申请记录id',
  `uid` int(11) NOT NULL COMMENT '用户ID',
  `actionTime` int(11) NOT NULL COMMENT '申请时间',
  `splitAmount` decimal(15,2) NOT NULL COMMENT '提现分账金额',
  `bankId` int(11) NOT NULL COMMENT '银行ID',
  `account` varchar(64) NOT NULL COMMENT '银行帐号',
  `username` varchar(16) CHARACTER SET utf8 NOT NULL COMMENT '银行开户名',
  `state` tinyint(4) NOT NULL DEFAULT '1' COMMENT '提现分账处理状态：1待处理，2已处理',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2251 DEFAULT CHARSET=latin1 COMMENT='用户提现分账表';

-- ----------------------------
-- Table structure for gygy_member_level
-- ----------------------------
DROP TABLE IF EXISTS `gygy_member_level`;
CREATE TABLE `gygy_member_level` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `level` tinyint(3) unsigned NOT NULL,
  `levelName` varchar(8) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `minScore` int(10) unsigned NOT NULL,
  `maxToCashCount` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='用户等级设置';

-- ----------------------------
-- Table structure for gygy_member_recharge
-- ----------------------------
DROP TABLE IF EXISTS `gygy_member_recharge`;
CREATE TABLE `gygy_member_recharge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `rechargeId` varchar(36) NOT NULL,
  `username` varchar(64) NOT NULL,
  `amount` decimal(15,2) NOT NULL COMMENT '充值资金',
  `rechargeAmount` decimal(15,2) NOT NULL DEFAULT '0.00',
  `coin` decimal(15,2) NOT NULL DEFAULT '0.00' COMMENT '充值前用户资金',
  `fcoin` decimal(15,2) NOT NULL DEFAULT '0.00' COMMENT '充值前用户冻结资金',
  `actionUid` int(11) DEFAULT NULL COMMENT '操作用户ID',
  `mBankId` tinyint(4) DEFAULT NULL,
  `actionIP` varchar(255) DEFAULT NULL,
  `actionTime` int(11) NOT NULL,
  `rechargeTime` int(11) NOT NULL DEFAULT '0' COMMENT '到帐时间',
  `state` tinyint(1) NOT NULL DEFAULT '0' COMMENT '充值订单状态：0申请，1成功到账',
  `isDelete` tinyint(1) DEFAULT '0',
  `info` varchar(64) CHARACTER SET utf8 DEFAULT '',
  `flag` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `rechargeId_idx` (`rechargeId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=119933 DEFAULT CHARSET=latin1 COMMENT='充值表';

-- ----------------------------
-- Table structure for gygy_member_session
-- ----------------------------
DROP TABLE IF EXISTS `gygy_member_session`;
CREATE TABLE `gygy_member_session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `session_key` varchar(64) DEFAULT NULL,
  `loginTime` int(11) NOT NULL,
  `accessTime` int(11) NOT NULL DEFAULT '0' COMMENT '最后访问时间',
  `isOnLine` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否在线，判断是否在线除判断这个值外，还应该判断最后访问时间',
  `loginIP` varchar(64) CHARACTER SET utf8 NOT NULL,
  `browser` varchar(32) NOT NULL DEFAULT '' COMMENT '浏览器类型',
  `os` varchar(32) NOT NULL DEFAULT '' COMMENT '操作系统类型',
  `isMobileDevices` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否移动设备',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`,`loginTime`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=747363 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for gygy_members
-- ----------------------------
DROP TABLE IF EXISTS `gygy_members`;
CREATE TABLE `gygy_members` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `isDelete` tinyint(1) NOT NULL DEFAULT '0',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `parentId` int(11) DEFAULT NULL COMMENT '会员从属关系',
  `parents` varchar(255) NOT NULL COMMENT '上级系列',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `username` varchar(32) NOT NULL,
  `password` char(32) NOT NULL,
  `coinPassword` char(32) NOT NULL DEFAULT '',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否代理：0会员，1代理',
  `subCount` int(11) NOT NULL DEFAULT '0' COMMENT '人数配额',
  `sex` enum('男','女','保密') CHARACTER SET utf8 NOT NULL DEFAULT '保密',
  `nickname` varchar(32) CHARACTER SET gbk NOT NULL DEFAULT '会员昵称',
  `name` varchar(16) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '用户真实姓名',
  `regIP` varchar(64) DEFAULT NULL,
  `regTime` int(11) NOT NULL,
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `province` varchar(16) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `city` varchar(16) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `address` varchar(64) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `qq` varchar(32) NOT NULL DEFAULT '',
  `msn` varchar(32) NOT NULL DEFAULT '',
  `mobile` varchar(32) NOT NULL DEFAULT '',
  `email` varchar(32) NOT NULL DEFAULT '',
  `idCard` varchar(18) NOT NULL DEFAULT '' COMMENT '身份证号码',
  `grade` tinyint(4) NOT NULL DEFAULT '1' COMMENT '等级',
  `score` int(12) NOT NULL DEFAULT '0' COMMENT '积分',
  `scoreTotal` int(12) NOT NULL DEFAULT '0' COMMENT '累计积分',
  `coin` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '个人财产',
  `fcoin` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '冻结资产',
  `fanDian` float(3,1) NOT NULL DEFAULT '0.0' COMMENT '用户设置的返点数',
  `fanDianBdw` float(3,1) NOT NULL DEFAULT '0.0' COMMENT '不定位返点',
  `safepwd` varchar(32) CHARACTER SET gbk NOT NULL DEFAULT '' COMMENT '问候语',
  `safeEmail` varchar(64) NOT NULL DEFAULT '' COMMENT '密保邮箱，与邮箱分开',
  `sb` int(1) NOT NULL DEFAULT '0',
  `regPath` varchar(255) DEFAULT NULL COMMENT '注册来源',
  `is_test` tinyint(4) DEFAULT '0' COMMENT '标识模拟账户，1是模拟，0不是模拟，-1内部测试',
  `is_sleep` int(11) DEFAULT '0' COMMENT '是否停止投注。0-允许，1-静止',
  `ri_gong_zi` int(11) DEFAULT '0' COMMENT '日工资',
  `rgz_at` int(11) DEFAULT NULL COMMENT '日工资设置时间',
  PRIMARY KEY (`uid`,`fanDian`),
  UNIQUE KEY `username` (`username`) USING BTREE,
  KEY `parentId` (`parentId`) USING BTREE,
  KEY `idx_parents` (`parents`) USING BTREE,
  KEY `isDelete` (`isDelete`,`parents`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16198 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for gygy_members_copy
-- ----------------------------
DROP TABLE IF EXISTS `gygy_members_copy`;
CREATE TABLE `gygy_members_copy` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `isDelete` tinyint(1) NOT NULL DEFAULT '0',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `parentId` int(11) DEFAULT NULL COMMENT '会员从属关系',
  `parents` varchar(255) NOT NULL COMMENT '上级系列',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `username` varchar(32) NOT NULL,
  `password` char(32) NOT NULL,
  `coinPassword` char(32) NOT NULL DEFAULT '',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否代理：0会员，1代理',
  `subCount` int(11) NOT NULL DEFAULT '0' COMMENT '人数配额',
  `sex` enum('男','女','保密') CHARACTER SET utf8 NOT NULL DEFAULT '保密',
  `nickname` varchar(32) CHARACTER SET gbk NOT NULL DEFAULT '会员昵称',
  `name` varchar(16) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '用户真实姓名',
  `regIP` varchar(64) DEFAULT NULL,
  `regTime` int(11) NOT NULL,
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `province` varchar(16) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `city` varchar(16) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `address` varchar(64) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `qq` varchar(32) NOT NULL DEFAULT '',
  `msn` varchar(32) NOT NULL DEFAULT '',
  `mobile` varchar(32) NOT NULL DEFAULT '',
  `email` varchar(32) NOT NULL DEFAULT '',
  `idCard` varchar(18) NOT NULL DEFAULT '' COMMENT '身份证号码',
  `grade` tinyint(4) NOT NULL DEFAULT '1' COMMENT '等级',
  `score` int(12) NOT NULL DEFAULT '0' COMMENT '积分',
  `scoreTotal` int(12) NOT NULL DEFAULT '0' COMMENT '累计积分',
  `coin` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '个人财产',
  `fcoin` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '冻结资产',
  `fanDian` float(3,1) NOT NULL DEFAULT '0.0' COMMENT '用户设置的返点数',
  `fanDianBdw` float(3,1) NOT NULL DEFAULT '0.0' COMMENT '不定位返点',
  `safepwd` varchar(32) CHARACTER SET gbk NOT NULL DEFAULT '' COMMENT '问候语',
  `safeEmail` varchar(64) NOT NULL DEFAULT '' COMMENT '密保邮箱，与邮箱分开',
  `sb` int(1) NOT NULL DEFAULT '0',
  `regPath` varchar(255) DEFAULT NULL COMMENT '注册来源',
  `is_test` tinyint(4) DEFAULT '0' COMMENT '标识模拟账户，1是模拟，0不是模拟，-1内部测试',
  `is_sleep` int(11) DEFAULT '0' COMMENT '是否停止投注。0-允许，1-静止',
  `ri_gong_zi` int(11) DEFAULT '0' COMMENT '日工资',
  `rgz_at` int(11) DEFAULT NULL COMMENT '日工资设置时间',
  PRIMARY KEY (`uid`,`fanDian`),
  UNIQUE KEY `username` (`username`) USING BTREE,
  KEY `parentId` (`parentId`) USING BTREE,
  KEY `idx_parents` (`parents`) USING BTREE,
  KEY `isDelete` (`isDelete`,`parents`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13874 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for gygy_menu
-- ----------------------------
DROP TABLE IF EXISTS `gygy_menu`;
CREATE TABLE `gygy_menu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文档ID',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '标题',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级分类ID',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '排序（同级有效）',
  `url` char(255) NOT NULL DEFAULT '' COMMENT '链接地址',
  `hide` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否隐藏',
  `tip` varchar(255) NOT NULL DEFAULT '' COMMENT '提示',
  `group` varchar(50) DEFAULT '' COMMENT '分组',
  `is_dev` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否仅开发者模式可见',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gygy_params
-- ----------------------------
DROP TABLE IF EXISTS `gygy_params`;
CREATE TABLE `gygy_params` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `value` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=177 DEFAULT CHARSET=latin1 COMMENT='系统配置表';

-- ----------------------------
-- Table structure for gygy_params_fandianset
-- ----------------------------
DROP TABLE IF EXISTS `gygy_params_fandianset`;
CREATE TABLE `gygy_params_fandianset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userCount` smallint(6) NOT NULL DEFAULT '0',
  `fanDian` float(5,1) NOT NULL,
  `bFanDian` float(5,1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for gygy_paybusiness
-- ----------------------------
DROP TABLE IF EXISTS `gygy_paybusiness`;
CREATE TABLE `gygy_paybusiness` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `business_id` varchar(100) DEFAULT NULL COMMENT '商家ID',
  `business_name` varchar(50) DEFAULT NULL COMMENT '商家名称',
  `business_key` varchar(255) DEFAULT NULL COMMENT '秘钥',
  `tj_url` varchar(255) DEFAULT NULL COMMENT '提交地址',
  `enable` int(11) DEFAULT '0' COMMENT '是否显示：0，显示；1，不显示',
  `business_alias` varchar(32) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8 COMMENT='支付商家';

-- ----------------------------
-- Table structure for gygy_payentry
-- ----------------------------
DROP TABLE IF EXISTS `gygy_payentry`;
CREATE TABLE `gygy_payentry` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `paybusiness_id` varchar(100) DEFAULT NULL COMMENT '商家ID',
  `entry_name` varchar(100) DEFAULT NULL COMMENT '通道名字',
  `entry_code` varchar(100) DEFAULT NULL COMMENT '通道编码',
  `enable` int(11) DEFAULT '0' COMMENT '是否显示：0，显示；1，不显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='支付通道';

-- ----------------------------
-- Table structure for gygy_played
-- ----------------------------
DROP TABLE IF EXISTS `gygy_played`;
CREATE TABLE `gygy_played` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) CHARACTER SET utf8 NOT NULL COMMENT '玩法名称',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `type` tinyint(4) NOT NULL COMMENT '彩票种类，参见ssc_type.type',
  `bonusProp` decimal(14,2) NOT NULL DEFAULT '0.00' COMMENT '赔率',
  `bonusPropBase` decimal(14,2) NOT NULL DEFAULT '0.00' COMMENT '最低赔率',
  `guo_prop` decimal(14,2) NOT NULL DEFAULT '0.00' COMMENT '国彩最高赔率',
  `guo_prop_base` decimal(14,2) NOT NULL DEFAULT '0.00' COMMENT '国彩最低赔率',
  `selectNum` tinyint(4) NOT NULL COMMENT '每注选几个号码',
  `groupId` smallint(6) NOT NULL COMMENT '玩法组',
  `simpleInfo` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '玩法简单说明',
  `info` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '玩法说明',
  `example` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '中奖举例',
  `ruleFun` varchar(32) NOT NULL DEFAULT '' COMMENT '中奖规则函数',
  `betCountFun` varchar(20) NOT NULL DEFAULT '',
  `zjMax` varchar(64) NOT NULL DEFAULT '' COMMENT '最大中奖号码计算函数',
  `playedTpl` varchar(255) NOT NULL DEFAULT '' COMMENT '玩法页面模板',
  `android` tinyint(1) NOT NULL DEFAULT '0',
  `sort` int(4) NOT NULL DEFAULT '0',
  `maxCount` int(11) NOT NULL DEFAULT '0' COMMENT '最大注数',
  `is_official_open` tinyint(1) NOT NULL DEFAULT '1' COMMENT '官彩是否开启玩法：0 未开启，1 开启',
  `gmaxCount` int(11) NOT NULL DEFAULT '0' COMMENT '官彩最大注数',
  `wcount` int(11) DEFAULT '0' COMMENT '万位注数',
  `qcount` int(11) DEFAULT '0' COMMENT '千位注数',
  `bcount` int(11) DEFAULT '0' COMMENT '百位注数',
  `scount` int(11) DEFAULT '0' COMMENT '十位注数',
  `gcount` int(11) DEFAULT '0' COMMENT '个位注数',
  `dy` int(11) DEFAULT '0' COMMENT '第一',
  `de` int(11) DEFAULT '0' COMMENT '第二',
  `ds` int(11) DEFAULT '0' COMMENT '第三',
  `dx` int(11) DEFAULT '0' COMMENT '第四',
  `dw` int(11) DEFAULT '0' COMMENT '第五',
  `dl` int(11) DEFAULT '0' COMMENT '第六',
  `dq` int(11) DEFAULT '0' COMMENT '第七',
  `db` int(11) DEFAULT '0' COMMENT '第八',
  `dj` int(11) DEFAULT '0' COMMENT '第九',
  `dsh` int(11) DEFAULT '0' COMMENT '第十',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=latin1 COMMENT='玩法表';

-- ----------------------------
-- Table structure for gygy_played_group
-- ----------------------------
DROP TABLE IF EXISTS `gygy_played_group`;
CREATE TABLE `gygy_played_group` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `type` tinyint(4) NOT NULL COMMENT 'gygy_type.type',
  `groupName` varchar(32) CHARACTER SET utf8 NOT NULL,
  `sort` int(4) NOT NULL,
  `bdwEnable` tinyint(1) NOT NULL DEFAULT '0',
  `android` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1 COMMENT='玩法组表';

-- ----------------------------
-- Table structure for gygy_rebackinfo
-- ----------------------------
DROP TABLE IF EXISTS `gygy_rebackinfo`;
CREATE TABLE `gygy_rebackinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `req_data` text COMMENT '请求数据',
  `req_date` int(11) DEFAULT NULL COMMENT '请求时间',
  `host` varchar(255) DEFAULT NULL COMMENT '请求域名',
  `orderid` varchar(255) DEFAULT NULL COMMENT '订单ID',
  `form` varchar(255) DEFAULT NULL COMMENT '来自哪个通道',
  `status` int(11) DEFAULT '0' COMMENT '处理状态，0-成功，1-失败',
  `note` text COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45837 DEFAULT CHARSET=utf8 COMMENT='支付回调请求数据';

-- ----------------------------
-- Table structure for gygy_score_goods
-- ----------------------------
DROP TABLE IF EXISTS `gygy_score_goods`;
CREATE TABLE `gygy_score_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '标题',
  `content` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '描述',
  `picmin` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '小图片',
  `picmax` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '大图片',
  `intoTime` int(11) NOT NULL COMMENT '加入时间',
  `restriction` int(11) NOT NULL DEFAULT '0' COMMENT '限制单人兑换件数',
  `sum` int(11) NOT NULL DEFAULT '0' COMMENT '商品总数',
  `surplus` int(11) NOT NULL COMMENT '剩余件数',
  `persons` int(11) NOT NULL DEFAULT '0' COMMENT '参与人数',
  `startTime` int(11) NOT NULL COMMENT '开始时间',
  `stopTime` int(11) NOT NULL DEFAULT '0' COMMENT '结束时间',
  `score` int(11) NOT NULL COMMENT '积分',
  `price` int(11) NOT NULL COMMENT '价值',
  `enable` tinyint(1) NOT NULL DEFAULT '1' COMMENT '开关状态：0关闭，1开启',
  `isdelete` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COMMENT='兑换商品表';

-- ----------------------------
-- Table structure for gygy_score_swap
-- ----------------------------
DROP TABLE IF EXISTS `gygy_score_swap`;
CREATE TABLE `gygy_score_swap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `goodId` int(11) NOT NULL,
  `state` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态：1待发货，2已发货，3已取消，0已收货',
  `swapTime` int(11) NOT NULL,
  `swapIp` int(11) NOT NULL,
  `number` tinyint(4) NOT NULL DEFAULT '1' COMMENT '兑换件数',
  `score` int(11) NOT NULL COMMENT '兑换积分',
  `mobile` varchar(16) NOT NULL COMMENT '联系电话',
  `address` varchar(128) CHARACTER SET utf8 NOT NULL COMMENT '邮寄地址',
  `enable` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否非取消的订单',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COMMENT='积分兑换表';

-- ----------------------------
-- Table structure for gygy_txffc_data
-- ----------------------------
DROP TABLE IF EXISTS `gygy_txffc_data`;
CREATE TABLE `gygy_txffc_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `time` int(11) NOT NULL COMMENT '开奖时间',
  `number` varchar(32) NOT NULL COMMENT '期号(场次)',
  `data` varchar(32) NOT NULL COMMENT '开奖号',
  `total` varchar(32) NOT NULL COMMENT '总在线人数',
  `cj_at` varchar(32) DEFAULT NULL COMMENT '采集时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_number` (`number`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=52645 DEFAULT CHARSET=utf8 COMMENT='腾讯分分彩开奖';

-- ----------------------------
-- Table structure for gygy_type
-- ----------------------------
DROP TABLE IF EXISTS `gygy_type`;
CREATE TABLE `gygy_type` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL COMMENT '1时时彩，2十一选五，33D/P3/时时乐，4快乐十分，5广西快乐十分',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `isDelete` tinyint(1) NOT NULL DEFAULT '0',
  `sort` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(32) NOT NULL,
  `codeList` varchar(125) NOT NULL DEFAULT '0,1,2,3,4,5,6,7,8,9' COMMENT '彩票可选号码列表，用半角逗号分隔',
  `title` varchar(64) CHARACTER SET utf8 NOT NULL,
  `shortName` varchar(8) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `info` varchar(255) CHARACTER SET utf8 NOT NULL,
  `onGetNoed` varchar(64) NOT NULL DEFAULT '' COMMENT '请求当前期号时后置事件函数',
  `data_ftime` int(4) unsigned NOT NULL DEFAULT '30' COMMENT '开奖前停止下注时间',
  `defaultViewGroup` smallint(6) NOT NULL DEFAULT '0' COMMENT '默认显示哪个玩法组',
  `android` tinyint(1) NOT NULL DEFAULT '0',
  `is_official` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是官彩',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1 COMMENT='时时彩彩种';

-- ----------------------------
-- Table structure for gygy_type_bak
-- ----------------------------
DROP TABLE IF EXISTS `gygy_type_bak`;
CREATE TABLE `gygy_type_bak` (
  `id` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL COMMENT '1时时彩，2十一选五，33D/P3/时时乐，4快乐十分，5广西快乐十分',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `isDelete` tinyint(1) NOT NULL DEFAULT '0',
  `sort` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(32) CHARACTER SET latin1 NOT NULL,
  `codeList` varchar(125) CHARACTER SET latin1 NOT NULL DEFAULT '0,1,2,3,4,5,6,7,8,9' COMMENT '彩票可选号码列表，用半角逗号分隔',
  `title` varchar(64) NOT NULL,
  `shortName` varchar(8) NOT NULL DEFAULT '',
  `info` varchar(255) NOT NULL,
  `onGetNoed` varchar(64) CHARACTER SET latin1 NOT NULL DEFAULT '' COMMENT '请求当前期号时后置事件函数',
  `data_ftime` int(4) unsigned NOT NULL DEFAULT '30' COMMENT '开奖前停止下注时间',
  `defaultViewGroup` smallint(6) NOT NULL DEFAULT '0' COMMENT '默认显示哪个玩法组',
  `android` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for my18_cz_temp
-- ----------------------------
DROP TABLE IF EXISTS `my18_cz_temp`;
CREATE TABLE `my18_cz_temp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `O_id` varchar(50) DEFAULT NULL,
  `userid` int(11) NOT NULL COMMENT '用户id',
  `H_fee` decimal(11,2) NOT NULL DEFAULT '0.00',
  `username` varchar(30) NOT NULL COMMENT '用户名',
  `dkkh` varchar(30) NOT NULL COMMENT '打款帐号',
  `dkrm` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '打款帐号户名',
  `dkje1` decimal(11,2) NOT NULL COMMENT '需要打款的金额',
  `dkje` decimal(11,2) NOT NULL COMMENT '申请打款金额',
  `state` int(1) NOT NULL COMMENT '充值状态:0未充值;1已充值',
  `sj` datetime NOT NULL COMMENT '提交申请时间',
  `dksj` datetime DEFAULT NULL COMMENT '打款时间',
  `sjm` varchar(4) DEFAULT NULL COMMENT '随机码',
  `xingwei` varchar(50) DEFAULT '',
  `dkind` varchar(50) DEFAULT '',
  `huikuanren` varchar(50) DEFAULT '',
  `ptype` varchar(30) NOT NULL COMMENT '打款方式',
  PRIMARY KEY (`id`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Table structure for my18_pay
-- ----------------------------
DROP TABLE IF EXISTS `my18_pay`;
CREATE TABLE `my18_pay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `o_id` varchar(64) NOT NULL,
  `addmoney` float(10,2) NOT NULL COMMENT '金额',
  `o_time` datetime NOT NULL COMMENT '打款时间',
  `u_id` bigint(20) NOT NULL COMMENT '充值订单',
  `m_name` varchar(64) CHARACTER SET utf8 NOT NULL COMMENT '打开人姓名',
  `h_fee` float(10,2) NOT NULL COMMENT '手续费',
  `p_type` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '充值方式',
  `memo` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '备注提示名',
  `huikuanren` varchar(64) CHARACTER SET utf8 NOT NULL COMMENT '工行汇款人',
  `state` tinyint(1) NOT NULL DEFAULT '0',
  `user_id` int(10) NOT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`),
  KEY `state` (`state`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for my18_pay_temp
-- ----------------------------
DROP TABLE IF EXISTS `my18_pay_temp`;
CREATE TABLE `my18_pay_temp` (
  `o_time` varchar(20) DEFAULT '',
  `dkind` varchar(50) DEFAULT '',
  `O_id` varchar(50) NOT NULL DEFAULT '',
  `xingwei` varchar(50) DEFAULT '',
  `M_name` varchar(50) DEFAULT '',
  `U_id` varchar(20) DEFAULT '',
  `addmoney` decimal(11,2) NOT NULL DEFAULT '0.00',
  `zhuangtai` varchar(20) DEFAULT '',
  `H_fee` decimal(11,2) NOT NULL DEFAULT '0.00',
  `U_name` varchar(30) DEFAULT '',
  `p_money` decimal(11,2) NOT NULL DEFAULT '0.00',
  `a_money` decimal(11,2) NOT NULL DEFAULT '0.00',
  `b_money` decimal(11,2) NOT NULL DEFAULT '0.00',
  `Memo` varchar(50) DEFAULT '',
  `huikuanren` varchar(50) DEFAULT '',
  `p_type` varchar(20) DEFAULT '',
  PRIMARY KEY (`O_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Table structure for nitalk_chat
-- ----------------------------
DROP TABLE IF EXISTS `nitalk_chat`;
CREATE TABLE `nitalk_chat` (
  `cid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `key` char(16) NOT NULL DEFAULT '',
  `fromuid` int(11) unsigned NOT NULL DEFAULT '0',
  `fromusername` varchar(16) NOT NULL DEFAULT '',
  `touid` int(11) unsigned NOT NULL DEFAULT '0',
  `type` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `sendtime` int(10) unsigned NOT NULL DEFAULT '0',
  `sendday` char(8) NOT NULL DEFAULT '',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `msg` text,
  PRIMARY KEY (`cid`),
  KEY `get_new_msg` (`touid`,`status`) USING BTREE,
  KEY `history` (`key`,`sendday`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for nitalk_session
-- ----------------------------
DROP TABLE IF EXISTS `nitalk_session`;
CREATE TABLE `nitalk_session` (
  `uid` int(11) unsigned NOT NULL DEFAULT '0',
  `sessid` varchar(255) NOT NULL DEFAULT '',
  `active` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sheet1
-- ----------------------------
DROP TABLE IF EXISTS `sheet1`;
CREATE TABLE `sheet1` (
  `uid` varchar(255) DEFAULT NULL,
  `isDelete` varchar(255) DEFAULT NULL,
  `enable` varchar(255) DEFAULT NULL,
  `parentId` varchar(255) DEFAULT NULL,
  `parents` varchar(255) DEFAULT NULL,
  `admin` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `coinPassword` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `subCount` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `regIP` varchar(255) DEFAULT NULL,
  `regTime` varchar(255) DEFAULT NULL,
  `updateTime` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `msn` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `idCard` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  `scoreTotal` varchar(255) DEFAULT NULL,
  `coin` varchar(255) DEFAULT NULL,
  `fcoin` varchar(255) DEFAULT NULL,
  `fanDian` varchar(255) DEFAULT NULL,
  `fanDianBdw` varchar(255) DEFAULT NULL,
  `safepwd` varchar(255) DEFAULT NULL,
  `safeEmail` varchar(255) DEFAULT NULL,
  `sb` varchar(255) DEFAULT NULL,
  `regPath` varchar(255) DEFAULT NULL,
  `is_test` varchar(255) DEFAULT NULL,
  `is_sleep` varchar(255) DEFAULT NULL,
  `ri_gong_zi` varchar(255) DEFAULT NULL,
  `rgz_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for wanjinim_blocklists
-- ----------------------------
DROP TABLE IF EXISTS `wanjinim_blocklists`;
CREATE TABLE `wanjinim_blocklists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `buddy` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`,`buddy`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for wanjinim_buddylists
-- ----------------------------
DROP TABLE IF EXISTS `wanjinim_buddylists`;
CREATE TABLE `wanjinim_buddylists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `buddy` varchar(100) NOT NULL,
  `group` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`,`group`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for wanjinim_chats
-- ----------------------------
DROP TABLE IF EXISTS `wanjinim_chats`;
CREATE TABLE `wanjinim_chats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` text NOT NULL,
  `room` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='开奖数据';

-- ----------------------------
-- Table structure for wanjinim_messages
-- ----------------------------
DROP TABLE IF EXISTS `wanjinim_messages`;
CREATE TABLE `wanjinim_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL,
  `recipient` varchar(50) NOT NULL,
  `sender` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `stamp` int(11) NOT NULL,
  `flag` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否查看',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5602 DEFAULT CHARSET=utf8 COMMENT='开奖数据';

-- ----------------------------
-- Table structure for wanjinim_users
-- ----------------------------
DROP TABLE IF EXISTS `wanjinim_users`;
CREATE TABLE `wanjinim_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(125) NOT NULL,
  `is_online` int(11) NOT NULL DEFAULT '0',
  `last_ping` text NOT NULL,
  `last_ip` varchar(15) NOT NULL,
  `banned` tinyint(1) NOT NULL DEFAULT '0',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`username`,`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COMMENT='开奖数据';

-- ----------------------------
-- View structure for gygy_fcoin_bet
-- ----------------------------
DROP VIEW IF EXISTS `gygy_fcoin_bet`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `gygy_fcoin_bet` AS select `b`.`id` AS `betId`,`b`.`type` AS `type`,`b`.`playedId` AS `playedId`,`b`.`uid` AS `uid`,`b`.`username` AS `username`,`b`.`actionNo` AS `actionNo`,`b`.`actionTime` AS `actionTime`,`l`.`info` AS `info`,`l`.`liqType` AS `liqType`,`l`.`fcoin` AS `fcoin` from (`gygy_coin_log` `l` join `gygy_bets` `b`) where ((`b`.`id` = `l`.`extfield0`) and (`b`.`isDelete` = 0) and (`b`.`lotteryNo` = '') and (`l`.`liqType` between 101 and 102));

-- ----------------------------
-- View structure for gygy_fcoin_cash
-- ----------------------------
DROP VIEW IF EXISTS `gygy_fcoin_cash`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `gygy_fcoin_cash` AS select `r`.`id` AS `rid`,`l`.`uid` AS `uid`,`r`.`actionTime` AS `actionTime`,`l`.`info` AS `info`,`l`.`liqType` AS `liqType`,`l`.`fcoin` AS `fcoin` from (`gygy_member_cash` `r` join `gygy_coin_log` `l`) where ((`l`.`extfield0` = `r`.`id`) and (`r`.`state` = 1) and (`r`.`isDelete` = 0) and (`l`.`liqType` = 106));

-- ----------------------------
-- View structure for gygy_fcoin_znz
-- ----------------------------
DROP VIEW IF EXISTS `gygy_fcoin_znz`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `gygy_fcoin_znz` AS select `b`.`id` AS `betId`,`b`.`type` AS `type`,`b`.`playedId` AS `playedId`,`b`.`qz_uid` AS `qz_uid`,`b`.`qz_username` AS `qz_username`,`b`.`actionNo` AS `actionNo`,`b`.`qz_time` AS `qz_Time`,`l`.`info` AS `info`,`l`.`liqType` AS `liqType`,`l`.`fcoin` AS `fcoin` from (`gygy_coin_log` `l` join `gygy_bets` `b`) where ((`b`.`id` = `l`.`extfield0`) and (`b`.`isDelete` = 0) and (`b`.`lotteryNo` = '') and (`l`.`liqType` = 100));

-- ----------------------------
-- Procedure structure for addScore
-- ----------------------------
DROP PROCEDURE IF EXISTS `addScore`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addScore`(_uid int, _amount float)
begin

	declare bonus float;
	select `value` into bonus from gygy_params where name='scoreProp' limit 1;

	set bonus=bonus*_amount;

	if bonus then
		update gygy_members u, gygy_params p set u.score = u.score+bonus, u.scoreTotal=u.scoreTotal+bonus where u.`uid`=_uid;
	end if;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for cancelBet
-- ----------------------------
DROP PROCEDURE IF EXISTS `cancelBet`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cancelBet`(_zhuiHao varchar(255))
begin

	declare amount float;
	declare _uid int;
	declare _id int;
	declare _type int;

	declare info varchar(255) character set utf8;
	declare liqType int default 5;

	declare done int default 0;
	declare cur cursor for
	select id, `mode` * beiShu * actionNum * (fpEnable+1), `uid`, `type` from gygy_bets where serializeId=_zhuiHao and lotteryNo='' and isDelete=0;
	declare continue HANDLER for not found set done=1;

	open cur;
		repeat
			fetch cur into _id, amount, _uid, _type;
			if not done then
				update gygy_bets set isDelete=1 where id=_id;
				set info='追号撤单';
				call setCoin(amount, 0, _uid, liqType, _type, info, _id, '', '');
			end if;
		until done end repeat;
	close cur;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for clean_GameTime
-- ----------------------------
DROP PROCEDURE IF EXISTS `clean_GameTime`;
delimiter ;;
CREATE DEFINER=`root`@`192.168.21.12` PROCEDURE `clean_GameTime`()
BEGIN

DECLARE type INT;


DECLARE cnt INT;


DECLARE idx INT;

SELECT
	count(*) INTO cnt
FROM
	gygy_type;


SET idx = 0;


WHILE (idx < cnt) DO
SELECT id INTO type FROM gygy_type LIMIT idx,1;
	UPDATE gygy_data_time a,
	(
		SELECT
			count(*) AS tcnt
		FROM
			gygy_data_time
		WHERE
			type = type
		AND actionTime BETWEEN '05:00:00'
		AND '06:59:59'
	) b
SET a.actionNo = a.actionNo - b.tcnt
WHERE
	a.actionTime >= '07:00:00'
AND a.type = type
AND a.actionNo > b.tcnt;

DELETE
FROM
	gygy_data_time
WHERE
	type = type
AND actionTime BETWEEN '05:00:00'
AND '06:59:59';

SET idx = idx +1;
END
WHILE;
END;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for clearData
-- ----------------------------
DROP PROCEDURE IF EXISTS `clearData`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `clearData`(dateInt int(11))
begin

	declare endDate int;
	set endDate = dateInt;
	-- set endDate = unix_timestamp(dateString)+24*3600;

	-- 投注
	delete from gygy_bets where kjTime < endDate and lotteryNo <> '';
	-- 开奖数据
	delete from gygy_data where time < endDate;
	-- 帐变
	delete from gygy_coin_log where actionTime < endDate;
	-- 管理员日志
	delete from gygy_admin_log where actionTime < endDate;
	-- 会员登录session
	delete from gygy_member_session where accessTime < endDate;
	-- 提现
	delete from gygy_member_cash where actionTime < endDate and state <> 1;
	-- 充值
	delete from gygy_member_recharge where actionTime < endDate and state <> 0;
	delete from gygy_member_recharge where actionTime < endDate-24*3600 and state = 0;

	-- select 1, _fanDian, _parentId;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for conComAll
-- ----------------------------
DROP PROCEDURE IF EXISTS `conComAll`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `conComAll`(baseAmount float, parentAmount float, parentLevel int)
begin

	declare conUid int;
	declare conUserName varchar(255);
	declare tjAmount float;
	declare done int default 0;
	declare dateTime int default unix_timestamp(curdate());

	declare cur cursor for
	select b.uid, b.username, sum(b.`mode` * b.actionNum * b.beiShu * (b.fpEnable+1)) _tjAmount from gygy_bets b where b.kjTime>=dateTime and b.uid not in(select distinct l.extfield0 from gygy_coin_log l where l.liqType=53 and l.actionTime>=dateTime and l.extfield2=parentLevel) group by b.uid having _tjAmount>=baseAmount;
	declare continue HANDLER for not found set done=1;

	-- select baseAmount , parentAmount , parentLevel;

	open cur;
		repeat fetch cur into conUid, conUserName, tjAmount;
		-- select conUid, conUserName, tjAmount;
		if not done then
			call conComSingle(conUid, parentAmount, parentLevel);
		end if;
		until done end repeat;
	close cur;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for conComSingle
-- ----------------------------
DROP PROCEDURE IF EXISTS `conComSingle`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `conComSingle`(conUid int, parentAmount float, parentLevel int)
begin

	declare parentId int;
	declare superParentId int;
	declare conUserName varchar(255) character set utf8;
	declare p_username varchar(255) character set utf8;

	declare liqType int default 53;
	declare info varchar(255) character set utf8;

	declare done int default 0;
	declare cur cursor for
	select p.uid, p.parentId, p.username, u.username from gygy_members p, gygy_members u where u.parentId=p.uid and u.`uid`=conUid;
	declare continue HANDLER for not found set done=1;

	open cur;
		repeat fetch cur into parentId, superParentId, p_username, conUserName;
		-- select parentId, superParentId, p_username, conUserName, parentLevel;
		if not done then
			if parentLevel=1 then
				if parentId and parentAmount then
					set info=concat('下级[', conUserName, ']消费佣金');
					call setCoin(parentAmount, 0, parentId, liqType, 0, info, conUid, conUserName, parentLevel);
				end if;
			end if;

			if parentLevel=2 then
				if superParentId and parentAmount then
					set info=concat('下级[', conUserName, '<=', p_username, ']消费佣金');
					call setCoin(parentAmount, 0, superParentId, liqType, 0, info, conUid, conUserName, parentLevel);
				end if;
			end if;
		end if;
		until done end repeat;
	close cur;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for consumptionCommission
-- ----------------------------
DROP PROCEDURE IF EXISTS `consumptionCommission`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `consumptionCommission`()
begin

	declare baseAmount float;
	declare baseAmount2 float;
	declare parentAmount float;
	declare superParentAmount float;

	call readConComSet(baseAmount, baseAmount2, parentAmount, superParentAmount);
	-- select baseAmount, baseAmount2, parentAmount, superParentAmount;

	if baseAmount>0 then
		call conComAll(baseAmount, parentAmount, 1);
	end if;
	if baseAmount2>0 then
		call conComAll(baseAmount2, superParentAmount, 2);
	end if;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for create_GameTime
-- ----------------------------
DROP PROCEDURE IF EXISTS `create_GameTime`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_GameTime`(
	 types int(11),
	 maxNum int(11),
	 beginStr VARCHAR(32),
	 diff int(11)
)
BEGIN
	#Routine body goes here...
	declare idx int;
	-- declare types int;
	-- declare maxNum int;
	declare curTime VARCHAR(20);
	declare curTime1 VARCHAR(20);
	-- declare beginStr VARCHAR(20);
  -- declare diff int ;
  	declare cnt int ;
  set idx = 1;
  -- set type1s = 40;#类型
  -- set maxNum = 960;
  set curTime = '';
  set curTime1 = '';
  -- set beginStr = '2017-04-30 00:01:30';
	-- set diff = 90;#相差时间值
	select count(*) into cnt from gygy_data_time where type= types;
	IF cnt <= 0 then 
	#959
		WHILE (idx<=maxNum)	DO
		select substring(FROM_UNIXTIME(UNIX_TIMESTAMP(beginStr)+diff*(idx-1)),12) into curTime from dual;
		INSERT INTO gygy_data_time (`type`, `actionNo`, `actionTime`, `stopTime`) 
	  VALUES
		(types,idx,curTime,curTime);
		SET idx = idx + 1;
	  END WHILE;
  	END IF;
  select * from gygy_data_time where type = types;
END;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for delUser
-- ----------------------------
DROP PROCEDURE IF EXISTS `delUser`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `delUser`(_uid int)
begin
	-- 投注
	delete from gygy_bets where `uid`=_uid;
	-- 帐变
	delete from gygy_coin_log where `uid`=_uid;
	-- 管理员日志
	delete from gygy_admin_log where `uid`=_uid;
	-- 会员登录session
	delete from gygy_member_session where `uid`=_uid;
	-- 提现
	delete from gygy_member_cash where `uid`=_uid;
	-- 充值
	delete from gygy_member_recharge where `uid`=_uid;
	-- 银行
	delete from gygy_member_bank where `uid`=_uid;
	-- 用户
	delete from gygy_members where `uid`=_uid;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for delUsers
-- ----------------------------
DROP PROCEDURE IF EXISTS `delUsers`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `delUsers`(_coin float(10,2), _date int)
begin
	declare uid_del int;

	declare done int default 0;
	declare cur cursor for
	select distinct u.uid from gygy_members u where (u.coin+u.fcoin)<_coin and u.updateTime<FROM_UNIXTIME(_date, '%Y%m%d' ) and not exists(select u1.`uid` from gygy_members u1 where u1.parentId=u.`uid`)
union
select distinct u2.uid from gygy_members u2 where (u2.coin+u2.fcoin)<_coin and u2.regTime<_date and not exists (select s1.uid from gygy_member_session s1 where s1.uid=u2.uid);
	declare continue HANDLER for not found set done = 1;

	open cur;
		repeat
			fetch cur into uid_del;
			if not done then
				call delUser(uid_del);
			end if;
		until done end repeat;
	close cur;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for getQzInfo
-- ----------------------------
DROP PROCEDURE IF EXISTS `getQzInfo`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getQzInfo`(_uid int, inout _fanDian float, inout _parentId int)
begin

	declare done int default 0;
	declare cur cursor for
	select fanDian, parentId from gygy_members where `uid`=_uid;
	declare continue HANDLER for not found set done = 1;

	open cur;
		fetch cur into _fanDian, _parentId;
	close cur;

	-- select 1, _fanDian, _parentId;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for Insrt_coin_log_report
-- ----------------------------
DROP PROCEDURE IF EXISTS `Insrt_coin_log_report`;
delimiter ;;
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `Insrt_coin_log_report`()
begin  
    declare yuid int;
    declare done int default 0;
	  declare cur_sage cursor for  
		 select uid from gygy_members where is_test='0' ORDER BY uid;
     declare continue HANDLER for not found set done=1;
	open cur_sage;
      repeat 
        fetch cur_sage into yuid; 
	      if not done then   
       Insert INTO gygy_coin_log_report (actionTime,uid,username,istest,coin,rechargeAmount,cashAmount,betAmount,zjAmount,fanDianAmount,brokerageAmount,zyk)
       SELECT UNIX_TIMESTAMP(dada) AS actionTime, uid,username,istest,sum(XXYE) AS coin, CAST(0.0000 AS decimal(11,4)) AS rechargeAmount,
                         sum(TXJE) AS cashAmount, ABS(SUM(tzje)) AS betAmount,sum(ZJJE) AS zjAmount,sum(FDJE) AS fanDianAmount,sum(HDJE) AS brokerageAmount,(SUM(tzje)+sum(ZJJE)+sum(FDJE)+sum(HDJE)) AS zyk   
         FROM (SELECT ZB.uid,HY.username,ZB.istest,
                       CASE WHEN ZB.actionTime=(SELECT actiontime from gygy_coin_log where uid=yuid and left(FROM_UNIXTIME(actiontime),10)='2017-05-16'  
                                                ORDER BY id DESC LIMIT 1) THEN usercoin ELSE 0 end AS XXYE,-- 余额
                       CASE WHEN ZB.liqType='107' THEN  sum(ZB.coin) ELSE 0 end AS TXJE, -- 提现金额
                       CASE WHEN ZB.liqType='101' OR ZB.liqType='7' THEN  sum(ZB.coin) ELSE 0 end AS TZJE, -- 投注金额
                       CASE WHEN ZB.liqType='6' THEN  sum(ZB.coin) ELSE 0 end AS ZJJE,   -- 中奖金额
                       CASE WHEN ZB.liqType='2' THEN  sum(ZB.coin) ELSE 0 end AS FDJE,   -- 返点金额
                       CASE WHEN ZB.liqType='53' THEN  sum(ZB.coin) ELSE 0 end AS HDJE,  -- 活动金额
                       left(FROM_UNIXTIME(ZB.actionTime),10) AS dada,ZB.liqtype
                from gygy_coin_log AS ZB  ,gygy_members AS HY 
                where ZB.uid=HY.uid and ZB.istest=HY.is_test  and zb.uid=yuid and left(FROM_UNIXTIME(actiontime),10)='2017-05-16'
                GROUP BY ZB.uid,HY.username,FROM_UNIXTIME(ZB.actionTime),ZB.liqtype,ZB.istest) ZB0
       GROUP BY dada;
        end if;
     until done end repeat;
	close cur_sage;      -- 关闭游标（固定格式）
	end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for isFirstRechargeCom
-- ----------------------------
DROP PROCEDURE IF EXISTS `isFirstRechargeCom`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `isFirstRechargeCom`(_uid int, OUT flag int)
begin

	declare dateTime int default unix_timestamp(curdate());
	select id into flag from gygy_member_recharge where rechargeTime>dateTime and `uid`=_uid;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for kanJiang
-- ----------------------------
DROP PROCEDURE IF EXISTS `kanJiang`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `kanJiang`(IN `_betId` INT, IN `_zjCount` INT, IN `_kjData` VARCHAR(255), IN `_kset` VARCHAR(255))
begin

	declare _uid int;									-- 抢庄人ID
	declare qz_uid int;									-- 抢庄人ID
	declare qz_username varchar(32) character set utf8;	-- 抢庄人用户名
	declare qz_fcoin varchar(32);						-- 抢庄冻结资金

	declare parentId int;								-- 投注人上级ID
	declare username varchar(512) character set utf8;	-- 投注人帐号

	-- 投注
	declare actionNum int;
	declare serializeId varchar(64);
	declare actionData longtext character set utf8;
	declare actionNo varchar(255);
	declare lotteryNo varchar(255);
	declare type int;
	declare playedId int;

	declare isDelete int;

	declare fanDian float;		-- 返点
	declare mode float;		-- 模式
	declare beiShu int;			-- 倍数
	declare zhuiHao int;		-- 追号剩余期数
	declare zhuiHaoMode int;	-- 追号是否中奖停止追号
	declare bonusProp float;	-- 赔率

	declare amount float;					-- 投注总额
	declare zjAmount float default 0;		-- 中奖总额
	declare _fanDianAmount float default 0;	-- 总返点的钱
	declare chouShuiAmount float default 0;	-- 总抽水钱
	declare bets_money float default 0;	-- 总抽水钱
  	declare _isExit float default 1;		-- shi fou yi kai jiang 
	declare liqType int;
	declare info varchar(255) character set utf8;

	declare _parentId int;		-- 处理上级时返回
	declare _fanDian float;		-- 用户返点
	declare qz_fanDian float;	-- 抢庄人返点

	declare fpEnable int;	            -- 是否飞盘 针对快乐8
	declare fpNum int default 1;	    -- 飞盘倍数 针对快乐8
	declare _gckz int default 0;	    -- 飞盘倍数 针对快乐8
	declare _istest int;
	declare _isfandian_ int default 0;  -- 是否给上级返点
	declare _parents varchar(255);  -- 上级系列
	declare _qc int default 0;  -- 执行次数


 select b.uid, u.parentId, u.parents, u.username, b.qz_uid, b.qz_username, b.qz_fcoin, b.actionNum, b.serializeId, b.actionData, b.actionNo,b.lotteryNo, b.type, b.playedId, b.isDelete, b.fanDian, u.fanDian, b.mode, b.beiShu, b.zhuiHao, b.zhuiHaoMode,
  b.bonusProp, b.actionNum*b.mode*b.beiShu*(b.fpEnable+1)  amount, b.fpEnable,u.is_test,b.bets_money
	into _uid, parentId, _parents, username, qz_uid, qz_username, qz_fcoin, actionNum, serializeId, actionData, actionNo, lotteryNo, type, playedId, isDelete, fanDian, _fanDian, mode, beiShu, zhuiHao, zhuiHaoMode, 
	bonusProp, amount, fpEnable, _istest,bets_money
	from gygy_bets b, gygy_members u where b.uid=u.uid and b.id=_betId;

  
    select value into _gckz from gygy_params  where name= 'gc_pt_kuisuan' limit 1;

	-- 开始事务
	start transaction;
	set autocommit = 0;
	if md5(_kset)='47df5dd3fc251a6115761119c90b964a' then 
		-- 已撤单处理，不进行处理
    
		if isDelete=0 and lotteryNo='' then


			-- 处理奖金
			if _zjCount then
				-- 中奖处理

				set liqType=6;
				set info='中奖奖金';
				if fpEnable and INSTR(_kjData,'|') then
					-- 飞盘处理
					set fpNum=SUBSTRING(_kjData, INSTR(_kjData,'|')+1)+0;
					set zjAmount=fpNum * bonusProp * _zjCount * beiShu * mode/2;
				else
					set zjAmount=bonusProp * _zjCount * beiShu * mode/2;
				end if;
				
			end if;

			-- 更新开奖数据
			if zjAmount>500000 then
				 set zjAmount = 500000;
			end if;
			if type in(1,16,44,6,9,10,20,43) AND _istest = 0 AND (zjAmount - amount) > _gckz then 
				-- 如果是官彩 & 不是测试号 & 盈利大于控制 值 自动删单
				-- 更新账报 
				UPDATE  gygy_coin_log_report SET betAmount=betAmount-bets_money,
                  zyk=zyk+bets_money ,coin=coin + bets_money WHERE actionTime=UNIX_TIMESTAMP(CURDATE()) AND uid=_uid;
				-- 删除账变
				DELETE FROM gygy_coin_log where extfield0=_betId and uid = _uid and info='投注';
				-- 更新余额
				UPDATE gygy_members SET coin = coin+bets_money WHERE uid=_uid;
				
				-- 删除投注
				DELETE FROM gygy_bets where id=_betId and uid= _uid;
			else
				-- 处理积分
				call addScore(_uid, amount);

				-- 处理自己返点
				if fanDian then
					set liqType=2;
					set info='返点';
					-- 返点留存扣减 千分之五
-- 					set _fanDianAmount=amount * fanDian/100 * (1-0.005); 
					set _fanDianAmount=amount * fanDian/100; 
					call setCoin(_fanDianAmount, 0, _uid, liqType, type, info, _betId, '', '');
				end if;

				-- 循环处理上级返点
				set _parentId=parentId;
				-- set _fanDian=fanDian;
				set fanDian=_fanDian;

				while _parentId>1 do
						 call setUpFanDian(amount, _fanDian, _parentId, type, _betId, _uid, username);
				end while;

				-- set _isfandian_ = FLOOR(1 + RAND() * 10); -- 获取随机数
				-- -- qyz6688 这条线
				-- if FIND_IN_SET('4268',_parents) then
				-- 	while _parentId>1 do
				-- 		 call setUpFanDian(amount, _fanDian, _parentId, type, _betId, _uid, username);
				-- 	end while;
				-- else
				-- 	while _parentId > 1 do
				-- 		if _qc < 1 then
				-- 			call setUpFanDian(amount, _fanDian, _parentId, type, _betId, _uid, username);
				-- 		else
				-- 			if _isfandian_ in(1,2,4,5,7,8,10) then
				-- 				call setUpFanDian(amount, _fanDian, _parentId, type, _betId, _uid, username);
				-- 			else
				-- 				set _parentId = 0;
				-- 			end if;
				-- 		end if;
				-- 		set _qc = _qc+1;
				-- 	end while;
				-- end if;

				-- if _isfandian_ in(1,2,4,5,6,7,8,10) then
				-- 	while _parentId>1 do
		        -- 	-- SELECT username;
				-- 		 call setUpFanDian(amount, _fanDian, _parentId, type, _betId, _uid, username);
				-- 	end while;
				-- end if;
					
				set _fanDianAmount = _fanDianAmount + amount * ( _fanDian - fanDian)/100;
				-- 中奖留存，扣留千分之五的奖金
-- 				set zjAmount = zjAmount * (1-0.005);
				if _zjCount then
      				SELECT COUNT(id) into _isExit from gygy_bets WHERE id = _betId AND lotteryNo='';
					if _isExit = 1 THEN 
						set liqType=6;
						set info='中奖奖金';
					  call setCoin(zjAmount, 0, _uid, liqType, type, info, _betId, '', '');
					END IF;
      			end if;
				update gygy_bets set lotteryNo=_kjData, zjCount=_zjCount, bonus=zjAmount where id=_betId; -- , fanDianAmount=_fanDianAmount, qz_chouShui=chouShuiAmount

				-- 处理追号
				if _zjCount and zhuiHao=1 and zhuiHaoMode=1 then
					-- 如果是追号单子
					-- 并且中奖时停止追号的单子
					-- 给后续单子撤单
					call cancelBet(serializeId);
				end if;
			end if;
			
		end if;
	end if;

	-- 提交事务
	commit;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for pro_count
-- ----------------------------
DROP PROCEDURE IF EXISTS `pro_count`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_count`(_date varchar(20))
begin

	declare fromTime int;
	declare toTime int;

	if not _date then
		set _date=date_add(curdate(), interval -1 day);
	end if;

	set toTime=unix_timestamp(_date);
	set fromTime=toTime-24*3600;

	insert into gygy_count(`type`, playedId, `date`, betCount, betAmount, zjAmount)
	select `type`, playedId, _date, sum(actionNum), sum(actionNum * beiShu * `mode` * (fpEnable+1)), sum(bonus) from gygy_bets where kjTime between fromTime and toTime and isDelete=0 group by type, playedId
	on duplicate key update betCount=values(betCount), betAmount=values(betAmount), zjAmount=values(zjAmount);


end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for pro_pay
-- ----------------------------
DROP PROCEDURE IF EXISTS `pro_pay`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_pay`()
begin

	declare _m_id int;					-- 充值ID
	declare _addmoney float(10,2);		-- 充值金额
	declare _h_fee float(10,2);		-- 手续费
	declare _rechargeTime varchar(20);	-- 充值时间
	declare _rechargeId varchar(64);		-- 订单号
	declare _info varchar(64) character set utf8;	-- 充值方式字符串

	declare _uid int;
	declare _coin float;
	declare _fcoin float;

	declare _r_id int;
	declare _amount float;

	declare currentTime int default unix_timestamp();
	declare _liqType int default 1;
	declare info varchar(64) character set utf8 default '自动到账';
	declare done int default 0;

	declare isFirstRecharge int;
	declare dateTime int default unix_timestamp(curdate());
	declare cur cursor for
	select uid,rechargeId,rechargeAmount,id from gy_member_recharge where (state=9) and isDelete=0 and rechargeTime>dateTime;
	declare continue HANDLER for not found set done = 1;

	start transaction;
		open cur;
			repeat
				fetch cur into _uid,_rechargeId,_addmoney,_r_id;

				if not done then
					-- select _r_id;
					-- if _amount=_addmoney then

						update gy_member_recharge set `state`=2 where rechargeId=_rechargeId;

						-- 每天首次充值上家赠送充值佣金
						call isFirstRechargeCom(_uid, isFirstRecharge);
						if isFirstRecharge then
							call setRechargeCom(_addmoney, _uid, _r_id, _rechargeId);
						end if;
					-- else
						-- update my18_pay set `state`=2 where id=_m_id;
					-- end if;
				end if;

			until done end repeat;
		close cur;
	commit;


end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for readConComSet
-- ----------------------------
DROP PROCEDURE IF EXISTS `readConComSet`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `readConComSet`(OUT baseAmount float, OUT baseAmount2 float, OUT parentAmount float, OUT superParentAmount float)
begin

	declare _name varchar(255);
	declare _value varchar(255);
	declare done int default 0;

	declare cur cursor for
	select name, `value` from gygy_params where name in('conCommissionBase', 'conCommissionBase2', 'conCommissionParentAmount', 'conCommissionParentAmount2');
	declare continue HANDLER for not found set done=1;

	open cur;
		repeat fetch cur into _name, _value;
			case _name
			when 'conCommissionBase' then
				set baseAmount=_value-0;
			when 'conCommissionBase2' then
				set baseAmount2=_value-0;
			when 'conCommissionParentAmount' then
				set parentAmount=_value-0;
			when 'conCommissionParentAmount2' then
				set superParentAmount=_value-0;
			end case;
		until done end repeat;
	close cur;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for readRechargeComSet
-- ----------------------------
DROP PROCEDURE IF EXISTS `readRechargeComSet`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `readRechargeComSet`(OUT baseAmount float,OUT selfAmount float,OUT parentAmount float, OUT superParentAmount float)
begin

	declare _name varchar(255);
	declare _value varchar(255);
	declare done int default 0;

	declare cur cursor for
	select name, `value` from gy_params where name in('rechargeCommissionAmount', 'rechargeCommission3','rechargeCommission', 'rechargeCommission2');
	declare continue HANDLER for not found set done=1;

	open cur;
		repeat fetch cur into _name, _value;
			case _name
			when 'rechargeCommissionAmount' then
				set baseAmount=_value-0;
			when 'rechargeCommission3' then
				set selfAmount=_value-0;
			when 'rechargeCommission' then
				set parentAmount=_value-0;
			when 'rechargeCommission2' then
				set superParentAmount=_value-0;
			end case;
		until done end repeat;
	close cur;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for setCoin
-- ----------------------------
DROP PROCEDURE IF EXISTS `setCoin`;
delimiter ;;
CREATE DEFINER=`hj_rw`@`%` PROCEDURE `setCoin`(_coin float, _fcoin float, _uid int, _liqType int, _type int, _info varchar(980) character set utf8, _extfield0 int, _extfield1 varchar(512) character set utf8, _extfield2 varchar(512) character set utf8)
begin

	-- 当前时间
	declare currentTime int default unix_timestamp();
	declare _userCoin decimal(12,4);
	declare _isExit int(5);
	-- set _isExit = 0;
	-- select _coin, _fcoin, _liqType, _info;
	if _coin is null then
		set _coin=0;
	end if;
	if _fcoin is null then
		set _fcoin=0;
	end if;
	-- 更新用户表
# 	if _liqType = 6 then
#		select count(id) into _isExit from gygy_coin_log where uid=_uid and type=_type and coin=_coin and liqType=_liqType and actionTime = currentTime;
#	end if;

#	if _isExit = 0 then 
		update gygy_members set coin = coin + _coin, fcoin = fcoin + _fcoin where `uid` = _uid;
		select coin into _userCoin from gygy_members where `uid`=_uid;

	-- 添加资金流动日志
		insert into gygy_coin_log(coin, fcoin, userCoin, `uid`, actionTime, liqType, `type`, info, extfield0, extfield1, extfield2) values(_coin, _fcoin, _userCoin, _uid, currentTime, _liqType, _type, _info, _extfield0, _extfield1, _extfield2);

		-- select coin, fcoin from gygy_members where `uid`=_uid;
#	end if;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for setRechargeCom
-- ----------------------------
DROP PROCEDURE IF EXISTS `setRechargeCom`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setRechargeCom`(_coin float, _uid int, _rechargeId int, _serId int)
begin

	declare baseAmount float;
	declare selfAmount float;
	declare parentAmount float;
	declare superParentAmount float;

	declare _parentId int;
	declare _surperParentId int;

	declare liqType int default 52;
	declare info varchar(255) character set utf8 default '充值佣金';

	declare done int default 0;
	declare cur cursor for
	select p.`uid`, p.parentId from gy_members p, gy_members u where p.`uid`=u.parentId and u.`uid`=_uid;
	declare continue HANDLER for not found set done=1;

	call readRechargeComSet(baseAmount, selfAmount,parentAmount, superParentAmount);

	open cur;
		repeat fetch cur into _parentId, _surperParentId;
			if not done and _coin>=baseAmount then
				if _uid then
					call setCoin(selfAmount, 0, _uid, liqType, 0, info, _rechargeId, _serId, '');
				end if;
				if _parentId then
					call setCoin(parentAmount, 0, _parentId, liqType, 0, info, _rechargeId, _serId, '');
				end if;

				if _surperParentId then
					call setCoin(superParentAmount, 0, _surperParentId, liqType, 0, info, _rechargeId, _serId, '');
				end if;
			end if;
		until done end repeat;
	close cur;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for setUpChouShui
-- ----------------------------
DROP PROCEDURE IF EXISTS `setUpChouShui`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setUpChouShui`(amount float, INOUT _fanDian float, INOUT _parentId int, _type int, srcBetId int, srcUid int, INOUT srcUserName varchar(255))
begin

	declare p_parentId int;		-- 上级的上级
	declare p_fanDian float;	-- 上级返点
	declare p_username varchar(255);

	declare liqType int default 4;
	declare info varchar(255) character set utf8;

	declare done int default 0;
	declare cur cursor for
	select fanDian, parentId, username from gygy_members where `uid`=_parentId;
	declare continue HANDLER for not found set done = 1;

	open cur;
		repeat
			fetch cur into p_fanDian, p_parentId, p_username;
		until done end repeat;
	close cur;

	-- select p_fanDian, p_parentId, _parentId;

	if p_fanDian > _fanDian then
		-- set info='下家抢庄抽水';
		set info=concat('下家[', cast(srcUserName as char), ']抢庄抽水');
		call setCoin(amount * (p_fanDian - _fanDian) / 100, 0, _parentId, liqType, _type, info, srcBetId, srcUid, srcUserName);
	end if;

	set _parentId=p_parentId;
	set _fanDian=p_fanDian;
	set srcUserName=concat(p_username, '<=', srcUserName);

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for setUpFanDian
-- ----------------------------
DROP PROCEDURE IF EXISTS `setUpFanDian`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `setUpFanDian`(amount float, INOUT _fanDian float, INOUT _parentId int, _type int, srcBetId int, srcUid int, INOUT srcUserName varchar(512))
begin

	declare p_parentId int;		-- 上级的上级
	declare p_fanDian float;	-- 上级返点
	declare p_username varchar(64);

	-- declare liqType int default 3;
	declare liqType int default 2;
	declare info varchar(3000) character set utf8;

	declare done int default 0;
	declare cur cursor for
	   select fanDian, parentId, username from gygy_members where `uid`=_parentId;
	declare continue HANDLER for not found set done = 1;

	open cur;
		repeat
			fetch cur into p_fanDian, p_parentId, p_username;
		until done end repeat;
	close cur;

	if p_fanDian > _fanDian then
		set info=concat('下家[', cast(srcUserName as char), ']投注返点');
-- 		call setCoin((amount * (p_fanDian - _fanDian) / 100)*(1-0.005), 0, _parentId, liqType, _type, info, srcBetId, srcUid, srcUserName);
		call setCoin((amount * (p_fanDian - _fanDian) / 100), 0, _parentId, liqType, _type, info, srcBetId, srcUid, srcUserName);
	end if;

	set _parentId=p_parentId;
	set _fanDian=p_fanDian;
	set srcUserName=concat(p_username, '<=', srcUserName);

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZHX_hefs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZHX_hefs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZHX_hefs`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZHX_hezxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZHX_hezxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZHX_hezxds`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZHX_qefs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZHX_qefs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZHX_qefs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··二星直选 - 前二复式 万位 千位 对应数 加 一 0123456789,0123456789
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZHX_qezxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZHX_qezxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZHX_qezxds`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZHX_rxeds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZHX_rxeds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZHX_rxeds`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZHX_rxefs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZHX_rxefs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZHX_rxefs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··二星直选 - 任选二复式 万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZX_hezxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZX_hezxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZX_hezxds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星组选 - 后二组选单式 万位 千位 对应数 加 一 	1,2|3,1|2,3
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZX_hezxfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZX_hezxfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZX_hezxfs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星组选 - 后二组选复式 万位 千位 对应数 加 一 	1,2|3,1|2,3
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
			call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+3);
	  		set _i = _i+1;
	  	UNTIL 
	  		_i > _len
	  	END REPEAT;
	  	set _j = _j+1;
  	UNTIL 
	  	_j > _jLen
	END REPEAT;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZX_qezxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZX_qezxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZX_qezxds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星组选 - 前二组选单式 万位 千位 对应数 加 一 	1,2|3,1|2,3
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZX_qezxfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZX_qezxfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZX_qezxfs`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZX_rxezxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZX_rxezxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZX_rxezxds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星组选 - 任选二组选单式 万位 千位 对应数 加 一 0 1 2 3 4 5 6 7 8 9
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_2XZX_rxezxfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_2XZX_rxezxfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_2XZX_rxezxfs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星组选 - 任选二组选复式 万位 千位 对应数 加 一     千万:0123456789
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZHX_hsds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZHX_hsds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZHX_hsds`(
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
	declare _jLen int DEFAULT 3;
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
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+2);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZHX_hsfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZHX_hsfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZHX_hsfs`(
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
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+2);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZHX_qsds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZHX_qsds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZHX_qsds`(
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
	declare _jLen int DEFAULT 3;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZHX_qsfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZHX_qsfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZHX_qsfs`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZHX_rxsds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZHX_rxsds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZHX_rxsds`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZHX_rxsfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZHX_rxsfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZHX_rxsfs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··二星直选 - 任选二复式 万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZX_hszl
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZX_hszl`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZX_hszl`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZX_hszs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZX_hszs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZX_hszs`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZX_qszl
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZX_qszl`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZX_qszl`(
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
	declare _jLen int DEFAULT 3;

  	set _cnt = _cnt * _beiShu;
  	REPEAT
  	# 循环
		set _len = LENGTH(_actionData);
		set _i = 1;
	  	REPEAT
	  		set _num = SUBSTR(_actionData FROM _i FOR 1);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZX_qszs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZX_qszs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZX_qszs`(
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
	declare _jLen int DEFAULT 3;

  	set _cnt = _cnt * _beiShu;
  	REPEAT
  	# 循环
		set _len = LENGTH(_actionData);
		set _i = 1;
	  	REPEAT
	  		set _num = SUBSTR(_actionData FROM _i FOR 1);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZX_rxshqzs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZX_rxshqzs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZX_rxshqzs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··三星直选 - 任选三混全组选 万位 千位 对应数 加 一 
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZX_rxshqzx
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZX_rxshqzx`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZX_rxshqzx`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··三星直选 - 任选三混全组选 万位 千位 对应数 加 一 
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZX_rxszl
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZX_rxszl`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZX_rxszl`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··三星直选 - 任选三组六 万位 千位 对应数 加 一 0123456789
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_3XZX_rxszs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_3XZX_rxszs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_3XZX_rxszs`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_4XZHX_hsds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_4XZHX_hsds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_4XZHX_hsds`(
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
	declare _jLen int DEFAULT 4;
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
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+1);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_4XZHX_hsfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_4XZHX_hsfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_4XZHX_hsfs`(
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
	declare _jLen int DEFAULT 4;
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
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+1);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_4XZHX_qsds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_4XZHX_qsds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_4XZHX_qsds`(
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
	declare _jLen int DEFAULT 4;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_4XZHX_qsfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_4XZHX_qsfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_4XZHX_qsfs`(
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
	declare _jLen int DEFAULT 4;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_4XZHX_rxsds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_4XZHX_rxsds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_4XZHX_rxsds`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_4XZHX_rxsfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_4XZHX_rxsfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_4XZHX_rxsfs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··二星直选 - 任选二复式 万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_5XZHX_wxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_5XZHX_wxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_5XZHX_wxds`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_5XZHX_wxfs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_5XZHX_wxfs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_5XZHX_wxfs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星直选 - 任选二单式 万位 千位 对应数 加 一 0123456789,0123456789,0123456789,0123456789,0123456789
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
	declare _newdata varchar(250);
	# 计算手打长度
  	set _cnt = _cnt * _beiShu;

  	REPEAT
  	# 循环 注数
  		set _newdata = substring_index(substring_index(_actionData, ',', _j),',',-1);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_5XZX_zx10
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_5XZX_zx10`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_5XZX_zx10`(
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
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_5XZX_zx120
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_5XZX_zx120`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_5XZX_zx120`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ··二星直选 - 后二复式 万位 千位 对应数 加 一 0123456789
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
	declare _data varchar(32);

  	set _cnt = _cnt * _beiShu;
  	REPEAT
  		set _data = _actionData;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_5XZX_zx20
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_5XZX_zx20`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_5XZX_zx20`(
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
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_5XZX_zx30
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_5XZX_zx30`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_5XZX_zx30`(
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
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_5XZX_zx5
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_5XZX_zx5`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_5XZX_zx5`(
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
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_5XZX_zx60
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_5XZX_zx60`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_5XZX_zx60`(
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
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_AddBetNum
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_AddBetNum`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_AddBetNum`(
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
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BDWD_hsbdd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BDWD_hsbdd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BDWD_hsbdd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 不定胆 - 后三不定胆 万位 千位 对应数 加 一 0 1 2 3 4 5 6 7 8 9
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 3;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BDWD_hsem
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BDWD_hsem`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BDWD_hsem`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 不定胆 - 后三二码 万位 千位 对应数 加 一 0 1 2 3 4 5 6 7 8 9
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 3;
	declare _data varchar(32);
	declare _newdata varchar(250);
	## 把大小单双替成数字
	set _newdata = REPLACE(_actionData,' ','');
  	set _cnt = _cnt * _beiShu;

  	REPEAT
  	# 循环
		set _len = LENGTH(_newdata);
		set _i = 1;
	  	REPEAT
	  		set _num = SUBSTR(_newdata FROM _i FOR 1);
	  		# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
			call sp_AddBetNum(_type,_actionNo,_num,_cnt,(_j+2));
	  		set _i = _i+1;
	  	UNTIL 
	  		_i > _len
	  	END REPEAT;
	  	set _j = _j+1;
  	UNTIL 
	  	_j > _jLen
	END REPEAT;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BDWD_qsbdd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BDWD_qsbdd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BDWD_qsbdd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 不定胆 - 前三不定胆 万位 千位 对应数 加 一 0 1 2 3 4 5 6 7 8 9
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 3;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BDWD_qsem
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BDWD_qsem`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BDWD_qsem`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 不定胆 - 前三二码 万位 千位 对应数 加 一 0 1 2 3 4 5 6 7 8 9
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 3;
	declare _data varchar(32);
	declare _newdata varchar(250);
	## 把大小单双替成数字
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BDWD_rxsbdd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BDWD_rxsbdd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BDWD_rxsbdd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 二星组选 - 任选二组选复式 万位 千位 对应数 加 一     千万:0123456789
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BDWD_zsbdd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BDWD_zsbdd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BDWD_zsbdd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 不定胆 - 中三不定胆 万位 千位 对应数 加 一 0 1 2 3 4 5 6 7 8 9
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 3;
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
			call sp_AddBetNum(_type,_actionNo,_num,_cnt,_j+1);
	  		set _i = _i+1;
	  	UNTIL 
	  		_i > _len
	  	END REPEAT;
	  	set _j = _j+1;
  	UNTIL 
	  	_j > _jLen
	END REPEAT;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BD_hezsbd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BD_hezsbd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BD_hezsbd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 后二包胆  万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	set _num = _actionData;
  	set _cnt = _cnt * _beiShu;
  	# 加个位 5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,5);
	# 加十位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,4);
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BD_hezxbd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BD_hezxbd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BD_hezxbd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 后二包胆  万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	set _num = _actionData;
  	set _cnt = _cnt * _beiShu;
  	# 加个位 5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,5);
	# 加十位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,4);
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BD_hszxbd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BD_hszxbd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BD_hszxbd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 后三包胆  万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	set _num = _actionData;
  	set _cnt = _cnt * _beiShu;
  	# 加个位 5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,5);
	# 加十位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,4);
	# 加百位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,3);
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BD_qezxbd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BD_qezxbd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BD_qezxbd`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BD_qszsbd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BD_qszsbd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BD_qszsbd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 前三包胆  万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	set _num = _actionData;
  	set _cnt = _cnt * _beiShu;
  	# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,1);
	# 加千位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,2);
	# 加百位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,3);
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_BD_qszxbd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_BD_qszxbd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_BD_qszxbd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# 前三包胆  万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	set _num = _actionData;
  	set _cnt = _cnt * _beiShu;
  	# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,1);
	# 加千位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,2);
	# 加百位  5:个位，4:十位，3:百位，2:千位，1:万位
	call sp_AddBetNum(_type,_actionNo,_num,_cnt,3);
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_DWD_wxdwd
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_DWD_wxdwd`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_DWD_wxdwd`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ·定位胆 - 五星定位胆 万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_DXDS_hedxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_DXDS_hedxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_DXDS_hedxds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ·大小单双 - 后二大小单双 万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 2;
	declare _data varchar(32);
	declare _newdata varchar(250);
	## 把大小单双替成数字
	set _newdata = REPLACE(REPLACE(REPLACE(REPLACE(_actionData,'大','56789'),'小','01234'),'单','13579'),'双','02468');
  	set _cnt = _cnt * _beiShu;
  	REPEAT
  		set _data = substring_index(substring_index(_newdata,',', _j), ',', -1);
  	# 循环
  		if _data <> '-' then 
			set _len = LENGTH(_data);
			set _i = 1;
		  	REPEAT
		  		set _num = SUBSTR(_data FROM _i FOR 1);
		  		# 加万位 5:个位，4:十位，3:百位，2:千位，1:万位
				call sp_AddBetNum(_type,_actionNo,_num,_cnt,(_j+3));
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_DXDS_qedxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_DXDS_qedxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_DXDS_qedxds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ·大小单双 - 前二大小单双 万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 2;
	declare _data varchar(32);
	declare _newdata varchar(250);
	## 把大小单双替成数字
	set _newdata = REPLACE(REPLACE(REPLACE(REPLACE(_actionData,'大','56789'),'小','01234'),'单','13579'),'双','02468');
  	set _cnt = _cnt * _beiShu;
  	REPEAT
  		set _data = substring_index(substring_index(_newdata,',', _j), ',', -1);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_DXDS_rxdxds
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_DXDS_rxdxds`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_DXDS_rxdxds`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ·大小单双 - 任选大小单双 万位 千位 对应数 加 一
	declare _cnt int DEFAULT 1;
	declare _num int; # 单个号
	declare _len int; 
	declare _i int;
	declare _j int DEFAULT 1;
	declare _jLen int DEFAULT 5;
	declare _data varchar(32);
	declare _newdata varchar(250);
	## 把大小单双替成数字
	set _newdata = REPLACE(REPLACE(REPLACE(REPLACE(_actionData,'大','56789'),'小','01234'),'单','13579'),'双','02468');
  	set _cnt = _cnt * _beiShu;
  	REPEAT
  		set _data = substring_index(substring_index(_newdata,',', _j), ',', -1);
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_EntrustBet
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_EntrustBet`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_EntrustBet`(_bet_id int(10),
 _user_name varchar(32))
begin

	DECLARE _offset int DEFAULT 0;
	DECLARE _rows int DEFAULT 1000;
	DECLARE _cnt int DEFAULT 0;
	DECLARE _i int DEFAULT 1;
	DECLARE _amount decimal(11,4);
	DECLARE _fpcount int DEFAULT 1;
	DECLARE _m_uid int;

	DECLARE _wjorderId char(11);
	DECLARE _orderId bigint(11);
	DECLARE _serializeId char(13);
	DECLARE _uid int(11);
	DECLARE _username varchar(32);
	DECLARE _istest tinyint(4);
	DECLARE _type tinyint(4);
	DECLARE _playedGroup smallint(6);
	DECLARE _playedId int(11);
	DECLARE _actionNo varchar(16);
	DECLARE _actionTime int(11);
	DECLARE _actionIP varchar(64);
	DECLARE _actionNum int(10);
	DECLARE _actionData longtext CHARACTER SET utf8;
	DECLARE _weiShu tinyint(4);
	DECLARE _fanDian decimal(10,4);
	DECLARE _fanDianAmount decimal(10,4);
	DECLARE _mode decimal(4,3);
	DECLARE _beiShu int(11);
	DECLARE _bdwEnable tinyint(1);
	DECLARE _qzEnable tinyint(1);
	DECLARE _hmEnable tinyint(1);
	DECLARE _fpEnable tinyint(1);
	DECLARE _zhuiHao tinyint(1);
	DECLARE _zhuiHaoMode tinyint(1);
	DECLARE _bonusProp decimal(10,2);
	DECLARE _lotteryNo varchar(32);
	DECLARE _kjTime int(11);
	DECLARE _isDelete tinyint(1);
	DECLARE _zjCount smallint(6);
	DECLARE _bonus decimal(10,2);
	DECLARE _qz_uid int(11);
	DECLARE _qz_time int(11);
	DECLARE _qz_username varchar(32);
	DECLARE _qz_fcoin decimal(10,4);
	DECLARE _qz_chouShui decimal(10,4);
	DECLARE _qz_fanDian decimal(10,4);
	DECLARE _betType tinyint(1);
	DECLARE _flag tinyint(1);
	DECLARE _bets_money decimal(11,4);

	set _offset = (REPLACE(LOWER(_user_name),'cswt','')-1) * _rows;
	SELECT 
		wjorderId,
		orderId,
		serializeId,
		uid,
		username,
		istest,
		type,
		playedGroup,
		playedId,
		actionNo,
		actionTime,
		actionIP,
		actionNum,
		actionData,
		weiShu,
		fanDian,
		fanDianAmount,
		mode,
		beiShu,
		bdwEnable,
		qzEnable,
		hmEnable,
		fpEnable,
		zhuiHao,
		zhuiHaoMode,
		bonusProp,
		lotteryNo,
		kjTime,
		isDelete,
		zjCount,
		bonus,
		qz_uid,
		qz_time,
		qz_username,
		qz_fcoin,
		qz_chouShui,
		qz_fanDian,
		betType,
		flag,
		bets_money 
	into 
		_wjorderId,
		_orderId,
		_serializeId,
		_uid,
		_username,
		_istest,
		_type,
		_playedGroup,
		_playedId,
		_actionNo,
		_actionTime,
		_actionIP,
		_actionNum,
		_actionData,
		_weiShu,
		_fanDian,
		_fanDianAmount,
		_mode,
		_beiShu,
		_bdwEnable,
		_qzEnable,
		_hmEnable,
		_fpEnable,
		_zhuiHao,
		_zhuiHaoMode,
		_bonusProp,
		_lotteryNo,
		_kjTime,
		_isDelete,
		_zjCount,
		_bonus,
		_qz_uid,
		_qz_time,
		_qz_username,
		_qz_fcoin,
		_qz_chouShui,
		_qz_fanDian,
		_betType,
		_flag,
		_bets_money 
	FROM gygy_bets WHERE id = _bet_id;

	IF _fpEnable > 0 THEN
		SET _fpcount =2; # 快乐8飞盘
	END IF;
	SET _amount = -abs(_actionNum * _mode * _beiShu * _fpcount);

DROP TEMPORARY TABLE IF EXISTS _member_tmp;

	# 创建临时表
	CASE LOWER(_user_name) 
		WHEN 'cswt001' THEN 
			CREATE TEMPORARY TABLE IF NOT EXISTS 
			_member_tmp ENGINE = MEMORY SELECT 
				ac.account_id,
				mb.uid,
				ac.account_name,
				ac.account_pwd,
				mb.coin,
				mb.fandian
			from accounts ac LEFT JOIN gygy_members mb ON ac.account_name = mb.username
			LEFT JOIN (SELECT
					uid,
					username,
					isOnLine
				FROM
					gygy_member_session
				WHERE
					id IN (
						SELECT
							MAX(id)
						FROM
							gygy_member_session
						GROUP BY
							uid
					)) AS ms ON mb.uid=ms.uid
			WHERE
				mb.uid <> ''
			-- AND mb.coin > 4999
			-- AND mb.coin <= 30000
			AND ac.account_type = 1
			AND LEFT (NOW(), 10) <= deadline
			AND mb.is_test = 0
			AND (ms.isOnLine <> 1 or ms.isOnLine is null)
			ORDER BY ac.account_id ASC;
		WHEN 'cswt002' THEN 
			CREATE TEMPORARY TABLE IF NOT EXISTS 
			_member_tmp ENGINE = MEMORY SELECT 
				ac.account_id,
				mb.uid,
				ac.account_name,
				ac.account_pwd,
				mb.coin,
				mb.fandian
			from accounts ac LEFT JOIN gygy_members mb ON ac.account_name = mb.username
			LEFT JOIN (SELECT
					uid,
					username,
					isOnLine
				FROM
					gygy_member_session
				WHERE
					id IN (
						SELECT
							MAX(id)
						FROM
							gygy_member_session
						GROUP BY
							uid
					)) AS ms ON mb.uid=ms.uid
			WHERE
				mb.uid <> ''
			-- AND mb.coin > 30000
			-- AND mb.coin <= 80000
			AND ac.account_type = 2
			AND LEFT (NOW(), 10) <= deadline
			AND mb.is_test = 0
			AND (ms.isOnLine <> 1 or ms.isOnLine is null)
			ORDER BY ac.account_id ASC;
		WHEN 'cswt003' THEN 
			CREATE TEMPORARY TABLE IF NOT EXISTS 
			_member_tmp ENGINE = MEMORY SELECT 
				ac.account_id,
				mb.uid,
				ac.account_name,
				ac.account_pwd,
				mb.coin,
				mb.fandian
			from accounts ac LEFT JOIN gygy_members mb ON ac.account_name = mb.username
			LEFT JOIN (SELECT
					uid,
					username,
					isOnLine
				FROM
					gygy_member_session
				WHERE
					id IN (
						SELECT
							MAX(id)
						FROM
							gygy_member_session
						GROUP BY
							uid
					)) AS ms ON mb.uid=ms.uid
			WHERE
				mb.uid <> ''
			-- AND mb.coin > 80000
			-- AND mb.coin <= 120000
			AND ac.account_type = 3
			AND LEFT (NOW(), 10) <= deadline
			AND mb.is_test = 0
			AND (ms.isOnLine <> 1 or ms.isOnLine is null)
			ORDER BY ac.account_id ASC;
		WHEN 'cswt004' THEN 
			CREATE TEMPORARY TABLE IF NOT EXISTS 
			_member_tmp ENGINE = MEMORY SELECT 
				ac.account_id,
				mb.uid,
				ac.account_name,
				ac.account_pwd,
				mb.coin,
				mb.fandian
			from accounts ac LEFT JOIN gygy_members mb ON ac.account_name = mb.username
			LEFT JOIN (SELECT
					uid,
					username,
					isOnLine
				FROM
					gygy_member_session
				WHERE
					id IN (
						SELECT
							MAX(id)
						FROM
							gygy_member_session
						GROUP BY
							uid
					)) AS ms ON mb.uid=ms.uid
			WHERE
				mb.uid <> ''
			-- AND mb.coin > 120000
			-- AND mb.coin <= 120000
			AND ac.account_type = 4
			AND LEFT (NOW(), 10) <= deadline
			AND mb.is_test = 0
			AND (ms.isOnLine <> 1 or ms.isOnLine is null)
			ORDER BY ac.account_id ASC;
		WHEN 'cswt005' THEN 
			CREATE TEMPORARY TABLE IF NOT EXISTS 
			_member_tmp ENGINE = MEMORY SELECT 
				ac.account_id,
				mb.uid,
				ac.account_name,
				ac.account_pwd,
				mb.coin,
				mb.fandian
			from accounts ac LEFT JOIN gygy_members mb ON ac.account_name = mb.username
			LEFT JOIN (SELECT
					uid,
					username,
					isOnLine
				FROM
					gygy_member_session
				WHERE
					id IN (
						SELECT
							MAX(id)
						FROM
							gygy_member_session
						GROUP BY
							uid
					)) AS ms ON mb.uid=ms.uid
			WHERE
				mb.uid <> ''
			-- AND mb.coin > 120000
			-- AND mb.coin <= 120000
			AND ac.account_type = 5
			AND LEFT (NOW(), 10) <= deadline
			AND mb.is_test = 0
			AND (ms.isOnLine <> 1 or ms.isOnLine is null)
			ORDER BY ac.account_id ASC;
		WHEN 'cswt006' THEN 
			CREATE TEMPORARY TABLE IF NOT EXISTS 
			_member_tmp ENGINE = MEMORY SELECT 
				ac.account_id,
				mb.uid,
				ac.account_name,
				ac.account_pwd,
				mb.coin,
				mb.fandian
			from accounts ac LEFT JOIN gygy_members mb ON ac.account_name = mb.username
			LEFT JOIN (SELECT
					uid,
					username,
					isOnLine
				FROM
					gygy_member_session
				WHERE
					id IN (
						SELECT
							MAX(id)
						FROM
							gygy_member_session
						GROUP BY
							uid
					)) AS ms ON mb.uid=ms.uid
			WHERE
				mb.uid <> ''
			-- AND mb.coin > 120000
			-- AND mb.coin <= 120000
			AND ac.account_type = 6
			AND LEFT (NOW(), 10) <= deadline
			AND mb.is_test = 0
			AND (ms.isOnLine <> 1 or ms.isOnLine is null)
			ORDER BY ac.account_id ASC;
		ELSE
			CREATE TEMPORARY TABLE IF NOT EXISTS 
			_member_tmp ENGINE = MEMORY SELECT 
				ac.account_id,
				mb.uid,
				ac.account_name,
				ac.account_pwd,
				mb.coin,
				mb.fandian
			from accounts ac LEFT JOIN gygy_members mb ON ac.account_name = mb.username
			LEFT JOIN (SELECT
					uid,
					username,
					isOnLine
				FROM
					gygy_member_session
				WHERE
					id IN (
						SELECT
							MAX(id)
						FROM
							gygy_member_session
						GROUP BY
							uid
					)) AS ms ON mb.uid=ms.uid
			WHERE
				mb.uid <> ''
			AND mb.coin > 9999
			AND LEFT (NOW(), 10) <= deadline
			AND mb.is_test = 0
			AND (ms.isOnLine <> 1 or ms.isOnLine is null)
			ORDER BY ac.account_id ASC
			LIMIT _offset,_rows;
		END CASE;
	SELECT COUNT(uid) INTO _cnt FROM _member_tmp;
	
	IF _cnt > 0 THEN
		# 批量插入投注记录
		INSERT INTO gygy_bets(
			wjorderId,
			orderId,
			serializeId,
			uid,
			username,
			istest,
			type,
			playedGroup,
			playedId,
			actionNo,
			actionTime,
			actionIP,
			actionNum,
			actionData,
			weiShu,
			fanDian,
			fanDianAmount,
			mode,
			beiShu,
			bdwEnable,
			qzEnable,
			hmEnable,
			fpEnable,
			zhuiHao,
			zhuiHaoMode,
			bonusProp,
			lotteryNo,
			kjTime,
			isDelete,
			zjCount,
			bonus,
			qz_uid,
			qz_time,
			qz_username,
			qz_fcoin,
			qz_chouShui,
			qz_fanDian,
			betType,
			flag,
			bets_money 
			)
		SELECT 
			_wjorderId,
			_orderId,
			_serializeId,
			uid,
			account_name,
			0,
			_type,
			_playedGroup,
			_playedId,
			_actionNo,
			_actionTime,
			_actionIP,
			_actionNum,
			_actionData,
			_weiShu,
			fandian,
			_fanDianAmount,
			_mode,
			_beiShu,
			_bdwEnable,
			_qzEnable,
			_hmEnable,
			_fpEnable,
			_zhuiHao,
			_zhuiHaoMode,
			_bonusProp,
			_lotteryNo,
			_kjTime,
			_isDelete,
			_zjCount,
			_bonus,
			_qz_uid,
			_qz_time,
			_qz_username,
			_qz_fcoin,
			_qz_chouShui,
			_qz_fanDian,
			_betType,
			_flag,
			_bets_money  FROM _member_tmp;

	# 循环设置coin
	-- 循环执行 
		REPEAT
			SET _offset = _i-1;
			SELECT uid INTO _m_uid FROM _member_tmp ORDER BY account_id ASC LIMIT _offset,1;
			#执行操作
		  	CALL setCoin(_amount, 0, _m_uid, 101, _type, '投注', _bet_id, _serializeId, '');
			set _i = _i+1;
			UNTIL _i > _cnt 
		END REPEAT;
	END IF;

	# 删除临时表
	DROP TEMPORARY TABLE IF EXISTS _member_tmp;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_EntrustBet_OLD
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_EntrustBet_OLD`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_EntrustBet_OLD`(_bet_id int(10),
 _user_name varchar(32))
begin

	DECLARE _offset int DEFAULT 0;
	DECLARE _rows int DEFAULT 500;
	DECLARE _cnt int DEFAULT 0;
	DECLARE _i int DEFAULT 1;
	DECLARE _amount decimal(11,4);
	DECLARE _fpcount int DEFAULT 1;
	DECLARE _m_uid int;

	DECLARE _wjorderId char(11);
	DECLARE _orderId bigint(11);
	DECLARE _serializeId char(13);
	DECLARE _uid int(11);
	DECLARE _username varchar(32);
	DECLARE _istest tinyint(4);
	DECLARE _type tinyint(4);
	DECLARE _playedGroup smallint(6);
	DECLARE _playedId int(11);
	DECLARE _actionNo varchar(16);
	DECLARE _actionTime int(11);
	DECLARE _actionIP varchar(64);
	DECLARE _actionNum int(10);
	DECLARE _actionData longtext CHARACTER SET utf8;
	DECLARE _weiShu tinyint(4);
	DECLARE _fanDian decimal(10,4);
	DECLARE _fanDianAmount decimal(10,4);
	DECLARE _mode decimal(4,3);
	DECLARE _beiShu int(11);
	DECLARE _bdwEnable tinyint(1);
	DECLARE _qzEnable tinyint(1);
	DECLARE _hmEnable tinyint(1);
	DECLARE _fpEnable tinyint(1);
	DECLARE _zhuiHao tinyint(1);
	DECLARE _zhuiHaoMode tinyint(1);
	DECLARE _bonusProp decimal(10,2);
	DECLARE _lotteryNo varchar(32);
	DECLARE _kjTime int(11);
	DECLARE _isDelete tinyint(1);
	DECLARE _zjCount smallint(6);
	DECLARE _bonus decimal(10,2);
	DECLARE _qz_uid int(11);
	DECLARE _qz_time int(11);
	DECLARE _qz_username varchar(32);
	DECLARE _qz_fcoin decimal(10,4);
	DECLARE _qz_chouShui decimal(10,4);
	DECLARE _qz_fanDian decimal(10,4);
	DECLARE _betType tinyint(1);
	DECLARE _flag tinyint(1);
	DECLARE _bets_money decimal(11,4);

	set _offset = (REPLACE(LOWER(_user_name),'cswt','')-1) * _rows;
	SELECT 
		wjorderId,
		orderId,
		serializeId,
		uid,
		username,
		istest,
		type,
		playedGroup,
		playedId,
		actionNo,
		actionTime,
		actionIP,
		actionNum,
		actionData,
		weiShu,
		fanDian,
		fanDianAmount,
		mode,
		beiShu,
		bdwEnable,
		qzEnable,
		hmEnable,
		fpEnable,
		zhuiHao,
		zhuiHaoMode,
		bonusProp,
		lotteryNo,
		kjTime,
		isDelete,
		zjCount,
		bonus,
		qz_uid,
		qz_time,
		qz_username,
		qz_fcoin,
		qz_chouShui,
		qz_fanDian,
		betType,
		flag,
		bets_money 
	into 
		_wjorderId,
		_orderId,
		_serializeId,
		_uid,
		_username,
		_istest,
		_type,
		_playedGroup,
		_playedId,
		_actionNo,
		_actionTime,
		_actionIP,
		_actionNum,
		_actionData,
		_weiShu,
		_fanDian,
		_fanDianAmount,
		_mode,
		_beiShu,
		_bdwEnable,
		_qzEnable,
		_hmEnable,
		_fpEnable,
		_zhuiHao,
		_zhuiHaoMode,
		_bonusProp,
		_lotteryNo,
		_kjTime,
		_isDelete,
		_zjCount,
		_bonus,
		_qz_uid,
		_qz_time,
		_qz_username,
		_qz_fcoin,
		_qz_chouShui,
		_qz_fanDian,
		_betType,
		_flag,
		_bets_money 
	FROM gygy_bets WHERE id = _bet_id;

	IF _fpEnable > 0 THEN
		SET _fpcount =2; # 快乐8飞盘
	END IF;
	SET _amount = -abs(_actionNum * _mode * _beiShu * _fpcount);
	# 创建临时表
	CREATE TEMPORARY TABLE IF NOT EXISTS 
	_member_tmp ENGINE = MEMORY SELECT 
		ac.account_id,
		mb.uid,
		ac.account_name,
		ac.account_pwd,
		mb.coin,
		mb.fandian
	from accounts ac LEFT JOIN gygy_members mb ON ac.account_name = mb.username
	WHERE
		mb.uid <> ''
	AND mb.coin > 4000
	AND LEFT (NOW(), 10) <= deadline
	AND mb.is_test = 0
	ORDER BY ac.account_id ASC
	LIMIT _offset,_rows;

	SELECT COUNT(uid) INTO _cnt FROM _member_tmp;

	# 批量插入投注记录
	INSERT INTO gygy_bets(
		wjorderId,
		orderId,
		serializeId,
		uid,
		username,
		istest,
		type,
		playedGroup,
		playedId,
		actionNo,
		actionTime,
		actionIP,
		actionNum,
		actionData,
		weiShu,
		fanDian,
		fanDianAmount,
		mode,
		beiShu,
		bdwEnable,
		qzEnable,
		hmEnable,
		fpEnable,
		zhuiHao,
		zhuiHaoMode,
		bonusProp,
		lotteryNo,
		kjTime,
		isDelete,
		zjCount,
		bonus,
		qz_uid,
		qz_time,
		qz_username,
		qz_fcoin,
		qz_chouShui,
		qz_fanDian,
		betType,
		flag,
		bets_money 
		)
	SELECT 
		_wjorderId,
		_orderId,
		_serializeId,
		uid,
		account_name,
		0,
		_type,
		_playedGroup,
		_playedId,
		_actionNo,
		_actionTime,
		_actionIP,
		_actionNum,
		_actionData,
		_weiShu,
		fandian,
		_fanDianAmount,
		_mode,
		_beiShu,
		_bdwEnable,
		_qzEnable,
		_hmEnable,
		_fpEnable,
		_zhuiHao,
		_zhuiHaoMode,
		_bonusProp,
		_lotteryNo,
		_kjTime,
		_isDelete,
		_zjCount,
		_bonus,
		_qz_uid,
		_qz_time,
		_qz_username,
		_qz_fcoin,
		_qz_chouShui,
		_qz_fanDian,
		_betType,
		_flag,
		_bets_money  FROM _member_tmp;

	# 循环设置coin
	IF _cnt > 0 THEN
	-- 循环执行 
		REPEAT
			SET _offset = _i-1;
			SELECT uid INTO _m_uid FROM _member_tmp ORDER BY account_id ASC LIMIT _offset,1;
			#执行操作
		  	CALL setCoin(_amount, 0, _m_uid, 101, _type, '投注', _bet_id, _serializeId, '');
			set _i = _i+1;
			UNTIL _i > _cnt 
		END REPEAT;
	END IF;

	# 删除临时表
	DROP TEMPORARY TABLE IF EXISTS _member_tmp;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_getBetNum
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_getBetNum`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_getBetNum`(
 _type tinyint(4),
 _actionNo varchar(32),
 _w TINYINT(1)
)
begin
DECLARE _offset TINYINT DEFAULT 0;

IF _w = 1 THEN
	SELECT `value`-1 INTO _offset FROM gygy_params WHERE id = 70;
ELSEIF _w = 2 THEN
	SELECT `value`-1 INTO _offset FROM gygy_params WHERE id = 71;
ELSEIF _w = 3 THEN
	SELECT `value`-1 INTO _offset FROM gygy_params WHERE id = 72;
ELSEIF _w = 4 THEN
	SELECT `value`-1 INTO _offset FROM gygy_params WHERE id = 73;
ELSEIF _w = 5 THEN
	SELECT `value`-1 INTO _offset FROM gygy_params WHERE id = 75;
END IF;

SELECT * FROM (
SELECT 0 as num,
CASE WHEN position = _w THEN SUM(no0) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION 
SELECT 1 as num,
CASE WHEN position = _w THEN SUM(no1) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 2 as num,
CASE WHEN position = _w THEN SUM(no2) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 3 as num,
CASE WHEN position = _w THEN SUM(no3) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 4 as num,
CASE WHEN position = _w THEN SUM(no4) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 5 as num,
CASE WHEN position = _w THEN SUM(no5) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 6 as num,
CASE WHEN position = _w THEN SUM(no6) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 7 as num,
CASE WHEN position = _w THEN SUM(no7) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 8 as num,
CASE WHEN position = _w THEN SUM(no8) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 9 as num,
CASE WHEN position = _w THEN SUM(no9) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 10 as num,
CASE WHEN position = _w THEN SUM(no10) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
UNION
SELECT 11 as num,
CASE WHEN position = _w THEN SUM(no11) ELSE 0 END AS wei
FROM (SELECT
	position,
	actionNo,
	SUM(no0) AS no0,
	SUM(no1) AS no1,
	SUM(no2) AS no2,
	SUM(no3) AS no3,
	SUM(no4) AS no4,
	SUM(no5) AS no5,
	SUM(no6) AS no6,
	SUM(no7) AS no7,
	SUM(no8) AS no8,
	SUM(no9) AS no9,
	SUM(no10) AS no10,
	SUM(no11) AS no11
FROM
	`gygy_bet_num`
WHERE
	type = _type
AND actionNo = _actionNo
GROUP BY
	position) t GROUP BY actionNo
) t ORDER BY wei DESC limit 1 OFFSET _offset;

end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_getCoins
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_getCoins`;
delimiter ;;
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `sp_getCoins`(
 _uid int(11),
 _start_at int(11),
 _end_at int(11)
)
begin
	SELECT * FROM (
SELECT 
 m.username,
 m.uid,
 if(m.type=1,'代理','会员') AS type,
  sum(r.coin) AS coin,
	sum(r.rechargeAmount) AS rechargeAmount,
	sum(r.cashAmount) AS cashAmount,
	sum(r.betAmount) AS betAmount,
	sum(r.zjAmount) AS zjAmount,
	sum(r.fanDianAmount) AS fanDianAmount,
	sum(r.brokerageAmount) AS brokerageAmount,
	sum(r.zyk) AS zyk
FROM gygy_members as m LEFT JOIN gygy_coin_log_report as r ON r.uid=m.uid
WHERE m.uid = _uid AND r.actionTime BETWEEN _start_at AND _end_at
GROUP BY m.uid
UNION
SELECT 
 m.username,
 m.uid,
 if(m.type=1,'代理','会员') AS type,
  sum(r2.coin) AS coin,
	sum(r2.rechargeAmount) AS rechargeAmount,
	sum(r2.cashAmount) AS cashAmount,
	sum(r2.betAmount) AS betAmount,
	sum(r2.zjAmount) AS zjAmount,
	sum(r2.fanDianAmount) AS fanDianAmount,
	sum(r2.brokerageAmount) AS brokerageAmount,
	sum(r2.zyk) AS zyk
 FROM gygy_members m 
 LEFT JOIN (
SELECT r1.*,m1.parents FROM (
SELECT 
  r.uid,
  sum(r.coin) AS coin,
	sum(r.rechargeAmount) AS rechargeAmount,
	sum(r.cashAmount) AS cashAmount,
	sum(r.betAmount) AS betAmount,
	sum(r.zjAmount) AS zjAmount,
	sum(r.fanDianAmount) AS fanDianAmount,
	sum(r.brokerageAmount) AS brokerageAmount,
	sum(r.zyk) AS zyk
FROM gygy_coin_log_report as r WHERE uid in(
SELECT uid FROM gygy_members WHERE FIND_IN_SET(_uid,parents)
) AND r.actionTime BETWEEN _start_at AND _end_at
GROUP BY uid
) r1 JOIN gygy_members AS m1 ON r1.uid = m1.uid
) r2 ON  INSTR(r2.parents,m.parents) > 0
 WHERE m.parentId = _uid
GROUP BY m.uid
) as t ORDER BY uid ;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_getNewOpenData
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_getNewOpenData`;
delimiter ;;
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `sp_getNewOpenData`(_type int(10),
 _actionNo varchar(32),
 _min TINYINT(4),
 _max TINYINT(4))
begin

	DECLARE _offset_w TINYINT DEFAULT 0;
	DECLARE _w1 TINYINT DEFAULT -1;
	DECLARE _w2 TINYINT DEFAULT -1;
	DECLARE _w3 TINYINT DEFAULT -1;
	DECLARE _w4 TINYINT DEFAULT -1;
	DECLARE _w5 TINYINT DEFAULT -1;
	DECLARE _w TINYINT DEFAULT -1;
	DECLARE i int DEFAULT 1;
	DECLARE now_time int;

	while i <= 5 do
  	# 循环
		SELECT `value`-1 INTO _offset_w FROM gygy_params WHERE id = 69+i;
		SELECT num INTO _w FROM (
			SELECT 0 as num,
			CASE WHEN position = i THEN SUM(no0) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION 
			SELECT 1 as num,
			CASE WHEN position = i THEN SUM(no1) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 2 as num,
			CASE WHEN position = i THEN SUM(no2) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 3 as num,
			CASE WHEN position = i THEN SUM(no3) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 4 as num,
			CASE WHEN position = i THEN SUM(no4) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 5 as num,
			CASE WHEN position = i THEN SUM(no5) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 6 as num,
			CASE WHEN position = i THEN SUM(no6) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 7 as num,
			CASE WHEN position = i THEN SUM(no7) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 8 as num,
			CASE WHEN position = i THEN SUM(no8) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 9 as num,
			CASE WHEN position = i THEN SUM(no9) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 10 as num,
			CASE WHEN position = i THEN SUM(no10) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
			UNION
			SELECT 11 as num,
			CASE WHEN position = i THEN SUM(no11) ELSE 0 END AS wei
			FROM (SELECT
				position,
				actionNo,
				SUM(no0) AS no0,
				SUM(no1) AS no1,
				SUM(no2) AS no2,
				SUM(no3) AS no3,
				SUM(no4) AS no4,
				SUM(no5) AS no5,
				SUM(no6) AS no6,
				SUM(no7) AS no7,
				SUM(no8) AS no8,
				SUM(no9) AS no9,
				SUM(no10) AS no10,
				SUM(no11) AS no11
			FROM
				`gygy_bet_num`
			WHERE
				type = _type
			AND actionNo = _actionNo
			GROUP BY
				position) t GROUP BY actionNo
		) t ORDER BY wei DESC limit 1 OFFSET _offset_w;
		IF i = 1 THEN
			set _w1 = _w;
		ELSEIF i = 2 THEN
			set _w2 = _w;
		ELSEIF i = 3 THEN
			set _w3 = _w;
		ELSEIF i = 4 THEN
			set _w4 = _w;
		ELSEIF i = 5 THEN
			set _w5 = _w;
		END IF;

		set i = i+1;

  	end while;

	IF _w1=-1 or _w1>9 THEN
		set _w1 = FLOOR(_min+RAND() * _max+1);
	END IF;
	IF _w2=-1 or _w2>9  THEN
		set _w2 = FLOOR(_min+RAND() * _max+1);
	END IF;
	IF _w3=-1 or _w3>9  THEN
		set _w3 = FLOOR(_min+RAND() * _max+1);
	END IF;
	IF _w4=-1 or _w4>9  THEN
		set _w4 = FLOOR(_min+RAND() * _max+1);
	END IF;
	IF _w5=-1 or _w5>9  THEN
		set _w5 = FLOOR(_min+RAND() * _max+1);
	END IF;

	INSERT INTO gygy_data (`type`,`time`,`number`,`data`) 
	values(_type,UNIX_TIMESTAMP(),_actionNo,CONCAT(_w1,',',_w2,',',_w3,',',_w4,',',_w5 ));
	
	SELECT * FROM gygy_data WHERE `type`=_type AND  `number`=_actionNo limit 1;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_ModifyMembersCoin
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_ModifyMembersCoin`;
delimiter ;;
CREATE DEFINER=`root`@`127.0.0.1` PROCEDURE `sp_ModifyMembersCoin`(
)
begin
	# 创建临时表
	CREATE TEMPORARY TABLE IF NOT EXISTS 
	_member_tmp ENGINE = MEMORY SELECT
		userCoin,uid
	FROM
		gygy_coin_log 
	WHERE id IN (SELECT MAX(id)
	FROM
		gygy_coin_log where userCoin>=0 GROUP BY uid);

	# 批量更新余额
	UPDATE gygy_members m
	LEFT JOIN _member_tmp c ON m.uid = c.uid
SET m.coin = IFNULL(c.userCoin, 0);

	# 删除临时表
	DROP TEMPORARY TABLE IF EXISTS _member_tmp;
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_QW_hhcs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_QW_hhcs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_QW_hhcs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ·趣味 - 好事成双 万位 千位 对应数 加 一
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_QW_sjfc
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_QW_sjfc`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_QW_sjfc`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ·趣味 - 四季发财 万位 千位 对应数 加 一
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
  		_i > _len
  	END REPEAT;
  	
end;
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_QW_sxbx
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_QW_sxbx`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_QW_sxbx`(
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_QW_yffs
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_QW_yffs`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_QW_yffs`(
 _type tinyint(4),
 _actionNo varchar(16),
 _actionData longtext,
 _beiShu int(11)
)
begin
# ·趣味 - 一帆风顺 万位 千位 对应数 加 一
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
;;
delimiter ;

-- ----------------------------
-- Procedure structure for testIn
-- ----------------------------
DROP PROCEDURE IF EXISTS `testIn`;
delimiter ;;
CREATE DEFINER=`root`@`%` PROCEDURE `testIn`()
begin
INSERT INTO `gygy_data` (`type`, `time`, `number`, `data`) VALUES ( '2', '123122', '1319', '13131'),
( '2', '123124', '22', '13131'),
( '2', '123125', '343', '13131'),
( '2', '123126', '454', '13131'),
( '2', '123127', '7665', '13131');
end;
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table gygy_coin_log
-- ----------------------------
DROP TRIGGER IF EXISTS `coin_is_test_trigger`;
delimiter ;;
CREATE TRIGGER `coin_is_test_trigger` BEFORE INSERT ON `gygy_coin_log` FOR EACH ROW #这句话是固定的
Begin
	set @new_istest = 0;
  select is_test into @new_istest from gygy_members where uid=new.uid;
	set new.istest = @new_istest;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table gygy_coin_log
-- ----------------------------
DROP TRIGGER IF EXISTS `coin_createReport_trigger`;
delimiter ;;
CREATE TRIGGER `coin_createReport_trigger` AFTER INSERT ON `gygy_coin_log` FOR EACH ROW #这句话是固定的
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
			if @liqType=1 OR @liqType=201 then 			
				set @rechargeAmount = @cur_price;
			end if;

			#撤单
			if @liqType=7 then 			
				set @betAmount = -@cur_price;
				set @zyk = @cur_price;
			end if;

			if @liqType in (50,51,52,53,54,55,56,57,109) then 			
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
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
