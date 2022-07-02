//Children
var onSearch = function() {
	var keywords = Dackage.$('.search').value
	Based.get('http://cloud-music.pl-fe.cn/search?keywords=' + keywords, loaded)
}
var createMusic = function(url) {
	var audio = document.createElement('audio')
	var source = document.createElement('source')
	audio.setAttribute('controls', 'controls')
	source.setAttribute('src', url)
	source.setAttribute('type', getMIME(url, 'audio/mpeg'))
	audio.appendChild(source)
	return audio
}
var loaded = function(element) {
	var data = JSON.parse(element.responseText)
	if (data.code === 200) {
		var songs = data.result.songs
		var url = 'http://music.163.com/song/media/outer/url?id=' + songs[0].id
		var audio = createMusic(url)
		document.body.appendChild(audio)
		console.log(url)
	}
	
}
//Main
function main() {
	Dackage.$('.search').addEventListener('search', onSearch)
	Dackage.$All('.search')[1].addEventListener('click', onSearch)
	return 0
}

window.addEventListener('load', main)