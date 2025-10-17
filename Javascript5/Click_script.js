// Joel Rohrer October 21 2025
const gallery = document.querySelector('.gallery');
const totalPanels = 25;

// Add 25 images to the gallery
for (let i = 1; i <= totalPanels; i++) {
  const panel = document.createElement('div');
  panel.classList.add('panel');

  const img = document.createElement('img');
  img.src = `images/image${i}.jpg`; // Make sure you have images 1-25
  img.alt = `Image ${i}`;

  panel.appendChild(img);
  gallery.appendChild(panel);
}

// Click & Drag Scrolling
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
  const walk = (x - startX) * 2; // scroll-fast factor
  gallery.scrollLeft = scrollLeft - walk;
});
