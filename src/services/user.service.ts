import db from "../db";
import { z } from "zod";
import { updateUserSchema, createUserSchema } from "../zodSchemas/user.schema";
import { user } from "../db/schema";

class UserService {
  async create(req: z.infer<typeof createUserSchema>) {
    db.insert(user).values();
  }
  async update(req: z.infer<typeof updateUserSchema>) {
    // db.update(user).values(
    //     ...req.body
    // ).where(user.id===req.params.userId)
  }

  async delete(req: Request, res: Response) {}
  async get(userId: string) {
    const user = await db.select(user).where((userId) => userId === user.id);

    return user;
  }
}

export default new UserService();
