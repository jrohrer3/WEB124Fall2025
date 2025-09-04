// Joel Rohrer September 8 2025
// Set up a string variable with my name
let myName = "Joel Rohrer";

// Replace the text in paragraph 1
let para1 = document.getElementById("p1");
para1.textContent = myName;

// Define two number variables
let n1 = 10;
let n2 = 5;

// Add the numbers and output to paragraph 2
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// Multiply the numbers and output to paragraph 3
let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// Add one number to the string and output to paragraph 4
let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

// Multiply the string with a number and output to paragraph 5 (NaN)
let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

// Compare age with the multiplication result and output to paragraph 6
let age = 30;
let ageCompare = age < numberMult;
document.getElementById("p6").textContent = ageCompare;
