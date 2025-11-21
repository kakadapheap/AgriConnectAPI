import { Request, Response } from "express";
import * as userRoleService from "../services/userRoleService";

export const assignRole = async (req: Request, res: Response) => {
  try {
    const { user_id, role_id } = req.body;
    const assignment = await userRoleService.assignRoleToUser(user_id, role_id);
    res.status(201).json({ message: "Role assigned successfully", assignment });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserRoles = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const roles = await userRoleService.getUserRoles(userId);
    res.status(200).json(roles);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
