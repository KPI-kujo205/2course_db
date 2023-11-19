import db from "../db";
import { z } from "zod";
import { updateUserSchema, createUserSchema } from "../zodSchemas/user.schema";
import { user } from "../db/schema";
import { eq, getTableColumns, sql } from "drizzle-orm";
import * as console from "console";

const { password, ...nonPasswordColumns } = getTableColumns(user);

class UserService {
  async create(body: z.infer<typeof createUserSchema>["body"]) {
    const { roleId } = body;
    const [data] = await db.insert(user).values(body);
    return data.insertId;
  }
  async update(
    body: z.infer<(typeof updateUserSchema)["body"]>,
    userId: string,
  ) {
    await db
      .update(user)
      .set({
        age: body.age,
        gender: body.gender,
        name: body.name,
        mail: body.mail,
      })
      .where(eq(user.id, userId));

    return await this.get(userId);
  }

  async delete(userId: string) {
    await db.delete(user).where(eq(user.id, userId));

    return { message: "Deleted successfully" };
  }

  async get(userId: string) {
    return db.select(nonPasswordColumns).from(user).where({ id: userId });
  }

  async getAll() {
    return db.select(nonPasswordColumns).from(user);
  }
}

export default new UserService();
