const data = require("./tanks.json")

// every file is a module

function getTanks(){
    return tanks;
}

function addTank(tank){
    tanks.push(tank);
    return tanks;
}

module.exports = {
    getTanks,
    addTank
};
