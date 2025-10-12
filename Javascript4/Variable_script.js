// Joel Rohrer October 14 2025

// Update CSS variables from controls
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

// Random Unsplash image
const randomNumber = Math.floor(Math.random() * 1000);
const img = document.getElementById('random-image');
img.src = `https://source.unsplash.com/random/800x500?sig=${randomNumber}`;

// Random background color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
document.body.style.backgroundColor = randomColor();

// Random heading font size
const heading = document.querySelector('h2');
const randomSize = Math.floor(Math.random() * 30) + 30; // 30–60px
heading.style.fontSize = `${randomSize}px`;

// Random quote/text
const quotes = [
  "Life is short, smile while you still have teeth.",
  "Do what you love, love what you do.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Every day is a second chance.",
  "Happiness is homemade."
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('random-text').textContent = randomQuote;

// Random image rotation
const rotation = Math.floor(Math.random() * 20) - 10; // small rotation -10 to +10 deg
document.documentElement.style.setProperty('--rotation', `${rotation}deg`);

// Random image shadow
const shadowSize = Math.floor(Math.random() * 20) + 5;
document.documentElement.style.setProperty('--shadow', `${shadowSize}px ${shadowSize}px 30px rgba(0,0,0,0.6)`);
