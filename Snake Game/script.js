let board = document.querySelector('.board');
let start = document.querySelector('.startGame');
let modal = document.querySelector('.modal');
let startGame = document.querySelector('.startGame');
let gameOver = document.querySelector('.GameOver');
let restart = document.querySelector('.btnRestart')
let highScoreElement = document.querySelector('#highScore span');
let scoreElement = document.querySelector('#score span');
let timeElement = document.querySelector('#time span');
let finalScoreEl = document.querySelector('#finalScore');
let finalTimeEl = document.querySelector('#finalTime');


const blockHeight = 32;
const blockWidth = 32;

let highScore = localStorage.getItem('highScore') || 0;
highScoreElement.innerHTML = highScore;
let score = 0;
let time = `00-00`;


const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
const blocks = [];
let snake = [{x:1,y:3},{x:1,y:4},{x:1,y:5}]

let direction = 'down';
let intervalId = null;
let timerIntervalId = null;
let food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)};


for( let row=0; row<rows; row++){
    for(let col=0; col<cols; col++){
        const block = document.createElement('div');
    block.classList.add("block");
    board.appendChild(block);
    // block.innerHTML = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;
}
}

function render(){
    let head = null;
    
    blocks[`${food.x}-${food.y}`].classList.add('food');

    if(direction === 'left'){
      head = { x: snake[0].x , y: snake[0].y-1}
    }
    else if(direction === 'right'){
      head = { x: snake[0].x , y: snake[0].y+1}
    }
    else if(direction === 'down'){
      head = { x: snake[0].x + 1 , y: snake[0].y}
    }
    else if(direction === 'up'){
      head = { x: snake[0].x - 1 , y: snake[0].y}
    }

    if(head.x < 0 || head.x >=rows || head.y < 0 || head.y >=cols ){
        
    clearInterval(intervalId);
    clearInterval(timerIntervalId);

    finalScoreEl.innerHTML = score;
    finalTimeEl.innerHTML = time;

    modal.style.display = 'flex';
    startGame.style.display = 'none';
    gameOver.style.display = 'flex';

    return;
}


    // food consume logic 

    if(head.x === food.x && head.y === food.y){
        blocks[`${food.x}-${food.y}`].classList.remove('food');
        food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)};
        snake.unshift(head);

        score += 10;
        scoreElement.innerHTML = score ;

        if(score > highScore){
            highScore = score ;
            localStorage.setItem('highScore',highScore.toString());
        }
    }

    snake.forEach(segment=>{   
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill');
    })

    snake.unshift(head);
    snake.pop();

    snake.forEach(segment=>{
         blocks[`${segment.x}-${segment.y}`].classList.add('fill');
    })
}

start.addEventListener('click',()=>{
    modal.style.display = 'none';
    intervalId = setInterval(() => {
        render();
    }, 300);
    timerIntervalId = setInterval(() => {
        let [min,sec] = time.split('-').map(Number);

        if(sec === 59){
            min+=1;
            sec =0;
        }
        else{
            sec += 1;
        }

        time = `${min}-${sec}`;
        timeElement.innerHTML = time;
    },1000);
})

restart.addEventListener('click',restrartGame)

function restrartGame(){
    modal.style.display = 'none';
    blocks[`${food.x}-${food.y}`].classList.remove('food');
    snake.forEach(segment=>{   
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill');
    })

    score = 0;
    time = `00-00`;

    scoreElement.innerHTML = score;
    highScoreElement.innerHTML = highScore;
    timeElement.innerHTML= time;
    
    snake = [{x:1,y:3},{x:1,y:4},{x:1,y:5}];
    food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)};
    intervalId = setInterval(() => {
        render();
    }, 300);
    
}

addEventListener('keydown',(e)=>{
    if(e.key === 'ArrowUp'){
        direction = 'up';
    }
    else if(e.key === 'ArrowDown'){
        direction = 'down';
    }
    else if(e.key === 'ArrowLeft'){
        direction = 'left';
    }
    else if(e.key === 'ArrowRight'){
        direction = 'right';
    }
})


// for(let i=0; i < rows * cols; i++){
//     const block = document.createElement('div');
//     block.classList.add("block");
//     board.appendChild(block);
// }
