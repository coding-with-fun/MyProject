import * as express from "express";
import { UsersRouter } from "./user.routes";

const Router = express();

Router.use("/user", UsersRouter);

export default Router;
