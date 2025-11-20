import User from "../models/userModel";
import Role from "../models/roleModel";
import UserRole from "../models/userRoleModel";
import {hashPassword, comparePassword} from "../utils/bcrypt.util";
import { generateToken } from "../utils/jwt.util";

export const registerUser = async(data: any) => {
    const {firstName, lastName, email, phone, password} = data;
    
    // email exist?
    const existing = await User.findOne({ email });
    if (existing) throw new Error( "Eamil already registered" );

    const hash = await hashPassword(password);

    const user = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password: hash,
    });
    return {
        message: "User registered successfully",
        user,
    };

};

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password");
    
    const isMatch = await comparePassword( password, user.password);
    if (!isMatch) throw Error("Invalid email or password");

    const token = generateToken(user.id as unknown as string);

    return {
        message: "Login success",
        token,
        user,
    };
};

