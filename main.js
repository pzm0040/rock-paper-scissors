// Constant Choices

const choices = ['rock', 'paper', 'scissors'];

// computer selection

function getComputerChoice(rps) {
    const randomIndex = Math.floor(Math.random()*rps.length);
    const itemSelection = rps[randomIndex];
    return itemSelection;
}

console.log(getComputerChoice(choices));