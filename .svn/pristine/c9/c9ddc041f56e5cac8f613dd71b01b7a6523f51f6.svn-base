// JavaScript Document

/*
*获取地址栏参数
*/
function getUrlPar(strName) {
    var svalue = location.search.match(new RegExp("[\?\&]" + strName + "=([^\&]*)(\&?)", "i"));
    return svalue ? svalue[1] : svalue;
}
function init() {
	$("#newsList li:odd").addClass("odd"); // 奇
	$("#newsList li:even").addClass("even"); // 偶
	
	$(".formTable tr:odd").addClass("odd"); // 奇
	$(".formTable tr:even").addClass("even"); // 偶
	
	$(".grayTable tr th:first-child").css("borderLeft","1px solid #D5D8DE");
	$(".grayTable tr td:first-child").css("borderLeft","1px solid #EFEFEF");
	$(".grayTable tr td:last-child").css("borderRight","1px solid #EFEFEF");
};



function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(init);
