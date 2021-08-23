// Randomly returns either 'Rock', 'Paper' or 'Scissors'.
function computerPlay() {
    let randNum = Math.floor((Math.random() * 100) + 1);
    let computerSelection = 'Rock';

    if (randNum <= 33) {
        computerSelection = 'Rock';
    } else if (randNum > 33 && randNum <= 66) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
}