"use strict";

const startButton = document.querySelector(".start");

const computerGuess = document.querySelector(".guess");
const tooHighButton = document.querySelector(".toohigh");
const tooLowButton = document.querySelector(".toolow");
const correctButton = document.querySelector(".correct");

let min = 1;
let max = 100;
let matRandom;
let gameStarted = false;

tooHighButton.disabled = true;
tooLowButton.disabled = true;
correctButton.disabled = true;

tooHighButton.addEventListener("click", clicked);
tooLowButton.addEventListener("click", clicked);
correctButton.addEventListener("click", clicked);
startButton.addEventListener("click", startGame);

function startGame() {
  gameStarted = true;
  tooHighButton.disabled = false;
  tooLowButton.disabled = false;
  correctButton.disabled = false;
  min = 1;
  max = 100;

  randomNumber();
}

function randomNumber() {
  matRandom = Math.floor((min + max) / 2);
  computerGuess.textContent = matRandom;
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
    if (matRandom === secretNumber) {
      correctButton.textContent = "Computeren gættede rigtigt!";
      startGame();
    } else if (matRandom < secretNumber) {
      console.log("det er for lavt");
    }
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
