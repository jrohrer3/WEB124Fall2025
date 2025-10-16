// Joel Rohrer October 21 2025
// Click & Drag Horizontal Scrolling (with touch support)
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// --- Mouse Events ---
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
  const walk = (x - startX) * 2.5; // scroll speed multiplier
  slider.scrollLeft = scrollLeft - walk;
});

// --- Touch Events (for mobile) ---
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
