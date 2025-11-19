import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "AgriConnect API is healthy!" });
});

export default router;
