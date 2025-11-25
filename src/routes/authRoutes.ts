import { Router } from "express";
import { register, login, logout } from "../controllers/authController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", register); // Register user
router.post("/login", login);       // Login user
router.post("/logout", authenticate, logout); // Protect logout with JWT
export default router;
