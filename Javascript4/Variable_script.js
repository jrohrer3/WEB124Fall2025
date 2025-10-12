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

// Pick a random starting index for initial load
let lastIndex = localStorage.getItem('lastImageIndex');
lastIndex = lastIndex !== null ? parseInt(lastIndex) : -1;

let currentIndex;
do {
  currentIndex = Math.floor(Math.random() * presetImages.length);
} while (currentIndex === lastIndex);

localStorage.setItem('lastImageIndex', currentIndex);

// Load next image with fade
function loadNextImage() {
  img.classList.add('fade-out');
  setTimeout(() => {
    img.src = presetImages[currentIndex];
    img.alt = `Preset Image ${currentIndex + 1}`;

    currentIndex++;
    if (currentIndex >= presetImages.length) currentIndex = 0;

    img.classList.remove('fade-out');
  }, 500);
}

// Initial load
loadNextImage();

// Reload button
document.getElementById('reload-image').addEventListener('click', loadNextImage);

// Controls affecting image directly
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const value = this.value;
  const suffix = this.dataset.sizing || '';

  switch(this.name) {
    case 'spacing':
      img.style.padding = value + suffix;
      break;
    case 'blur':
      img.style.filter = `blur(${value}px)`; // override CSS variable
      break;
    case 'base':
      img.style.backgroundColor = value;
      break;
  }

  // Update root CSS variables for consistency
  document.documentElement.style.setProperty(`--${this.name}`, value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

// Random background color
document.body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

// Random heading font size
document.querySelector('h2').style.fontSize = `${Math.floor(Math.random()*30 + 30)}px`;

// Random quote
const quotes = [
  "Life is short, smile while you still have teeth.",
  "Do what you love, love what you do.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Every day is a second chance.",
  "Happiness is homemade."
];
document.getElementById('random-text').textContent = quotes[Math.floor(Math.random()*quotes.length)];

// Random rotation and shadow for image
document.documentElement.style.setProperty('--rotation', `${Math.floor(Math.random() * 20 - 10)}deg`);
const shadowSize = Math.floor(Math.random() * 20 + 5);
document.documentElement.style.setProperty('--shadow', `${shadowSize}px ${shadowSize}px 30px rgba(0,0,0,0.6)`);
