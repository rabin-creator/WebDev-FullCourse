const questions = [
  {
    question: "Which HTML tag is used to attach external JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<link>"],
    answer: 1
  },
  {
    question: "Which method adds a class to an HTML element in JS?",
    options: ["classList.add()", "addClass()", "style.class()", "appendClass()"],
    answer: 0
  },
  {
    question: "What keyword declares a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: 2
  }
];

let currentIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');

function loadQuestion() {
  nextBtn.classList.add('hidden');
  optionsContainer.innerHTML = '';

  const currentQ = questions[currentIndex];
  questionText.textContent = `${currentIndex + 1}. ${currentQ.question}`;

  currentQ.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    btn.textContent = optText;

    btn.addEventListener('click', () => selectOption(btn, index));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedBtn, selectedIndex) {
  const currentQ = questions[currentIndex];
  const allBtns = optionsContainer.querySelectorAll('.option-btn');

  // Disable all buttons once an answer is chosen
  allBtns.forEach(btn => btn.disabled = true);

  if (selectedIndex === currentQ.answer) {
    selectedBtn.style.backgroundColor = '#86efac'; // Green
    score++;
  } else {
    selectedBtn.style.backgroundColor = '#fca5a5'; // Red
    allBtns[currentQ.answer].style.backgroundColor = '#86efac'; // Show correct
  }

  nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  quizBox.classList.add('hidden');
  resultBox.classList.remove('hidden');
  scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
}

restartBtn.addEventListener('click', () => {
  currentIndex = 0;
  score = 0;
  resultBox.classList.add('hidden');
  quizBox.classList.remove('hidden');
  loadQuestion();
});

// Initial load
loadQuestion();