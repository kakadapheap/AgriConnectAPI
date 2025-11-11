import dotenv from "dotenv";
dotenv.config(); // Must be first

import app from "./app";
import { connectDB } from "./config/database";

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/agriconnect";

(async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(` Server running: http://localhost:${PORT}`);
      console.log(` Swagger UI: http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error(" Failed to start server", err);
    process.exit(1);
  }
})();
