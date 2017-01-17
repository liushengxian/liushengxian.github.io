
//snake game using canvas.
//author: misanya

let startFlag = false;

//initialize context 
let canvas = document.getElementById('snakegame');
let ctx = canvas.getContext('2d');
//initialize pen
misanPen.setContext(ctx);

//score part
let score = document.getElementById('score');
let addScore = (add_score)=>{
	score.innerHTML = parseInt(score.innerHTML) + add_score;
}


// ctx.fillStyle = 'rgba(0,0,200,0.5)';
// ctx.fillRect(30,30,55,50);

// ctx.clearRect(40,40,10,10);

// ctx.strokeRect(100,100,20,20);

// var lineargradient = ctx.createLinearGradient(160,20,310,170);
// lineargradient.addColorStop(0,'yellow');
// lineargradient.addColorStop(1,'green');

// ctx.fillStyle = lineargradient;

// ctx.fillRect(160,20,150,150);
let maxValueX = canvas.width/10;
let maxValueY = canvas.height/10;

let getRandomPos = ()=>{
	let randomPos = {};
	randomPos.x = Math.round(Math.random()*maxValueX)*10;
	randomPos.y = Math.round(Math.random()*maxValueY)*10;
	return randomPos;
};


//game timer.
let timeCount = 0;
let timeInterval = 500;
let gameStart = function() {
	// console.info('hello misanya!'+(timeCount++));
	timeCount++;
	if(startFlag){
		setTimeout('gameStart()',timeInterval);	
		//clean screen.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//draw 
		misanPen.drawRect('red',{x:10+timeCount,y:10+timeCount});
		
		//generate food 

		foodManager.addFood(getRandomPos());
		//draw food
		foodManager.drawFood();

		mySnake.move(foodManager.getFoodList());
		mySnake.drawSnake();
	}
	else{
		//game over here.
		console.info('game over!');
	}
};

let addKeyBoardSupport = function(){
	document.onkeydown = mySnake.setDirection;
}


misanPen.drawTitle('Snake Game',{x:200,y:200});

canvas.onclick = function(){
	if(startFlag){
		return;
	}
	startFlag = true;
	gameStart();
	addKeyBoardSupport();
};








