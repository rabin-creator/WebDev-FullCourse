// 1. Select DOM Elements
const body = document.body;
const colorPicker = document.querySelector('#color-picker');
const resetBtn = document.querySelector('#reset-btn');
const statusText = document.querySelector('#status-text');

// 2. Real-time background color change on input
colorPicker.addEventListener('input', (event) => {
  const selectedColor = event.target.value;
  body.style.backgroundColor = selectedColor;
  statusText.textContent = `Current background hex: ${selectedColor}`;
});

// 3. Reset background color to default
resetBtn.addEventListener('click', () => {
  const defaultColor = '#121212';
  body.style.backgroundColor = defaultColor;
  colorPicker.value = defaultColor;
  statusText.textContent = "Pick a custom background color or toggle dark mode.";
});