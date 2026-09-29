const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');

const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const perPersonDisplay = document.getElementById('per-person');

function calculateTip() {
  const bill = parseFloat(billInput.value) || 0;
  const tipPercent = parseFloat(tipInput.value) || 0;
  const people = parseInt(peopleInput.value) || 1;

  // Calculate tip and totals
  const tipTotal = bill * (tipPercent / 100);
  const grandTotal = bill + tipTotal;
  const amountPerPerson = grandTotal / (people > 0 ? people : 1);

  // Render to DOM formatted to 2 decimal places
  tipAmountDisplay.textContent = `$${tipTotal.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${grandTotal.toFixed(2)}`;
  perPersonDisplay.textContent = `$${amountPerPerson.toFixed(2)}`;
}

// Calculate automatically on any input change
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);