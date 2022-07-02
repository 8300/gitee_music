var Based = {
	/*|获取文件
	|*|
	|*/
	load: function(url, method, names, callback) {
		var xmlhttp
		var names = names || ''
		if (typeof method === 'function') {
			callback = method
			method = 'GET'
		}
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest()
		} else {
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				callback(xmlhttp)
			}
			else {
				console.log(xmlhttp)
			}
		}
		xmlhttp.open(method, url, true)
		xmlhttp.setRequestHeader('Accept','application/json, text/plain, */*');
		xmlhttp.send()
		//return `method: ${method}, url: ${url}, callback: ${callback}, xmlhttp: ${xmlhttp}`
	},
	/*|用 get 方法获取
	|*|
	|*/
	get: function(url, names, callback) {
		if (typeof names === 'function') {
			callback = names
			names = {}
		}
		Based.load(url, 'GET', names, callback)
	},
	/*|加载一个脚本
	|*|@param {string} url - 脚本的地址
	|*|@param {function} callback - 脚本加载完成时运行
	|*/
	import: function(url, callback) {
		var script = document.createElement('script')
		script.setAttribute('src', url)
		callback = !callback || script.addEventListener('load', callback)
		document.getElementsByTagName('head')[0].appendChild(script)
	},
}
