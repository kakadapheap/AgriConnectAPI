import Role from "../models/roleModel";

export const seedRoles = async () => {
  const defaultRoles = [
    { name: "admin", description: "System administrator" },
    { name: "customer", description: "Default customer role" },
    { name: "seller", description: "Product seller" },
  ];

  for (const role of defaultRoles) {
    const exists = await Role.findOne({ name: role.name });
    if (!exists) {
      await Role.create(role);
      console.log(`✔ Created default role: ${role.name}`);
    }
  }

  console.log("✔ Role seeding completed");
};
