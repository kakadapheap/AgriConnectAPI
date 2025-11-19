import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

 export interface AuthRequest extends Request {
    user?: any;
 };

 export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split("")[1];

    if (!token) {
        return res.status(401).json ({message: "no token found. Unantherzice"});
    };
    try {
        const secret = process.env.JWT_SECRCT as string;
        const decoded = jwt.verify(token, secret);

        req.user = decoded;
        next();
    } catch (error){
        return res.status (401).json ({message: "Invalid token"});
    }
 };
 
 