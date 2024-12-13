"use strict";

const button = document.getElementById("btn");

const colors = ["red", "blue", "yellow", "green"];

const allRounds = 12;
const colorsLength = 4;
let secretColors = ["yellow", "blue", "green", "red"];
let currentResult = [];
let allTries = 0;

let color1;
let color2;
let color3;
let color4;

function startGame() {
  color1 = prompt(
    "Please choose the first colors from the listed colors : red, blue, yellow, green"
  );

  color2 = prompt(
    "Please choose your second color from the listed colors: red, blue, yellow, green"
  );
  color3 = prompt(
    "Please choose your third color from the listed colors: red, blue, yellow, green"
  );
  color4 = prompt(
    "Please choose your fourth color from the listed colors: red, blue, yellow, green"
  );
  currentResult = color1 + ", " + color2 + ", " + color3 + ", " + color4;

  console.log(currentResult);
  validateGuess();
  resetGame();
}

function validateGuess() {
  if (secretColors.length == currentResult.length) {
    console.log("You Won ! 😃");
  } else {
    console.log("You lost the game! 😥");
  }
}
validateGuess();

function resetGame() {
  if (allRounds == allTries) {
    console.log("All rounds up!");
  }
}
resetGame();

button.addEventListener("click", startGame);
