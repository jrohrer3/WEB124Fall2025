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
  cancelAnimationFrame(momentumFrame); // stop momentum if dragging again
});

gallery.addEventListener('mouseleave', stopDragging);
gallery.addEventListener('mouseup', stopDragging);

gallery.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  gallery.scrollLeft = scrollStart - walk;

  // Calculate velocity for momentum
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
