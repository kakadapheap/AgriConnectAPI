import UserRole from "../models/userRoleModel";
import User from "../models/userModel";
import Role from "../models/roleModel";

/**
 * Assign a role to a user
 */
export const assignRoleToUser = async (userId: string, roleId: string) => {
  // check if user exists
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  // check if role exists
  const role = await Role.findById(roleId);
  if (!role) throw new Error("Role not found");

  // check if role already assigned
  const existing = await UserRole.findOne({ user_id: userId, role_id: roleId });
  if (existing) throw new Error("User already has this role");

  return await UserRole.create({ user_id: userId, role_id: roleId });
};

/**
 * Get all roles of a user
 */
export const getUserRoles = async (userId: string) => {
  return await UserRole.find({ user_id: userId }).populate("role_id", "name description");
};

/**
 * Remove a role from a user
 */
export const removeUserRole = async (userId: string, roleId: string) => {
  const deleted = await UserRole.findOneAndDelete({ user_id: userId, role_id: roleId });
  if (!deleted) throw new Error("Role assignment not found");
  return deleted;
};
