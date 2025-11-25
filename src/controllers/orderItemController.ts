import { Request, Response } from "express";
import OrderItem from "../models/orderItemModel";

export const createOrderItem = async (req: Request, res: Response) => {
  try {
    const item = await OrderItem.create(req.body);
    res.status(201).json({ message: "Order item created", item });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
