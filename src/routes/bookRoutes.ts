// bookRoutes.ts
import { Router } from "express";
import * as bookController from "../controllers/bookController";
import { authenticateToken } from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/authorizationMiddleware";

const router = Router();

router.post(
  "/createBook",
  authenticateToken,
  authorizeRoles(["CREATOR"]),
  bookController.createBook
);
router.get(
  "/viewBooks",
  authenticateToken,
  authorizeRoles(["VIEW_ALL"]),
  bookController.viewBooks
);
router.get(
  "/viewBooksByUser",
  authenticateToken,
  authorizeRoles(["VIEWER"]),
  bookController.viewBooksByUser
);
router.get(
  "/viewOldBooks",
  authenticateToken,
  authorizeRoles(["VIEW_ALL"]),
  bookController.viewOldBooks
);
router.get(
  "/viewNewBooks",
  authenticateToken,
  authorizeRoles(["VIEW_ALL"]),
  bookController.viewNewBooks
);

export default router;
