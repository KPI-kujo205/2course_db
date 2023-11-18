import { Router } from "express";
import userController from "../controllers/user.controller";
const router = Router();

router.post("/create", userController.create);
router.post("/update", userController.update);
router.post("/get", userController.get);
router.post("/delete", userController.delete);
