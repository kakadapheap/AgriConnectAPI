import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import * as productService from "../services/productService";

export const create = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    console.log("fadfasfdsf",req.user)
    const product = await productService.createProduct({
      ...req.body,
      farmer_id: req.user.user_id,
    });
    res.status(201).json({ message: "Product created", product });
  } catch (err: any) {
    console.log("err", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAll = async (_req: AuthRequest, res: Response) => {
  const products = await productService.getProducts();
  res.json(products);
};

export const getOne = async (req: AuthRequest, res: Response) => {
  const product = await productService.getProductById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const update = async (req: AuthRequest, res: Response) => {
  const updated = await productService.updateProduct(req.params.id, req.body);
  res.json({ message: "Updated", updated });
};

export const remove = async (req: AuthRequest, res: Response) => {
  await productService.deleteProduct(req.params.id);
  res.json({ message: "Deleted" });
};
