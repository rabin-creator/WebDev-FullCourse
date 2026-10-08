const list = document.getElementById('draggable-list');
let draggedItem = null;

list.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'LI') {
    draggedItem = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  }
});

list.addEventListener('dragend', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.remove('dragging');
    draggedItem = null;
    
    // Clean up leftover highlight styles
    document.querySelectorAll('#draggable-list li').forEach(item => {
      item.classList.remove('drag-over');
    });
  }
});

list.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required to allow dropping
  const target = e.target.closest('li');

  if (target && target !== draggedItem) {
    // Clear other highlights
    document.querySelectorAll('#draggable-list li').forEach(item => {
      if (item !== target) item.classList.remove('drag-over');
    });
    target.classList.add('drag-over');
  }
});

list.addEventListener('drop', (e) => {
  e.preventDefault();
  const target = e.target.closest('li');

  if (target && target !== draggedItem) {
    target.classList.remove('drag-over');

    // Calculate position relative to target center to decide insert before/after
    const rect = target.getBoundingClientRect();
    const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;

    list.insertBefore(draggedItem, next ? target.nextSibling : target);
  }
});