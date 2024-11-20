// Declare variables
var story = document.getElementById("story"); // Element to display the story
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");
var answers = []; // Empty array to store answers

// Listen for clicks on the submit button
submit.addEventListener("click", getAnswer);

// Call the function to ask the first question
askQuestion(0);

/* askQuestion() asks a question based on the number passed to it */
function askQuestion(questionNumber) {
    answer.style.display = "block"; // Show the answer input area
    answers.length = questionNumber; // Ensure the answers array is the right length

    switch (questionNumber) {
        case 0:
            question.innerHTML = "Are you ready to play?";
            break;
        case 1:
            question.innerHTML = "Go to Mars, or stay home?";
            break;
        case 2:
            question.innerHTML = "Risk it, or go home.";
            break;
        default:
            break;
    }
}

/* getAnswer() retrieves the answer from the input field */
function getAnswer() {
    var cleanInput = yourAnswer.value.toUpperCase(); // Normalize input to uppercase
    answers.push(cleanInput); // Store the answer
    yourAnswer.value = ""; // Clear the input field
    continueStory(answers.length - 1); // Continue the story based on the answer index
}

/* continueStory() displays part of the story based on the answer */
function continueStory(answerNumber) {
    switch (answerNumber) {
        case 0:
            if (answers[0] === "YES") {
                story.innerHTML = document.getElementById("answer01").innerHTML; // Show the first part of the story
                askQuestion(1); // Ask the next question
            } else if (answers[0] === "NO") {
                // Handle the "No" response
                story.innerHTML = document.getElementById("err0").innerHTML; // Show an error message
                askQuestion(0); // Ask again
            } else {
                story.innerHTML = document.getElementById("err0").innerHTML; // Handle invalid input
                askQuestion(0);
            }
            break;
        case 1:
            if (answers[1] === "GO TO MARS") {
                // Show the outcome of going to Mars
                story.innerHTML = document.getElementById("answer11").innerHTML;
                askQuestion(2); // Ask the next question
            } else if (answers[1] === "STAY HOME") {
                // Show the outcome of staying home
                story.innerHTML = document.getElementById("answer12").innerHTML;
                theEnd(); // End the story
            } else {
                story.innerHTML = document.getElementById("err1").innerHTML; // Handle invalid input
                askQuestion(1);
            }
            break;
        case 2:
            if (answers[2] === "RISK IT") {
                // Show the outcome of risking it
                story.innerHTML = document.getElementById("answer21").innerHTML;
                theEnd(); // End the story
            } else if (answers[2] === "GO HOME") {
                // Show the outcome of going home
                story.innerHTML = document.getElementById("answer22").innerHTML;
                theEnd(); // End the story
            } else {
                story.innerHTML = document.getElementById("err2").innerHTML; // Handle invalid input
                askQuestion(2);
            }
            break;
        default:
            story.innerHTML = "The story is over!"; // Final message
            break;
    }
}

/* theEnd() ends the story and hides the input field */
function theEnd() {
    story.innerHTML += "<p>The End.</p>"; // Append a closing message
    question.innerHTML = ""; // Clear the question
    answer.style.display = "none"; // Hide the input area
}
