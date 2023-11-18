import { Router } from "express";
import userController from "../controllers/user.controller";
const router = Router();

router.post("/create", userController.create);
router.patch("/update", userController.update);
router.get("/get", userController.get);
router.delete("/delete", userController.delete);

export default router;
