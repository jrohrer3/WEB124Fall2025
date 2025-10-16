// Joel Rohrer October 21 2025
// --- Click & Drag Scrolling ---
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// Create Unsplash items dynamically
const numItems = 25;
for (let i = 1; i <= numItems; i++) {
  const item = document.createElement('div');
  item.classList.add('item');
  // Each image is unique using Unsplash random query
  item.style.backgroundImage = `url('https://source.unsplash.com/random/600x800?sig=${i}')`;
  slider.appendChild(item);
}

// Mouse events
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2.5;
  slider.scrollLeft = scrollLeft - walk;
});

// Touch events (mobile support)
let touchStartX = 0;
let touchScrollLeft = 0;

slider.addEventListener('touchstart', (e) => {
  slider.classList.add('active');
  touchStartX = e.touches[0].pageX - slider.offsetLeft;
  touchScrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - touchStartX) * 2;
  slider.scrollLeft = touchScrollLeft - walk;
});

slider.addEventListener('touchend', () => {
  slider.classList.remove('active');
});

// --- Background color picker ---
const colorPicker = document.getElementById('bgColor');
colorPicker.addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});
  slider.scrollLeft = touchScrollLeft - walk;
});

slider.addEventListener('touchend', () => {
  slider.classList.remove('active');
});
