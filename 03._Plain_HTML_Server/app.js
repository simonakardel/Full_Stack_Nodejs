const express = require("express");
const app = express();

app.use(express.static("public"));

//const tanskUtil = require("./util/tanks.js")
const {getTanks, addTank} = require("./util/tanks.js")

//console.log(tanskUtil.getTanks());
//console.log(getTanks);

app.get("/museum-guards", (req, res) => {
    res.sendFile(__dirname + "/public/museum_guards/museum_guards.html");
})


let visitorCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get('/api/tanks', (req, res) => {
    res.send({data: tanks})
});

app.get('/api/visitors', (req, res) => {
    res.send({data: visitorCount})
})

app.put('/api/visitors', (req, res) => {
    res.send({data: ++visitorCount})
})

app.get('/visitors', (req, res) => {
    res.sendFile(__dirname + '/public/visitors/visitors.html')
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});

// api/tanks - gives you data

