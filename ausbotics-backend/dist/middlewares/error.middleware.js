"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 500, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
const errorHandler = (err, _, res, next) => {
    console.error(" Error caught:", err);
    let statusCode = 500;
    let message = "Internal Server Error";
    if (err.message === "Token has expired") {
        statusCode = 401;
        message = "Access token expired";
    }
    else if (err.message === "Invalid token") {
        statusCode = 401;
        message = "Invalid access token";
    }
    else if (err.message === "Failed to verify token") {
        statusCode = 401;
        message = "Authentication failed";
    }
    if (typeof err.code === "string" && err.code.startsWith("P")) {
        statusCode = 400;
        message = err.meta?.cause || err.message || "Database error";
    }
    if (err instanceof AppError && err.isOperational) {
        statusCode = err.statusCode;
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
    });
};
exports.errorHandler = errorHandler;
