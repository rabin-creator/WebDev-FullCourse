// 1. Select DOM Elements
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('#image-modal');
const modalImg = document.querySelector('#modal-img');
const closeBtn = document.querySelector('#close-btn');

// 2. Open Lightbox on Thumbnail Click
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    modalImg.src = img.src; // Copy source URL to full-size preview
    modal.classList.add('active'); // Display modal
  });
});

// 3. Close Lightbox Event Listeners
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Close modal when clicking outside the preview image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Support ESC key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});