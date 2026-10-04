const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (!text) return;

  // Create list item container
  const li = document.createElement('li');

  // Left wrapper (text + priority badge)
  const leftBox = document.createElement('div');
  leftBox.style.display = 'flex';
  leftBox.style.alignItems = 'center';

  const taskSpan = document.createElement('span');
  taskSpan.classList.add('task-text');
  taskSpan.textContent = text;

  const tagSpan = document.createElement('span');
  tagSpan.classList.add('tag', priority);
  tagSpan.textContent = priority;

  leftBox.appendChild(taskSpan);
  leftBox.appendChild(tagSpan);

  // Right wrapper (Complete / Delete actions)
  const actionsBox = document.createElement('div');
  actionsBox.classList.add('actions');

  const checkBtn = document.createElement('button');
  checkBtn.classList.add('btn-action');
  checkBtn.innerHTML = '✔';
  checkBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const delBtn = document.createElement('button');
  delBtn.classList.add('btn-action');
  delBtn.innerHTML = '🗑';
  delBtn.addEventListener('click', () => {
    li.remove();
  });

  actionsBox.appendChild(checkBtn);
  actionsBox.appendChild(delBtn);

  li.appendChild(leftBox);
  li.appendChild(actionsBox);

  taskList.appendChild(li);
  taskInput.value = '';
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});