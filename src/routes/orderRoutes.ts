import { Router } from "express";
import {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder
} from "../controllers/orderController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authenticate, createOrder);
router.get("/", authenticate, getOrders);
router.get("/:id", authenticate, getOrder);
router.put("/:id", authenticate, updateOrder);
router.delete("/:id", authenticate, deleteOrder);

export default router;
