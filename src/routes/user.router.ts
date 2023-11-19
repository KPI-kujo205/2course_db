import { Router } from "express";
import userController from "../controllers/user.controller";
import handleZodResponse from "../middleware/handleZodResponse";

const router = Router();
router.post("/create", handleZodResponse(userController.create));
router.patch("/update/:userId", handleZodResponse(userController.update));
router.get("/get/:userId", handleZodResponse(userController.get));
router.delete("/delete", userController.delete);

export default router;
