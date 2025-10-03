// Joel Rohrer October 7 2025
const panels = document.querySelectorAll('.panel');
let currentIndex = 0;

// Utility: close all panels
function closeAllPanels() {
  panels.forEach(panel => {
    panel.classList.remove('open', 'open-active');
    panel.setAttribute('aria-expanded', 'false');
  });
}

// Toggle open state
function openPanel(panel) {
  closeAllPanels();
  panel.classList.add('open');
  panel.setAttribute('aria-expanded', 'true');

  // Wait for flex transition before activating text
  setTimeout(() => panel.classList.add('open-active'), 300);
}

// Event listeners for click
panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    currentIndex = index;
    openPanel(panel);
  });

  // Ensure text animation fires only for flex-grow changes
  panel.addEventListener('transitionend', (e) => {
    if (e.propertyName.includes('flex')) {
      panel.classList.toggle('open-active', panel.classList.contains('open'));
    }
  });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!['ArrowRight', 'ArrowLeft', 'Enter', ' '].includes(e.key)) return;

  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % panels.length;
    openPanel(panels[currentIndex]);
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + panels.length) % panels.length;
    openPanel(panels[currentIndex]);
  } else if (e.key === 'Enter' || e.key === ' ') {
    openPanel(panels[currentIndex]);
  }
});

// Open the first panel by default
openPanel(panels[0]);
