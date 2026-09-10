const titles = document.querySelectorAll('.accordion-title');

titles.forEach((title) => {
  title.addEventListener('click', () => {
    // Select the parent .accordion-item
    const parentItem = title.parentElement;
    
    // Toggle active class to show or hide the panel
    parentItem.classList.toggle('active');

    // Toggle icon indicator between + and -
    const icon = title.querySelector('span');
    if (parentItem.classList.contains('active')) {
      icon.textContent = '−';
    } else {
      icon.textContent = '+';
    }
  });
});