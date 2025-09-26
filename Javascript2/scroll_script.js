// Joel Rohrer September 30 2025
// Debounce utility
const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function (...args) {
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

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    const isHalfShown = rect.top < window.innerHeight && rect.bottom > window.innerHeight / 2;
    if (isHalfShown) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('load', checkSlide); // Initial load check

