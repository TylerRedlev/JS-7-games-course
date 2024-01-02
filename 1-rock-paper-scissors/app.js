//Declaring elements data
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

console.log(possibleChoices);

//Add event listener to possible choices buttons
possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1);
    // userChoiceDisplay.innerHTML =
    //   userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    userChoiceDisplay.innerHTML = userChoice;
    //console.log(typeof userChoice + ` ${userChoice}`);
    generateComputerChoice();
    getResult();
  });
});

//Adding generated computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //or you can use possibleChoices.length
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

//Add result function
function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You lose!";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You win!";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You win!";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You lose!";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You lose!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You win!";
  }

  resultDisplay.innerHTML = result;
}
