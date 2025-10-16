// Joel Rohrer October 21 2025
// Click & Drag Horizontal Scrolling (mouse + touch)
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// Mouse Events
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

// Touch support
let touchStartX = 0;
let touchScrollLeft = 0;

slider.addEventListener('touchstart', (e) => {
  slider.classList.add('active');
  touchStartX = e.touches[0].pageX - slider.offsetLeft;
  touchScrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - touchStartX) * 2;
  slider.scrollLeft = touchScrollLeft - walk;
});

slider.addEventListener('touchend', () => {
  slider.classList.remove('active');
});

// Background Color Picker
const bgPicker = document.getElementById('bgColor');
bgPicker.addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});
