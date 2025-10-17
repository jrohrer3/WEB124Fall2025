// Joel Rohrer October 21 2025

const gallery = document.getElementById('gallery');
let items = Array.from(gallery.querySelectorAll('.item'));

// Shuffle Images on Load
items = items.sort(() => Math.random() - 0.5);
items.forEach(item => gallery.appendChild(item));

// Assign background images from data attributes
items.forEach(item => {
  const img = item.dataset.img;
  item.style.backgroundImage = `url('${img}')`;

  // Random initial size variation
  const scale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
  item.style.transform = `scale(${scale})`;

  // Random hue rotation
  const hue = Math.floor(Math.random() * 360);
  item.style.filter = `hue-rotate(${hue}deg) saturate(1.2)`;
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

// Click to expand image
items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('expanded');
  });
});

// Background color picker
const bgPicker = document.getElementById('bgColorPicker');
bgPicker.addEventListener('input', (e) => {
  gallery.style.backgroundColor = e.target.value;
});
