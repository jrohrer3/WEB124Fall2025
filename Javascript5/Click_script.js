// Joel Rohrer October 21 2025
const gallery = document.querySelector('.gallery');

let isDragging = false;
let startX;
let scrollStart;

gallery.addEventListener('mousedown', (e) => {
  isDragging = true;
  gallery.classList.add('active');
  startX = e.pageX - gallery.offsetLeft;
  scrollStart = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
  isDragging = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('mouseup', () => {
  isDragging = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault(); // prevent text selection
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed multiplier
  gallery.scrollLeft = scrollStart - walk;
});
