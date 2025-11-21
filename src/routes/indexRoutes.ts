import { Router } from "express";
import authRoutes from "./authRoutes";
import roleRoutes from "./roleRoutes";
import userRoleRoutes from "./userRoleRoutes"; // optional

const router = Router();

router.use("/auth", authRoutes);
router.use("/roles", roleRoutes);
router.use("/user-roles", userRoleRoutes);

export default router;
