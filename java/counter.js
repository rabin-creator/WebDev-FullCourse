let count = 0;

const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Increase count
incrementBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

// Decrease count
decrementBtn.addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
});

// Reset count
resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});