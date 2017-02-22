var song_playing = false;
var play_interval = -1;
var angel = 0;
var time = 0;
var timeInterval = 40;

var music = document.getElementById('music-treasure');

// lyc_parser.testFunc();
lyc_parser.load('lovelive.lrc');

$('.circle-img').on('hover',function(){
	$(this).css('box-shadow','2px solid #ff0033');
});

function resetStatus(){
	$('#lyric').text('==============Present By Misanya=============');
}


function playMusic(){
	var word = lyc_parser.check(music.currentTime);
	if(word){
		$('#lyric').text(word);	
	}
	rotateCircle();
}

function rotateCircle(){
	angel+= 0.2;
	$('.circle-img').css('transform','rotate('+angel+'deg)');
}

music.onended = function(){
	resetStatus();
	lyc_parser.reset();
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