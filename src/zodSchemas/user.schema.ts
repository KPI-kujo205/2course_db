import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    password: z.string(),
    name: z.string(),
    mail: z.string().email(),
    age: z.number().optional(),
    gender: z.string().optional(),
    roleId: z.number(),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    mail: z.string().email().optional(),
    age: z.number().optional(),
    gender: z.enum(["male", "female"]).optional(),
    role: z.enum(["client", "expert"]).optional(),
  }),
  params: z.object({
    userId: z.string(),
  }),
});

export const withUserIdSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
});
