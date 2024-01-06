//==============================
//DECLARING CONSTANTS AND VARIABLES
//==============================

//Declaring constants and variables
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 10;
let countDownTimerId = setInterval(countDown, 1000);
let timerId;

//==============================
//START THE PROGRAM
//==============================

//Adding event listeners to squares
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

//Starting the move of the mole
moveMole();

//==============================
//DECLARING THE FUNCTIONS
//==============================

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

function moveMole() {
  timerId = null;
  timerId = setInterval(randomSquare, 500);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`GAME OVER! Your final score is ${result}`);
  }
}
