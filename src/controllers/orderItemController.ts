import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import * as orderItemService from "../services/orderItemService";

export const create = async (req: AuthRequest, res: Response) => {
  try {
    const item = await orderItemService.createOrderItem(req.body);
    res.status(201).json({ message: "Order item created", item });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getAll = async (_req: AuthRequest, res: Response) => {
  const items = await orderItemService.getOrderItems();
  res.json(items);
};

export const getOne = async (req: AuthRequest, res: Response) => {
  const item = await orderItemService.getOrderItemById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
};

export const update = async (req: AuthRequest, res: Response) => {
  const updated = await orderItemService.updateOrderItem(req.params.id, req.body);
  res.json({ message: "Updated", updated });
};

export const remove = async (req: AuthRequest, res: Response) => {
  await orderItemService.deleteOrderItem(req.params.id);
  res.json({ message: "Deleted" });
};
