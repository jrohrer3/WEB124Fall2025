// Joel Rohrer October 21 2025
const slider = document.querySelector('.items');
const colorPicker = document.getElementById('bgColor');

let isDown = false;
let startX;
let scrollLeft;

// Start dragging
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Stop dragging
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Move according to drag direction (natural movement)
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX); // No inversion
  slider.scrollLeft = scrollLeft - walk;
});

// Allow background color customization
colorPicker.addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});
