// Joel Rohrer October 21 2025
const gallery = document.querySelector('.gallery');
const totalPanels = 25;

// Generate 25 panels in grid order
for (let i = 1; i <= totalPanels; i++) {
  const panel = document.createElement('div');
  panel.classList.add('panel');

  const img = document.createElement('img');
  img.src = `images/image${i}.jpg`; // Make sure you have images 1-25
  img.alt = `Image ${i}`;
  panel.appendChild(img);

  gallery.appendChild(panel);

  // Make panel draggable
  makeDraggable(panel);
}

function makeDraggable(el) {
  let isDragging = false;
  let startX, startY, origX, origY;
  let velocity = { x: 0, y: 0 };
  let animationFrame;

  el.addEventListener('mousedown', (e) => {
    isDragging = true;
    el.classList.add('active');
    startX = e.clientX;
    startY = e.clientY;
    origX = el.offsetLeft;
    origY = el.offsetTop;
    el.style.position = 'absolute';
    el.style.zIndex = 1000; // Bring to front
    cancelAnimationFrame(animationFrame);
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    el.style.left = `${origX + dx}px`;
    el.style.top = `${origY + dy}px`;

    // Update velocity for momentum
    velocity.x = dx;
    velocity.y = dy;
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    el.classList.remove('active');
    applyMomentum(el, velocity);
  });
}

function applyMomentum(el, velocity) {
  let vx = velocity.x * 0.2;
  let vy = velocity.y * 0.2;

  function move() {
    vx *= 0.95; // friction
    vy *= 0.95;
    let left = parseFloat(el.style.left) + vx;
    let top = parseFloat(el.style.top) + vy;

    // Boundary check
    left = Math.min(Math.max(0, left), gallery.clientWidth - el.clientWidth);
    top = Math.min(Math.max(0, top), gallery.clientHeight - el.clientHeight);

    el.style.left = `${left}px`;
    el.style.top = `${top}px`;

    if (Math.abs(vx) > 0.1 || Math.abs(vy) > 0.1) {
      animationFrame = requestAnimationFrame(move);
    }
  }

  move();
}
