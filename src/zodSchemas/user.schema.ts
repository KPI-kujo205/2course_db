import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    password: z.string(),
    name: z.string(),
    mail: z.string().email(),
    age: z.number().optional(),
    gender: z.string().optional(),
    role: z.string().optional(),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    name: z.string().optional(),
    mail: z.string().email().optional(),
    age: z.number().optional(),
    gender: z.string().optional(),
    role: z.string().optional(),
  }),
  params: z.object({
    userId: z.string(),
  }),
});

export const getUserSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
});
