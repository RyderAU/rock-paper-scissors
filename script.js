let playerSelection = '';
let computerSelection = '';
let playerRounds = 0;
let computerRounds = 0;

// game();

// search 'can you pass arguments into callback functions'

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', playRound(rockBtn.value));

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', playRound(paperBtn.value));

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', playRound(scissorsBtn.value));

const results = document.querySelector('#results');
const score = document.querySelector('#score');

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

function playRound(selection) {
    return function() {
        playerSelection = selection;
        computerSelection = computerPlay();
        console.log('the player has selected ' + playerSelection)
        console.log('the computer has selected ' + computerSelection);

        if (playerSelection === computerSelection) {
            // draw
            results.textContent = "it's a draw!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            // player wins
            playerRounds++;
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            // player wins
            playerRounds++;
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            // player wins
            playerRounds++;
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            // computer wins
            computerRounds++;
            results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        score.textContent = `player: ${playerRounds}, computer: ${computerRounds}`;
        if (playerRounds === 5 || computerRounds === 5) {
            results.textContent = 'GAME IS FINISHED';
        }
    }
    
}

function game() {
    while (playerRounds !== 5 && computerRounds !== 5) {
        playRound(playerSelection, computerSelection);
    }
        
    console.log(`SCORE: player - ${playerRounds} computer - ${computerRounds}`)
    if (playerRounds === computerRounds) {
        results.textContent = 'GAME IS A DRAW';
    } else if (playerRounds > computerRounds) {
        results.textContent = 'PLAYER WINS THE GAME';
    } else {
        results.textContent = 'COMPUTER WINS THE GAME';
    }
}
