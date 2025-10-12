// Joel Rohrer October 14 2025
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
let currentIndex = 0;

function loadNextImage() {
  // Add fade-out class
  img.classList.add('fade-out');

  // Wait for transition to finish (0.5s)
  setTimeout(() => {
    // Change image source
    img.src = presetImages[currentIndex];
    img.alt = `Preset Image ${currentIndex + 1}`;

    // Increment index for next reload
    currentIndex++;
    if (currentIndex >= presetImages.length) currentIndex = 0;

    // Fade in
    img.classList.remove('fade-out');
  }, 500); // matches the CSS transition duration
}

// Initial load
loadNextImage();

// Reload button
document.getElementById('reload-image').addEventListener('click', loadNextImage);

// Optional: log success/failure
img.onload = () => console.log("Image loaded successfully!");
img.onerror = () => console.error("Failed to load image.");

// Random background color
document.body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

// Random font size
document.querySelector('h2').style.fontSize = `${Math.floor(Math.random()*30 + 30)}px`;

// Random quotes
const quotes = [
  "Life is short, smile while you still have teeth.",
  "Do what you love, love what you do.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Every day is a second chance.",
  "Happiness is homemade."
];
document.getElementById('random-text').textContent = quotes[Math.floor(Math.random()*quotes.length)];

// Random image rotation
document.documentElement.style.setProperty('--rotation', `${Math.floor(Math.random() * 20 - 10)}deg`);

// Random image shadow
const shadowSize = Math.floor(Math.random() * 20 + 5);
document.documentElement.style.setProperty('--shadow', `${shadowSize}px ${shadowSize}px 30px rgba(0,0,0,0.6)`);
