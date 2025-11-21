import { Router } from "express";
import { assignRole, getUserRoles } from "../controllers/userRoleControllers";

const router = Router();

router.post("/assign", assignRole);       // Assign role to user
router.get("/:userId", getUserRoles);     // Get roles by user

export default router;
