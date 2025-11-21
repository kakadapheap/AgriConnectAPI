import { Request, Response } from "express";
import * as roleService from "../services/roleService";

export const create = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const role = await roleService.createRole(name, description);
    res.status(201).json({ message: "Role created successfully", role });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const roles = await roleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const role = await roleService.getRoleById(id);
    res.status(200).json(role);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedRole = await roleService.updateRole(id, req.body);
    res.status(200).json({ message: "Role updated successfully", updatedRole });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRole = await roleService.deleteRole(id);
    res.status(200).json({ message: "Role deleted successfully", deletedRole });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};
