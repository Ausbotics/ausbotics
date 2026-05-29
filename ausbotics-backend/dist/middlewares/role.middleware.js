"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const error_middleware_1 = require("./error.middleware");
const authorize = (roles) => {
    return (req, _, next) => {
        if (!req.user) {
            return next(new error_middleware_1.AppError("Unauthorized: no user info found", 401));
        }
        const userRole = req.user.role;
        if (!roles.includes(userRole)) {
            return next(new error_middleware_1.AppError("Forbidden: insufficient permissions", 403));
        }
        return next();
    };
};
exports.authorize = authorize;
