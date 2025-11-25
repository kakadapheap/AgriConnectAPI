import express from "express";
import * as categoryController from "../controllers/categoryController";
import { authenticate } from "../middleware/authMiddleware";


const router = express.Router();

router.post("/", authenticate, categoryController.create);
router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
router.put("/:id", authenticate, categoryController.update);
router.delete("/:id", authenticate, categoryController.remove);

export default router;
