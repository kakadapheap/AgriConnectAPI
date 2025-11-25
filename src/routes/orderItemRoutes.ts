import { Router } from "express";
import { createOrderItem } from "../controllers/orderItemController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authenticate, createOrderItem);

export default router;
