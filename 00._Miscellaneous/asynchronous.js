/*
Why: 
- because js is single-threaded

Examples:
- fetching over a network 
- heavy calculations
- reading, writing to files
- cryptographic functions
- databases

Solution 1: Callbacks: 
- cons: callback hell, pyramid of doom

Solution 2: Promises: 
-use callbacks under the hood, it is the same when it get compiled
Two states:
- pending
- fullfiled
    - rejected
    - resolved
*/

// takes a callback - executor
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw Error;
            resolve("Yaay");
        } catch {
            reject("Naay");
        }
    }, 3000);
})
.then(successMessage => console.log("Success message: ", successMessage))
.catch(errorMessage => console.log("Error message: ", errorMessage));

// by returning a promise celebrate is wrapped in a promise
function celebrate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Celebrate");
        }, 3000);
        
    })
}

celebrate().then(successMessage => console.log("Success message: ", successMessage));

function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Something good happened!");
            } catch {
                reject("Something bad happened!");
            }
        }, 2000);
    });
}

somethingGoodSomethingBad()
.then(successMessage => {
    console.log("What happened? ", successMessage);
});