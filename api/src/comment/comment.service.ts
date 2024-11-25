import { Request, Response } from "express";
import connection from "../config/database.config";

const getAll = async (req: Request, res: Response) => {
  res.send("Get all comments");
};

const getOne = async (req: Request, res: Response) => {
  res.send("Get one comments");
};

const create = async (req: Request, res: Response) => {
  res.send("Create one comments");
};

const update = async (req: Request, res: Response) => {
    res.send("Create one comments");
};

const remove = async (req: Request, res: Response) => {
    res.send("Create one comments");
  };

export default {
  getAll,
  getOne,
  create,
  update,
  remove
};