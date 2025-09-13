//Joel Rohrer September 16 2025
//Change: altered some const variable names to make more legible sense.
const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');

//Changes: added a function to generate 12 tick marks. 
//Each tick is rotated by 30 degrees (360/12). 
//They are then placed outwards [translateY(-14rem)].
//This general position of the ticks is then placed on the clock face itself.
function createClockTicks() {
  const clockFace = document.querySelector('.clock-face');

  for (let i = 0; i < 12; i++) {
    const tick = document.createElement('div');
    tick.classList.add('tick');
    tick.style.transform = `rotate(${i * 30}deg) translateY(-14rem)`;
    clockFace.appendChild(tick);
  }
}

createClockTicks();
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
