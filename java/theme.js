const toggleBtn = document.getElementById('theme-toggle');

// Check saved theme or detect operating system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initial theme application
let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
updateButtonText();

// Toggle event handler
toggleBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Update DOM attribute & persist state
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  
  updateButtonText();
});

function updateButtonText() {
  toggleBtn.textContent = currentTheme === 'dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark';
}