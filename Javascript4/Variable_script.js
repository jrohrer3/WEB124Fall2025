// Joel Rohrer October 14 2025
//Selects all input elements inside the .controls container.
const inputs = document.querySelectorAll('.controls input');

// Updates CSS variables based on input name and value.
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Use 'input' event for real-time feedback (includes mouse move & change).
inputs.forEach(input => input.addEventListener('input', handleUpdate));
