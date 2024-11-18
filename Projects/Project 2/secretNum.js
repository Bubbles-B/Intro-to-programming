// function getGuess() {
//     return parseInt(prompt("Please  guess the secret number(1-20)"));
// }

// let secret = Math.floor(Math.random() * 21);
// let guess = getGuess();

// while (guess != secret) {
//     if (guess < secret) {
//         alert("Incorrect,too low")

//     } else if (guess > secret) {
//         alert("Incorrect,too high")

//     }

//     guess = getGuess();
// }

// alert("Correct Guess! " + guess)



// Generate a random secret number between 1 and 20
let secret = Math.floor(Math.random() * 20) + 1;

// Start the guessing loop
let guess;
while (guess !== secret) {
  // Prompt the user and convert their input to an integer in one line
  guess = parseInt(prompt("Please guess the secret number (1-20)"));

  // Check if the guess is correct, too low, or too high
  if (guess === secret) {
    alert("Correct Guess!");
  } else if (guess < secret) {
    alert("Incorrect, too low.");
  } else if (guess > secret) {
    alert("Incorrect, too high.");
  }
}



