import express from "express";
import { sequelizeConnection } from "./config/database.js";
import { UsersTable, CoursesTable } from "./modal/index.js";

const app = express();
const port = process.env.port || 8000;

sequelizeConnection.authenticate().then(console.log(`database is connected`)).catch((err) => console.log(`getting eror ${err}`))

sequelizeConnection.sync({ force: true })

app.get('/', (req, res) => {

    res.send("<center>testing  api</center>");
    console.clear();
    console.log("index function");

});

app.listen(port, () => console.log(`server is starting in ${port}`));