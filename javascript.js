// FIRST APPROACH:

function getComputersChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computersChoiceIndex = Math.floor(Math.random() * choices.length);
    console.log(computersChoiceIndex)
    const computersChoice = choices[computersChoiceIndex];
    
    return computersChoice;
}

console.log(getComputersChoice())

function getUsersChoice() {
    let usersChoice = prompt("Please enter 'rock', 'paper' or 'scissors':");
    let usersChoiceLowerCase = usersChoice.toLowerCase();

    return usersChoiceLowerCase;

}

console.log(getUsersChoice())