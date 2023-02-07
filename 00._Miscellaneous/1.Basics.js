// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2020
// You cannot touch line 1 or 2

// don't do calculations in console logs!, console log is online for debugging

// evaluates each character and whether it is possible to parse it as a number
const resultOne = parseInt(year) + number;
const resultTwo = Number(year) + number;

// by putting plus sign in front of a number, you can turn strings into numbers
const resultThree = +year + number;

console.log(resultOne);
// --------------------------------------
