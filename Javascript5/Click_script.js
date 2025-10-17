// Joel Rohrer October 21 2025
const slider = document.querySelector('.items');
const colorPicker = document.getElementById('bgColor');

let isDown = false;
let startX;
let scrollLeft;

// Start dragging
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Stop dragging
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Move according to drag direction (natural movement)
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX); // No inversion
  slider.scrollLeft = scrollLeft - walk;
});

// Allow background color customization
colorPicker.addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});

// script.js — Randomly select 25 of 50 CSS background classes
const gallery = document.querySelector('.gallery');
const totalImages = 50;
const imagesToShow = 25;

// Create an array of 50 class names
const allClasses = Array.from({ length: totalImages }, (_, i) => `bg${i + 1}`);

// Shuffle the array and pick 25
const shuffled = allClasses.sort(() => 0.5 - Math.random()).slice(0, imagesToShow);

// Add items with random backgrounds
shuffled.forEach(cls => {
  const div = document.createElement('div');
  div.classList.add('item', cls);
  gallery.appendChild(div);
});

// Wait until DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) {
    console.error("Gallery container not found!");
    return;
  }

  const totalImages = 50;
  const imagesToShow = 25;
  const allClasses = Array.from({ length: totalImages }, (_, i) => `bg${i + 1}`);
  const shuffled = allClasses.sort(() => 0.5 - Math.random()).slice(0, imagesToShow);

  shuffled.forEach(cls => {
    const div = document.createElement('div');
    div.classList.add('item', cls);
    gallery.appendChild(div);
  });
});
