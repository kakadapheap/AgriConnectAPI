import User from "../models/userModel";
import Role from "../models/roleModel";
import UserRole from "../models/userRoleModel";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.util";
import mongoose from "mongoose";

interface RegisterData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

// Register new user
export const registerUser = async (data: RegisterData) => {
  const { firstName, lastName, email, phone, password } = data;

  // Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("Email already registered");

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword,
  });

  // Assign default role 'customer'
  let role = await Role.findOne({ name: "customer" });
  if (!role) {
    role = await Role.create({ name: "customer", description: "Default role" });
  }

  await UserRole.create({
    user_id: user._id,
    role_id: role._id,
  });

  return {
    message: "User registered successfully",
    user,
  };
};

// Login user
export const loginUser = async (data: LoginData) => {
  const { email, password } = data;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  // Get roles
  const userRoles = await UserRole.find({ user_id: user._id }).populate("role_id");
  const roles = userRoles.map((ur) => ({
   
    name: (ur.role_id as any).name,
  }));

  // Generate JWT token
  const token = generateToken({
    user_id: user._id.toString(),
    roles,
  });

  return {
    message: "Login successful",
    user,
    roles,
    token,
  };
};
