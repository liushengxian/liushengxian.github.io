// console.info('go parser!');
	
var lyc_parser = (function(){

	function _replacer(match,d1,d2,d3,d4,offset,string){
		return [parseInt(d1)*60+parseInt(d2),d3].join('.');
		// return parseInt(d1)*60+parseInt(d2)+'{['+d4+']}';
	}

	//TODO _handler not used here.
	var _handler = null;
	var _lyc_grp = [];
	var _current_index = 0;

	var _parse = function(text){
		var lyc_list = text.split('\n');
		// console.info('length:'+lyc_list.length);

		var reg = /\[(\d{2}):(\d{2}).(\d{2})\]([\s\S]*)/;
		for (var i = 0; i < lyc_list.length; i++) {
			_lyc_grp.push({time:parseFloat(lyc_list[i].replace(reg,_replacer)),word:lyc_list[i].replace(reg,'$4')})
		}

		// console.dir(_lyc_grp);
	}

	var _testFunc = function(){
		console.info('test function ok!');
	}

	var _load = function(lyc_file,handler){

		_handler = handler;

		var client = new XMLHttpRequest();
		client.open('GET', lyc_file);
		client.onreadystatechange = function() {
		if(client.readyState == client.DONE){
			_parse(client.responseText);
		}}
		client.send();
	}

	var _judge = function(time){

		if(_current_index >= _lyc_grp.length){
			return null;
		}

		if(_lyc_grp[_current_index].time < time){
			return _lyc_grp[_current_index++].word;
		}
		else{
			return null;	
		}	
	}

	var _reset = function(){
		_current_index = 0;
	}


	return {
		testFunc: _testFunc,
		load: _load,
		check: _judge,
		reset: _reset

	}
})();
