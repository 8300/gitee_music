/*|求最大值
|*|
|*/
 function maxMin() {
	var length = arguments.length
	if (length === 0) {
		return new Error('需要值来比较')
	}
	if (arguments[0] instanceof Array) {
		arguments = arguments[0]
	} else if (length > 1) {
		arguments = Array.apply(null, arguments)
	}
	
	
	if (length > 1) {
		var max = arguments[0]
		var min = arguments[1]
		for (var i = 0; i < length; i += 1) {
			if (Number(arguments[i]).toString() === 'NaN') {
				return new Error('需要数字来比较')
			}
			max = (arguments[i] >= max)? arguments[i] : max
			min = (arguments[i] <= min)? arguments[i] : min
		}
		return {max: max, min: min}
	} else if (length === 1) {
		return {max: arguments[0], min: arguments[0]}
	}
}
/*|暂停代码
|*|
|*/
function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
			return true;
	}
}
/*|获取随机值
|*|
|*/
function getRandomNum(Max, Min) {
	var Min = Min
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}
/*|获取 Cookie
|*|
|*/
function getCookie(name) {
	var arr,
	reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
/*|设置 Cookie
|*|
|*/
function setCookie(name, value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}
/*|复制文本
|*|
|*/
function copy(e) {
	var transfer = document.createElement('input');
	document.body.appendChild(transfer);
	transfer.value = target.value; // 这里表示想要复制的内容
	transfer.focus();
	transfer.select();
	if (document.execCommand('copy')) {
		document.execCommand('copy');
	}
	transfer.blur();
	console.log('复制成功');
	document.body.removeChild(transfer);
}
/*|文本转文件 
|*|
|*/
function exportRaw(name, data) {
	var urlObject = window.URL || window.webkitURL || window
	var export_blob = new Blob(['\ufeff' + data], {
		type: getMIME(name)})
	var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
	save_link.rel = 'external nofollow'
	save_link.href = urlObject.createObjectURL(export_blob)
	save_link.download = name
	save_link.click()
}
/*|
|*|
|*/
function getMIME(filename, could) {
	var isUsable = typeof filename
	var could = could || 'text/plain'
	var MIME = {
		txt: 'text/plain',
		json: 'application/json',
		js: 'text/javascript',
		html: 'text/html',
		htm: 'text/html',
		css: 'text/css',
		ogg: 'audio/ogg',
		mp4: 'audio/mpeg'
	}
	if (isUsable === 'undefined' || isUsable !== 'string') {
		return could
	}
	filename = filename.trim().split('.').pop().toLowerCase()
	filename = MIME[filename] || could
	return filename
}
String.prototype.textFormat = function() {
	var num = arguments.length
	var oStr = this
	for (var i = 0; i < num; i += 1) {
		var pattern = '\\{' + i + '\\}'
		var re = new RegExp(pattern, 'g')
		oStr = oStr.replace(re, arguments[i])
	}
	console.log(oStr)
	return oStr
}