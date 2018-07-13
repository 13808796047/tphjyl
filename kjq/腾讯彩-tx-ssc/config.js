var mysql=require('mysql');
var parse=require('./kj-data/parse-calc-count_new.js');
var played={};
var Sy15=2.50;//最大亏损80%
var Sy30=0.20;//最大盈利20%
var TZ=1500;//投注金额 
var BS=2000;//投注倍数
var xyWin=1000;//返奖小于1500元的直接开奖号
var goCs=50;//最多取20个号码来判断是符合开奖条件
var wfGaiLv=50;
var wfFullData;
var efFullData={
		type:0,
		time:'',
		number:'',
        data:''};

// 提前多少秒开奖 建议不值为1-3秒 不得小于等于0
exports.openBeforTime=1; //提前2秒

// 出错时等待 15
exports.errorSleepTime=3; //等待5秒
exports.dosleep=40; //等待5秒

// 时间监听执行间隔 
exports.runEveryTime=3; //等待5秒

// 重启时间间隔，以小时为单位，0为不重启
//exports.restartTime=0.4;
//exports.restartTime={0};
exports.restartTime = {
	0: 300, //采集互联网进程5分钟重启一次
	1: 60, //采集本机进程1分钟重启一次
};

global.kjpl = [ 
	0,
	15,
	0,
	25,
	0,
	35,
	0,
	45,
	0,
	75,
	0,
	10,
	0,
	65,
	0,
	0,
	35,
	0,
	15
];
global.kjjg = 20; //控制开奖间隔周期
global.kjdq = 0;  //当前开奖间隔
global.kjjs = 0; //开奖计数

global.getpl = function (cpl) {
	if(cpl < 0){
		if(kjdq >= kjjg){
			kjdq = 0;
			kjjs = kjjs+1;
		}
		if(kjpl[kjjs] !== undefined){
				return kjpl[kjjs];
		}else{
			kjjs = 0;
			return kjpl[kjjs];
		}
		
	}else{
		return cpl;
	}
}
/* exports.submit={
	host:"192.168.21.10",
	path:'/wjadmin.php/dataSource/kj'
}

exports.dbinfo={
	host:"192.168.21.10",
	user:'hj_rw',
	password:'BFn4y6tckaETAmexrrr0',
	database:'lafei1' 

}*/


/*
// 皇家
exports.dbinfo={
	host:'218.93.206.95',
	user:'hj_rw',
	password:'BFn4y6tckaETAmexrrr0',
	database:'hjyl'

}*/

/*
// 银河
exports.dbinfo={
	host:'192.168.21.10',
	user:'lafeirw',
	password:'1Qazxsw2cvbnm,.?',
	database:'lafei1'

}*/


exports.dbinfo={
	host:'36.42.72.117',
	user:'hj_root',
	password:'Hj256root',
	database:'hjyl'
}

global.log=function(log){
	var date=new Date();
	console.log('['+date.toDateString() +' '+ date.toLocaleTimeString()+'] '+log)
}

// 彩票开奖配置
exports.cp=[
   {    type:43,
        title:'腾讯彩',
        source:'腾讯IM',
        name:'txffc',
        enable:true,
		dosleep:5,
        timer:'txffc',
        Intervals:1,//提前多少秒启动任务
        LastactionNo:'',//防止重复执行的冗余字段， 不要管不要改
        option:{
            hostname:"taapay.cn", //皇家
            // hostname:"yhyl19.com", //银河
            // hostname:"www.yhyl.com", //本地 http://www.tpppay.cn
            port: 80,
            timeout:10000,
            method: 'GET',
            path: '/gettxssc', //'/time.json'//  // Info0 定义在D:\webroot\lafei\Application\Home\Controller\WufencaiController.class.php
            // path: '/index.php?s=/home/kai/gettxssc', //'/time.json'//  // Info0 定义在D:\webroot\lafei\Application\Home\Controller\WufencaiController.class.php

            headers:{
                "user-agent": "mozilla/5.0 (windows; u; windows nt 5.2) applewebkit/525.13 (khtml, like gecko) chrome/0.2.149.27 safari/525.13"
            }
        },
		parse:function(str){
			console.log('抓取到开奖号码：'+str);
			try{
				var json = JSON.parse(str);
				var data={
					type:43,//ID
					time:json['time'],
					number:json['number'],
					data:json['data']
				};

				return data;
			}catch(err){
				throw('腾讯彩解析数据不正确');
			}
		}

    }	
];

var efNo = {
	'1':0,
	'2':0,
	'3':0,
	'5':0,
	'6':0,
	'9':0,
	'10':0,
	'12':0,
	'14':0,
	'15':0,
	'16':0,
	'17':0,
	'20':0,
	'24':0,
	'25':0,
	'34':0,
	'35':0,	
	'36':0,
	'37':0,
	'38':0,
	'39':0,
	'40':0,
	'41':0,
	'42':0,
	'43':0
};

var idx = 0;


//自主彩开奖
function getFromWANJINYULE(str, type,config,submitData,calcJ,restartTask,sbData){
	//console.log('config:'+JSON.stringify(config));
	str = JSON.parse(str);
    console.log(' {'+type+'}  ** 开始生成开奖号 **');
	try{
		
		var client=mysql.createClient(exports.dbinfo);
		
	}catch(err){
		throw('连接数据库失败');
	}
	try{	
	var match = [];
	match[1] = str.number;
	match[2] = str.wufencai;
	match[3] = str.actionTime;
	match[4] = 1;
	
	var minute = str.minute;
	var time = str.time;
	var nowTime = str.nowTime;
	if(!minute){
		restartTask(config,0,true);
		return ;
	}
	wfGaiLv = getpl(match[2]);

	console.log(" ** 读取随机概率 **："+wfGaiLv);
	console.log("efNo[type]:"+efNo[type]);
	console.log('match1:'+match[1]);
    if( efNo[type]!=match[1]){
		//console.log(" ** 读取match[1] **："+match[1]);
		sql="select * from gygy_bets where type=? and actionNo=? and isDelete=0 and lotteryNo='' and istest=0 and (mode>0.2 or actionNum*mode*beiShu>"+ TZ + " or beiShu>="+ BS +") ";
		//console.log (sql);
		client.query(sql, [type, match[1]], function(err, bets){
			if(err){
				log("???读取投注出错："+err);
			}else{					
				var myDate = new Date();
				var year = myDate.getFullYear();       //年   
				var month = myDate.getMonth() + 1;     //月   
				var day = myDate.getDate();            //日
				if(month < 10) month="0"+month;
				if(day < 10) day="0"+day;
				var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString(); 
				var mydata=getData(minute[0]);
				idx = 0;
				var yingLv = GetRandomNum(0,100);//
								
				for(var go=0;go<minute.length;go++){
					if(wfGaiLv==0){
						console.log("");
						console.log(" ** 随机生成 **");
						console.log("");
						var data={
								type:type,
								time:mytime,
								number:match[1],
								data:mydata
								}
							efFullData=data;
							efNo[type]=match[1];
						break;
					}
					else if(yingLv>wfGaiLv){//控制/随机
							go=go+1;							
							var all=0;
							var win=0;
							bets.forEach(function(bet){//forEach枚举计算每一笔投注返奖金额
								var fun;
								console.log('je:'+bet.actionNum*bet.mode*bet.beiShu);
							   //随机数							
								try{
									fun=parse[global.played[bet.playedId]];//从数据库获取计算函数
									if(typeof fun!='function') throw new Error('算法不是可用的函数');
								}catch(err){
									log('计算玩法[%f]中奖号码算法不可用：%s'.format(bet.playedId, err.message));
									return;
								}
										
								try{
									var zjCount=fun(bet.actionData, mydata, bet.weiShu)||0;//计算中奖金额
								}catch(err){
									log('计算中奖号码时出错：'+err);
									return;
								}
								
								win+=bet.bonusProp * zjCount * bet.beiShu * bet.mode/2;//返奖总额  bet.bonusProp(平台奖金) bet.mode=2分   bet.mode/2=1分
								all+=bet.mode*bet.beiShu*bet.actionNum;                //投注总额  bet.mode(模式)*bet.beiShu(倍数)*bet.actionNum(注数)=投注总额

							});
							//随机数
							if((all+all*Sy15) >win|| bets.length==0 || win<xyWin || go>goCs){
								var data={
										type:type,
										time:mytime,
										number:match[1],
										data:mydata
									}
								console.log('**['+go+'] 投注：'+all + ' 返奖：' +win);	
								efFullData=data;
								efNo[type]=match[1];							
								break;					//投注总额>返奖总额,则结束for				
							}
							else{
								mydata=getData(minute[go]);
								idx = go;
							}	
					}else{
						//控制//控制//控制//控制//控制//控制//控制//控制//控制//控制//控制//控制
						// go=go+1;							
						var all=0;
						var win=0;
						bets.forEach(function(bet){//forEach枚举计算每一笔投注返奖金额
							var fun;
							console.log('je:'+bet.actionNum*bet.mode*bet.beiShu);
							try{
								fun=parse[global.played[bet.playedId]];//从数据库获取计算函数
								if(typeof fun!='function') throw new Error('算法不是可用的函数');
							}catch(err){
								log('计算玩法[%f]中奖号码算法不可用：%s'.format(bet.playedId, err.message));
								return;
							}
									
							try{
								var zjCount=fun(bet.actionData, mydata, bet.weiShu)||0;//计算中奖金额
							}catch(err){
								log('计算中奖号码时出错：'+err);
								return;
							}
							
								win+=bet.bonusProp * zjCount * bet.beiShu * bet.mode/2;//返奖总额  bet.bonusProp(平台奖金) bet.mode=2分   bet.mode/2=1分
								all+=bet.mode*bet.beiShu*bet.actionNum;                //投注总额  bet.mode(模式)*bet.beiShu(倍数)*bet.actionNum(注数)=投注总额

						});
						//控制
						if((all-all*Sy30) >win|| bets.length==0 || win<xyWin || go>goCs){
							var data={
									type:type,
									time:mytime,
									number:match[1],
									data:mydata
								}
							console.log('**['+go+'] 投注：'+all + ' 返奖：' +win);	
							efFullData=data;
							efNo[type]=match[1];							
							break;					//投注总额>返奖总额,则结束for				
						}
						else{
							mydata=getData(minute[go]);
							idx = go;
					    }
					}
	
				}				
			
				if(efFullData.number!='') {
					   console.log('cfg第'+efFullData.number+'开奖号码：'+efFullData.data);
					   sbData(nowTime, efFullData['number'], efFullData['data'], minute[idx], time);
					   submitData(efFullData,config,calcJ);//将开奖号码写入数据库中
					   kjdq = kjdq +1;
					}
					else
					{
					   console.log('生成开奖号码失败！data.number=空')>>Error.log;
					   restartTask(config, 5);//10毫秒后重启
					}
			} 				
		});
	}
	  else{
		   var data={
		   type:'',
		   time:'',
		   number:'',
		   data:''
		  };	
		restartTask(config,config.dosleep,true);
	  }
	client.end();
	return efFullData;
	}catch(err){
		console.log('异常直接重启')
		restartTask(config,1,true);
	}
}

//随机数 GetRandomNum(0,9);   
function GetRandomNum(Min,Max)
{   
	var Range = Math.floor(Math.random()*(Max+1)); 
	return Range; 
}    

function getData(minute) {
	var mi = (minute+'').split('');
	var sum = 0;
	for(var i=0; i<mi.length;i++){
		sum = parseInt(sum) + parseInt(mi[i]);
	}
	sum = sum+'';
	minute = minute+'';
	console.log('sum:'+sum);
	console.log('minute:'+minute);
	var w = sum.substr(-1,1);
	var q = minute.substr(-4,1);
	var b = minute.substr(-3,1);
	var s = minute.substr(-2,1);
	var g = minute.substr(-1,1);
	var data = w+','+q+','+b+','+s+','+g;
	return data;
}


