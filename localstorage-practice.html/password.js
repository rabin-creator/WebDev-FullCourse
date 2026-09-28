const passwordDisplay = document.getElementById('password-display');
const copyBtn = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');

const lengthInput = document.getElementById('length');
const numbersCheckbox = document.getElementById('include-numbers');
const symbolsCheckbox = document.getElementById('include-symbols');

const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword() {
  let characterPool = LETTERS;
  
  if (numbersCheckbox.checked) {
    characterPool += NUMBERS;
  }
  if (symbolsCheckbox.checked) {
    characterPool += SYMBOLS;
  }

  const length = parseInt(lengthInput.value) || 12;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  passwordDisplay.value = password;
}

// Copy password to clipboard
copyBtn.addEventListener('click', () => {
  if (!passwordDisplay.value) return;

  navigator.clipboard.writeText(passwordDisplay.value).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1500);
  });
});

generateBtn.addEventListener('click', generatePassword);

// Initial password generation on load
generatePassword();