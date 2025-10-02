// Joel Rohrer October 7 2025
const panels = document.querySelectorAll('.panel');

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
  if (e.key === 'ArrowRight') console.log("Next panel →");
  if (e.key === 'ArrowLeft') console.log("Previous panel ←");
});
