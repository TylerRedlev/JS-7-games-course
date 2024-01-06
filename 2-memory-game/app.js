const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
//Declaring array of cards (6 different cards with images duplicated because we need 12 images)
const cardArray = [
  { name: "cheeseburger", img: "images/cheeseburger.png" },
  { name: "fries", img: "images/fries.png" },
  { name: "hotdog", img: "images/hotdog.png" },
  { name: "ice-cream", img: "images/ice-cream.png" },
  { name: "milkshake", img: "images/milkshake.png" },
  { name: "pizza", img: "images/pizza.png" },
  { name: "cheeseburger", img: "images/cheeseburger.png" },
  { name: "fries", img: "images/fries.png" },
  { name: "hotdog", img: "images/hotdog.png" },
  { name: "ice-cream", img: "images/ice-cream.png" },
  { name: "milkshake", img: "images/milkshake.png" },
  { name: "pizza", img: "images/pizza.png" },
];
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

//Sort the cardArray randomly by providing a compare function
cardArray.sort(() => 0.5 - Math.random());

createBoard();

//Creating the board when the page first opens
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png"); //setting all images of the cards as blank
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);

    console.log(card, i);
  }
}

//Function for flipping cards when clicked
function flipCard() {
  const cardId = this.getAttribute("data-id"); //the card of which the event is trigered
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  //
  console.log(cardArray[cardId].name);
  console.log("clicked", cardId);
  //
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

//Checking match if the cards are the same
function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    alert("You have clicked the same image!");
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry try again!");
  }
  resultDisplay.textContent = cardsWon.length;

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you found them all!";
  }
}
