// 1. Select DOM Elements
const taskInput = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-btn');
const taskList = document.querySelector('#task-list');

// 2. Function to Add a New Task
function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent adding empty tasks
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new <li> element
  const li = document.createElement('li');
  li.textContent = taskText;

  // Click on task to delete it
  li.addEventListener('click', () => {
    li.remove();
  });

  // Append <li> to the <ul>
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}

// 3. Event Listeners
addBtn.addEventListener('click', addTask);

// Support pressing "Enter" key to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});