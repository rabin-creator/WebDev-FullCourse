const slides = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
    caption: 'Serene Mountain Lake'
  },
  {
    url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600',
    caption: 'Misty Pine Forest'
  },
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600',
    caption: 'Foggy Mountains'
  }
];

let currentIndex = 0;

const carouselImg = document.getElementById('carousel-img');
const captionText = document.getElementById('caption');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateSlide() {
  carouselImg.src = slides[currentIndex].url;
  captionText.textContent = slides[currentIndex].caption;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

// Initial render
updateSlide();