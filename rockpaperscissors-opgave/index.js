"use strict";
let userChoice;
let computerChoice;

const choices = ["rock", "paper", "scissors"]; //array for different options
const user = document.querySelector("#player1");
const userId = document.getElementById("player1");

const computer = document.querySelector("#player2");
const computerId = document.getElementById("player2");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);

function rockClicked() {
  reset(true);

  userChoice = "rock";

  //   console.log("ROCK CLICKED");
  makeChoice();
}

function paperClicked() {
  reset(true);

  userChoice = "paper";
  //   console.log("PAPER CLICKED");
  makeChoice();
}

function scissorsClicked() {
  reset(true);

  userChoice = "scissors";
  //   console.log("SCISSORS CLICK");
  makeChoice();
}

function makeChoice() {
  computerChoice = choices[Math.floor(Math.random() * 3)];
  countDown();
}

function countDown() {
  user.classList.add("shake");
  computer.classList.add("shake");
  user.addEventListener("animationend", showChoice);
}

function showChoice() {
  if (userChoice == "paper") {
    // Equality operator
    userId.classList.add("paper");
  } else if (userChoice == "scissors") {
    userId.classList.add("scissors");
  } else if (userChoice == "rock") {
    userId.classList.add("rock");
  }
  if (computerChoice == "paper") {
    computerId.classList.add("paper");
  } else if (computerChoice == "scissors") {
    computerId.classList.add("scissors");
  } else if (computerChoice == "rock") {
    computerId.classList.add("rock");
  }

  //  user.classList.add(userChoice);
  //   computer.classList.add(computerChoice);
  showResult();
}

function showResult() {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");

  if (userChoice === computerChoice) {
    // === means Strict equality operator
    draw.classList.remove("hidden");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") || // && = Logical AND || = Logical OR
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    win.classList.remove("hidden");
  } else lose.classList.remove("hidden");
  {
    console.log("userChoice", userChoice);
    console.log("computerChoice", computerChoice);
  }
}

function reset(isPlayed) {
  if (isPlayed === true) {
    user.classList.remove("rock", "paper", "scissors", "shake");
    computer.classList.remove("rock", "paper", "scissors", "shake");
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");
  }
}
