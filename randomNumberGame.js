const gameForm = document.getElementById("gameForm");
const numberRange = document.getElementById("numberRange");
const userNumber = document.getElementById("userNumber");

const resultText = document.getElementById("resultText");
const resultP = resultText.querySelector("p");
const resultH3 = resultText.querySelector("h3");

let userRange;

function numberRangeChange() {
  userRange = numberRange.value;
  userNumber.max = userRange;
}

function gameFormSubmit(event) {
  event.preventDefault();
  const randomNumber = Math.ceil(Math.random() * userRange);
  const userChosed = parseInt(userNumber.value);
  resultP.innerText = `You chose: ${userChosed}, the machice chose: ${randomNumber}`;

  if (userChosed == randomNumber) {
    resultH3.innerText = "You won😄";
  } else {
    resultH3.innerText = "You lost😓";
  }
}

numberRange.addEventListener("change", numberRangeChange);
gameForm.addEventListener("submit", gameFormSubmit);
