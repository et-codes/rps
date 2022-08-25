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
  const randomIndex = parseInt(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
  matchResult = getResult();
  updateScore();
  clearDisplay();
  setTimeout(updateDisplay, 75);
}

const getResult = () => {
  if (playerChoice === computerChoice) return 'Tie!';

  switch (playerChoice) {
    case 'rock':
      return computerChoice === 'scissors' ? 'Player won!' : 'Computer won!';
    case 'paper':
      return computerChoice === 'rock' ? 'Player won!' : 'Computer won!';
    case 'scissors':
      return computerChoice === 'paper' ? 'Player won!' : 'Computer won!';
  }
}

const updateScore = () => {
  if (matchResult === 'Player won!') playerScore++;
  if (matchResult === 'Computer won!') computerScore++;
}

const clearDisplay = () => {
  divScore.textContent = '';
  divPlayerChoice.textContent = '';
  divComputerChoice.textContent = '';
  divResult.textContent = '';
}

const updateDisplay = () => {
  divScore.textContent = `Player: ${playerScore}  |  Computer: ${computerScore}`;
  if (!playerChoice || !computerChoice) return;
  divPlayerChoice.textContent = `Player chose ${playerChoice}`;
  divComputerChoice.textContent = `Computer chose ${computerChoice}`;
  divResult.textContent = matchResult;
}

// Set event listeners
const buttons = document.getElementsByClassName('rps-button');
for (let button of buttons) {
  button.addEventListener('click', handleClick);
}

updateDisplay();