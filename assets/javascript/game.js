// Variables
var wins = 0;	// # of times the user has guessed the letter correctly
var losses = 0;	// # of times the user has failed to guess the letter correctly after exhausting all guesses
var guessesLeft = 9; // # of guesses left. This will update
var userGuesses = []; // an array of the letters that the user typed. Display these until the user either wins or loses.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //array of letters the computer can choose from

// Computer chooses a random letter:
var compChoice = letters[Math.floor(Math.random()*letters.length)];
console.log("Computer is thinking of the letter " + compChoice);
//Take users input
document.onkeyup = function(event) {
   	// make sure lowercase
    var userChoice = event.key.toLowerCase();
    console.log("The user guessed :" + userChoice);

    // Add guess to the array of guesses so far
    userGuesses.push(userChoice)
    console.log("Your guesses so far: " + userGuesses)
    // alert user if they have already made the same guess previously
    if (userChoice === userGuesses.find(userChoice)) {
    	alert("You have already guessed that letter. Please choose a different letter.");
    };
}