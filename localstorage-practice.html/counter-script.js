// 1. Initial State
let count = 0;

// 2. Select DOM Elements
const counterValue = document.querySelector('#counter-value');
const decreaseBtn = document.querySelector('#decrease-btn');
const resetBtn = document.querySelector('#reset-btn');
const increaseBtn = document.querySelector('#increase-btn');

// 3. Helper Function to Update Display and Colors
function updateDisplay() {
  counterValue.textContent = count;

  if (count > 0) {
    counterValue.style.color = '#2a9d8f'; // Green for positive
  } else if (count < 0) {
    counterValue.style.color = '#e63946'; // Red for negative
  } else {
    counterValue.style.color = '#ffffff'; // White for zero
  }
}

// 4. Event Listeners
increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});