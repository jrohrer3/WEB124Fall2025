// Joel Rohrer October 21 2025
const gallery = document.getElementById('gallery');
const totalImages = 25; // number of images in the folder
const imagePath = 'images/'; // folder path
const imageExtension = '.jpeg'; // extension of images

// Dynamically create items
for (let i = 1; i <= totalImages; i++) {
  const div = document.createElement('div');
  div.classList.add('item');
  div.style.backgroundImage = `url('${imagePath}image${i}${imageExtension}')`;
  gallery.appendChild(div);
}

// Click & Drag Functionality
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
  isDown = true;
  gallery.classList.add('active');
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
  isDown = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('mouseup', () => {
  isDown = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 1.5;
  gallery.scrollLeft = scrollLeft - walk;
});

// Touch support
gallery.addEventListener('touchstart', (e) => {
  isDown = true;
  gallery.classList.add('active');
  startX = e.touches[0].pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('touchend', () => {
  isDown = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - gallery.offsetLeft;
  const walk = (x - startX) * 1.5;
  gallery.scrollLeft = scrollLeft - walk;
});

// Background color picker
const bgPicker = document.getElementById('bgColorPicker');
bgPicker.addEventListener('input', (e) => {
  gallery.style.backgroundColor = e.target.value;
});
