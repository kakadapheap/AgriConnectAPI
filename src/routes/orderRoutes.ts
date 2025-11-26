import { Router } from "express";
import * as orderController from "../controllers/orderController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authenticate, orderController.create);
router.get("/", authenticate, orderController.getAll);
router.get("/:id", authenticate, orderController.getOne);
router.put("/:id", authenticate, orderController.update);
router.delete("/:id", authenticate, orderController.remove);

export default router;
