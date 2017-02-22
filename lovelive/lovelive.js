var song_playing = false;
var play_interval = -1;
var angel = 0;

var music = document.getElementById('music-treasure');

$('.circle-img').on('hover',function(){
	$(this).css('box-shadow','2px solid #ff0033');
});

function rotateCircle(){
	angel+= 0.2;
	$('.circle-img').css('transform','rotate('+angel+'deg)');
}

$('.circle-img').on('click',function(){
	song_playing = !song_playing;
	if(song_playing){
		play_interval = window.setInterval(rotateCircle,40);
		music.play();
		//play the music.
	}else{
		window.clearInterval(play_interval);
		music.pause();
	}

});