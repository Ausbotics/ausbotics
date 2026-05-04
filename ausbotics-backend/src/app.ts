import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/users.routes";
import workflowsRoutes from "./routes/workflows.routes";
import { errorHandler } from "./middlewares/error.middleware";
import appointmentRouter from "./routes/appointments.routes";

const app = express();

// CORS configuration - placed first for performance
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Only log in development for faster startup
if (process.env.NODE_ENV !== "production") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/workflows", workflowsRoutes);
app.use("/api/appointments", appointmentRouter);

// Health check endpoint - lightweight
app.use("/api/health", (req, res) => {
  res.status(200).json({ message: "ok" });
});

// Error handling - must be last
app.use(errorHandler);

export default app;
