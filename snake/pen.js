let misanPen = (function(){

let _ctx;

let _setContext = function(ctx){
	_ctx = ctx;
}

let _drawTitle = function(str,pos){
	_ctx.font = '48px serif';
	_ctx.fillStyle = 'red';
	_ctx.fillText(str,pos.x,pos.y);
}

let _drawRect = function(str,pos){
	_ctx.fillStyle = str;
	_ctx.fillRect(pos.x,pos.y,55,50);
}

let _drawBody = function(color,pos){
	_ctx.fillStyle = color;
	_ctx.fillRect(pos.x,pos.y,10,10);
}

	return {
		setContext:_setContext,
		drawTitle:_drawTitle,
		drawRect:_drawRect,
		drawBody:_drawBody
	};

})();




