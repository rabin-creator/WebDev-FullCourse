// 1. Selecting Elements from the DOM
const mainHeading = document.querySelector('#main-heading');
const description = document.querySelector('.description');
const changeTextBtn = document.querySelector('#change-text-btn');
const styleBtn = document.querySelector('#style-btn');

// 2. Event Listener to modify text
changeTextBtn.addEventListener('click', () => {
  mainHeading.textContent = "DOM Manipulation Mastered!";
  description.textContent = "You clicked the first button to update inner text.";
});

// 3. Event Listener to toggle CSS class
styleBtn.addEventListener('click', () => {
  mainHeading.classList.toggle('highlight');
});