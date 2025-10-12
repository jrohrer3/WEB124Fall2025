// Joel Rohrer October 14 2025

// Update CSS variables from controls
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

// Random Unsplash image
const img = document.getElementById('random-image');

function loadRandomImage() {
  const uniqueId = Date.now() + '-' + Math.floor(Math.random() * 10000);
  img.src = `https://source.unsplash.com/random/800x500?sig=${uniqueId}`;
  img.alt = "Random Unsplash Image"; // fallback if image fails
}

// Initial load
loadRandomImage();

// Reload button functionality
document.getElementById('reload-image').addEventListener('click', loadRandomImage);

// Log load success or failure
img.onload = () => console.log("Image loaded successfully!");
img.onerror = () => console.error("Failed to load Unsplash image.");

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
heading.style.fontSize = `${Math.floor(Math.random() * 30 + 30)}px`; // 30–60px

// Random quote
const quotes = [
  "Life is short, smile while you still have teeth.",
  "Do what you love, love what you do.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Every day is a second chance.",
  "Happiness is homemade."
];
document.getElementById('random-text').textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Random image rotation
document.documentElement.style.setProperty('--rotation', `${Math.floor(Math.random() * 20 - 10)}deg`);

// Random image shadow
const shadowSize = Math.floor(Math.random() * 20 + 5);
document.documentElement.style.setProperty('--shadow', `${shadowSize}px ${shadowSize}px 30px rgba(0,0,0,0.6)`);
