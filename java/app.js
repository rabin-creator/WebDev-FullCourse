// Load saved tasks from localStorage or default to an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const searchInput = document.getElementById('search-input');
const taskList = document.getElementById('task-list');

let currentFilter = 'all';

// Helper function to save tasks array to localStorage
function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add new task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ id: Date.now(), text, completed: false });
  saveToLocalStorage(); // Save update
  taskInput.value = '';
  renderTasks();
});

// Search filter
searchInput.addEventListener('input', renderTasks);

// Filter buttons
document.getElementById('filter-all').addEventListener('click', () => { currentFilter = 'all'; renderTasks(); });
document.getElementById('filter-active').addEventListener('click', () => { currentFilter = 'active'; renderTasks(); });
document.getElementById('filter-completed').addEventListener('click', () => { currentFilter = 'completed'; renderTasks(); });

// Render logic
function renderTasks() {
  taskList.innerHTML = '';
  const query = searchInput.value.toLowerCase();

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.text.toLowerCase().includes(query);
    if (currentFilter === 'active') return matchesSearch && !task.completed;
    if (currentFilter === 'completed') return matchesSearch && task.completed;
    return matchesSearch;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) span.classList.add('completed');

    span.addEventListener('click', () => {
      task.completed = !task.completed;
      saveToLocalStorage(); // Save toggle
      renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', () => {
      tasks = tasks.filter(t => t.id !== task.id);
      saveToLocalStorage(); // Save deletion
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Initial render on page load
renderTasks();