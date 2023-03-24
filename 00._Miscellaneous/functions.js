// Math.random() - gives you a random number between 0 and 1
// if you want a random number betwwen 0 and 10 use *10
// whole number - use Math.floor()
// hoisting 

console.log(random(0, 10));

function random(min, max) {
    return Math.floor(Math.random() * (max - min) - min);
}

// anonymous function - function without a name
// this is a variable, use semicolon after it
const randomAnonymous = function(min, max) {
    return Math.floor(Math.random() * (max - min) - min);
};

console.log(randomAnonymous(0, 10));


const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min) - min);
}

console.log(randomArrowFunction(0, 10));

// lambda function
const randomArrowFunctionOneLine = (min, max) => Math.floor(Math.random() * (max - min) - min);

console.log(randomArrowFunctionOneLine(0, 10));


// genericAction is a callback function
// callback function is a function that is passed as an argument
function genericActionPerformer(genericAction, genericName){

    return genericAction(genericName);
}

const substract = (name) => `${name} is subtracting.`;


console.log(genericActionPerformer(substract, 'Tobias')); 

const walk = (name) => `${name} is walking.`;

console.log(genericActionPerformer(walk, 'Nicolas'));

// pass by value
// pass by reference

console.log(genericActionPerformer((name) => `${name} is reading.`, 'Andrea'));