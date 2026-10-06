const items = [
  'JavaScript', 'Python', 'C++', 'Java', 'C#', 
  'TypeScript', 'Rust', 'Go', 'PHP', 'Swift', 
  'Kotlin', 'Ruby', 'Dart', 'HTML & CSS'
];

const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');

let debounceTimer = null;

function renderResults(filteredItems) {
  resultsList.innerHTML = '';

  if (filteredItems.length === 0) {
    resultsList.innerHTML = '<li class="no-results">No matching items found</li>';
    return;
  }

  filteredItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    resultsList.appendChild(li);
  });
}

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  
  const filtered = items.filter(item => 
    item.toLowerCase().includes(query)
  );

  renderResults(filtered);
}

// Debounce helper: delays execution until user stops typing for 'delay' ms
function debounce(callback, delay) {
  return function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      callback();
    }, delay);
  };
}

// Trigger search with a 300ms debounce delay
searchInput.addEventListener('input', debounce(handleSearch, 300));

// Initial render
renderResults(items);