import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import * as orderService from "../services/orderService";

export const create = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const order = await orderService.createOrder({
      ...req.body,
      farmer_id: req.user.user_id,
    });
    res.status(201).json({ message: "Order created", order });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getAll = async (_req: AuthRequest, res: Response) => {
  const orders = await orderService.getOrders();
  res.json(orders);
};

export const getOne = async (req: AuthRequest, res: Response) => {
  const order = await orderService.getOrderById(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

export const update = async (req: AuthRequest, res: Response) => {
  const updated = await orderService.updateOrder(req.params.id, req.body);
  res.json({ message: "Updated", updated });
};

export const remove = async (req: AuthRequest, res: Response) => {
  await orderService.deleteOrder(req.params.id);
  res.json({ message: "Deleted" });
};
