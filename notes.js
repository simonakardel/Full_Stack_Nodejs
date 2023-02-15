"use strict"


//Never do this
// totalGlobalVariable = "Don't do this";
// var globalVariable = "Don't do this";

{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}
console.log(someValue);


//setTimeout - wait for a certain amount of time and then execute a function

// this doesn't work because var is global
for (var i = 0; i <=5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (let i = 0; i <=5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// const - you cannot reassign the value of a variable, must be initialized
