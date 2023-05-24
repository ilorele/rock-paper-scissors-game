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

// function playSingleRound(computersSelection, playersSelection) {
//      if ((computersSelection === 'rock' && playersSelection === 'scissors') || 
//         (computersSelection === 'scissors' && playersSelection === 'paper') ||
//         (computersSelection === 'paper' && playersSelection === 'rock')) {
//      return 'Computer wins!';
//      } else {
//         return 'Player wins!';
//      }
// } 

// console.log(playerChoice);
console.log(getComputersChoice());
// console.log(getUsersChoice())
// console.log(playSingleRound(getComputersChoice(), getUsersChoice()));