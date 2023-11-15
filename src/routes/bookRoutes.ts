// bookRoutes.ts
import { Router } from "express";
import * as bookController from "../controllers/bookController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.post("/createBook", authenticateToken, bookController.createBook);
router.get("/viewBooks", authenticateToken, bookController.viewBooks);
router.get(
  "/viewBooksByUser",
  authenticateToken,
  bookController.viewBooksByUser
);
router.get("/viewOldBooks", authenticateToken, bookController.viewOldBooks);
router.get("/viewNewBooks", authenticateToken, bookController.viewNewBooks);

export default router;
