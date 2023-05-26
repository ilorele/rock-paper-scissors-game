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
    
    if (usersChoice === null) {
        alert("Canceled");
        return null;
    } else {
        const usersChoiceLowerCase = usersChoice.toLowerCase();
        return usersChoiceLowerCase;  
    }      
}

function playSingleRound(computersSelection, playersSelection) {
    if ( playersSelection === null) {
        return null;
    } else if ((computersSelection === 'rock' && playersSelection === 'scissors') || 
        (computersSelection === 'scissors' && playersSelection === 'paper') ||
        (computersSelection === 'paper' && playersSelection === 'rock')) {
        console.log(`You lose! ${computersSelection} beats ${playersSelection}!`)
        return 'Computer wins!';
    } else if (computersSelection === playersSelection) {
        console.log("It's a tie!")
        return "It's a tie!";
    } else {
        console.log(`You win! ${playersSelection} beats ${computersSelection}!`)
        return 'Player wins!';
    }
} 

function round() {
    const computersChoice = getComputersChoice();
    const playersChoice = getUsersChoice();

    if (playersChoice === null) {
        return null;
    } else {
        const result = playSingleRound(computersChoice, playersChoice);
        return result;
    }   
}

// VERSION WITHOUT LOOP

// function game() {
//     let roundResult = round();
//     let computerWins = 0;
//     let playerWins = 0;

//     if (roundResult === 'Computer wins!') {
//         computerWins += 1;
//     } else if (roundResult === 'Player wins!') {
//         playerWins += 1;
//     }

//     roundResult = round();  // TO JEST ZMIANA WARTOSCI FUNKCJI!!! <3

//     if (roundResult === 'Computer wins!') {
//         computerWins += 1;
//     } else if (roundResult === 'Player wins!') {
//         playerWins += 1;
//     }

//     roundResult = round();  // TO JEST ZMIANA WARTOSCI FUNKCJI!!! <3

//     if (roundResult === 'Computer wins!') {
//         computerWins += 1;
//     } else if (roundResult === 'Player wins!') {
//         playerWins += 1;
//     }

//     roundResult = round();  // TO JEST ZMIANA WARTOSCI FUNKCJI!!! <3

//     if (roundResult === 'Computer wins!') {
//         computerWins += 1;
//     } else if (roundResult === 'Player wins!') {
//         playerWins += 1;
//     }

//     roundResult = round();  // TO JEST ZMIANA WARTOSCI FUNKCJI!!! <3

//     if (roundResult === 'Computer wins!') {
//         computerWins += 1;
//     } else if (roundResult === 'Player wins!') {
//         playerWins += 1;
//     }

//     if (computerWins > playerWins) {
//         return "Computer wins the game!";
//     } else if (computerWins === playerWins) {
//         return "It is a tie...";
//     } else {
//         return "Player wins the game!";
//     }
// }

// console.log(game());

// VERSION WITH LOOP

function game() {
    let computerWins = 0;
    let playerWins = 0;
    
    for (i = 0; i < 5; i++) {
        const roundResult = round();

        if (roundResult === null) {
            return;  // TUTAJ FUNKCJA SIE KONCZY WYKONYWAC JESLI JEST SPELNIONY WARUNEK
        } 
        
        if (roundResult === "Computer wins!") {
            computerWins++;
        } else if (roundResult === "Player wins!") {
            playerWins++;
        }
    }

    if (computerWins > playerWins) {
        return "Computer wins the game!";
    } else if (computerWins === playerWins) {
        return "It's a tie...";
    } else {
        return "You win the game!";
    }
}

console.log(game())