import express, { Application } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";
import healthRoute from "./routes/health";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRoute);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Test route
app.get("/", (req, res) => {
  res.send("🌿 AgriConnect API is running...");
});

export default app;
