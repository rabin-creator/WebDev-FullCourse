const flipBtn = document.getElementById('flip-btn');
const colorText = document.getElementById('color-text');

// Hexadecimal characters
const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// Helper to pick a random index from hexDigits
function getRandomHexChar() {
  const randomIndex = Math.floor(Math.random() * hexDigits.length);
  return hexDigits[randomIndex];
}

flipBtn.addEventListener('click', () => {
  let hexColor = '#';
  
  // A hex color code needs 6 digits
  for (let i = 0; i < 6; i++) {
    hexColor += getRandomHexChar();
  }

  // Update DOM inline style and text
  document.body.style.backgroundColor = hexColor;
  colorText.textContent = hexColor;
});