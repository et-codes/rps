// Initialize variables
const divScore = document.getElementById('score');
const divPlayerChoice = document.getElementById('player-choice');
const divComputerChoice = document.getElementById('computer-choice');
const divResult = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let matchResult;

const handleClick = (event) => {
  playerChoice = event.target.id;
  const randomIndex = parseInt(Math.random() * 3);
  computerChoice = choices[randomIndex];
  getResult();
  clearDisplay();
  setTimeout(updateDisplay, 75);
}

const getResult = () => {
  let result = 0;  // -1 computer, 0 tie, 1 player
  if (playerChoice === 'rock') {
    if (computerChoice === 'scissors') {
      result = 1;
    } else if (computerChoice === 'paper') {
      result = -1;
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      result = -1;
    } else if (computerChoice === 'rock') {
      result = 1;
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = -1;
    } else if (computerChoice === 'paper') {
      result = 1;
    }
  }
  if (result === 1) {
    matchResult = 'Player won!';
    playerScore += 1;
  } else if (result === -1) {
    matchResult = 'Computer won!';
    computerScore += 1;
  } else if (result === 0) {
    matchResult = 'Tie!';
  }
}

const clearDisplay = () => {
  divScore.textContent = '';
  divPlayerChoice.textContent = '';
  divComputerChoice.textContent = '';
  divResult.textContent = '';
}

const updateDisplay = () => {
  divScore.textContent = `Player: ${playerScore}  |  Computer: ${computerScore}`;
  if (playerChoice) {
    divPlayerChoice.textContent = `Player chose ${playerChoice}`;
  }
  if (computerChoice) {
    divComputerChoice.textContent = `Computer chose ${computerChoice}`;
  }
  if (matchResult) {
    divResult.textContent = matchResult;
  }
}

// Set event listeners
const buttons = document.getElementsByClassName('rps-button');
for (let button of buttons) {
  button.addEventListener('click', handleClick);
}

updateDisplay();