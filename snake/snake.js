let mySnake = (function(){

	let _snakeBody = [{x:20,y:20}];
	let _snakeColor = 'green';

	let _direction = 'ArrowRight';


	let _drawSnake = function(){
		for (var i = _snakeBody.length - 1; i >= 0; i--) {
			misanPen.drawBody(_snakeColor,_snakeBody[i]);
		};
	};

	let _move = function(foodList){
		let snakeHead = {x:_snakeBody[0].x,y:_snakeBody[0].y};
		switch(_direction){
			case 'ArrowRight':
			{				
				snakeHead.x += 10;
				break;
			}
			case 'ArrowUp':
			{
				snakeHead.y -= 10;
				break;
			}
			case 'ArrowLeft':
			{
				snakeHead.x -= 10;
				break;
			}
			case 'ArrowDown':
			{
				snakeHead.y += 10;
				break;
			}
		}
		//add to front
		_snakeBody.unshift(snakeHead);
		if(foodManager.hasFood(snakeHead)){
			//eat food 
			foodManager.eatFood(snakeHead);
			addScore(10);
		}else{
			//remove the last block of body if no food was eatten.
			_snakeBody.pop();
		}
	};

	let _isOpposite = function(direction){
		let directions = new Set([direction,_direction]);
		return ((directions.has('ArrowDown')&&directions.has('ArrowUp'))||(directions.has('ArrowLeft')&&directions.has('ArrowRight')));
	}

	//设定蛇头移动方向
	let _setDirection = function(direction){
		console.info(direction.key);
		if((direction.key == _direction)||_isOpposite(direction.key)){
			return;
		}
		else{
			_direction = direction.key;
		}
	};

	return {
		drawSnake: _drawSnake,
		move: _move,
		setDirection:_setDirection
	};

})();