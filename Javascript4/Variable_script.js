// Joel Rohrer October 14 2025

// Update CSS variables from controls
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

// Preset images
const presetImages = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image6.jpg',
  'images/image7.jpg',
  'images/image8.jpg',
  'images/image9.jpg',
  'images/image10.jpg'
];

const img = document.getElementById('random-image');

function loadRandomPresetImage() {
  const randomIndex = Math.floor(Math.random() * presetImages.length);
  img.src = presetImages[randomIndex];
  img.alt = `Preset Image ${randomIndex + 1}`;
}

// Initial load
loadRandomPresetImage();

// Reload button functionality
document.getElementById('reload-image').addEventListener('click', loadRandomPresetImage);

// Log load success or failure
img.onload = () => console.log("Image loaded successfully!");
img.onerror = () => console.error("Failed to load image.");

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
