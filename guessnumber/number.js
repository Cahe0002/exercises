"use strict";

const guessInput = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessButton");
const feedback = document.querySelector("#feedback");
const max = 100;
const min = 0;
const guessText = document.querySelector("#guessText");

const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let guessCount = 0;

guessButton.addEventListener("click", guessAnswer);

function guessAnswer() {
  const userGuess = Number(guessInput.value); // Value is what the user has written in the input
  guessCount++; // ++ adds/increse on every guess
  if (userGuess > secretNumber) {
    // If userGuess is higher than secretNumber
    feedback.textContent = "Det er for højt, prøv igen"; // write "Det er for højt, prøv igen".
  } else if (userGuess < secretNumber) {
    // else if the userGuess is lower than secretNumber.
    feedback.textContent = "Det er for lavt, prøv igen"; // write "Det er for lavt, prøv igen".
  } else {
    feedback.textContent = "Tillykke, du gættede rigtigt"; // else write "Tillykke, du gættede rigtigt".
    reset(); // reset = start over when guessing the right number.
  }
  guessText.textContent = `Antal gæt: ${guessCount}`;
}

function reset() {
  guessInput.value = ""; // reset the input values to 0
  guessCount = 0; //count going to 0 again
  secretNumber = Math.floor(Math.random() * (max - min + 1)) + min; // secretNumber starting again.
}


