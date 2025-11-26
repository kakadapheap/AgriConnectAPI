import Order, { IOrder } from "../models/orderModel";

export const createOrder = async (data: Partial<IOrder>) => {
  return await Order.create(data);
};

export const getOrders = async () => {
  return await Order.find();
};

export const getOrderById = async (id: string) => {
  return await Order.findById(id);
};

export const updateOrder = async (id: string, data: Partial<IOrder>) => {
  return await Order.findByIdAndUpdate(id, data, { new: true });
};

export const deleteOrder = async (id: string) => {
  return await Order.findByIdAndDelete(id);
};
