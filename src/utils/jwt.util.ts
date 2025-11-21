import jwt from "jsonwebtoken";

// payload can be any object now
export const generateToken = (payload: object) => {
  const secret = process.env.JWT_SECRET as string;
  if (!secret) throw new Error("JWT_SECRET not defined");

  // Sign the object payload directly
  return jwt.sign(payload, secret, { expiresIn: "1d" });
};
