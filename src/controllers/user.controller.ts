import { Request, Response } from "express";

class UserController {
  async create(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
  async get(req: Request, res: Response) {
    res.status(200).send("<h1>Hello world!<h1>");
  }
}

export default new UserController();
