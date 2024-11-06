// Create an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "pizza",
    "birds",
    "chicken",
    "radio",
];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
var guess;
var guesses = 6; // Total number of guesses

// The game loop
while (remainingLetters > 0 && guesses > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));
    /*alert(`You have ${guesses} guesses left.`);*/

    if (guesses === 5) {
        alert(`You have 5 guesses left. Pick wisely.`);
    } else {
        alert(`You have ${guesses} opportunities left. Take your time.`);
    }

    // Get a guess from the player
    guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {

        // Update the game state with the guess
        var correctGuesses = 0;

        for (var j = 0; j < word.length; j++) {
            if (guess === word[j]) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    correctGuesses++;
                    remainingLetters--;
                    guesses--;
                } else {
                    alert("The letter has already been selected. Choose another letter.");
                    // correctGuesses++;
                    guesses--;
                    break;
                }
            }
        }
    }
    // Check if guess was correct or not
    if (correctGuesses === 0) {
        alert(`This letter is incorrect and repeated. Try another one.`);
        guesses--;
    }

}

// The end of the game loop

// Show the answer and congratulate the player

alert(answerArray.join(" "));


if (guesses > 0) {
    alert(`Congratulations! The answer was ${word}.`);
} else {
    alert(`I am sorry to inform you that you are incorrect. The answer was ${word}.`);
}
