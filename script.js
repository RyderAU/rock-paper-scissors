// Randomly returns either 'Rock', 'Paper' or 'Scissors'.
function computerPlay() {
    let randNum = Math.floor((Math.random() * 100) + 1);
    let selection = 'Rock';

    if (randNum <= 33) {
        selection = 'Rock';
    } else if (randNum > 33 && randNum <= 66) {
        selection = 'Paper';
    } else {
        selection = 'Scissors';
    }
}