"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.signRefreshToken = exports.signAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
if (!ACCESS_SECRET || !REFRESH_SECRET) {
    throw new Error("JWT_ACCESS_SECRET or JWT_REFRESH_SECRET is not defined in environment variables");
}
const signJwt = (payload, secret, expiresIn = "7d") => {
    const options = { expiresIn, algorithm: "HS256" };
    return jsonwebtoken_1.default.sign(payload, secret, options);
};
const verifyJwt = (token, secret) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret, { algorithms: ["HS256"] });
        return decoded;
    }
    catch (err) {
        const error = err;
        if (error.name === "TokenExpiredError")
            throw new Error("Token has expired");
        if (error.name === "JsonWebTokenError")
            throw new Error("Invalid token");
        throw new Error("Failed to verify token");
    }
};
const signAccessToken = (payload, expiresIn = "1d") => {
    return signJwt(payload, ACCESS_SECRET, expiresIn);
};
exports.signAccessToken = signAccessToken;
const signRefreshToken = (payload, expiresIn = "7d") => {
    return signJwt(payload, REFRESH_SECRET, expiresIn);
};
exports.signRefreshToken = signRefreshToken;
const verifyAccessToken = (token) => {
    return verifyJwt(token, ACCESS_SECRET);
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (token) => {
    return verifyJwt(token, REFRESH_SECRET);
};
exports.verifyRefreshToken = verifyRefreshToken;
