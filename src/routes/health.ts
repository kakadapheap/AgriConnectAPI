import { Router, Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check API health
 *     responses:
 *       200:
 *         description: API is healthy
 */
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", message: "AgriConnect API is running 🚀" });
});

export default router;
