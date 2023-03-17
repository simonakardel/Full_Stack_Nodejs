import express from "express";
const app = express();

// internally in node.js - path
import path from "path";

import jokes from "./util/jokes.js";

// needed for static files as style sheets, images and frontend 
//javascript files that are served automaticaly and not manually as out html pages
//app.use(express.static("public"));

app.get("/", (req, res) => {
    // resolve gives you the absolute file path
    // !! no slash in the beginning
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"));
});


const PORT = 8080;
app.listen(PORT, (error) => {
    {
        if(error){
            console.log(error);
        }
    }
    console.log("Server running on port " + PORT);
});
