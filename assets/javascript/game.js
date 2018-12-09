var wins = 0;
var losses = 0;
var guessesleft = 9;
var guessessofar = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "x", "z"];
computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerLetter);

function computerpick() {
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    console.log(computerLetter);
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log (userGuess);
    
    if (userGuess === computerLetter) {
        wins++;
        guessesleft = 9;
        guessessofar = [];
        computerpick();
    }

    if (userGuess !== computerLetter) {
        guessesleft--;
        guessessofar.push(userGuess);
        console.log(guessessofar);
    }

    if (guessesleft === 0) {
        losses++;
        computerpick();
        guessesleft = 9;
        guessessofar = [];
    }

    document.getElementById("wins-text").innerHTML = wins;
    document.getElementById("losses-text").innerHTML = losses;
    document.getElementById("guessesleft-text").innerHTML = guessesleft;
    document.getElementById("guesses-text").innerHTML = guessessofar;
    
    }











