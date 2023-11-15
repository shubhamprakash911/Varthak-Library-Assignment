import { Router } from "express";
import * as userController from "../controllers/userController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

export default router;
