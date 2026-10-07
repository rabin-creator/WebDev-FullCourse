let currentStep = 1;

const fullName = document.getElementById('full-name');
const email = document.getElementById('email');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

const reviewName = document.getElementById('review-name');
const reviewEmail = document.getElementById('review-email');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateUI() {
  // Toggle step panels
  document.querySelectorAll('.step-content').forEach((step, idx) => {
    step.classList.toggle('active', idx + 1 === currentStep);
  });

  // Toggle badge indicators
  document.querySelectorAll('.step-badge').forEach((badge, idx) => {
    badge.classList.toggle('active', idx + 1 <= currentStep);
  });

  // Button visibility & text
  prevBtn.classList.toggle('hidden', currentStep === 1);
  
  if (currentStep === 3) {
    nextBtn.textContent = 'Submit';
    reviewName.textContent = fullName.value;
    reviewEmail.textContent = email.value;
  } else {
    nextBtn.textContent = 'Next';
  }
}

function validateStep() {
  if (currentStep === 1) {
    if (!fullName.value.trim()) {
      nameError.style.display = 'block';
      return false;
    }
    nameError.style.display = 'none';
  }

  if (currentStep === 2) {
    const isEmailValid = email.value.includes('@') && email.value.includes('.');
    if (!isEmailValid) {
      emailError.style.display = 'block';
      return false;
    }
    emailError.style.display = 'none';
  }

  return true;
}

nextBtn.addEventListener('click', () => {
  if (currentStep < 3) {
    if (validateStep()) {
      currentStep++;
      updateUI();
    }
  } else {
    alert('Form submitted successfully!');
    // Reset form
    currentStep = 1;
    fullName.value = '';
    email.value = '';
    updateUI();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateUI();
  }
});