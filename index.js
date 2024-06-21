const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

const h1Color = document.querySelector("h1");
h1Color.style.color = "orange";

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  //console.log(computerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}

// Using parent-child-sibling relationships to navigate elements
const gameContainer = document.querySelector(".game-container");
const firstChoiceButton = gameContainer.firstElementChild.firstElementChild;
//console.log(gameContainer.firstElementChild.firstElementChild);
console.log("What is First Choice Button:", firstChoiceButton.textContent);

// Iterate over a collection of elements to accomplish some task
const scoreDisplays = gameContainer.querySelectorAll("div > span");

console.log(scoreDisplays);
scoreDisplays.forEach((display) => {
  display.style.fontWeight = "bold";
});

//Create at least one element using createElement.
//Use appendChild and/or prepend to add new elements to the DOM.
const newElement = document.createElement("p");
newElement.textContent = "Let's play Rock Paper Scissors!";
document.body.prepend(newElement);

//Modify at least one attribute of an element in response to user interaction.

//Register at least two different event listeners and create the associated event handler functions.
const buttons = document.querySelectorAll(".choice-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    playGame(playerChoice);
  });
});

//Use at least two Browser Object Model (BOM) properties or methods.
//Include at least one form and/or input with HTML attribute validation.
const form = document.getElementById("usernameForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameInput = document.getElementById("username");
  if (usernameInput.validity.valid) {
    alert(`Welcome, ${usernameInput.value}!`);
  } else {
    alert("Please enter a valid name with at least 3 characters.");
  }
});
//Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
