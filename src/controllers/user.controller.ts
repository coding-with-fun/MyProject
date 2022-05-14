import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import { User } from "../model/user.model";

export const GetAllUsers = async (req: Request, res: Response) => {
  const users = await myDataSource.getRepository(User).find();

  res.json(users);
};

export const GetUserByID = async (req: Request, res: Response) => {
  const results = await myDataSource.getRepository(User).findOneBy({
    id: parseInt(req.params.id),
  });

  return res.send(results);
};

export const AddUser = async (req: Request, res: Response) => {
  const user = myDataSource.getRepository(User).create(req.body);
  const results = await myDataSource.getRepository(User).save(user);

  return res.send(results);
};

export const UpdateUser = async (req: Request, res: Response) => {
  const user = await myDataSource.getRepository(User).findOneBy({
    id: parseInt(req.params.id),
  });
  myDataSource.getRepository(User).merge(user, req.body);
  const results = await myDataSource.getRepository(User).save(user);

  return res.send(results);
};

export const DeleteUser = async (req: Request, res: Response) => {
  const results = await myDataSource.getRepository(User).delete(req.params.id);

  return res.send(results);
};
