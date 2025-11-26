import { Router } from "express";
import * as orderItemController from "../controllers/orderItemController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authenticate, orderItemController.create);
router.get("/", authenticate, orderItemController.getAll);
router.get("/:id", authenticate, orderItemController.getOne);
router.put("/:id", authenticate, orderItemController.update);
router.delete("/:id", authenticate, orderItemController.remove);

export default router;
