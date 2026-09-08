const toggleBtn = document.getElementById('toggle-btn');
const secretText = document.getElementById('secret-text');

toggleBtn.addEventListener('click', () => {
  // Toggle the 'hidden' CSS class on the paragraph
  secretText.classList.toggle('hidden');

  // Update button text depending on visibility
  if (secretText.classList.contains('hidden')) {
    toggleBtn.textContent = 'Show Text';
  } else {
    toggleBtn.textContent = 'Hide Text';
  }
});