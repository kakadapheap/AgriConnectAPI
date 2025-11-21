import { Router } from "express";
import { register, login } from "../controllers/authController";

const router = Router();

router.post("/register", register); // Register user
router.post("/login", login);       // Login user

export default router;
