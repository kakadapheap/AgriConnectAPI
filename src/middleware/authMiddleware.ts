import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction ) => {
  // Extract token from "Bearer <token>"
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token found. Unauthorized" });
  }

  const token = authHeader.split(" ")[1]; // FIXED

  if (!token) {
    return res.status(401).json({ message: "Token missing. Unauthorized" });
  }

  try {
    const secret = process.env.JWT_SECRET as string; // fexted
    const decoded = jwt.verify(token, secret);

    req.user = decoded; // Attach decoded user to request
    
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
