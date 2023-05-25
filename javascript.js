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

function round() {
    const computersChoice = getComputersChoice();
    const playersChoice = getUsersChoice();

    const result = playSingleRound(computersChoice, playersChoice);
    console.log(result);
    return result;
}

function game() {
    let roundResult = round();
    let computerWins = 0;
    let playerWins = 0;

    if (roundResult === 'Computer wins!') {
        computerWins += 1;
    } else if (roundResult === 'Player wins!') {
        playerWins += 1;
    }

    roundResult = round();  // TO JEST ZMIANA WARTOSCI FUNKCJI!!! <3

    if (roundResult === 'Computer wins!') {
        computerWins += 1;
    } else if (roundResult === 'Player wins!') {
        playerWins += 1;
    }

    roundResult = round();  // TO JEST ZMIANA WARTOSCI FUNKCJI!!! <3

    if (roundResult === 'Computer wins!') {
        computerWins += 1;
    } else if (roundResult === 'Player wins!') {
        playerWins += 1;
    }

    roundResult = round();  // TO JEST ZMIANA WARTOSCI FUNKCJI!!! <3

    if (roundResult === 'Computer wins!') {
        computerWins += 1;
    } else if (roundResult === 'Player wins!') {
        playerWins += 1;
    }

    roundResult = round();  // TO JEST ZMIANA WARTOSCI FUNKCJI!!! <3

    if (roundResult === 'Computer wins!') {
        computerWins += 1;
    } else if (roundResult === 'Player wins!') {
        playerWins += 1;
    }

    if (computerWins > playerWins) {
        return "Computer wins the game!";
    } else if (computerWins === playerWins) {
        return "It is a tie...";
    } else {
        return "Player wins the game!";
    }
}

console.log(game());


















// function game() {
//     function round() {
//         const computersChoice = getComputersChoice();
//         const playersChoice = getUsersChoice();
//         let result = playSingleRound(computersChoice,playersChoice);
//         console.log(result);
//         if (result === 'Computer wins!') {
//             result = 1;
//         } else {
//             result = 0;
//         }
//         return result;
//     }
//     // console.log(round());
//     // console.log(round());
//     // console.log(round());
//     let gameResult = (round() + round() + round());
//     console.log(gameResult);
//     if (gameResult >= 2) {
//         return 'Computer wins the game!';
//     } else {
//         return 'Player wins the game!';
//     }
// }
// console.log(game())