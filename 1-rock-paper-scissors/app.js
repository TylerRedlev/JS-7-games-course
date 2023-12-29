//Declaring elements data
const computerChoice = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelector("button");
let userChoice;

//Add event listener to possible choices buttons
possibleChoices.forEach(
  (possibleChoice) => {
    console.log(possibleChoice);
  }
  // possibleChoice.addEventListener("click", (e) => {
  //   userChoice = e.target.id;
  // })
);
