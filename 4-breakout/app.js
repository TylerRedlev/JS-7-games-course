//==============================
//DECLARING CONSTANTS AND VARIABLES
//==============================

const scoreDisplay = document.querySelector("#score");
let score = 0;
//Add grid and block dimensions
const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;

//Board dimensions
const boardWidth = 450;
const boardHeight = 800;
grid.style.width = boardWidth + "px";
grid.style.height = boardHeight + "px";

//User position
const userStart = [230, 10];
let currentPosition = userStart;

//adding user to the grid
const user = document.createElement("div"); //add user
user.classList.add("user");
grid.appendChild(user);
drawUser();

//Add ball
const ball = document.createElement("div");
ball.classList.add("ball");
const ballDiameter = 40;
ball.style.width = ballDiameter + "px";
ball.style.height = ballDiameter + "px";
grid.appendChild(ball);
const ballStart = [230, 30];
let ballCurrentPosition = ballStart;
drawBall();

//create block class
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(10, 300),
  new Block(120, 300),
  new Block(230, 300),
  new Block(340, 300),
];

//Add event listener
document.addEventListener("keydown", moveUser);

//Add timer
let timerId;

//Add directions
let xDirection = 2;
let yDirection = 2;

//==============================
//START THE PROGRAM
//==============================

//adding bloacks to the grid
addBlock();

timerId = setInterval(moveBall, 30);

//==============================
//DECLARING THE FUNCTIONS
//==============================

//draw my block
function addBlock() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
    default:
      break;
  }
}

function drawBall() {
  ball.style.left = ballCurrentPosition[0];
  ball.style.bottom = ballCurrentPosition[1];
}

function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
}

//Check for collisions
function checkForCollisions() {
  //check for block collisions
  for (let i = 0; i < blocks.length; i++) {
    if (
      ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
      ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
      ballCurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1] &&
      ballCurrentPosition[1] + ballDiameter < blocks[i].topRight[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));

      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeDirection();
      score++;
      scoreDisplay.innerHTML = score;

      if (blocks.length === 0) {
        scoreDisplay.innerHTML = "You win!";
        clearInterval(timerId);
        removeEventListener("keydown", moveUser);
      }
    }
  }

  //Check for user collisions
  if (
    ballCurrentPosition[0] > currentPosition[0] &&
    ballCurrentPosition[0] < currentPosition[0] + blockWidth &&
    ballCurrentPosition[1] > currentPosition[1] &&
    ballCurrentPosition[1] < currentPosition[1] + blockHeight
  ) {
    changeDirection();
  }
  if (
    ballCurrentPosition[0] >= boardWidth - ballDiameter ||
    ballCurrentPosition[0] <= 0 ||
    ballCurrentPosition[1] >= boardHeight - ballDiameter
  ) {
    //Check for wall collisions
    changeDirection();
  }

  //check for game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    scoreDisplay.innerHTML = "You lose";
    removeEventListener("keydown", moveUser);
  }
}

function changeDirection() {
  if (
    xDirection === 2 &&
    yDirection === 2 &&
    ballCurrentPosition[1] < boardHeight - ballDiameter
  ) {
    xDirection = -2;
    return;
  }
  if (
    xDirection === 2 &&
    yDirection === 2 &&
    ballCurrentPosition[1] >= boardHeight - ballDiameter
  ) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    xDirection = 2;
    return;
  }
}
