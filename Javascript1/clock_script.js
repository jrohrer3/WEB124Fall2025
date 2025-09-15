//Joel Rohrer September 15 2025
//Change: altered some const variable names to make more legible sense.
const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');

//Change: add clock numbers 1-12 around the clock face. 
//Each number is represented by variable 'i', increasing until i = 12.
//This is done for all numbers surrounding the clock face. 
//Their positions and scale are largely handled via CSS, and will also remain vertical!
const clockFace = document.querySelector('.clock-face');

for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.classList.add('number');
  number.style.setProperty('--i', i);
  number.textContent = i;
  clockFace.appendChild(number);
}

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = ((seconds / 60) * 360) + 90;
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
