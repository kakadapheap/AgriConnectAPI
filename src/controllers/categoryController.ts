import { Request, Response } from "express";
import * as categoryService from "../services/categoryService";

// Create Category
export const create = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json({ message: "Category created", category });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Categories
export const getAll = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getCategories();
    res.json(categories);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
};

// Get Category By ID
export const getOne = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error: any) {
    res.status(400).json({ message: "Invalid ID format" });
  }
};

// Update Category
export const update = async (req: Request, res: Response) => {
  try {
    const updated = await categoryService.updateCategory(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category updated", updated });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Category
export const remove = async (req: Request, res: Response) => {
  try {
    const deleted = await categoryService.deleteCategory(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
