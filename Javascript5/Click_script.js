const gallery = document.querySelector('.gallery');
const totalPanels = 25;

// Generate panels with random positions and sizes
for (let i = 1; i <= totalPanels; i++) {
  const panel = document.createElement('div');
  panel.classList.add('panel');
  
  const size = Math.random() * 80 + 120; // 120px to 200px
  panel.style.width = `${size}px`;
  panel.style.height = `${size}px`;

  const x = Math.random() * (gallery.clientWidth - size);
  const y = Math.random() * (gallery.clientHeight - size);
  panel.style.left = `${x}px`;
  panel.style.top = `${y}px`;

  const img = document.createElement('img');
  img.src = `images/image${i}.jpg`; // Change to your 25 images
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
    origX = parseFloat(el.style.left);
    origY = parseFloat(el.style.top);
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
