import Role from "../models/roleModel";

/**
 * Create a new role
 */
export const createRole = async (name: string, description?: string) => {
  const existingRole = await Role.findOne({ name });
  if (existingRole) throw new Error("Role already exists");

  return await Role.create({ name, description });
};

/**
 * Get all roles
 */
export const getAllRoles = async () => {
  return await Role.find();
};

/**
 * Get a role by ID
 */
export const getRoleById = async (id: string) => {
  const role = await Role.findById(id);
  if (!role) throw new Error("Role not found");
  return role;
};

/**
 * Update role by ID
 */
export const updateRole = async (id: string, data: Partial<{ name: string; description: string }>) => {
  const updatedRole = await Role.findByIdAndUpdate(id, data, { new: true });
  if (!updatedRole) throw new Error("Role not found");
  return updatedRole;
};

/**
 * Delete role by ID
 */
export const deleteRole = async (id: string) => {
  const deletedRole = await Role.findByIdAndDelete(id);
  if (!deletedRole) throw new Error("Role not found");
  return deletedRole;
};
