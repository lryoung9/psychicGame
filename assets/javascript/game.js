// Variables
var wins = 0;	// # of times the user has guessed the letter correctly
var losses = 0;	// # of times the user has failed to guess the letter correctly after exhausting all guesses
var guessesLeft = 9; // # of guesses left. This will update
var userGuesses = []; // an array of the letters that the user typed. Display these until the user either wins or loses.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //array of letters the computer can choose from
function resetGame() {
	console.log("-----------------");
	console.log("Game Reset");
	console.log("# of wins: " + wins);
	console.log("# of losses: " + losses);
	// Reset guessesLeft
	guessesLeft = 9;
	console.log("Guesses Left: " + guessesLeft)
	// Reset userGuesses
	userGuesses = [];
	console.log(userGuesses)
	// Reset random letter chosen by computer
	var compChoice = letters[Math.floor(Math.random()*letters.length)];
	console.log("Computer is thinking of the letter " + compChoice);
}

// Computer chooses a random letter:
var compChoice = letters[Math.floor(Math.random()*letters.length)];
console.log("Computer is thinking of the letter " + compChoice);
//Take users input
document.onkeyup = function(event) {
   	// make sure lowercase
    var userChoice = event.key.toLowerCase();
    console.log("The user guessed :" + userChoice);
    // alert user if they have already made the same guess previously
    if (userGuesses.indexOf(userChoice) > -1) {
    	alert("You have already guessed that letter. Please choose a different letter.");
    	return;
    };
    // Add guess to the array of guesses so far
    userGuesses.push(userChoice)
    console.log("Your guesses so far: " + userGuesses)

	// Check user's guess against the computer's choice
	// Win condition
	if (userChoice === compChoice) {
	   	wins++;
	   	// Update wins counter on screen
	   	var winner = document.querySelector("#wins");
	   	winner.innerHTML = "Wins: " + wins;
		// Reset game
		resetGame();
	}
	// Guess is incorrect
	else {
    	guessesLeft--;
    	// Update guess left on screen
    	var guessesLeftEl = document.querySelector("#guessesLeft");
    	guessesLeftEl.innerHTML = "Guesses left: " + guessesLeft;
    	// Update guesses so far on screen
    	var userGuessesEl = document.querySelector("#userGuesses");
    	userGuessesEl.innerHTML = "Your guesses so far :" + "<br />" + " " + userGuesses;
	    }

	// End game if used all guess attempts
	if (guessesLeft === 0) {
		losses++;
		// Update loss counter on screen
		var loser = document.querySelector("#losses");
		loser.innerHTML = "Losses: " + losses;
		// Reset game
		resetGame();
	}

	
}