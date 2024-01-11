//==============================
//DECLARING CONSTANTS AND VARIABLES
//==============================

const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 500;
const boardHeight = 600;
const userStart = [230, 10];
let currentPosition = userStart;

grid.style.width = boardWidth + "px";
grid.style.height = boardHeight + "px";

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
  new Block(20, 370),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
];

//==============================
//START THE PROGRAM
//==============================

//adding bloacks to the grid
addBlock();

//adding user to the grid
const user = document.createElement("div"); //add user
user.classList.add("user");
drawUser();
grid.appendChild(user);

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
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", moveUser);
