var song_playing = false;
var play_interval = -1;
var angel = 0;
var time = 0;
var timeInterval = 40;

var music = document.getElementById('music-treasure');

// lyc_parser.testFunc();

var lyc_parser = lycParser();
var lyc_parser2 = lycParser();

lyc_parser.load('lovelive.lrc');
lyc_parser2.load('ch-live.lrc');

$('.circle-img').on('hover',function(){
	$(this).css('box-shadow','2px solid #ff0033');
});

function resetStatus(){
	$('#lyric').text('==============Present By Misanya=============');
	$('#ch-lyric').text('==========Lyric from Netease Cloud Music==========');
	angel = 0;
	$('.circle-img').css('transform','rotate('+angel+'deg)');
}


function playMusic(){
	var word = lyc_parser.check(music.currentTime);
	var ch_word = lyc_parser2.check(music.currentTime);
	if(word){
		$('#lyric').text(word);	
	}
	if(ch_word){
		$('#ch-lyric').text(ch_word);
	}
	rotateCircle();
}

function rotateCircle(){
	angel+= 0.2;
	$('.circle-img').css('transform','rotate('+angel+'deg)');
}


//TODO when loop, check this word.
music.onended = function(){
	console.info('music ended!');
	window.clearInterval(play_interval);
	resetStatus();
	lyc_parser.reset();
	lyc_parser2.reset();
};

resetStatus();

$('.circle-img').on('click',function(){
	song_playing = !song_playing;
	if(song_playing){
		play_interval = window.setInterval(playMusic,40);
		music.play();
		//play the music.
	}else{
		window.clearInterval(play_interval);
		music.pause();
	}

});