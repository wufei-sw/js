//悬停显示隐藏导航菜单
var ud1 = document.getElementById("ud1");
ud1.onmouseover = function(){
	document.getElementById("nav_ud").style.display = "block"; //显示菜单
	document.getElementById("ud_pic").className = "up_pic"; //向上图片
}
ud1.onmouseout = function(){
	document.getElementById("nav_ud").style.display = "none" //隐藏菜单
	document.getElementById("ud_pic").className = "updown_pic";//向下图片
}

//tab切换商品列表
var goods = ["lenovo","ThinkPad","ipad"];
function showGoods(gid){
	for (var i = 0; i < goods.length; i++) {
		if(i==gid){
			document.getElementById(goods[i]).style.display = "block";
			document.getElementById(goods[i]+"Hd").style.borderRightWidth = "0px";
		}else{
			document.getElementById(goods[i]).style.display = "none";
			document.getElementById(goods[i]+"Hd").style.borderRightWidth = "1px";
		}
	}
}

//回到顶部
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

//文字向上滚动
var uuTxt = document.getElementById("uuTxt"); //获取ul对象
var stxt = 0;//滚动距离
function scrollTxt(){
	stxt -= 10;
	uuTxt.style.marginTop = stxt+"px";
	if(stxt<=-182){
		stxt = 91;
	}
}
setInterval(scrollTxt,100);

//轮播图特效
//用于存放图片路径的数组
var imgs = new Array();
imgs[0] = "image/scroll01.jpg";
imgs[1] = "image/scroll02.jpg";
imgs[2] = "image/scroll03.jpg";
imgs[3] = "image/scroll04.jpg";
imgs[4] = "image/scroll05.jpg";
imgs[5] = "image/scroll06.jpg";
//用于存放数字按钮的id
var nums = new Array();
nums[0] = "scrollNum1";
nums[1] = "scrollNum2";
nums[2] = "scrollNum3";
nums[3] = "scrollNum4";
nums[4] = "scrollNum5";
nums[5] = "scrollNum6";

var pic = document.getElementById("scrollImg");//获取要轮播的图片对象
var index = 0; //表示图片在数组中的下标
function ScrollPic(pid){ //pid表示传递过来的代表图片位置
	if(pid>=0){
		index = pid;
		clearInterval(pst)
	}
	for (var i = 0; i < nums.length; i++) {
		var n = document.getElementById(nums[i]); //获取数字按钮对象
		if(i==index){ //i可以看作数字按钮,index可以看作图片
			n.style.backgroundColor = "red";
		}else{
			n.style.backgroundColor = "black";
		}
	}
	pic.src = imgs[index];
	index++;
	if(index==imgs.length){
		index = 0;
	}
}
ScrollPic();
var pst = setInterval(ScrollPic,1000); //自动轮播

//悬停显示隐藏上下页按钮
document.getElementById("scroll").onmouseover = function(){
	document.getElementById("pre").style.display = "block";
	document.getElementById("next").style.display = "block";
}
document.getElementById("scroll").onmouseout = function(){
	document.getElementById("pre").style.display = "none";
	document.getElementById("next").style.display = "none";
}

//上一张轮播图操作
document.getElementById("pre").onmouseover = function(){
	clearInterval(pst);
	this.onclick = function(){
		// alert(index)
		if(index==1){ //index=1时表示第一张图
			index = imgs.length-1;
		}else if(index==0){//index=0时表示最后一张图
			index = imgs.length-2;
		}else{
			index-=2;
		}
		
		
		ScrollPic(index);
	}
}

//下一张轮播图操作
document.getElementById("next").onmouseover = function(){
	clearInterval(pst);
	this.onclick = function(){
		ScrollPic(index);
	}
}

//离开数字按钮重新启动轮播
function scroollNumOut(){
	pst = setInterval(ScrollPic,1000);
}
//离开上下页按钮重新启动轮播
document.getElementById("pre").onmouseout = function(){
	pst = setInterval(ScrollPic,1000);
}
document.getElementById("next").onmouseout = function(){
	pst = setInterval(ScrollPic,1000);
}

//DOM解析,动态加载数据,渲染数据
var computerList = new Array();
computerList[0] = ["image/star01.jpg", "小新Air12-金(6Y30 4G)", "支持4G 乐享生活","3,999元"];
computerList[1] = ["image/star02.jpg", "小新Air Pro(I5 Windows 10 家", "大内存 多选硬盘 还要更轻薄！","5,499元"];
computerList[2] = ["image/star03.jpg", "ThinkPad 黑将S5", "黑将临世 生为竞技","6,499元"];
computerList[3] = ["image/star04.jpg", "拯救者15-ISK i5极速版", "GTX960M专业游戏显卡","5,799元"];
computerList[4] = ["image/star03.jpg", "联想UM10C直播版手机麦克风", "限时限量送手环","399元"];
computerList[5] = ["image/star04.jpg", "联想（lenovo）300M无线路由", "6折优惠，就是这么任性","79元"];
var str = "";
for (var i = 0; i < computerList.length; i++) {
	 str += '<a href="#">'+
	            '<dl> '+
	            	'<dt><img src="'+computerList[i][0]+'"/></dt>'+
	                '<dd>'+computerList[i][1]+'</dd>'+
					'<dd>'+computerList[i][2]+'</dd>'+
					'<dd style="color:red;">'+computerList[i][3]+'</dd>'+
	            '</dl>'+
	           '</a>'
}
document.getElementById("star-computer").innerHTML = str;

//无缝轮播
var uuPic = document.getElementById("uuPic"); //获取父节点ul对象
//悬停显示和隐藏左右翻的按钮
document.getElementById("slide_pic").onmouseover = function(){
	document.getElementById("ts_leftPic").style.display = "block"
	document.getElementById("ts_rightPic").style.display = "block"
	clearInterval(sit); //停止自动左右轮播
}
document.getElementById("slide_pic").onmouseout = function(){
	document.getElementById("ts_leftPic").style.display = "none"
	document.getElementById("ts_rightPic").style.display = "none"
	sit = setInterval(rightScroll,2000); //离开时候启动左右轮播
}

//点击左翻按钮向右轮播
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
var rightMargin = 0; //要添加的左外边距
document.getElementById("ts_rightPic").onclick = rightScroll;
function rightScroll(){
	var rst = setInterval(function(){
		rightMargin-=20;
		uuPic.style.marginLeft = rightMargin+"px";
		if(rightMargin<=-252){
			rightMargin = 0;
			uuPic.style.marginLeft = "0px"
			
			uuPic.appendChild(uuPic.getElementsByTagName("li")[0]); //将第一张图片添加到末尾
			clearInterval(rst)
		}
	},100)
}
var sit = setInterval(rightScroll,2000);
