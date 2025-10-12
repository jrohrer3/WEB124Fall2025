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

// Set a random Unsplash image
const randomNumber = Math.floor(Math.random() * 1000); // Random number 0–999
const img = document.getElementById('random-image');
img.src = `https://source.unsplash.com/random/800x500?sig=${randomNumber}`;
