//Declaring elements data
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;

console.log(possibleChoices);

//Add event listener to possible choices buttons
possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //or you can use possibleChoices.length
  console.log(randomNumber);
}
