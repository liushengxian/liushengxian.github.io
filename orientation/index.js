console.info('hello test orientation!');

if(window.screen.orientation){
	alert('screen orientation:'+ screen.orientation.type);
	try{
		window.screen.orientation.lock('portrait-primary');
		console.log('hello lock');
	}
	catch(err){
		alert(err.message);
	}
}
