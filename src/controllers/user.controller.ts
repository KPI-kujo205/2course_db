import { Request, Response } from "express";
import UserService from "../services/user.service";
import { zodParseRequest } from "../middleware/handleZodResponse";

import {
  updateUserSchema,
  createUserSchema,
  withUserIdSchema,
} from "../zodSchemas/user.schema";
import * as console from "console";

class UserController {
  async create(req: Request, res: Response) {
    await zodParseRequest(createUserSchema, req);
    const userId = await UserService.create(req.body);
    return { userId };
  }
  async update(req: Request, res: Response) {
    await zodParseRequest(updateUserSchema, req);
    return await UserService.update(req.body, req.params.userId);
  }

  async delete(req: Request, res: Response) {
    await zodParseRequest(withUserIdSchema, req);
    return await UserService.delete(req.params.userId);
  }
  async get(req: Request, res: Response) {
    await zodParseRequest(withUserIdSchema, req);
    return await UserService.get(req.params.userId);
  }

  async getAll(req: Request, res: Response) {
    const users = await UserService.getAll();
    res.status(200).json(users);
  }
}

export default new UserController();
