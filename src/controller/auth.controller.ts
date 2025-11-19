import { Request, Response } from "express"; 
import { registerUser, loginUser } from "../service/auth.service";

export const register = async (req: Request, res: Response) => {
    try {
        const result = await registerUser(req.body);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try{
        const {email,password} = req.body;
        const result = await loginUser(email, password);
        res.status(201).json(result);
    } catch (error: any){
        res.status(400).json({error: error.message});
    }
};
