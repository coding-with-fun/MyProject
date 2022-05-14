import * as express from "express";
import { Request, Response } from "express";
import { User } from "./model/user.model";
import { myDataSource } from "./app-data-source";
import Router from "./routes/index.routes";

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// create and setup express app
const app = express();
app.use(express.json());

// register routes
app.use(Router);

// start express server
app.listen(3000);
