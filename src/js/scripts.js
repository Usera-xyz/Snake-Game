const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const gameOverText = document.getElementById('gameOverText');
const startButton = document.getElementById('startButton');

const tileSize = 20; 
const rows = 19;
const columns = 19;
canvas.width = columns * tileSize;  
canvas.height = rows * tileSize;    

let snake, apple, score, intervalId;
let isGameRunning = false;

startButton.addEventListener('click', startGame);
window.addEventListener('keydown', changeDirection);

function startGame() {
  clearInterval(intervalId);
  gameOverText.textContent = '';
  score = 0;
  scoreDisplay.textContent = 'Score: 0';
  snake = new Snake();
  apple = new Apple();
  isGameRunning = true;
  startButton.textContent = "Restart Game";
  intervalId = setInterval(gameLoop, 100);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.move();
  snake.draw();
  apple.draw();

  if (snake.eat(apple)) {
    apple.randomize();
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
  }

  if (snake.collide()) {
    endGame();
  }
}

function endGame() {
  clearInterval(intervalId);
  isGameRunning = false;
  gameOverText.textContent = 'Game Over! Final Score: ' + score;
}

function changeDirection(event) {
  if (!isGameRunning) return;

  const key = event.key;
  if (key === 'ArrowUp' && snake.direction !== 'down') snake.direction = 'up';
  if (key === 'ArrowDown' && snake.direction !== 'up') snake.direction = 'down';
  if (key === 'ArrowLeft' && snake.direction !== 'right') snake.direction = 'left';
  if (key === 'ArrowRight' && snake.direction !== 'left') snake.direction = 'right';
}

function Snake() {
  this.body = [{ x: 5, y: 5 }];
  this.direction = 'right';

  this.move = function () {
    const head = { ...this.body[0] };

    if (this.direction === 'right') head.x++;
    if (this.direction === 'left') head.x--;
    if (this.direction === 'up') head.y--;
    if (this.direction === 'down') head.y++;

    this.body.unshift(head);
    if (this.body.length > score + 1) this.body.pop();
  };

  this.draw = function () {
    ctx.fillStyle = 'lime';
    this.body.forEach(segment => {
      ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    });
  };

  this.eat = function (apple) {
    return this.body[0].x === apple.x && this.body[0].y === apple.y;
  };

  this.collide = function () {
    const head = this.body[0];

    // wall collision
    if (
      head.x < 0 ||
      head.x >= columns ||
      head.y < 0 ||
      head.y >= rows
    ) return true;

    // self collision
    for (let i = 1; i < this.body.length; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        return true;
      }
    }

    return false;
  };
}

function Apple() {
  this.randomize = function () {
    this.x = Math.floor(Math.random() * columns);
    this.y = Math.floor(Math.random() * rows);
  };

  this.randomize();

  this.draw = function () {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x * tileSize, this.y * tileSize, tileSize, tileSize);
  };
}
