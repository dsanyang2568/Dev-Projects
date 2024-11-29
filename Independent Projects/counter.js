
const countUpElement = document.getElementById("countup");
const countDownElement = document.getElementById("countdown");
const resetElement = document.getElementById("reset");
const displayCounterElement = document.getElementById("counter-display");

displayCounterElement.innerHTML = "0";
let number = 0;
let count = 1;

function counterUp() {
  number += count;
  return displayCounterElement.innerHTML = number.toString();
}
function counterDown() {
  number -= count;
  return displayCounterElement.innerHTML = number.toString();
}
function reset() {
  displayCounterElement.innerHTML = "0";
  number = 0;
}

