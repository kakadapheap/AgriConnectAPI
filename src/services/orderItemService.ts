import OrderItem, { IOrderItem } from "../models/orderItemModel";

export const createOrderItem = async (data: Partial<IOrderItem>) => {
  return await OrderItem.create(data);
};

export const getOrderItems = async () => {
  return await OrderItem.find();
};

export const getOrderItemById = async (id: string) => {
  return await OrderItem.findById(id);
};

export const updateOrderItem = async (id: string, data: Partial<IOrderItem>) => {
  return await OrderItem.findByIdAndUpdate(id, data, { new: true });
};

export const deleteOrderItem = async (id: string) => {
  return await OrderItem.findByIdAndDelete(id);
};
