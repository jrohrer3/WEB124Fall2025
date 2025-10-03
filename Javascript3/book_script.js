// Joel Rohrer October 7 2025
const panels = document.querySelectorAll('.panel');
let currentIndex = 0;

function toggleOpen() {
  const expanded = this.classList.toggle('open');
  this.setAttribute('aria-expanded', expanded);
}

function toggleActive(e) {
  if (e.propertyName === 'flex-grow') {
    this.classList.toggle('open-active');
  }
}

// Attach listeners
for (const panel of panels) {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  // Close current
  panels[currentIndex]?.classList.remove('open', 'open-active');
  panels[currentIndex]?.setAttribute('aria-expanded', 'false');

  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % panels.length;
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + panels.length) % panels.length;
  } else if (e.key === 'Enter' || e.key === ' ') {
    panels[currentIndex]?.classList.toggle('open');
    panels[currentIndex]?.setAttribute(
      'aria-expanded',
      panels[currentIndex].classList.contains('open')
    );
    return;
  } else {
    return;
  }

  // Open new
  const panel = panels[currentIndex];
  panel.classList.add('open');
  panel.setAttribute('aria-expanded', 'true');

  // Delay text activation
  setTimeout(() => panel.classList.add('open-active'), 300);
});

