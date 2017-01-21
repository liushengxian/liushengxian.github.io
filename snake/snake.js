let mySnake = (function(){

	let _snakeBody = [{x:20,y:30}];
	let _snakeColor = 'green';

	let _direction = 'ArrowRight';

	//蛇的身体大小
	const _snakeBodySize = 10;


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
				snakeHead.x += _snakeBodySize;
				break;
			}
			case 'ArrowUp':
			{
				snakeHead.y -= _snakeBodySize;
				break;
			}
			case 'ArrowLeft':
			{
				snakeHead.x -= _snakeBodySize;
				break;
			}
			case 'ArrowDown':
			{
				snakeHead.y += _snakeBodySize;
				break;
			}
		}

		//judge if snake is out of border.
		if(snakeHead.x < 0 ||snakeHead.x >= 600||snakeHead.y < 0 ||snakeHead.y >= 400){
			console.info('snake go out of border!');
			return false;
		}
		//judge if snakeHead is on body.
		let snakeDead = _snakeBody.some((item,index)=>{
			if(item.x == snakeHead.x&&item.y == snakeHead.y){
				//snake eat itself!
				return true;
			}
			return false;
		});

		if(snakeDead){
			return false;
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

		return true;
	};

	let _isOpposite = function(direction){
		let directions = new Set([direction,_direction]);
		return ((directions.has('ArrowDown')&&directions.has('ArrowUp'))||(directions.has('ArrowLeft')&&directions.has('ArrowRight')));
	}

	let arrowSet = new Set(['ArrowRight','ArrowLeft','ArrowUp','ArrowDown']);
	let _isLegal = function(direction){
		return arrowSet.has(direction);
	}

	//设定蛇头移动方向
	let _setDirection = function(direction){
		console.info(direction.key);
		//屏蔽除了方向键之外的其他按键
		if(!_isLegal(direction.key)){
			return;
		}

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
