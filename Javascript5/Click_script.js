// Joel Rohrer October 21 2025
const gallery = document.querySelector('.gallery');

let isDragging = false;
let startX;
let scrollStart;
let velocity = 0;
let lastX;
let momentumFrame;

gallery.addEventListener('mousedown', (e) => {
  isDragging = true;
  gallery.classList.add('active');
  startX = e.pageX - gallery.offsetLeft;
  scrollStart = gallery.scrollLeft;
  lastX = e.pageX;
  cancelAnimationFrame(momentumFrame);
});

gallery.addEventListener('mouseleave', stopDragging);
gallery.addEventListener('mouseup', stopDragging);

gallery.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault(); // prevents text/image drag
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed multiplier
  gallery.scrollLeft = scrollStart - walk;

  // Track velocity for inertia
  velocity = e.pageX - lastX;
  lastX = e.pageX;
});

function stopDragging() {
  if (!isDragging) return;
  isDragging = false;
  gallery.classList.remove('active');
  applyMomentum();
}

function applyMomentum() {
  velocity *= 2; // initial momentum boost
  function momentum() {
    gallery.scrollLeft -= velocity;
    velocity *= 0.95; // friction
    if (Math.abs(velocity) > 0.5) {
      momentumFrame = requestAnimationFrame(momentum);
    }
  }
  momentum();
}

// Optional: Enable touch drag support
let touchStartX = 0;
let touchScrollStart = 0;

gallery.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollStart = gallery.scrollLeft;
  cancelAnimationFrame(momentumFrame);
});

gallery.addEventListener('touchmove', (e) => {
  const touchX = e.touches[0].pageX;
  const walk = (touchX - touchStartX) * 2;
  gallery.scrollLeft = touchScrollStart - walk;
});

gallery.addEventListener('touchend', () => {
  velocity *= 1.5; // subtle momentum after swipe
  applyMomentum();
});
