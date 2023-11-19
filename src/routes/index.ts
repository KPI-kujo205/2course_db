import { Router } from "express";
import UserRouter from "./user.router";
import * as process from "process";
const router = Router();

router.get("/", (_req, res) => {
  res.send("The server is running!");
});

router.use("/user", UserRouter);

export default router;
