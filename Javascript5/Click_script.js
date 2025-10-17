// Joel Rohrer October 21 2025

const gallery = document.getElementById('gallery');
const items = gallery.querySelectorAll('.item');

// Assign background images from data attributes
items.forEach(item => {
  const img = item.dataset.img;
  item.style.backgroundImage = `url('${img}')`;
});

// Click & Drag functionality
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
