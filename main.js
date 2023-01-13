// constant choices

const choices = ['rock', 'paper', 'scissors'];

// initialize player and computer scores at 0

let playerScore = 0;
let computerScore = 0;

// computer selection

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random()*choices.length);
    const itemSelection = choices[randomIndex];
    return itemSelection;
}

// function to compare different RPS selections
function playRound(playerSelection, computerSelction) {
    if (playerSelection == 'rock') {
        if (computerSelction == 'paper') {
            computerScore ++;
            return 'You Lose, Paper beats Rock.';
        } else if (computerSelction == 'scissors') {
            playerScore ++;
            return 'You win! Rock beats Scissors.';
        } else {
            return 'Draw... You both selected Rock.';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelction == 'paper') {
            return 'Draw... You both selected Paper.';
        } else if (computerSelction == 'scissors') {
            computerScore ++;
            return 'You lose, Scissors beats Paper.';
        } else {
            playerScore ++;
            return 'You win! Paper beats Rock.';
        }
    } else if (playerSelection == 'scissors'){
        if (computerSelction == 'paper') {
            playerScore ++;
            return 'You win! Scissors beats Paper.';
        } else if (computerSelction == 'rock') {
            computerScore ++;
            return 'You lose, Rock beats scissors.';
        } else {
            return 'Draw... You both selected scissors.';
        }
    } else {
        return 'Invalid choice. Please select: rock, paper, or scissors.';
    }
}

/* Prompt User for input, format to lowercase */
const playerSelection = prompt("Select: Rock, Paper, or Scissors: ");
const playerSelectionFormatted = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelectionFormatted, computerSelection))
console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);