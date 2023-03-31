import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

import getJoke from "./util/jokes.js";
import templateEngine from "./util/templateEngine.js";

import renderPage from "./util/templateEngine.js";

const frontpagePath = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpagePath, { tabTitle: "Upper | Welcome"});

const IRLQuestsPath = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuestsPath, {tabTitle: "Upper | Quests"});

const contactPath = templateEngine.readPage("./public/pages/contact/contact.html");
const contactPage = templateEngine.renderPage(contactPath, {tabTitle: "Contact"})

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

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

app.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/");
})



const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});
