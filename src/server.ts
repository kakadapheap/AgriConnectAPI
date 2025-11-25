import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
import { seedRoles } from "./seeders/roleSeeder";
import { adminSeeder } from "./seeders/adminSeeder";
import { categorySeeder } from "./seeders/categorySeeder";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/agriconnect";

const startServer = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully");

    // 2. Seed default roles
    await seedRoles();

    // 3. Seed default admin user
    await adminSeeder();

    // seed category
    await categorySeeder();

    // 4. Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(`📄 Swagger UI: http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error("❌ Server startup error:", error);
    process.exit(1);
  }
};

startServer();
