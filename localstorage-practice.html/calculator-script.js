// 1. Select DOM Elements
const display = document.querySelector('#display');
const numButtons = document.querySelectorAll('.num, .operator');
const clearBtn = document.querySelector('#btn-clear');
const backBtn = document.querySelector('#btn-back');
const equalBtn = document.querySelector('#btn-equal');

// 2. Append Numbers / Operators to Display
numButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Avoid double operators or multiple leading zeros if desired
    display.value += button.textContent;
  });
});

// 3. Clear All
clearBtn.addEventListener('click', () => {
  display.value = '';
});

// 4. Backspace
backBtn.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

// 5. Evaluate Expression
equalBtn.addEventListener('click', () => {
  try {
    if (display.value.trim() !== '') {
      display.value = Function(`'use strict'; return (${display.value})`)();
    }
  } catch (error) {
    display.value = 'Error';
    setTimeout(() => { display.value = ''; }, 1500);
  }
});