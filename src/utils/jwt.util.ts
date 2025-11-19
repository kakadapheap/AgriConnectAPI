import JWT from "jsonwebtoken";

export const generateToken = (id: string) => {
    return JWT.sign( {id}, process.env.JWT_SECRET as string, {
        expiresIn: "7d",
    });
} 