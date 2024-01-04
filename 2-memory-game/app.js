const gridDisplay = document.querySelector("#grid");

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
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("Check match!");
    cards[cardsChosenIds[0]].setAttribute("src", "images/white.png");
    cards[cardsChosenIds[1]].setAttribute("src", "images/white.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  }
  cardsChosen = [];
}
