import * as express from "express";
import {
  AddUser,
  DeleteUser,
  GetAllUsers,
  GetUserByID,
  UpdateUser,
} from "../controllers/user.controller";

export const UsersRouter = express.Router();

UsersRouter.get("/", GetAllUsers);
UsersRouter.get("/:id", GetUserByID);
UsersRouter.post("/", AddUser);
UsersRouter.put("/:id", UpdateUser);
UsersRouter.delete("/:id", DeleteUser);
