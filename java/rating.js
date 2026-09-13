const stars = document.querySelectorAll('.star');
const feedback = document.getElementById('feedback');

let selectedRating = 0;

stars.forEach((star) => {
  // Highlight stars on hover
  star.addEventListener('mouseover', () => {
    const value = star.getAttribute('data-value');
    highlightStars(value);
  });

  // Reset highlight when cursor leaves (unless already clicked)
  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating);
  });

  // Save selection on click
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    highlightStars(selectedRating);
    feedback.textContent = `You rated: ${selectedRating} out of 5 stars!`;
  });
});

function highlightStars(rating) {
  stars.forEach((star) => {
    const starValue = star.getAttribute('data-value');
    if (starValue <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}