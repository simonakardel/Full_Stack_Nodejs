import express from "express";
const app = express();

import dotenv from "dotenv/config";
// if import only from dotenv we need to run the config function
//dotenv.config();
// crypto, randomBytes

import gothamRouter from "./routers/gothamRouter.js";
app.use(gothamRouter);


import path from "path";
app.use(express.static(path.resolve("../06._Svelte_Family/dist")));


import helmet from "helmet";
app.use(helmet());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));


import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import rateLimit from 'express-rate-limit'

// general limiter that takes effect on all routes
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(apiLimiter);

// inline - another way to define a limiter
// works only for /auth routes
app.use("/auth", rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 4, // Limit each IP to 4 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}));


app.get("/piblings", (req, res) => {
    res.send({ data: ["John", "Mark"] });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

