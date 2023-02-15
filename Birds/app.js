const app = require('express')();

// const birds = new Map();
// birds.set(1, { name: "Bald Eagle", habitat: "North America" });
// birds.set(2, { name: "Blue Jay", habitat: "North America" });
// birds.set(3, { name: "Penguin", habitat: "Antarctica" });
// birds.set(4, { name: "Toucan", habitat: "Central and South America" });
// birds.set(5, { name: "Kookaburra", habitat: "Australia" });
// birds.set(6, { name: "Flamingo", habitat: "South America" });
// birds.set(7, { name: "Hawk", habitat: "North America" });
// birds.set(8, { name: "Pelican", habitat: "Coastal regions" });
// birds.set(9, { name: "Ostrich", habitat: "Africa" });
// birds.set(10, { name: "Pigeon", habitat: "Cities" });


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

// ALL BIRDS
app.get('/birds', (req, res) => {
    res.send(JSON.stringify(birdsArray));
})

// BIRDS BY ID
app.get('/birds/:id', (req, res) => {
    res.send(JSON.stringify(getBirdById(parseInt(req.params.id))));
})


app.listen(8080);