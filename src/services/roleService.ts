import Role from "../models/roleModel";

export const createRole = async (name: string, description?: string) => {
  const existingRole = await Role.findOne({ name });
  if (existingRole) throw new Error("Role already exists");
  return await Role.create({ name, description });
};

export const getAllRoles = async () => {
  return await Role.find();
};

export const getRoleById = async (id: string) => {
  const role = await Role.findById(id);
  if (!role) throw new Error("Role not found");
  return role;
};

export const updateRole = async (id: string, data: Partial<{ name: string; description: string }>) => {
  const updatedRole = await Role.findByIdAndUpdate(id, data, { new: true });
  if (!updatedRole) throw new Error("Role not found");
  return updatedRole;
};

export const deleteRole = async (id: string) => {
  const deletedRole = await Role.findByIdAndDelete(id);
  if (!deletedRole) throw new Error("Role not found");
  return deletedRole;
};
