var mysql=require('mysql');
var parse=require('./kj-data/parse-calc-count_new.js');
var played={};
var Sy15=2.50;//最大亏损80%
var Sy30=0.20;//最大盈利20%
var TZ=0;//投注金额 小于1500元的直接开奖号
var BS=95;//投注倍数

var wfGaiLv=80;
var wfFullData;
var efFullData={
		type:0,
		time:'',
		number:'',
        data:''};

// 提前多少秒开奖 建议不值为1-3秒 不得小于等于0
exports.openBeforTime=1; //提前2秒
// 出错时等待 15
exports.errorSleepTime=1; //等待5秒

// 时间监听执行间隔 
exports.runEveryTime=2; //等待5秒

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
global.kjjg = 3; //控制开奖间隔周期
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

exports.submit={
	host:"yhyl19.com",
	path:'/wjadmin.php/dataSource/kj'
}
/*
exports.dbinfo={
	host:'127.0.0.1',
	user:'root',
	password:'root',
	database:'hjyl'
}
*/

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
	{   type:46,
		title:'皇家龙凤',
		source:'官网0',
		name:'hjlf',
		enable:true,
		timer:'hjlf',
		Intervals:1,//提前多少秒启动任务
		LastactionNo:'',//防止重复执行的冗余字段， 不要管不要改	
		option:{//时间执行配置
			//hostname:"www.yhyl.com",
			hostname:"www.tpppay.cn",
			port: 80,
			timeout:10000,
			method: 'GET',
			path: '/getinfo?type=46', //'/time.json'//  // Info0 定义在D:\webroot\lafei\Application\Home\Controller\WufencaiController.class.php 
			headers:{
				"user-agent": "mozilla/5.0 (windows; u; windows nt 5.2) applewebkit/525.13 (khtml, like gecko) chrome/0.2.149.27 safari/525.13"
			 }
		},
		actionoption:{//任务执行配置
			//hostname:"www.yhyl.com",
			hostname:"www.tpppay.cn",
			port: 80,
			timeout:10000,
			method: 'GET',
			path: '/getinfo?type=46', //'/time.json'//  // Info0 定义在D:\webroot\lafei\Application\Home\Controller\WufencaiController.class.php 
			headers:{
				"user-agent": "mozilla/5.0 (windows; u; windows nt 5.2) applewebkit/525.13 (khtml, like gecko) chrome/0.2.149.27 safari/525.13"
			 }
		},
		parse:getFromWANJINYULE
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



//自主彩开奖
function getFromWANJINYULE(str, type,config,submitData,calcJ,restartTask){
	//console.log('str:'+JSON.stringify(str));
    console.log(' {'+type+'}  ** 开始生成开奖号 **');
	try{
		
		var client=mysql.createClient(exports.dbinfo);
		
	}catch(err){
		throw('连接数据库失败');
	}			
    
/* 	var jd = JSON.parse(str);
	
	var match = [];
	match[1] = jd.actionNo;
	match[2] = jd.orderID;
	match[3] = jd.actionTime;
	match[4] = 1; */
	//console.log('str1:'+str.actionNo);
	//console.log('str2:'+str.orderID);
	//console.log('str3:'+str.actionTime);
	var match = [];
	match[1] = str.actionNo;
	match[2] = str.orderID;
	match[3] = str.actionTime;
	match[4] = 1;	
	console.log('五分彩:'+match[2]);
	//if( wfNo!=match[1] && efNo!=match[1]){
	//console.log(" ** 读取121 **："+efNo[type]);	
	//console.log(" ** 读取1231 **："+match[1]);	
    if( efNo[type]!=match[1]){
		//console.log(" ** 读取match[1] **："+match[1]);
		sql="select * from gygy_bets where type=? and actionNo=? and isDelete=0 and lotteryNo='' and istest=0";
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
				var mydata=GetRandomNum(0,1);
				var long=0;
				var feng=0;
				var all=0;
				bets.forEach(function(bet){//forEach枚举计算每一笔投注返奖金额
					console.log('投注:'+bet.actionNum*bet.mode*bet.beiShu);						
				
					if(bet.actionData == '0'){
						long = bet.bonusProp * bet.actionNum * bet.beiShu * bet.mode/2;
					}
					
					if(bet.actionData == '1'){
						feng = bet.bonusProp * bet.actionNum * bet.beiShu * bet.mode/2;
					}
					all =bet.mode*bet.beiShu*bet.actionNum;                //投注总额  bet.mode(模式)*bet.beiShu(倍数)*bet.actionNum(注数)=投注总额

				});
				if(all > TZ){ // 投注总额大于控制数 开返奖少的
					mydata = long < feng ? '0' : '1';
				}
				efFullData = {
								type:type,
								time:mytime,
								number:match[1],
								data:mydata
							};
				
			   console.log('cfg第'+efFullData.number+'开奖号码：'+efFullData.data);
			   submitData(efFullData,config,calcJ);//将开奖号码写入数据库中
			} 				
		});
	}else{
		   var data={
		   type:'',
		   time:'',
		   number:'',
		   data:''
		  }		
	  }
	

	client.end();
	return efFullData;
	
}

//随机数 GetRandomNum(0,9);   
function GetRandomNum(Min,Max)
{   
	var Range = Math.floor(Math.random()*(Max+1)); 
	return Range; 
}    



