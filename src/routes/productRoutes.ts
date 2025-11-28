import { Router } from "express";
import * as productController from "../controllers/productController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authenticate, productController.create);
router.get("/", 
     // authenticate, 
    productController.getAll);
router.get("/:id", authenticate, productController.getOne);
router.put("/:id", authenticate, productController.update);
router.delete("/:id", authenticate, productController.remove);

export default router;
