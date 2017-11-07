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
	
	open("http://www.baidu.com", "window1", "height=300,width=300,top=100,left=200") // 设定打开位置
}