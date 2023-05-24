// FIRST APPROACH:

function getComputersChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computersChoiceIndex = Math.floor(Math.random() * choices.length);
    // console.log(computersChoiceIndex)
    const computersChoice = choices[computersChoiceIndex];

    return computersChoice;
}

function getUsersChoice() {
    const usersChoice = prompt("Please enter 'Rock', 'Paper' or 'Scissors':", "Rock" );
    const usersChoiceLowerCase = usersChoice.toLowerCase();

    return usersChoiceLowerCase;
}

function playSingleRound(computersSelection, playersSelection) {
    if ((computersSelection === 'rock' && playersSelection === 'scissors') || 
        (computersSelection === 'scissors' && playersSelection === 'paper') ||
        (computersSelection === 'paper' && playersSelection === 'rock')) {
        return 'Computer wins!';
    } else if (computersSelection === playersSelection) {
        return "It's a tie!";
    
    } else {
        return 'Player wins!';
    }
} 

const computersChoice = getComputersChoice();
console.log('computersChoice :', computersChoice)  // DO NOT CONSOLE.LOG A FUNCTION IF YOU DO NOT WANT TO EXCECUTE IT!!!

const usersChoice = getUsersChoice();
console.log('usersChoice :', usersChoice);

console.log(playSingleRound(computersChoice, usersChoice));