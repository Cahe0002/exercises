"use strict";

const startButton = document.querySelector(".start");

const computerGuess = document.querySelector(".guess");
const tooHighButton = document.querySelector(".toohigh");
const tooLowButton = document.querySelector(".toolow");
const correctButton = document.querySelector(".correct");
const computerText = document.querySelector("#computertext");

let min = 1;
let max = 100;
let matRandom;
let gameStarted = false;
let computerCount = 0;

tooHighButton.disabled = true;
tooLowButton.disabled = true;
correctButton.disabled = true;

tooHighButton.addEventListener("click", clicked);
tooLowButton.addEventListener("click", clicked);
correctButton.addEventListener("click", clicked);
startButton.addEventListener("click", startGame);

function startGame() {
  gameStarted = true;
  startButton.disabled = true;
  tooHighButton.disabled = false;
  tooLowButton.disabled = false;
  correctButton.disabled = false;
  min = 1;
  max = 100;
  computerCount = 0;
  computerText.textContent = `Antal gæt: ${computerCount}`;

  randomNumber();
}

function randomNumber() {
  matRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  computerGuess.textContent = matRandom;
  computerCount++;
  computerText.textContent = `Antal gæt: ${computerCount}`;
}

function clicked(e) {
  if (gameStarted === false) {
    return;
  }
  if (e.target === tooHighButton) {
    max = matRandom - 1;
    randomNumber();
  } else if (e.target === tooLowButton) {
    min = matRandom + 1;
    randomNumber();
  } else if (e.target === correctButton) {
    tooHighButton.disabled = true;
    tooLowButton.disabled = true;
    correctButton.disabled = true;
    startButton.disabled = false;
    gameStarted = false;
    confetti({
      color: ["rgb(79, 56, 56)", "#ffff", "#ffe985"], // Color for the confetti)
    });
  }
}

// function computerWin(guess) {
//   if (guess === secretNumber) {
//     rightAnswer.textContent = "Du fik det rigtigt. Tillykke!";
//   } else if (guess < secretNumber) {
//     rightAnswer.textContent = "Tallet er for lavt";
//     min = guess + 1;
//     setTimeout(randomNumber, 5000);
//   } else {
//     rightAnswer.textContent = "Tallet er for højt";
//     max = guess - 1;
//     setTimeout(randomNumber, 5000);
//   }
// }
