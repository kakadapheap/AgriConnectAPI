import UserRole from "../models/userRoleModel";

export const assignRoleToUser = async (user_id: string, role_id: string) => {
  const existing = await UserRole.findOne({ user_id, role_id });
  if (existing) throw new Error("User already has this role");

  return await UserRole.create({ user_id, role_id });
};

export const getUserRoles = async (user_id: string) => {
  return await UserRole.find({ user_id }).populate("role_id");
};
