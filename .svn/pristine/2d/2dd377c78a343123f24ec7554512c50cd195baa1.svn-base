/**
 * Created by Hon on 2017/6/3 0003.
 */
var parse=require('./kj-data/parse-calc-count_new.js');
var mysql=require('mysql');
global.played={};
var time = 1; //执行次数
var encrypt_key = 'cc40bfe6d972ce96fe3a47d0f7342cb0';
var dbinfo={
    host:'218.93.206.95',
	user:'hj_rw',
	password:'BFn4y6tckaETAmexrrr0',
	database:'hjyl',
    port: '3306'
};
require('./String-ext.js');
//执行扫描开奖
kaiJiang();

function kaiJiang() {
    getPlayedFun(lotteryDraw);
    var restart = 3*60*1000;
    console.log('第'+time+'次执行');
    time++;
    setTimeout(kaiJiang,restart);
}

/**
 * 读取兑奖函数
 */
function getPlayedFun(callback) {
    if(JSON.stringify(played) == "{}"){
        var client= createMySQLClient();
        client.query("select id, ruleFun from gygy_played", function(err, data){
            if(err){
                console.log('读取玩法配置出错：'+err.message);
                client.end();
            }else{
                data.forEach(function(v){
                    played[v.id]=v.ruleFun;
                    global.played[v.id]=v.ruleFun;
                });
                callback();
            }
        });
        client.end();
    }else {
        callback();
    }
}

/**
 * 扫描开奖
 */
function lotteryDraw() {
    var sql="select b.username,b.id,b.playedId,b.weiShu,b.actionNum,b.actionData,b.type,b.actionNo,d.data  from gygy_bets as b " +
        "inner join gygy_data as d on b.type=d.type and b.actionNo=d.number " +
        "where b.isDelete=0 and b.lotteryNo='' and d.data<>'undefined,undefined,undefined,undefined,undefined'";
    console.log(sql);
    var client= createMySQLClient();
    client.query(sql, [], function(err, bets){
        if(err){
            console.log("读取投注出错："+err);
            client.end();
        }else{
            var sql, sqls=[],actionData=[];
            sql='call kanJiang(?, ?, ?, ?)';
            console.log('***kanJiang*** strat ');
            bets.forEach(function(bet){
                var fun;
                try{
                    fun=parse[played[bet.playedId]];
                    //console.log(played[bet.playedId]);
                    if(typeof fun!='function') throw new Error('算法不是可用的函数');
                }catch(err){
                    console.log('计算玩法'+bet.playedId+'中奖号码算法不可用：'+err.message);
                    client.end();
                    return;
                }
                //查询开奖号码
                try{
                    var zjCount=fun(bet.actionData, bet.data, bet.weiShu)||0;
                    console.log('zjCount:' + zjCount);
                }catch(err){
                    console.log('计算中奖号码时出错：'+err);
                    client.end();
                    return;
                }
                sqls.push(client.format(sql, [bet.id, zjCount, bet.data, 'ssc-'+encrypt_key]));
                actionData.push({username:bet.username,type:bet.type,number:bet.actionNo,data:bet.data});
            });
            try{
                if(sqls.length==0){
                    console.log('投注记录中没有未兑奖投注');
                    client.end();
                    return ;
                }

                client.query(sqls.join(';'), function(err,result){
                    var msg = '派奖成功';
                    if(err){
                        console.log('派奖失败102 :' +err);
                        client.end();
                    }
                    return ;
                });
                console.log('派奖成功期数');
                console.log(actionData);
                client.end();
                return ;

            }catch(err){
                console.log(err);
                console.log('???kanJiang*** Error :');
                console.log(actionData);
                client.end();
                return;
            }
        }
    });
}



//创建数据库连接
function createMySQLClient(){
    try{
        return mysql.createClient(dbinfo);
    }catch(err){
        console.log('连接数据库失败：'+err);
        return false;
    }
}