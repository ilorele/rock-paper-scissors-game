let playersScore = 0;
let computersScore = 0;

let playersWonGames = 0;
let ComputersWonGames = 0;

const rockBtnEl = document.querySelector(".rock-selection-btn");
const paperBtnEl = document.querySelector(".paper-selection-btn");
const scissorsBtnEl = document.querySelector(".scissors-selection-btn");

let playersScoreDisplayEl = document.querySelector(".players-score");
const computersScoreDisplayEl = document.querySelector(".computers-score");
const playersGamesWonDisplayEl = document.querySelector(".players-games-won");
const computersGamesWonDisplayEl = document.querySelector(".computers-games-won");

const endGameMessage = document.querySelector(".end-game-message");

const contentContainerEl = document.querySelector(".content-container");



function getComputersChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computersChoiceIndex = Math.floor(Math.random() * choices.length);
    const computersChoice = choices[computersChoiceIndex];

    return computersChoice;
}

function playSingleRound(computersSelection, playersSelection) {
    if ((computersSelection === 'rock' && playersSelection === 'scissors') || 
        (computersSelection === 'scissors' && playersSelection === 'paper') ||
        (computersSelection === 'paper' && playersSelection === 'rock')) {
            endGameMessage.textContent = `You lose! ${computersSelection} beats ${playersSelection}!`;
            computersScore++;
        return 'Computer wins!';
    } else if (computersSelection === playersSelection) {
        endGameMessage.textContent = "It's a tie!";
        return "It's a tie!";
    } else {
        endGameMessage.textContent = `You win! ${playersSelection} beats ${computersSelection}!`;
        playersScore++;
        return 'Player wins!';
    }
} 

function round(playersChoice) {
    const computersChoice = getComputersChoice();
    const result = playSingleRound(computersChoice, playersChoice);
    return result;
}

function endGame() {
    if (playersScore > computersScore) {
        endGameMessage.textContent = "Player wins the game!";
        playersWonGames++;
        playersGamesWonDisplayEl.textContent = playersWonGames;
    } else {
        endGameMessage.textContent = "Computer wins the game!";
        ComputersWonGames++;
        computersGamesWonDisplayEl.textContent = ComputersWonGames;
    }
}

function checkScore() {
    playersScoreDisplayEl.textContent = playersScore;
    computersScoreDisplayEl.textContent = computersScore;

    if (playersScore === 5 || computersScore === 5) {
        endGame();
        createResetGameBtnEl();
    }
}

function createResetGameBtnEl() {
    const resetGameBtn = document.createElement("button");
    resetGameBtn.classList.add("reset-game-btn");
    resetGameBtn.textContent = "Play again?";
    contentContainerEl.appendChild(resetGameBtn);

    rockBtnEl.disabled = true;
    paperBtnEl.disabled = true;
    scissorsBtnEl.disabled = true;

    resetGameBtn.addEventListener("click", resetGame);
}

function resetGame() {
    playersScore = 0;
    computersScore = 0;
    playersScoreDisplayEl.textContent = 0;
    computersScoreDisplayEl.textContent = 0;
    endGameMessage.textContent = "";
    contentContainerEl.removeChild(contentContainerEl.lastChild);

    rockBtnEl.disabled = false;
    paperBtnEl.disabled = false;
    scissorsBtnEl.disabled = false;
}

function getPlayersChoice() {
    const usersChoice = this.textContent.toLowerCase();
    round(usersChoice);
    checkScore();
}

rockBtnEl.addEventListener("click", getPlayersChoice);

paperBtnEl.addEventListener("click", getPlayersChoice);

scissorsBtnEl.addEventListener("click", getPlayersChoice);