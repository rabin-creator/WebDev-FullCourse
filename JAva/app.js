const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Handle form submission
taskForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page refresh

  const taskText = taskInput.value.trim();
  if (!taskText) return;

  // 1. Create task item container
  const li = document.createElement('li');

  // 2. Add task text
  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => span.classList.toggle('completed'));

  // 3. Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', () => li.remove());

  // 4. Append elements to list
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
});