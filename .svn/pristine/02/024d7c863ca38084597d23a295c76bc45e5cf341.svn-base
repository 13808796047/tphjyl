var http = require('http');
var url = require('url');
var parse=require('./kj-data/parse-calc-count_new.js');
var querystring = require('querystring');
var mysql=require('mysql');
var encrypt_key='cc40bfe6d972ce96fe3a47d0f7342cb0'; 
global.played={};

var dbinfo={
    host:'218.93.206.95',
    user:'hj_rw',
    password:'BFn4y6tckaETAmexrrr0',
    database:'hjyl',
    port: '3306'
};



//创建数据库连接
function createMySQLClient(){
    try{
        return mysql.createClient(dbinfo);
    }catch(err){
        console.log('连接数据库失败：'+err);
        return false;
    }
}

//http://localhost:3000/detail?type=36&number=20170603-1656&data=5,5,2,1,3

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    res.writeHead(404, {
        'Content-Type': 'application/json;charset=utf-8;'
    });
    var query = querystring.parse(url.parse(req.url).query);
    var data = {
        'type':query.type,
        'number':query.number,
        'data':query.data
    };
    var client=createMySQLClient();
	client.query("select id, ruleFun from gygy_played", function(err, data){
        if(err){
            console.log('读取玩法配置出错：'+err.message);
            res.write("读取玩法配置出错：" +err.message);
            res.end();
        }else{
            data.forEach(function(v){
                played[v.id]=v.ruleFun;
                global.played[v.id]=v.ruleFun;
            });
        }
    });

    var sql="select id,playedId,weiShu,actionNum,actionData  from gygy_bets where type=? and actionNo=? and isDelete=0 and lotteryNo=''";
    console.log(sql);
    client.query(sql, [data.type, data.number], function(err, bets){
        if(err){
            console.log("读取投注出错："+err);
            res.write("读取投注出错：" + err);
            res.end();
        }else{
            var sql, sqls=[];
            sql='call kanJiang(?, ?, ?, ?)';
            console.log('***kanJiang*** strat '+ data.number);
            bets.forEach(function(bet){
                var fun;
                try{
                    fun=parse[played[bet.playedId]];
                    //console.log(played[bet.playedId]);
                    if(typeof fun!='function') throw new Error('算法不是可用的函数');
                }catch(err){
                    console.log('计算玩法'+bet.playedId+'中奖号码算法不可用：'+err.message);
                    res.write('计算玩法'+bet.playedId+'中奖号码算法不可用：'+err.message);
                    res.end();
                    return;
                }

                try{

                    var zjCount=fun(bet.actionData, data.data, bet.weiShu)||0;
                    //console.log('zjCount:' + zjCount);
                }catch(err){
                    console.log('计算中奖号码时出错：'+err);
                    res.write('计算中奖号码时出错：'+err);
                    res.end();
                    return;
                }
                sqls.push(client.format(sql, [bet.id, zjCount, data.data, 'ssc-'+encrypt_key]));
            });
            try{
                if(sqls.length==0){
                    console.log('彩种'+data.type+'第'+data.number+'期没有未兑奖投注');
                    res.write('彩种'+data.type+'第'+data.number+'期没有未兑奖投注');
                    res.end();
                    return ;
                }
                //console.log(sqls);
                var clients=createMySQLClient();
                clients.query(sqls.join(';'), function(err,result){
                    var msg = '派奖成功'+ data.number;
                    if(err){
                        console.log('派奖失败  '+ data.number );
                    }
                    res.write(msg);
                    res.end();
                    return ;
                });

                clients.end();
                return ;
                console.log('***kanJiang*** end   '+data.number +' '+data.data);

            }catch(err){
                console.log(err);
                console.log('???kanJiang*** Error :'+data.data);
                res.write('???kanJiang*** Error :'+data.data);
                res.end();
            }
        }
    });
    client.end();
}).listen(3000);

console.log('[Server Info] Start server at http://localhost:3000/');
