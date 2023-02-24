const express = require("express");
const app = express();

app.use(express.json());

const birdsArray = [
    { id: 1, name: "Bald Eagle", habitat: "North America" },
    { id: 2, name: "Blue Jay", habitat: "North America" },
    { id: 3, name: "Penguin", habitat: "Antarctica" },
    { id: 4, name: "Toucan", habitat: "Central and South America" },
    { id: 5, name: "Kookaburra", habitat: "Australia" },
    { id: 6, name: "Flamingo", habitat: "South America" },
    { id: 7, name: "Hawk", habitat: "North America" },
    { id: 8, name: "Pelican", habitat: "Coastal regions" },
    { id: 9, name: "Ostrich", habitat: "Africa" },
    { id: 10, name: "Pigeon", habitat: "Cities" }
  ];

function getBirdById(id){
    return birdsArray.find(bird => bird.id === id);
}

let currentId = 10;

// ALL BIRDS
app.get('/birds', (req, res) => {
    res.send({data : birdsArray});
});

// BIRDS BY ID
app.get('/birds/:id', (req, res) => {
    res.send({data: getBirdById(parseInt(req.params.id))});
});

// CREATE BIRD
app.post('/birds', (req, res) => {
    const newBird = req.body;
    newBird.id = ++currentId;
    res.send({data: newBird})
    console.log(birdsArray)
});


// DELETE BIRD BY ID
// CHECKS IF BIRD WITH GIVEN ID EXISTS FIRST
// CONVENTION TO PUT ERROR MESSAGE FIRST
app.delete('/birds/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const bird = getBirdById(id);
    if(!bird){
        res.status(404).send({message:`Bird with id ${id} not found` })
    } else {
        res.send({message: `Bird deleted with id ${id}`})
        const index = birdsArray.findIndex(bird => bird.id === id)
        birdsArray.splice(index, 1)
    }
    console.log(birdsArray)
});

// UPDATE BIRD BY ID
// CHECKS IF BIRD WITH GIVEN ID EXISTS FIRST
app.put('/birds/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const bird = getBirdById(id);
    const updatedBird = req.body;
    if(!bird){
        res.status(404).send({message:`Bird with id ${id} not found` })
    } else {
        const index = birdsArray.findIndex(bird => bird.id === id)
        birdsArray[index] = updatedBird;
        res.send({message: `Bird with id ${id} was updated`})
    }
    console.log(birdsArray)
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});