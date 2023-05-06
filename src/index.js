import express from "express";
import { sequelizeConnection } from "./config/database.js";
import { UsersTable, CoursesTable, userCoursesTable } from "./modal/index.js";
import router from "./routes/index.js";
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.port || 8000;

app.use(router);

sequelizeConnection.authenticate()
    .then(console.log(`database is connected`))
    .catch((err) => console.log(`getting eror ${err}`))

sequelizeConnection.sync({ force: false })

app.listen(port, () => console.log(`server is starting in ${port}`));
