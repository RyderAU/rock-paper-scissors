let playerSelection = '';
let computerSelection = '';
let playerRounds = 0;
let computerRounds = 0;

game();

// Randomly returns either 'Rock', 'Paper' or 'Scissors'.
function computerPlay() {
    let randNum = Math.floor((Math.random() * 100) + 1);

    if (randNum <= 33) {
        return 'rock';
    } else if (randNum > 33 && randNum <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt(`Round ${i}: What is your play?`).toLowerCase();
    computerSelection = computerPlay();
    console.log('the player has selected ' + playerSelection)
    console.log('the computer has selected ' + computerSelection);
    if (playerSelection === computerSelection) {
        // draw
        return "it's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // player wins
        playerRounds++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        // player wins
        playerRounds++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // player wins
        playerRounds++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        // computer wins
        computerRounds++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    console.log(`Round ${i}:`)
    console.log(playRound(playerSelection, computerSelection));
        
    console.log(`SCORE: player - ${playerRounds} computer - ${computerRounds}`)
    if (playerRounds === computerRounds) {
        console.log('GAME IS A DRAW');
    } else if (playerRounds > computerRounds) {
        console.log('PLAYER WINS THE GAME');
    } else {
        console.log('COMPUTER WINS THE GAME');
    }
}