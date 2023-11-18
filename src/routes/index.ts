import { Router } from "express";
import UserRouter from "./user.router";
const router = Router();

router.get("/", (_req, res) => {
  res.send("The server is running!");
});

router.use("/user", UserRouter);

export default router;
