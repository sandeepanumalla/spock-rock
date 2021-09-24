// import { startConfetti } from "./confetti";

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerScore = document.getElementById("playerScore");
const playerScissores = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");
const playerPaper = document.getElementById("playerPaper");

const computerRock = document.getElementById("computerRock");
const computerScore = document.getElementById("computerScore");
const computerScissores = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const allGameIcons = document.querySelectorAll(".far");
let manPlayerScore = Number(0);
let computerPlayerScore = Number(0);
// startConfetti();
const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let arrayOfChoices = ["rock", "paper", "scissors", "lizard", "spock"];

// reset all 'selected'
function resetSelected() {
  allGameIcons.forEach((e) => {
    e.classList.remove("selected");
  });
}

function changeStyling(item) {
  playerChoiceEl.textContent = ` --- ${item}`;
}

function changeComputerStyling(item) {
  computerChoiceEl.textContent = ` --- ${item}`;
}

function iterateChoices(manChoice, computer) {
  if (manChoice == computer) {
    return "tie";
  } else {
    let d;
    Object.keys(choices).forEach((key) => {
      if (key == manChoice) {
        d = choices[key].defeats.some((e) => e == computer);
      }
    });
    return d;
  }
}

let computeResult = (manChoice, computer) => {
  let obj = iterateChoices(manChoice, computer);

  if (obj === "tie") {
    resultText.textContent = "It's a tie";
  } else if (obj === true) {
    manPlayerScore++;
    playerScore.textContent = manPlayerScore;

    resultText.textContent = "You Won";
  } else if (obj === false) {
    computerPlayerScore++;
    computerScoreEl.textContent = computerPlayerScore;
    resultText.textContent = "Computer Won";
  }
};

// Random computer choice
let computerChoice = "";

function computerRandomChoice() {
  const randomChoice = Math.floor(Math.random() * 5);
  computerChoice = arrayOfChoices[randomChoice];
  return arrayOfChoices[randomChoice];
}

// Call function to process turn
function checkResult(manChoice) {
  // resetSelected();
  computerRandomChoice();
  let C = selectComputer(computerChoice);
  computeResult(manChoice, C);
}

function select(playerChoice) {
  resetSelected();
  let manChoice = playerChoice;
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      changeStyling("Rock");
      break;
    case "scissors":
      playerScissores.classList.add("selected");
      changeStyling("Scissors");
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      changeStyling("Lizard");
      break;
    case "spock":
      playerSpock.classList.add("selected");
      changeStyling("Spock");
      break;
    case "paper":
      playerPaper.classList.add("selected");
      changeStyling("Paper");
      break;
    default:
      break;
  }
  checkResult(manChoice);
}

// let choice = computerRandomChoice();
function selectComputer(computerChoice) {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      changeComputerStyling("rock");
      break;
    case "scissors":
      computerScissores.classList.add("selected");
      changeComputerStyling("Scissors");

      break;
    case "lizard":
      computerLizard.classList.add("selected");
      changeComputerStyling("Lizard");

      break;
    case "spock":
      computerSpock.classList.add("selected");
      changeComputerStyling("Spock");
      break;
    case "paper":
      computerPaper.classList.add("selected");
      changeComputerStyling("Paper");
      break;

    default:
      break;
  }
  return computerChoice;
}

//reset game

function ResetGame() {
  manPlayerScore = 0;
  computerPlayerScore = 0;
  playerChoiceEl.textContent = ``;
  computerChoiceEl.textContent = ``;
  playerScoreEl.textContent = manPlayerScore;
  computerScoreEl.textContent = computerPlayerScore;
  resultText.textContent = "Let's start";
  resetSelected();
}

function toggleModal() {
  if (modal.classList.contains("unactive")) {
    modal.classList.remove("unactive");
    overlay.classList.remove("unactive");
    console.log("tunn");
  } else {
    modal.classList.add("unactive");
    overlay.classList.add("unactive");
  }
}

overlay.addEventListener("click", toggleModal);
