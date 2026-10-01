const filterBtns = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // 1. Update active button state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedFilter = btn.getAttribute('data-filter');

    // 2. Filter elements based on data-category
    cards.forEach((card) => {
      const category = card.getAttribute('data-category');

      if (selectedFilter === 'all' || category === selectedFilter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});