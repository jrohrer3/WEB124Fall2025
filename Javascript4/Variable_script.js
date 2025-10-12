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
img.onerror = () => co
