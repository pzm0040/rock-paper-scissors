// Constant Choices

const choices = ['rock', 'paper', 'scissors'];

// computer selection

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random()*choices.length);
    const itemSelection = choices[randomIndex];
    return itemSelection;
}

function playRound(playerSelection, computerSelction) {
    if (playerSelection == 'rock') {
        if (computerSelction == 'paper') {
            return 'You Lose, Paper beats Rock.';
        } else if (computerSelction == 'scissors') {
            return 'You win! Rock beats Scissors.';
        } else {
            return 'Draw... You both selected Rock.';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelction == 'paper') {
            return 'Draw... You both selected Paper.';
        } else if (computerSelction == 'scissors') {
            return 'You lose, Scissors beats Paper.';
        } else {
            return 'You win! Paper beats Rock.';
        }
    } else if (playerSelection == 'scissors'){
        if (computerSelction == 'paper') {
            return 'You win! Scissors beats Paper.';
        } else if (computerSelction == 'rock') {
            return 'You lose, Rock beats scissors.';
        } else {
            return 'Draw... You both selected scissors.'
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