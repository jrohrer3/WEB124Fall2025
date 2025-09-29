// Joel Rohrer September 30 2025
// Debounce utility: prevents function from executing too often
const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function executedFunction(...args) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

// Cache querySelectorAll result
const sliderImages = document.querySelectorAll('.slide-in');

// Function to check whether or not the images should be active
function checkSlide() {
  const viewportHeight = window.innerHeight;

  sliderImages.forEach(img => {
    const rect = img.getBoundingClientRect();

    // Image is considered visible when half of it enters the viewport
    const isHalfShown =
      rect.top < viewportHeight * 0.75 &&
      rect.bottom > viewportHeight * 0.25;

    img.classList.toggle('active', isHalfShown);
  });
}

// Use passive listeners for smoother scrolling
window.addEventListener('scroll', debounce(checkSlide, 50), { passive: true });

// Run once on page load to handle images already in view
window.addEventListener('DOMContentLoaded', checkSlide);
