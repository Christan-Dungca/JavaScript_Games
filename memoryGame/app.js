document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "office worker",
      img: "images/picture_one.png",
    },
    {
      name: "office worker",
      img: "images/picture_one.png",
    },
    {
      name: "painter",
      img: "images/picture_two.png",
    },
    {
      name: "painter",
      img: "images/picture_two.png",
    },
    {
      name: "space",
      img: "images/picture_three.png",
    },
    {
      name: "space",
      img: "images/picture_three.png",
    },
    {
      name: "race",
      img: "images/picture_four.jpg",
    },
    {
      name: "race",
      img: "images/picture_four.jpg",
    },
    {
      name: "pole vault",
      img: "images/picture_five.png"
    },
    {
      name: "pole vault",
      img: "images/picture_five.png"
    },
    {
      name: "gardening",
      img: "images/picture_six.jpeg"
    },
    {
      name: "gardening",
      img: "images/picture_six.jpeg"
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#results");
  let cardsChosen = [];
  let cardsChosenId = [];
  const cardsWon = [];

  //? create your board

  function createBoard() {
    for (let idx = 0; idx < cardArray.length; idx++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.jpg");

      // * setting the width and height of img
      card.style.width = "100px";
      card.style.height = "100px";

      card.setAttribute("data-id", idx);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //? Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if(optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    } 
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match");
      cards[optionOneId].setAttribute("src", "images/white.svg");
      cards[optionTwoId].setAttribute("src", "images/white.svg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
      alert("Sorry, try again");
    }

    cardsChosen = [];
    cardsChosenId = [];

    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "CONGRATULATIONS! You found all the cards!";
    }
  }

  //? flip your card

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
