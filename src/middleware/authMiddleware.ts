import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayloadCustom } from "../types/jwtPayload";

export interface AuthRequest extends Request {
  user?: JwtPayloadCustom; // decoded JWT payload
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token found. Unauthorized" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token missing. Unauthorized" });

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT secret not defined in environment");

    // Cast the decoded token to our custom type
    const decoded = jwt.verify(token, secret) as JwtPayloadCustom;

    req.user = decoded;

    next();
  } catch (error: any) {
    return res.status(401).json({ message: "Invalid token", error: error.message });
  }
};
