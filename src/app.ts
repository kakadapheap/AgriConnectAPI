import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";

// Routes
import authRoute from "./routes/authRoutes";
import roleRoute from "./routes/roleRoutes";
import userRoleRoute from "./routes/userRoleRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Route mounting
app.use("/api/auth", authRoute);
app.use("/api/roles", roleRoute);
app.use("/api/user-roles", userRoleRoute);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => res.send("🌿 AgriConnect API is running..."));

export default app;
