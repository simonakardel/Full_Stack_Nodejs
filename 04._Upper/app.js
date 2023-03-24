import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

import getJoke from "./util/jokes.js";

import renderPage from "./util/templateEngine.js";

const frontpagePath = "./public/pages/frontpage/frontpage.html";
const frontpagePage = renderPage(frontpagePath, { tabTitle: "Upper | Welcome"});

const IRLQuestsPath = "./public/pages/IRLQuests/IRLQuests.html";
const IRLQuestsPage = renderPage(IRLQuestsPath, {tabTitle: "Upper | Quests"});

//Pages
// without toString() it gives a buffer which is a byte stream
//const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
//const jokes = fs.readFileSync("./public/pages/jokes/jokes.html");
//const IRLQuests = fs.readFileSync("./public/pages/IRLQuests/IRLQuests.html");


// Constructed pages
//const frontpagePage = navbar + frontpage + footer;
//const jokesPage = navbar + jokes + footer;
//const IRLQuestsPage = navbar + IRLQuests + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/jokes", (req, res) => {
   
    const jokesPath = "./public/pages/jokes/jokes.html";
    const jokesPage = renderPage(jokesPath, { tabTitle: "Upper | Jokes", cssLink: ""});
    res.send(jokesPage);
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});
