//=========================================================================================
//DECLARING CONSTANTS AND VARIABLES
//========================================================================================

//Declaring DOM elements
const timeleftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");
let timerId;

//Grid properties
let currentIndex = 76;
const gridWidth = 9;

//Assigning events
document.addEventListener("keyup", moveFrog);
startPauseButton.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    clearInterval(checkOutComes);
    document.removeEventListener("keyup", moveFrog);
  } else {
    timerId;
    setInterval(checkOutComes, 50);
  }
});

//==================================================================================================
//START THE PROGRAM
//===================================================================================================

timerId = setInterval(autoMoveElements, 1000);

//======================================================================================
//DECLARING THE FUNCTIONS
//=======================================================================================

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      if (currentIndex % gridWidth !== 0) {
        currentIndex -= 1;
      }
      break;

    case "ArrowRight":
      console.log("move right");

      if (currentIndex % gridWidth < gridWidth - 1) {
        currentIndex += 1;
      }
      break;

    case "ArrowUp":
      if (currentIndex - gridWidth >= 0) {
        currentIndex -= gridWidth;
      }
      console.log("move up");
      break;

    case "ArrowDown":
      if (currentIndex + gridWidth < squares.length) {
        currentIndex += gridWidth;
      }
      console.log("move down");

      break;

    default:
      break;
  }
  squares[currentIndex].classList.add("frog");
}

function autoMoveElements() {
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogRight(logRight));
  carsLeft.forEach((carLeft) => moveCarRight(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
  lose();
  win();
}

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
      break;

    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.add("l3");
      break;

    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.add("l4");
      break;

    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.add("l5");
      break;

    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.add("l1");
      break;
  }
}

function moveLogRight(logRight) {
  switch (true) {
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.add("l5");
      break;

    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      break;

    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      break;

    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      break;

    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      break;
  }
}

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains("c1"):
      carLeft.classList.remove("c1");
      carLeft.classList.add("c2");
      break;

    case carLeft.classList.contains("c2"):
      carLeft.classList.remove("c2");
      carLeft.classList.add("c3");
      break;

    case carLeft.classList.contains("c3"):
      carLeft.classList.remove("c3");
      carLeft.classList.add("c1");
      break;
  }
}

function moveCarRight(carRight) {
  switch (true) {
    case carRight.classList.contains("c1"):
      carRight.classList.remove("c1");
      carRight.classList.add("c3");
      break;

    case carRight.classList.contains("c2"):
      carRight.classList.remove("c2");
      carRight.classList.add("c1");
      break;

    case carRight.classList.contains("c3"):
      carRight.classList.remove("c3");
      carRight.classList.add("c2");
      break;
  }
}

function lose() {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5")
  ) {
    resultDisplay.textContent = "You lose!";
    clearInterval(timerId);
    clearInterval(checkOutComes);
    squares[currentIndex].classList.remove("frog");
    document.removeEventListener("keyup", moveFrog);
  }
}

function win() {
  if (squares[currentIndex].classList.contains("ending-block")) {
    resultDisplay.textContent = "You win!";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
  }
}

function checkOutComes() {
  lose();
  win();
}
