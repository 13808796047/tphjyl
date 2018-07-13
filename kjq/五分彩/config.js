var mysql=require('mysql');
var parse=require('./kj-data/parse-calc-count_new.js');
var played={};
var Sy15=2.50;//最大亏损80%
var Sy30=0.20;//最大盈利20%
var TZ=50;//投注金额 
var BS=200;//投注倍数
var xyWin=800;//返奖小于1500元的直接开奖号
var goCs=20;//最多取20个号码来判断是符合开奖条件
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
	host:"www.tpppay.cn",
	path:'/wjadmin.php/dataSource/kj'
}

exports.dbinfo={
	host:"www.tpppay.cn",
	user:'hj_rw',
	password:'BFn4y6tckaETAmexrrr0',
	database:'lafei1' 

}*/
exports.submit={

	host:'192.168.21.10',
	path:'/wjadmin.php/dataSource/kj'
}

exports.dbinfo={
	host:'36.42.72.117',
	user:'hj_root',
	password:'Hj256root',
	database:'hjyl'

}




// 彩票开奖配置
exports.cp=[
   	{   type:34,
		title:'二分彩',
		source:'官网',
		name:'efssc',
		enable:false,
		timer:'efssc', 
		Intervals:1,//提前多少秒启动任务
		LastactionNo:'',//防止重复执行的冗余字段， 不要管不要改
		option:{
			hostname:"taapay.cn",
			port: 80,
			timeout:10000,
			method: 'GET',
			path: '/getinfo?type=34', //'/time.json'//  // Info0 定义在D:\webroot\lafei\Application\Home\Controller\WufencaiController.class.php 
			headers:{
				"user-agent": "mozilla/5.0 (windows; u; windows nt 5.2) applewebkit/525.13 (khtml, like gecko) chrome/0.2.149.27 safari/525.13"
			 }
		},
		actionoption:{//任务执行配置
			hostname:"taapay.cn",
			port: 80,
			timeout:10000,
			method: 'GET',
			path: '/getinfo?type=34', //'/time.json'//  // Info0 定义在D:\webroot\lafei\Application\Home\Controller\WufencaiController.class.php 
			headers:{
				 "user-agent": "mozilla/5.0 (windows; u; windows nt 5.2) applewebkit/525.13 (khtml, like gecko) chrome/0.2.149.27 safari/525.13"
			 }
		},				
		
		parse:getFromWANJINYULE
	},
	{   type:14,
		title:'五分彩',
		source:'官网',
		name:'qtllc',
		enable:false,
		timer:'qtllc', 
		Intervals:1,//提前多少秒启动任务
		LastactionNo:'',//防止重复执行的冗余字段， 不要管不要改
		option:{
			hostname:"taapay.cn",
			port: 80,
			timeout:10000,
			method: 'GET',
			path: '/getinfo?type=14', //'/time.json'//  // Info0 定义在D:\webroot\lafei\Application\Home\Controller\WufencaiController.class.php 
			headers:{
				"user-agent": "mozilla/5.0 (windows; u; windows nt 5.2) applewebkit/525.13 (khtml, like gecko) chrome/0.2.149.27 safari/525.13"
			 }
		},
		actionoption:{//任务执行配置
			hostname:"taapay.cn",
			port: 80,
			timeout:10000,
			method: 'GET',
			path: '/getinfo?type=14', //'/time.json'//  // Info0 定义在D:\webroot\lafei\Application\Home\Controller\WufencaiController.class.php 
			headers:{
				 "user-agent": "mozilla/5.0 (windows; u; windows nt 5.2) applewebkit/525.13 (khtml, like gecko) chrome/0.2.149.27 safari/525.13"
			 }
		},			
		parse:function(str){
			console.log('*****【5分彩-开始parse解析】*****')
			try{
				return getFromWANJINYULE(str,14);
			}catch(err){
				throw('5分彩解析数据不正确');
			}
		}
	}

];



global.log=function(log){
	var date=new Date();
	console.log('['+date.toDateString() +' '+ date.toLocaleTimeString()+'] '+log)
}
function getFromXJFLCPWeb(str, type){
	str=str.substr(str.indexOf('<strong>时时彩</strong>'), 300).replace(/[\r\n]+/g,''); 
	
	if(!str) throw new Error('数据不正确');
	var number = str.substr(str.indexOf('第')+1,10);
	
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	
	str=str.substr(str.indexOf('ballWrap')+10, 200).replace(/[^0-9]/ig,"");
	//console.log(str);    
	var data= str.split('').join(',');
	console.log('期号：%s，开奖时间：%s，开奖数据：%s', number, mytime, data);
	
	try{
		var data={
			type:type,
			time:mytime,
			number:number.replace(/^(\d{8})(\d{2})$/, '$1-$2'),
			data:data
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}


function getFromCaileleWeb(str, type, slen){
	if(!slen) slen=580;
	str=str.substr(str.indexOf('<p class="cz_name_period">')+26,slen);
	var mynumber = str.substr(0,10);
	mynumber = mynumber.substr(0,8) + "-0" + mynumber.substr(8);
	var mytime = str.substr(str.indexOf('<span>')+6,16);
	
	var text = str.substr(str.indexOf('red_ball')+10,200);
	text = text.replace(/[^0-9]/ig,""); 
	//console.log(text);
	
	//var mynumber = str
	var reg=/<td.*?>(\d+)<\/td>[\s\S]*?<td.*?>([\d\- \:]+)<\/td>[\s\S]*?<td.*?>((?:[\s\S]*?<span class="red_ball">\d+<\/span>){3,5})\s*<\/td>/,
	match=str.match(reg);
	
	
		
	try{
		var data={
			type:type,
			time:mytime,
			number:mynumber,
			data:text.substr(0,2) + ","+text.substr(2,2) + ","+text.substr(4,2) + ","+text.substr(6,2) + ","+text.substr(8,2)
		}
		
		
		
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

function getFrom360CP(str, type){

	str=str.substr(str.indexOf('<em class="red" id="open_issue">'),380);
	//console.log(str);
	var reg=/[\s\S]*?(\d+)<\/em>[\s\S].*?<ul id="open_code_list">((?:[\s\S]*?<li class=".*?">\d+<\/li>){3,5})[\s\S]*?<\/ul>/,
	match=str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	//console.log(match);
	if(match.length>1){
		if(match[1].length==6) match[1]=year+match[1].replace(/(\d{4})(\d{2})/,'$1-0$2');
		if(match[1].length==7) match[1]=year+match[1].replace(/(\d{4})(\d{3})/,'$1-$2');
		if(match[1].length==8) match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-0$2');
		if(match[1].length==9) match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-$2');
		if(match[1].length==10) match[1]=match[1].replace(/(\d{8})(\d{2})/,'$1-0$2');
		var mynumber=match[1].replace(/(\d{8})(\d{3})/,'$1-$2');
		
		try{
			var data={
				type:type,
				time:mytime,
				number:mynumber
			}
			
			reg=/<li class=".*?">(\d+)<\/li>/g;
			data.data=match[2].match(reg).map(function(v){
				var reg=/<li class=".*?">(\d+)<\/li>/;
				return v.match(reg)[1];
			}).join(',');
			
			//console.log(data);
			return data;
		}catch(err){
			throw('解析数据失败');
		}
	}
}

function getFromPK10(str, type){

	str=str.substr(str.indexOf('<div class="lott_cont">'),350).replace(/[\r\n]+/g,'');
    //console.log(str);
	var reg=/<tr class=".*?">[\s\S]*?<td>(\d+)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>([\d\:\- ]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	try{
		var data={
			type:type,
			time:match[3],
			number:match[1],
			data:match[2]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
	
}

function getFromK8(str, type){

	str=str.substr(str.indexOf('<div class="lott_cont">'),450).replace(/[\r\n]+/g,'');
    //console.log(str);
	var reg=/<tr class=".*?">[\s\S]*?<td>(\d+)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>([\d\:\- ]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	try{
		var data={
			type:type,
			time:match[4],
			number:match[1],
			data:match[2]+'|'+match[3]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
	
}

function getFrom360CPK3(str, type){

	str=str.substr(str.indexOf('<em class="red" id="open_issue">'),380);
	//console.log(str);
	var reg=/[\s\S]*?(\d+)<\/em>[\s\S].*?<ul id="open_code_list">((?:[\s\S]*?<li class=".*?">\d+<\/li>){3,5})[\s\S]*?<\/ul>/,
	match=str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	//console.log(match);
	match[1]=match[1].replace(/(\d{4})(\d{2})/,'$1-0$2');
		
		try{
			var data={
				type:type,
				time:mytime,
				number:year+match[1]
			}
			
			reg=/<li class=".*?">(\d+)<\/li>/g;
			data.data=match[2].match(reg).map(function(v){
				var reg=/<li class=".*?">(\d+)<\/li>/;
				return v.match(reg)[1];
			}).join(',');
			
			//console.log(data);
			return data;
		}catch(err){
			throw('解析数据失败');
		}
}

function getFromCJCPWeb(str, type){

	//console.log(str);
	str=str.substr(str.indexOf('<table class="qgkj_table">'),1200);
	
	//console.log(str);
	
	var reg=/<tr>[\s\S]*?<td class=".*">(\d+).*?<\/td>[\s\S]*?<td class=".*">([\d\- \:]+)<\/td>[\s\S]*?<td class=".*">((?:[\s\S]*?<input type="button" value="\d+" class=".*?" \/>){3,5})[\s\S]*?<\/td>/,
	match=str.match(reg);
	
	//console.log(match);
	
	if(!match) throw new Error('数据不正确');
	try{
		var data={
			type:type,
			time:match[2],
			number:match[1].replace(/(\d{8})(\d{2})/,'$1-0$2')
		}
		
		reg=/<input type="button" value="(\d+)" class=".*?" \/>/g;
		data.data=match[3].match(reg).map(function(v){
			var reg=/<input type="button" value="(\d+)" class=".*?" \/>/;
			return v.match(reg)[1];
		}).join(',');
		
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
	
}

var wfFullData;
var efFullData;
var wfGaiLv=100;
// var wfNo[]='0';
// var efNo[]='0';

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
	console.log('自主彩开奖str:'+JSON.stringify(str));
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
	//console.log('str4:'+str.actionNo);

	wfGaiLv = getpl(match[2]);

	console.log(" ** 读取随机概率 **："+wfGaiLv);
	//if( wfNo!=match[1] && efNo!=match[1]){
	//console.log(" ** 读取121 **："+efNo[type]);	
	//console.log(" ** 读取1231 **："+match[1]);	
    if( efNo[type]!=match[1]){
		//console.log(" ** 读取match[1] **："+match[1]);
		sql="select * from gygy_bets where type=? and actionNo=? and isDelete=0 and lotteryNo='' and istest=0 and (mode>0.2 or actionNum*mode*beiShu>"+ TZ + " or beiShu>="+ BS +") ";
		//console.log (sql);
		client.query(sql, [type, match[1]], function(err, bets){
			if(err){
				log("???读取投注出错："+err);
			}else{				
				console.log("777");	
				var myDate = new Date();
				var year = myDate.getFullYear();       //年   
				var month = myDate.getMonth() + 1;     //月   
				var day = myDate.getDate();            //日
				if(month < 10) month="0"+month;
				if(day < 10) day="0"+day;
				console.log("88888");
				var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString(); 
				var mydata=GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9);
				var yingLv = GetRandomNum(0,100);//
				console.log("999999999");
				for(var go=0;go<100000;go++){
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
								console.log('投注:'+bet.actionNum*bet.mode*bet.beiShu);
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
							//if((all-all*Sy15) >win|| bets.length==0 || all<100 || win<100 || go>20){
							if((all+all*Sy15)>=win || bets.length==0 || win<xyWin || go>goCs){	
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
								mydata=GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9);
							}						
					}else{
						//控制//控制//控制//控制//控制//控制//控制//控制//控制//控制//控制//控制
						go=go+1;							
						var all=0;
						var win=0;
						bets.forEach(function(bet){//forEach枚举计算每一笔投注返奖金额
							var fun;
							//console.log('je:'+bet.actionNum*bet.mode*bet.beiShu);
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
							mydata=GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9);
					    }
					}
	                console.log('**<'+go+'> 投注：'+all + ' 返奖：' +win);
				}	
			console.log('12121cfg第'+efFullData.number+'开奖号码：'+efFullData.data);
				if(efFullData.number!='') {
					   console.log('cfg第'+efFullData.number+'开奖号码：'+efFullData.data);
					   submitData(efFullData,config,calcJ);//将开奖号码写入数据库中
					   kjdq = kjdq +1;
					}
					else
					{
					   console.log('生成开奖号码失败！data.number=空')>>Error.log;
					   restartTask(config, 10);//10毫秒后重启
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
		  }		
	  }
	

	client.end();
	console.log('你妹的');
	console.log(efFullData);
	return efFullData;
	
}

//随机数 GetRandomNum(0,9);   
function GetRandomNum(Min,Max)
{   
	// var Range = Max - Min;   
	// var Rand = Math.random();   
	// return(Min + Math.round(Rand * Range));   
	var Range = Math.floor(Math.random()*(Max+1)); 
	return Range; 
}    

function getOpenNumFor11x5(str, type){
    console.log('                                                         {'+type+'}  ** 开始生成开奖号 **');
	try{
		var client=mysql.createClient(exports.dbinfo);
	}catch(err){
		throw('连接数据库失败');
	}			

	var jd = JSON.parse(str);
	
	var match = [];
	match[1] = jd.actionNo;
	match[2] = jd.orderID;
	match[3] = jd.actionTime;
	match[4] = 1;

	wfGaiLv=match[2];

	console.log(" ** 读取随机概率 **："+wfGaiLv);
	if( wfNo!=match[1] && efNo!=match[1]){
		sql ="select * from gygy_bets where type=? and actionNo=? and isDelete=0 and lotteryNo=''";
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
				var mydata=GetRandomNum11x5(1,11)+','+GetRandomNum11x5(1,11)+','+GetRandomNum11x5(1,11)+','+GetRandomNum11x5(1,11)+','+GetRandomNum11x5(1,11);
				var yingLv = GetRandomNum(0,100);//获取从0-100 随机数,做为开奖方式的概率
				
				//控制盈亏													
				for(var go=0;go<1000000;go++){
					if(yingLv>wfGaiLv){//如果开奖概率大于{wfGaiLv=后台设置的开奖概率},则随机开号,小于的话{平台必须赢}
						console.log("概率:"+yingLv +" > "+wfGaiLv+" ，随机开号！");
						continue; //结束for
						
					}else{
						console.log("概率:"+yingLv +" <= "+wfGaiLv+" ，随机开号!"); 
						go=go+1;							
						var all=0;
						var win=0;
						bets.forEach(function(bet){//forEach枚举计算每一笔投注返奖金额
							var fun;
									
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
							if(bet.istest==0){
								win+=bet.bonusProp * zjCount * bet.beiShu * bet.mode/2;//返奖总额  bet.bonusProp(平台奖金) bet.mode=2分   bet.mode/2=1分
								all+=bet.mode*bet.beiShu*bet.actionNum;                //投注总额  bet.mode(模式)*bet.beiShu(倍数)*bet.actionNum(注数)=投注总额
							}
						});
						console.log(' ** 投注总额：'+all + '   返奖总额：' +win);
						if((all-all*0.1)>win || bets.length==0){
							continue;					//投注总额>返奖总额,则结束for				
						}
						else//投注总额<返奖总额,则重新生成"开奖号码"
							mydata=GetRandomNum11x5(1,11)+','+GetRandomNum11x5(1,11)+','+GetRandomNum11x5(1,11)+','+GetRandomNum11x5(1,11)+','+GetRandomNum11x5(1,11);
					}
					
					if(!match) throw new Error('数据不正确1');
					if(parseInt(match[4])==1){
						try{
								var data={
									type:type,
									time:mytime,
									number:match[1],
									data:mydata
								}
								
								// if(type==14)
								// {
									// wfFullData=data;
									// wfNo=match[1];
									// console.log('注意： config.js 712行 err!');
								// }
								// else
								// {
									efFullData=data;
									efNo=match[1];
									console.log('注意： config.js 718行 err!');
								// }
							}
							catch(err){
								throw('解析数据失败');
						}
				   }
				}		
			} 				
		});
	}
	
	client.end();
	if(type==14)
	{
		return wfFullData;
		console.log('注意： config.js 734行 err!');
	}
	else
	{
		return efFullData;
		console.log('注意： config.js 739行 err!');
	}
	
}

//随机数 GetRandomNum11x5(1,11);   
function GetRandomNum11x5(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	var Rand1=Min + Math.round(Rand * Range);
	if(Rand1 < 10) Rand1="0"+Rand1;
	return(Rand1);   
	
}    

//随机数 GetRandomNum(0,9);   
function GetRandomNum(Min,Max)
{   
	var Range = Math.floor(Math.random()*(Max+1)); 
	return Range; 
}  

