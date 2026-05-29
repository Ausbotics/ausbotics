"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserRole = exports.deleteMe = exports.updateMe = exports.getUserbyId = exports.getMe = exports.getAllUsers = void 0;
const client_1 = require("../models/client");
const client_2 = require("@prisma/client");
const error_middleware_1 = require("../middlewares/error.middleware");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getAllUsers = async (req, res, next) => {
    try {
        const users = await client_1.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 500));
    }
};
exports.getAllUsers = getAllUsers;
const getMe = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const user = await client_1.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
            },
        });
        if (!user) {
            return next(new error_middleware_1.AppError("User not found", 404));
        }
        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 500));
    }
};
exports.getMe = getMe;
const getUserbyId = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await client_1.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
            },
        });
        if (!user) {
            return next(new error_middleware_1.AppError("User not found", 404));
        }
        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 500));
    }
};
exports.getUserbyId = getUserbyId;
const updateMe = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const { fullName, email, currentPassword, newPassword } = req.body;
        const updateData = {};
        if (fullName)
            updateData.fullName = fullName;
        if (email)
            updateData.email = email;
        if (currentPassword && newPassword) {
            const user = await client_1.prisma.user.findUnique({
                where: { id: userId },
                select: { password: true },
            });
            if (!user) {
                return next(new error_middleware_1.AppError("User not found", 404));
            }
            const isPasswordValid = await bcrypt_1.default.compare(currentPassword, user.password);
            if (!isPasswordValid) {
                return next(new error_middleware_1.AppError("Current password is incorrect", 401));
            }
            const hashedPassword = await bcrypt_1.default.hash(newPassword, 12);
            updateData.password = hashedPassword;
        }
        const updatedUser = await client_1.prisma.user.update({
            where: { id: userId },
            data: updateData,
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        res.status(200).json({
            status: "success",
            data: {
                user: updatedUser,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 400));
    }
};
exports.updateMe = updateMe;
const deleteMe = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        await client_1.prisma.user.delete({
            where: { id: userId },
        });
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 500));
    }
};
exports.deleteMe = deleteMe;
const updateUserRole = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { role } = req.body;
        if (!Object.values(client_2.Role).includes(role)) {
            return next(new error_middleware_1.AppError("Invalid role", 400));
        }
        if (id === req.user?.id) {
            return next(new error_middleware_1.AppError("You cannot change your own role", 400));
        }
        const user = await client_1.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            return next(new error_middleware_1.AppError("User not found", 404));
        }
        if (user.role === client_2.Role.SUPERADMIN && req.user?.role !== client_2.Role.SUPERADMIN) {
            return next(new error_middleware_1.AppError("Not authorized to modify this user", 403));
        }
        const updatedUser = await client_1.prisma.user.update({
            where: { id },
            data: { role },
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        res.status(200).json({
            status: "success",
            data: {
                user: updatedUser,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 400));
    }
};
exports.updateUserRole = updateUserRole;
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id === req.user?.id) {
            return next(new error_middleware_1.AppError("You cannot delete your own account", 400));
        }
        const user = await client_1.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            return next(new error_middleware_1.AppError("User not found", 404));
        }
        if (user.role === client_2.Role.SUPERADMIN && req.user?.role !== client_2.Role.SUPERADMIN) {
            return next(new error_middleware_1.AppError("Not authorized to delete this user", 403));
        }
        await client_1.prisma.user.delete({
            where: { id },
        });
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 500));
    }
};
exports.deleteUser = deleteUser;
