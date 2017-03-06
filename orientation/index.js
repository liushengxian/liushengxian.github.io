console.info('hello test orientation!');

if(window.screen.orientation){
	alert('screen orientation:'+ screen.orientation.type);
	window.screen.orientation.lock('portrait-primary');
}