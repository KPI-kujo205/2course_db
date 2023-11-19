import { Request, Response } from "express";
import { BaseError } from "../errors";
import { ZodError, z } from "zod";

const handleZodResponse =
  (fn: (req: Request, res: Response) => Return) =>
  async (req: Request, res: Response) => {
    try {
      const result = await fn(req, res);

      if (!result) {
        return res.status(404).json({ message: "Not found" });
      }

      return res.json(result);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({
          status: 400,
          message: "Request input validation error",
          issues: err.issues,
        });
        return;
      }

      const error = err as Error | BaseError;
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  };

export async function zodParseRequest<T extends AnyZodObject>(
  schema: T,
  req: Request,
): Promise<z.infer<T>> {
  return await schema.parseAsync(req);
}

export default handleZodResponse;
