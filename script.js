/// get random element from array

let myArray = ['rock', 'paper', 'scissors']

function getComputerChoice () {
    let randomItem =  myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
}


let playerScore = 0
let computerScore = 0



/// function that plays a single round of Rock Paper Scissors.

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        let result1 = "You win! Paper beats rock";
        playerScore++
        return result1;

    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        let result2 = "You win! Rock beats scissors";
        playerScore++
        return result2;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        let result3 = "You Win! Scissors beats paper";
        playerScore++
        return result3;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        let result4 = "You lose! Paper beats rock";
        computerScore++
        return result4;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        let result5 = "You lose! Rock beats scissors";
        computerScore++
        return result5;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        let result6 = "You lose! Scissors beats paper";
        computerScore++
        return result6;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        return "It's a tie!"
    }
}

const computerSelection = getComputerChoice();
let playerSelection = prompt("choose rock, paper or scissors");
console.log(playRound(playerSelection, computerSelection));
