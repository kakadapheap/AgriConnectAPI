import { Category } from "../models/categoryModel";

export const createCategory = async (data: any) => {
  return await Category.create(data);
};

export const getCategories = async () => {
  return await Category.find();
};

export const getCategoryById = async (id: string) => {
  return await Category.findById(id);
};

export const updateCategory = async (id: string, data: any) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCategory = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};
