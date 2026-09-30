const noteInput = document.getElementById('note-input');
const addBtn = document.getElementById('add-btn');
const notesList = document.getElementById('notes-list');

// Load saved notes array or initialize empty
let notes = JSON.parse(localStorage.getItem('quick_notes')) || [];

function renderNotes() {
  notesList.innerHTML = '';
  
  notes.forEach((noteText, index) => {
    const li = document.createElement('li');
    li.textContent = noteText;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click', () => deleteNote(index));

    li.appendChild(delBtn);
    notesList.appendChild(li);
  });
}

function addNote() {
  const text = noteInput.value.trim();
  if (!text) return;

  notes.push(text);
  saveAndRender();
  noteInput.value = '';
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('quick_notes', JSON.stringify(notes));
  renderNotes();
}

addBtn.addEventListener('click', addNote);

// Load notes on startup
renderNotes();