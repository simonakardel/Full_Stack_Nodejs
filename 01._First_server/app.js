// const app = require('express')();

const express = require('express');
// instantiate express
const app = express();

//needs to be included if you want to pass body as json
app.use(express.json());

// entire thing - route
// HTTP method - GET
// '/' - endpoint
// () => {} - callback function
app.get('/', (req, res) => {
    res.send({message: 'Our first route'});
});

let bicyclespin = 0;

app.get('/spinthebicycle', (req, res) => {
    bicyclespin += 1;
    res.send({message: `People have spun the bicycle wheel ${bicyclespin} times`});
});

app.get('/kickthedinosaur', (req, res) => {
    res.send({message: 'Ow ow ow'});
});


app.get('/about', (req, res) => {
    res.send(`
    <h1>About</h1>
    <p>This is the about page</p>
    `);
});

// /bat?adjective=spooky
// query string in express is always passed as a json
app.get('/bat', (req, res) => {
    res.send({message: `The bat is ${req.query.adjective}`});
});

// /bottle/large
app.get('/bottle/:bottleSize', (req, res) => {
    res.send({message: `The bottle is ${req.params.bottleSize}`});
});

app.post('/package', (req, res) => {
    console.log(req.body);
    res.send({message: req.body});
});


// Why are we sending json?
// every server and language can interpret json

// app is an object that has a function called listen()
// 8080 - http dev port
// should be at the bottom of the file
app.listen(8080);

