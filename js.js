function search() 
{
	var in_ = document.getElementById('input1')
	var out = document.getElementById('label1')
	var year = Number(in_.value)
	if ( (year %4==0 && year %100 != 0) || (year %400 ==0 ) ){
		out.innerHTML  = "结果：闰年"
	} else {
		out.innerHTML  = "结果：不是闰年"
	}
}

function setBg() 
{
	bg_color = document.getElementById('color_1')
	bg = document.getElementById('test_body')
	a = document.getElementById('range_a')
	var rg = Number(a.value)/100   // 透明度
	bg.style['background'] = "rgba("+Number("0x"+bg_color.value.slice(1,3))+","+Number("0x"+bg_color.value.slice(3,5))+","+Number("0x"+bg_color.value.slice(5,7))+","+rg+")"
}

function randSetBg() 
{
	var r = getRandom(1, 255)
	var g = getRandom(1, 255)
	var b = getRandom(1, 255)
	var rg = getRandom(1,100)/100   // 透明度
	bg = document.getElementById('test_body')
	bg.style['background'] = "rgba("+r+","+g+","+b+","+rg+")"
}

function getRandom(min, max)
{
	return Math.floor(Math.random() * (max-1) + min)
}

function test_confirm() 
{
	alert(confirm("确定吗？"))		// 确定取消提示框
}

function test_prompt() {
	alert(prompt("请输入姓名：","张三"))	// 输入提示框
}

function test_open()
{
	// open("http://www.baidu.com", "window1") // 按照窗口名称打开

	// open("http://www.baidu.com", "_parent") // 在本窗口打开
	
	mywin = open("http://www.baidu.com", "window1", "height=300,width=300,top=100,left=200") // 设定打开位置
}

function test_close() 
{
	if (confirm("关闭窗口？")) 
	{
		mywin.close() // 关闭指定窗口
	}
}

function settimeout(t) {
	to = setTimeout(function(){alert("1秒后!")}, t)
}
function cleartimeout() {
	clearTimeout(to)
}

var interval_s = true
function startInterval(t) {
	if (interval_s) {
		cd = setInterval(step, t)
		interval_s = false
		lb.innerHTML = 100.00
	}
}
function step() {
	lb = document.getElementById("label_2")
	var t = Math.floor(Number(lb.innerHTML)*100-1)
	if (t < 0) {
		stopInterval()
		return
	}
	if ( t % 100 == 0 ) {
		lb.innerHTML = t/100+'.00'
	} else if ( t % 10 == 0 ) {
		lb.innerHTML = t/100+'0'
	} else {
		lb.innerHTML = t/100
	}
}
function stopInterval() {
	if (!interval_s) {
		clearInterval(cd)
		interval_s = true
	}
}

var nw
function fopen() {
	// body...
	nw = open("http://www.baidu.com", "_blank", "height=300,width=300,top=100,left=200")
}
function fclose() {
	nw.close()
}
function fchange() {
	nw.moveTo(300,300)  // 需要在服务器运行
	nw.focus()
}
function fresize() {
	nw.resize(10, 20) // 需要在服务器运行
	nw.focus()

	// mv.resizeTo(200,300)
}

// 小练习
var select = "background:blue; color : white"
var normal = "background:white; color : black"
var btn_list = new Array()
var n = 0, m = 0
var start_btn_flag = false

function start() {
	var sum = 0
	var len = getRandom(30,40)
	var min = 50
	var max = 800
	if ( start_btn_flag ) {
		return
	}
	start_btn_flag = true
	var s = (max-min)/len

	for (var i = 0; i < len; i++) {
		var now = min
		if ( i/len < 1/4 ) {
			now += i*s/10
		} else if ( i/len < 1/2 ) {
			now += i*s/4
		} else if ( len-i <= 2 ) {
				now = max
		} else {
			now += i*s/2
		}
		sum += now 
		setTimeout("stepOne()", sum)
	}
	setTimeout("result()", sum+500)
}

function result() {
	alert("中午就吃："+ btn_list[m].innerText)
	start_btn_flag = false
}

function stepOne() {
	m = (m+1)%n
	var j = (m+n-1)%n
	btn_list[j].style = normal
	btn_list[m].style = select
}

function createBtn(arg)
{
	var btn = document.createElement("button");
	if ( arg.length < 1 ) {
		in_ = document.getElementById("btn_name")
		btn.innerText = in_.value
		for (var i = 0; i < btn_list.length; i++) {
			if (btn.innerText == btn_list[i].innerText) {
				alert("已存在！")
				return
			}
		}
		in_.focus()
	} else {
		btn.innerText = arg
	}
	btn.style=normal
	var container = document.getElementById("section_game");
	container.appendChild(btn);
	btn_list[n++] = btn
	var index = n-1
	btn.addEventListener("click", function(){
		var new_name = prompt("请输入新的菜单：", btn.innerText)
		if ( new_name != null && new_name.length > 0 ) {
			btn.innerText = new_name
		} /*else {
			container.removeChild(btn)
			btn_list.splice(index,1)
		}*/
	});
}

function init() {
	createBtn("香辣肉丝")
	createBtn("鱼香肉丝")
	createBtn("宫保鸡丁")
	createBtn("锅包肉")
	createBtn("火锅")
	createBtn("锅贴")
	createBtn("烧烤")
}