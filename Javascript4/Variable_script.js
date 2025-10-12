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

// Image 1 Source Link: https://unsplash.com/photos/yellow-red-and-blue-brick-wall-hpXpLcub5Xg
// Image 2 Source Link: https://unsplash.com/photos/yellow-banana-fruits-on-pink-surface-XxvC7az167s
// Image 3 Source Link: https://unsplash.com/photos/IqY9v9kQWF0
// Image 4 Source Link: https://unsplash.com/photos/pink-and-white-hearts-illustration-O8PjuNKatJ0
// Image 5 Source Link: https://unsplash.com/photos/cooked-popcorn-ViI6qkoRfNA
// Image 6 Source Link: https://unsplash.com/photos/assorted-color-wheel-lot-D2rJ0RlDZ58
// Image 7 Source Link: https://unsplash.com/photos/blue-and-white-wall-V-77FxfGeQU
// Image 8 Source Link: https://unsplash.com/photos/a-close-up-of-a-wall-with-a-pattern-on-it-YajdCee-H88
// Image 9 Source Link: https://unsplash.com/photos/black-and-white-floor-tiles-X-3CqrZd6R0
// Image 10 Source Link: https://unsplash.com/photos/multicolored-textiles-roof-CdR2290-KAo

const img = document.getElementById('random-image');

// Pick a random starting index for initial load
let currentIndex = Math.floor(Math.random() * presetImages.length);

function loadNextImage() {
  // Add fade-out class
  img.classList.add('fade-out');

  // Wait for fade-out transition
  setTimeout(() => {
    // Change image source
    img.src = presetImages[currentIndex];
    img.alt = `Preset Image ${currentIndex + 1}`;

    // Increment index for next reload
    currentIndex++;
    if (currentIndex >= presetImages.length) currentIndex = 0;

    // Fade-in effect
    img.classList.remove('fade-out');
  }, 500); // matches CSS transition duration
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

// Random image rotation
document.documentElement.style.setProperty('--rotation', `${Math.floor(Math.random() * 20 - 10)}deg`);

// Random image shadow
const shadowSize = Math.floor(Math.random() * 20 + 5);
document.documentElement.style.setProperty('--shadow', `${shadowSize}px ${shadowSize}px 30px rgba(0,0,0,0.6)`);
