const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modalOverlay = document.getElementById('modal-overlay');

function openModal() {
  modalOverlay.classList.add('open');
}

function closeModal() {
  modalOverlay.classList.remove('open');
}

// 1. Open on button click
openBtn.addEventListener('click', openModal);

// 2. Close on X button click
closeBtn.addEventListener('click', closeModal);

// 3. Close when clicking the dark backdrop outside the card
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// 4. Close when pressing the ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
    closeModal();
  }
});