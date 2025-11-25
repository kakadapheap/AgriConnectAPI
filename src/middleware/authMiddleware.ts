import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Extend Request interface to include user
export interface AuthRequest extends Request {
  user?: string | JwtPayload; // decoded JWT payload
}

// Middleware to authenticate JWT token
export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction ) => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token found. Unauthorized" });
    }

    // Expected format: "Bearer <token>"
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing. Unauthorized" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT secret not defined in environment");

    // Verify token
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // Attach decoded payload to request

    next();
  } catch (error: any) {
    return res.status(401).json({ message: "Invalid token", error: error.message });
  }
};
