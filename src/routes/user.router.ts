import { Router } from "express";
import userController from "../controllers/user.controller";
import handleZodResponse from "../middleware/handleZodResponse";

const router = Router();
router.post("/create", handleZodResponse(userController.create));
router.patch("/:userId", handleZodResponse(userController.update));

router.get("/", userController.getAll);
router.get("/:userId", handleZodResponse(userController.get));

router.delete("/:userId", handleZodResponse(userController.delete));

export default router;
