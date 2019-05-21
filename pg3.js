
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = []
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = [Math.floor(Math.random()*computerChoices.length)];
    //must push user guess into your guesses so far
    yourGuessesSoFar.push(userGuess);
    if (userGuess === computerGuess) {
        alert("You must be psychic. You won!");
        wins++;
        guessesLeft = 9; //resets guesses to 9
        guessesSoFar.length = 0;
    }
    else if (guessesLeft === 0) {
        alert("You are not psychic, are you?. You lose!");
        losses++;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }
//updating html
    var elContent = "<h1>The Psychic Game</h1>" +
    "<h2>Guess what letter I'm thinking of</h2>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + yourGuessesSoFar + "</p>";

    document.getElementById('#game').innerHTML = elContent;
}

    