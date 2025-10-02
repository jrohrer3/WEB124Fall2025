// Joel Rohrer October 7 2025
const pages = document.querySelectorAll('.page');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });
}

function nextPage() {
  current = (current + 1) % pages.length;
  showPage(current);
}

function prevPage() {
  current = (current - 1 + pages.length) % pages.length;
  showPage(current);
}

nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextPage();
  if (e.key === 'ArrowLeft') prevPage();
});
