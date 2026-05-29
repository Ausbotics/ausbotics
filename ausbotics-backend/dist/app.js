"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const workflows_routes_1 = __importDefault(require("./routes/workflows.routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
const appointments_routes_1 = __importDefault(require("./routes/appointments.routes"));
const app = (0, express_1.default)();
// CORS configuration - placed first for performance
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
// Body parsing middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Only log in development for faster startup
if (process.env.NODE_ENV !== "production") {
    const morgan = require("morgan");
    app.use(morgan("dev"));
}
// API routes
app.use("/api/auth", auth_routes_1.default);
app.use("/api/users", users_routes_1.default);
app.use("/api/workflows", workflows_routes_1.default);
app.use("/api/appointments", appointments_routes_1.default);
// Health check endpoint - lightweight
app.use("/api/health", (req, res) => {
    res.status(200).json({ message: "ok" });
});
// Error handling - must be last
app.use(error_middleware_1.errorHandler);
exports.default = app;
