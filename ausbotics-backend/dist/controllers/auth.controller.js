"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("../models/client");
const jwt_1 = require("../utils/jwt");
const error_middleware_1 = require("../middlewares/error.middleware");
const signup = async (req, res, next) => {
    const { email, password, role } = req.body;
    try {
        const hash = await bcrypt_1.default.hash(password, 10);
        const userexists = await client_1.prisma.user.findUnique({ where: { email } });
        if (userexists) {
            return next(new error_middleware_1.AppError("User already exists", 409));
        }
        const user = await client_1.prisma.user.create({
            data: { email, password: hash },
        });
        const accessToken = (0, jwt_1.signAccessToken)({ id: user.id, role: user.role });
        const refreshToken = (0, jwt_1.signRefreshToken)({ id: user.id, role: user.role });
        const newuser = await client_1.prisma.user.update({
            where: { id: user.id },
            data: { refreshToken },
        });
        res
            .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
            .cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 21 * 24 * 60 * 60 * 1000,
        });
        res.status(201).json({ accessToken, newuser });
    }
    catch (err) {
        next(new error_middleware_1.AppError(err.message, 400));
    }
};
exports.signup = signup;
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await client_1.prisma.user.findUnique({ where: { email } });
        if (!user)
            return next(new error_middleware_1.AppError("User not found", 404));
        const isMatch = await bcrypt_1.default.compare(password, user.password);
        if (!isMatch)
            return next(new error_middleware_1.AppError("Invalid password", 401));
        const accessToken = (0, jwt_1.signAccessToken)({ id: user.id, role: user.role });
        const refreshToken = (0, jwt_1.signRefreshToken)({ id: user.id, role: user.role });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ accessToken, user });
    }
    catch (err) {
        next(new error_middleware_1.AppError(err.message, 500));
    }
};
exports.login = login;
