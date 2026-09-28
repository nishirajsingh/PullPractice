// Variable to store the counter number
let count = 0;

// Grab elements from the HTML
const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

// Increase button clicked
increaseBtn.onclick = function() {
  count = count + 1;
  countDisplay.innerText = count;
};

// Decrease button clicked
decreaseBtn.onclick = function() {
  count = count - 1;
  countDisplay.innerText = count;
};

// Reset button clicked
resetBtn.onclick = function() {
  count = 0;
  countDisplay.innerText = count;
};
