var ud1 = document.getElementById("ud1"); //首页悬停显示菜单
var nav_ud = document.getElementById("nav_ud");
ud1.onmouseover = function() {
	nav_ud.style.display = "block"
	document.getElementById("ud_pic").className = "up_pic";
}
ud1.onmouseout = function() {
	nav_ud.style.display = "none"
	document.getElementById("ud_pic").className = "updown_pic";
}

//tab切换商品列表
var goods=["lenovo","ThinkPad","ipad"];
function showGoods(gid){
	for (var i = 0; i < goods.length; i++) {
		if(gid==i){
	document.getElementById(goods[i]).style.display="block";
	document.getElementById(goods[i]+"Hd").style.borderRightWidth="0px"
}else{
	document.getElementById(goods[i]).style.display="none";
	document.getElementById(goods[i]+"Hd").style.borderRightWidth="1px"
}
	}
	
	
}


// function showGoods(id) { //电脑 平板切换
// 
// 	var lenovo = document.getElementsByClassName("goodsList");
// 	for (var i = 0; i < lenovo.length; i++) {
// 		if (id == i) {
// 			lenovo[i].style.display = "block";
// 
// 		} else {
// 			lenovo[i].style.display = "none";
// 		}
// 	}
// }

//轮播图特效
//用于存放图片路径的的数组
var imgs=new Array();
imgs[0] = "image/scroll01.jpg";
imgs[1] = "image/scroll02.jpg";
imgs[2] = "image/scroll03.jpg";
imgs[3] = "image/scroll04.jpg";
imgs[4] = "image/scroll05.jpg";
imgs[5] = "image/scroll06.jpg";
//用于存放数字按钮的id
var nums=new Array();
nums[0] = "scrollNum1";
nums[1] = "scrollNum2";
nums[2] = "scrollNum3";
nums[3] = "scrollNum4";
nums[4] = "scrollNum5";
nums[5] = "scrollNum6";

var pic=document.getElementById("scrollImg");//获取要轮播的图片对象
var index=0;//表示图片在数组中的下标
function ScrollPic(pid){
	if (pid>=0){
		index=pid;	
		clearInterval(pst)
	}
	for (var i = 0; i < nums.length; i++) {
		var n=document.getElementById(nums[i]);
		if (i==index) {
			n.style.backgroundColor="red"
		}else{
			n.style.backgroundColor="black"
		}
	}
	pic.src=imgs[index];
	index++;
	if(index==imgs.length){
		index=0;
	}
}
ScrollPic()
var pst=setInterval(ScrollPic,2000)

//悬停显示隐藏上下页按钮
document.getElementById("scroll").onmouseover=function(){
	document.getElementById("pre").style.display="block";
	document.getElementById("next").style.display="block";
}
document.getElementById("scroll").onmouseout=function(){
	document.getElementById("pre").style.display="none";
	document.getElementById("next").style.display="none";
}

//上一张轮播图操作
document.getElementById("pre").onmouseover=function(){
	clearInterval(pst);
	this.onclick=function(){
		if (index==1) {
			index=imgs.length-1;
		}else if(index==0){
			index=imgs.length-2;
		}else{
			index-=2;
		}
		ScrollPic(index);
	}
}

//下一张轮播图操作
document.getElementById("next").onmouseover=function(){
	clearInterval(pst);
	this.onclick=function(){
		ScrollPic(index)
	}
}
//离开数字按钮重新启动轮播
function scroollNumOut(){
	pst=setInterval(ScrollPic,2000)
}
//离开上下页按钮重新启动轮播
document.getElementById("pre").onmouseout=function(){
	pst=setInterval(ScrollPic,2000)
}
document.getElementById("next").onmouseout=function(){
	pst=setInterval(ScrollPic,2000)
}


// var ttt = document.getElementById("scrollNum1")
// ttt.style.backgroundColor = "red";
// 
// function zbc() { //判断换图片 定时切换图片和小红点
// 
// 	var text = document.getElementById("scrollImg")
// 
// 	if (text.getAttribute("src") == "image/scroll01.jpg") { //判断为图片1时显示2图片
// 		text.setAttribute("src", "image/scroll02.jpg");
// 		var bbb = document.getElementById("scrollNum2");
// 		var ttt = document.getElementById("scrollNum1")
// 		bbb.style.backgroundColor = "red";
// 		ttt.style.backgroundColor = "black";
// 
// 	} else if (text.getAttribute("src") == "image/scroll02.jpg") {
// 		text.setAttribute("src", "image/scroll03.jpg");
// 		var bbb = document.getElementById("scrollNum2");
// 		var ccc = document.getElementById("scrollNum3");
// 		bbb.style.backgroundColor = "black";
// 		ccc.style.backgroundColor = "red";
// 
// 	} else if (text.getAttribute("src") == "image/scroll03.jpg") {
// 		text.setAttribute("src", "image/scroll04.jpg");
// 		var ccc = document.getElementById("scrollNum3");
// 		var ddd = document.getElementById("scrollNum4");
// 		ccc.style.backgroundColor = "black";
// 		ddd.style.backgroundColor = "red";
// 
// 	} else if (text.getAttribute("src") == "image/scroll04.jpg") {
// 		text.setAttribute("src", "image/scroll05.jpg");
// 		var ddd = document.getElementById("scrollNum4");
// 		var eee = document.getElementById("scrollNum5");
// 		ddd.style.backgroundColor = "black";
// 		eee.style.backgroundColor = "red";
// 
// 
// 	} else if (text.getAttribute("src") == "image/scroll05.jpg") {
// 		text.setAttribute("src", "image/scroll06.jpg");
// 		var eee = document.getElementById("scrollNum5");
// 		var fff = document.getElementById("scrollNum6")
// 		eee.style.backgroundColor = "black";
// 		fff.style.backgroundColor = "red";
// 
// 	} else {
// 		text.setAttribute("src", "image/scroll01.jpg");
// 		var fff = document.getElementById("scrollNum6")
// 		var ttt = document.getElementById("scrollNum1")
// 		fff.style.backgroundColor = "black";
// 		ttt.style.backgroundColor = "red";
// 	}
// }
// var nb = setInterval("zbc()", 1800);
// 
// function ScrollPic(id) { //点击小红点时，图片跟着变
// 	var text = document.getElementById("scrollImg");
// 	var aaa = document.getElementById("scrollNum1");
// 	if (id == 0) {
// 		text.setAttribute("src", "image/scroll01.jpg")
// 		aaa.style.backgroundColor = "red";
// 	} else {
// 		aaa.style.backgroundColor = "black";
// 	}
// 
// 	var bbb = document.getElementById("scrollNum2");
// 	if (id == 1) {
// 		text.setAttribute("src", "image/scroll02.jpg")
// 		bbb.style.backgroundColor = "red";
// 	} else {
// 		bbb.style.backgroundColor = "black";
// 	}
// 
// 	var ccc = document.getElementById("scrollNum3");
// 	if (id == 2) {
// 		text.setAttribute("src", "image/scroll03.jpg")
// 		ccc.style.backgroundColor = "red";
// 	} else {
// 		ccc.style.backgroundColor = "black";
// 	}
// 
// 	var ddd = document.getElementById("scrollNum4");
// 	if (id == 3) {
// 		text.setAttribute("src", "image/scroll04.jpg")
// 		ddd.style.backgroundColor = "red";
// 	} else {
// 		ddd.style.backgroundColor = "black";
// 	}
// 
// 	var eee = document.getElementById("scrollNum5");
// 	if (id == 4) {
// 		text.setAttribute("src", "image/scroll05.jpg")
// 		eee.style.backgroundColor = "red";
// 	} else {
// 		eee.style.backgroundColor = "black";
// 	}
// 	var eee = document.getElementById("scrollNum6");
// 	if (id == 5) {
// 		text.setAttribute("src", "image/scroll06.jpg")
// 		eee.style.backgroundColor = "red";
// 	} else {
// 		eee.style.backgroundColor = "black";
// 	}
// }
// 
// 
// var title = document.getElementById("scroll");
// var to = document.getElementById("pre") //获取左边的尖括号ID
// var tw = document.getElementById("next") //获取右边的尖括号ID	
// title.onmousemove = function() { //把尖括号鼠标悬浮显示
// 	to.style.display = "block"
// 	tw.style.display = "block"
// 	clearInterval(nb);
// 
// }
// title.onmouseout = function() { //把尖括号鼠标离开隐藏
// 	to.style.display = "none"
// 	tw.style.display = "none"
// 	nb = setInterval("zbc()", 1800);
// 
// }
// tw.onclick = function() { //右边的尖括号点击切换图片跟小红点
// 	var text = document.getElementById("scrollImg")
// 
// 	if (text.getAttribute("src") == "image/scroll01.jpg") {
// 		text.setAttribute("src", "image/scroll02.jpg");
// 		var bbb = document.getElementById("scrollNum2");
// 		var ttt = document.getElementById("scrollNum1")
// 		bbb.style.backgroundColor = "red";
// 		ttt.style.backgroundColor = "black";
// 
// 	} else if (text.getAttribute("src") == "image/scroll02.jpg") {
// 		text.setAttribute("src", "image/scroll03.jpg");
// 		var bbb = document.getElementById("scrollNum2");
// 		var ccc = document.getElementById("scrollNum3");
// 		bbb.style.backgroundColor = "black";
// 		ccc.style.backgroundColor = "red";
// 
// 	} else if (text.getAttribute("src") == "image/scroll03.jpg") {
// 		text.setAttribute("src", "image/scroll04.jpg");
// 		var ccc = document.getElementById("scrollNum3");
// 		var ddd = document.getElementById("scrollNum4");
// 		ccc.style.backgroundColor = "black";
// 		ddd.style.backgroundColor = "red";
// 
// 	} else if (text.getAttribute("src") == "image/scroll04.jpg") {
// 		text.setAttribute("src", "image/scroll05.jpg");
// 		var ddd = document.getElementById("scrollNum4");
// 		var eee = document.getElementById("scrollNum5");
// 		ddd.style.backgroundColor = "black";
// 		eee.style.backgroundColor = "red";
// 
// 
// 	} else if (text.getAttribute("src") == "image/scroll05.jpg") {
// 		text.setAttribute("src", "image/scroll06.jpg");
// 		var eee = document.getElementById("scrollNum5");
// 		var fff = document.getElementById("scrollNum6")
// 		eee.style.backgroundColor = "black";
// 		fff.style.backgroundColor = "red";
// 
// 	} else {
// 		text.setAttribute("src", "image/scroll01.jpg");
// 		var fff = document.getElementById("scrollNum6")
// 		var ttt = document.getElementById("scrollNum1")
// 		fff.style.backgroundColor = "black";
// 		ttt.style.backgroundColor = "red";
// 	}
// 
// }
// to.onclick = function() { //左边的尖括号点击切换图片跟小红点
// 	var text = document.getElementById("scrollImg")
// 
// 	if (text.getAttribute("src") == "image/scroll01.jpg") {
// 		text.setAttribute("src", "image/scroll06.jpg");
// 		var fff = document.getElementById("scrollNum6")
// 		var ttt = document.getElementById("scrollNum1")
// 		fff.style.backgroundColor = "red";
// 		ttt.style.backgroundColor = "black";
// 
// 	} else if (text.getAttribute("src") == "image/scroll06.jpg") {
// 		text.setAttribute("src", "image/scroll05.jpg");
// 		var fff = document.getElementById("scrollNum6")
// 		var eee = document.getElementById("scrollNum5");
// 		fff.style.backgroundColor = "black";
// 		eee.style.backgroundColor = "red";
// 
// 	} else if (text.getAttribute("src") == "image/scroll05.jpg") {
// 		text.setAttribute("src", "image/scroll04.jpg");
// 		var eee = document.getElementById("scrollNum5");
// 		var ddd = document.getElementById("scrollNum4");
// 		eee.style.backgroundColor = "black";
// 		ddd.style.backgroundColor = "red";
// 
// 	} else if (text.getAttribute("src") == "image/scroll04.jpg") {
// 		text.setAttribute("src", "image/scroll03.jpg");
// 		var ddd = document.getElementById("scrollNum4");
// 		var ccc = document.getElementById("scrollNum3");
// 		ddd.style.backgroundColor = "black";
// 		ccc.style.backgroundColor = "red";
// 
// 
// 	} else if (text.getAttribute("src") == "image/scroll03.jpg") {
// 		text.setAttribute("src", "image/scroll02.jpg");
// 		var bbb = document.getElementById("scrollNum2");
// 		var ccc = document.getElementById("scrollNum3");
// 		ccc.style.backgroundColor = "black";
// 		bbb.style.backgroundColor = "red";
// 
// 	} else if (text.getAttribute("src") == "image/scroll02.jpg") {
// 		text.setAttribute("src", "image/scroll01.jpg");
// 		var bbb = document.getElementById("scrollNum2");
// 		var ttt = document.getElementById("scrollNum1")
// 		bbb.style.backgroundColor = "black";
// 		ttt.style.backgroundColor = "red";
// 	}
// }
// 

function overhd(id) { //图片悬浮左右移动
	var right = document.getElementById("of_right");

	var stus = right.getElementsByTagName("dl");
	stus[id].children[0].getElementsByTagName("img")[0].style.cssText =
		"transform:translateX(30px);transition-duration:3s"
}

function showBl(id) { //图片悬浮左右移动停止
	var right = document.getElementById("of_right");

	var stus = right.getElementsByTagName("dl");
	stus[id].children[0].getElementsByTagName("img")[0].style.transform = "translateX(0px)"
}

function overh(id) { //图片旋转
	var rights = document.getElementById("tf_rights");
	var stus = rights.getElementsByTagName("dl");
	stus[id].children[0].getElementsByTagName("img")[0].style.cssText = "transform:rotateY(180deg);transition-duration:5s"
}

function show(id) { //图片旋转停止
	var rights = document.getElementById("tf_rights");
	var stus = rights.getElementsByTagName("dl");
	stus[id].children[0].getElementsByTagName("img")[0].style.transform = "rotateY(0deg)"
}

// var heigh;
// function tiw() { //滚动条回位
// 	var bar = document.getElementById("cb_bar"); //获取自身高度
// 	heigh = document.documentElement.scrollTop; //滚动条浏览器
// 	if (heigh > 0) {
// 		window.requestAnimationFrame(tiw);
// 		window.scrollTo(0, heigh - 3);
// 	}
// }
//回到顶部
var cb_bar=document.getElementById("cb_bar");
cb_bar.onclick=function(){
	var csi=setInterval(function(){
	var uTop=document.documentElement.scrollTop;
	if (uTop>0) {
		window.scrollTo(0,uTop-10);
		    	
		}else{
			clearInterval(csi)
		}
	},50)
}




var cb_bar = document.getElementById("cb_bar");
cb_bar.onclick = function(){
	var csi = setInterval(function(){
		var uTop = document.documentElement.scrollTop;
		if(uTop>0){
			window.scrollTo(0,uTop-20); //滚动到指定位置，第1个参数是左右滚动条，第2个参数是上下滚动条
		}else{
			clearInterval(csi)
		}
	},50);
}



window.onload = function() { //底部图片上移跟添加阴影
	var If = document.getElementsByClassName("lf_pic");
	var box = If[0].getElementsByTagName("div");
	// console.log(box)
	for (var i = 0; i < box.length; i++) {
		box[i].onmousemove = function() {

			this.style.transform = "translateY(-10px )"
			this.style.boxShadow = "0px 5px 10px 10px #999"
		}
		box[i].onmouseout = function() {
			this.style.boxShadow = "0px 0px 0px 0px #999 inset"
			this.style.transform = "translateY(0px)"
		}
	}
}

var uuTxt = document.getElementById("uuTxt"); //获取UI对象
var yi = 0 ;//滚动条距离
function mm() {
	yi -= 10;
	uuTxt.style.marginTop = yi + "px";
	if (yi < -220) {
		yi = 91;
	}
}
var pp=setInterval( mm,150);
uuTxt.onmouseover=function(){//悬停时停止定时器
	clearInterval(pp)
}
uuTxt.onmouseout=function(){//移开时调用定时器
	pp=setInterval( mm,180);
}

//无缝轮播
var uuPic=document.getElementById("uuPic");
//悬停显示和隐藏左右翻的按钮
document.getElementById("slide_pic").onmouseover=function(){
	document.getElementById("ts_leftPic").style.display="block";
	document.getElementById("ts_rightPic").style.display="block";
	clearInterval(sit);
}
document.getElementById("slide_pic").onmouseout=function(){
	document.getElementById("ts_leftPic").style.display="none";
	document.getElementById("ts_rightPic").style.display="none";
	sit=setInterval(rightScroll,2000)
}

//点击左翻按钮向右轮播
var leftMargin=0;//要添加的左外边距
document.getElementById("ts_leftPic").onclick=function(){
	 var lst=setInterval(function(){
		leftMargin+=20;
		uuPic.style.marginLeft=leftMargin+"px";
		if (leftMargin>=252) {
			leftMargin=0;
			uuPic.style.marginLeft="0px"
			var lis=uuPic.children;//获取所有li 对象
			var liLast=lis[lis.length-1]
			 uuPic.insertBefore(liLast,uuPic.getElementsByTagName("li")[0])
			 clearInterval(lst)
		}
	},100)
}
var leftMargin = 0; //要添加的左外边距
document.getElementById("ts_leftPic").onclick = function(){
	var lst = setInterval(function(){
		leftMargin+=20;
		uuPic.style.marginLeft = leftMargin+"px";
		if(leftMargin>=252){
			leftMargin = 0;
			uuPic.style.marginLeft = "0px"
			// var li7 = uuPic.getElementsByTagName("li")[7]; //获取所有li标签中的最后一个li
			var lis = uuPic.children; //获取所有li对象
			var liLast = lis[lis.length-1]
			uuPic.insertBefore(liLast,uuPic.getElementsByTagName("li")[0]); //将最后一张图插入到第一张前面
			clearInterval(lst)
		}
	},100)
}
//点击右翻按钮向左轮播
var rightMargin=0;//要添加的左外边距
document.getElementById("ts_rightPic").onclick=rightScroll;
function rightScroll(){
	var rst=setInterval(function(){
		rightMargin-=20;
		uuPic.style.marginLeft=rightMargin+"px";
		if (rightMargin<=-252) {
			rightMargin=0;
			uuPic.style.marginLeft="0px"
			uuPic.appendChild(uuPic.getElementsByTagName("li")[0]);
			clearInterval(rst)
		}
	
	},100)	
}
var sit=setInterval(rightScroll,2000)


//DOM解析,动态加载数据,渲染数据
var computerList = new Array();
computerList[0] = ["image/star01.jpg", "小新Air12-金(6Y30 4G)", "支持4G 乐享生活","3,999元"];
computerList[1] = ["image/star02.jpg", "小新Air Pro(I5 Windows 10 家", "大内存 多选硬盘 还要更轻薄！","5,499元"];
computerList[2] = ["image/star03.jpg", "ThinkPad 黑将S5", "黑将临世 生为竞技","6,499元"];
computerList[3] = ["image/star04.jpg", "拯救者15-ISK i5极速版", "GTX960M专业游戏显卡","5,799元"];
computerList[4] = ["image/star05.jpg", "联想UM10C直播版手机麦克风", "限时限量送手环","399元"];
computerList[5] = ["image/star06.jpg", "联想（lenovo）300M无线路由", "6折优惠，就是这么任性","79元"];

var str="";
for (var i = 0; i < computerList.length; i++) {
	str+='<a href="#">'+
            '<dl>'+
            	'<dt><img src="'+computerList[i][0]+'"/></dt>'+
                '<dd>'+computerList[i][0]+'</dd>'+
				'<dd>'+computerList[i][2]+'</dd>'+
				'<dd style="color:red;">'+computerList[i][3]+'</dd>'+
            '</dl>'+
           '</a>'
}
document.getElementById("star-computer").innerHTML=str;









