import express from "express";

const app = express();

const port = 8000;

app.get('/', (req, res) => res.send("testing code"));

app.listen(port, () => console.log(`server is starting in ${port}`));