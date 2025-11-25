import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authenticate, createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", authenticate, updateProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;
