const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Async function to fetch data from API
async function fetchQuote() {
  try {
    // 1. UI Loading State
    newQuoteBtn.disabled = true;
    quoteText.textContent = "Fetching quote...";
    quoteAuthor.textContent = "";

    // 2. Fetch data from dummy JSON API
    const response = await fetch('https://dummyjson.com/quotes/random');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // 3. Update DOM with API data
    quoteText.textContent = `"${data.quote}"`;
    quoteAuthor.textContent = `- ${data.author}`;

  } catch (error) {
    quoteText.textContent = "Failed to load quote. Please try again.";
    console.error("Error fetching quote:", error);
  } finally {
    // 4. Reset Button State
    newQuoteBtn.disabled = false;
  }
}

// Event Listener
newQuoteBtn.addEventListener('click', fetchQuote);

// Load initial quote on page load
fetchQuote();