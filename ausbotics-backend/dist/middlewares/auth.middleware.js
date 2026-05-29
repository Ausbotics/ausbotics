"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictTo = exports.authenticate = void 0;
const client_1 = require("../models/client");
const jwt_1 = require("../utils/jwt");
const error_middleware_1 = require("./error.middleware");
const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const refreshToken = req.cookies?.refreshToken;
        if (!authHeader) {
            return next(new error_middleware_1.AppError("Please log in to access this route", 401));
        }
        const accessToken = authHeader?.split(" ")[1];
        if (accessToken) {
            try {
                const decoded = (0, jwt_1.verifyAccessToken)(accessToken);
                req.user = { id: decoded.id, role: decoded.role };
                return next();
            }
            catch (err) {
                if (err.message !== "Token has expired") {
                    return next(new error_middleware_1.AppError("Invalid access token", 401));
                }
            }
        }
        if (refreshToken) {
            try {
                const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
                const user = await client_1.prisma.user.findUnique({
                    where: { id: decoded.id },
                    select: { id: true, role: true, refreshToken: true },
                });
                if (!user || user.refreshToken !== refreshToken) {
                    return next(new error_middleware_1.AppError("Invalid refresh token", 401));
                }
                const newAccessToken = (0, jwt_1.signAccessToken)({
                    id: user.id,
                    role: user.role,
                });
                const newRefreshToken = (0, jwt_1.signRefreshToken)({
                    id: user.id,
                    role: user.role,
                });
                res.cookie("accessToken", newAccessToken);
                res.setHeader("x-access-token", newAccessToken);
                req.user = { id: user.id, role: user.role };
                return next();
            }
            catch (err) {
                return next(new error_middleware_1.AppError("Invalid or expired refresh token", 401));
            }
        }
        return next(new error_middleware_1.AppError("Not authorized to access this route", 401));
    }
    catch (error) {
        return next(new error_middleware_1.AppError("Authentication failed", 401));
    }
};
exports.authenticate = authenticate;
// Role-based access control middleware
const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(new error_middleware_1.AppError("You are not logged in! Please log in to get access.", 401));
        }
        if (!roles.includes(req.user.role)) {
            return next(new error_middleware_1.AppError("You do not have permission to perform this action", 403));
        }
        next();
    };
};
exports.restrictTo = restrictTo;
