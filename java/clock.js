const clockDisplay = document.getElementById('clock');
const dateDisplay = document.getElementById('date');

function updateClock() {
  const now = new Date();

  // 1. Get current time values
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // 2. Determine AM / PM flag
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert 24h to 12h format
  const formattedHours = String(hours).padStart(2, '0');

  // 3. Update time readout
  clockDisplay.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;

  // 4. Update date readout
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// Initial update on load
updateClock();

// Re-run updateClock every 1000ms (1 second)
setInterval(updateClock, 1000);