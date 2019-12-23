import * as express from "express";
import { DBInstance } from "./db";
import { routes } from "./routes";
import bodyParser = require("body-parser");
import * as cors from 'cors';

require("dotenv").config();
const { PORT } = process.env;
const app = express();
DBInstance.connect();


app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`App started and listening at ${PORT}`);
});

app.use(routes);
