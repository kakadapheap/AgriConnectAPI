import UerRole from "../models/userRoleModel";
import User from "../models/userModel";
import Role from "../models/roleModel";
import bcrypt from "bcryptjs";


export const adminSeeder = async () =>{
    try{
        const existingAdmin = await User.findOne ({
            email: process.env.ADMIN,
        });
        if (existingAdmin) {
            console.log("Admin user already exists");
            return;
        }
        const passwordHash = await bcrypt.hash(process.env.PASSWORD!, 10);

        const adminUser = new User ({
            firstName: "Admin",
            lastName: "User",
            userName: "admin",
            email: process.env.ADMIN,
            password: passwordHash,
            phone: "012345678",
            status: "active",
       })
       const newAdmin = await adminUser.save();

       const adminRole = await Role.findOne({name: "admin" });
       if (!adminRole) {
        throw new Error("Admin role not found");
       }
       await UerRole.create({
        userId: newAdmin._id,
        roleId: adminRole._id,
       });
       console.log("Admin user created successfully");
    } catch (error){
        console.error("seedAdmin error");
    };
};