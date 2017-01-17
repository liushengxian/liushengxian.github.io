let foodManager = (function(){

	let _foodList = new Set([{x:100,y:100}]);
	let _foodColor = 'yellow';

	let _drawFood = function(){
		for (let food of _foodList){
			misanPen.drawBody(_foodColor,food)
		} 
	}

	let _addFood = function(pos){
		if(!_hasFood(pos)){
			_foodList.add(pos);
		}
	}

	let _getFoodList = function(){
		return _foodList;
	}

	let _hasFood = function(pos){
		for (let food of _foodList){
			if(food.x == pos.x && food.y == pos.y)
			{
				return true;	
			}
		} 
		return false;
	}

	let _eatFood = function(pos){
		for (let food of _foodList){
			if(food.x == pos.x && food.y == pos.y)
			{
				_foodList.delete(food);
			}
		} 
	}

	return {
		drawFood: _drawFood,
		addFood: _addFood,
		getFoodList: _getFoodList,
		hasFood: _hasFood,
		eatFood: _eatFood
	};
})();