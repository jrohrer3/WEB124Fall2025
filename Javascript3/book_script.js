// Joel Rohrer October 7 2025
const panels = document.querySelectorAll('.panel');
let currentIndex = 0;

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// Optional Keyboard Navigation
document.addEventListener('keydown', (e) => {
  panels[currentIndex]?.classList.remove('open', 'open-active');

  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % panels.length;
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + panels.length) % panels.length;
  } else {
    return;
  }

  const panel = panels[currentIndex];
  panel.classList.add('open');
  // Delay activating text transition
  setTimeout(() => panel.classList.add('open-active'), 300);
});
