import { Request, Response } from "express";
import UserService from "../services/user.service";
import { zodParseRequest } from "../middleware/handleZodResponse";

import {
  updateUserSchema,
  createUserSchema,
  getUserSchema,
} from "../zodSchemas/user.schema";

class UserController {
  async create(req: Request, res: Response) {
    await zodParseRequest(createUserSchema, req);
    await UserService.create(req);
  }
  async update(req: Request, res: Response) {
    await zodParseRequest(updateUserSchema, req);
    await UserService.update(req);
  }

  async delete(req: Request, res: Response) {}
  async get(req: Request, res: Response) {
    await zodParseRequest(getUserSchema, req);
    const user = await UserService.get(req.params.userId);
    res.json({ user });
  }
}

export default new UserController();
