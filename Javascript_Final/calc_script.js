// Joel Rohrer October 28 2025
// Add event listener to trigger all operations when the Calculate button is clicked
document.getElementById('calculateBtn').addEventListener('click', runAll);

// Function to perform addition using a for loop
function addition() {
  const num = parseFloat(document.getElementById('num').value); // Get input value and convert to float
  let result = '';
  for (let i = 1; i <= 10; i++) { // Loop from 1 to 10
    result += `${num} + ${i} = ${num + i}<br>`; // Add current number to input and append to result string
  }
  document.getElementById('addition').innerHTML = result; // Display results in the addition paragraph
}

// Function to perform subtraction using a while loop
function subtraction() {
  const num = parseFloat(document.getElementById('num').value); // Get input value
  let result = '';
  let i = 1;
  while (i <= 10) { // Loop from 1 to 10
    result += `${num} - ${i} = ${num - i}<br>`; // Subtract current number from input
    i++;
  }
  document.getElementById('subtraction').innerHTML = result; // Display results
}

// Function to perform multiplication using a do...while loop
function multiplication() {
  const num = parseFloat(document.getElementById('num').value);
  let result = '';
  let i = 1;
  do {
    result += `${num} * ${i} = ${num * i}<br>`; // Multiply input by current number
    i++;
  } while (i <= 10);
  document.getElementById('multiplication').innerHTML = result; // Display results
}

// Function to perform division using a for loop and fixed decimal places
function division() {
  const num = parseFloat(document.getElementById('num').value);
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${num} / ${i} = ${(num / i).toFixed(2)}<br>`; // Divide input and format to 2 decimal places
  }
  document.getElementById('division').innerHTML = result; // Display results
}

// Function to run all calculations
function runAll() {
  addition();
  subtraction();
  multiplication();
  division();
}
