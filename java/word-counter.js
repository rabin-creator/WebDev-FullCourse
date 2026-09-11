const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const letterCount = document.getElementById('letter-count');

textInput.addEventListener('input', () => {
  const text = textInput.value;

  // Count letters (excluding spaces/newlines)
  const letters = text.replace(/\s/g, '').length;
  letterCount.textContent = letters;

  // Count words by trimming whitespace and splitting on non-word characters
  const trimmedText = text.trim();
  if (trimmedText === '') {
    wordCount.textContent = '0';
  } else {
    const words = trimmedText.split(/\s+/);
    wordCount.textContent = words.length;
  }
});