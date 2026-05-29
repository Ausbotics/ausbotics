"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAppointments = exports.deleteAppointment = exports.updateAppointmentStatus = exports.getAppointment = exports.getAllAppointments = exports.bookAppointment = void 0;
const client_1 = require("../models/client");
const client_2 = require("@prisma/client");
const error_middleware_1 = require("../middlewares/error.middleware");
const bookAppointment = async (req, res, next) => {
    try {
        const { name, email, preferredDate, preferredTime, purpose, description } = req.body;
        if (!name || !email || !preferredDate || !preferredTime || !purpose) {
            return next(new error_middleware_1.AppError("Please provide all required fields", 400));
        }
        const appointment = await client_1.prisma.appointment.create({
            data: {
                name,
                email,
                preferredDate: new Date(preferredDate),
                preferredTime,
                purpose,
                status: "Pending",
                description: description,
            },
        });
        res.status(201).json({
            status: "success",
            data: {
                appointment,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 400));
    }
};
exports.bookAppointment = bookAppointment;
const getAllAppointments = async (req, res, next) => {
    try {
        const { status } = req.query;
        const where = {};
        if (status) {
            where.status = status;
        }
        const appointments = await client_1.prisma.appointment.findMany({
            where,
            orderBy: {
                createdAt: "desc",
            },
        });
        res.status(200).json({
            status: "success",
            results: appointments.length,
            data: {
                appointments,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 500));
    }
};
exports.getAllAppointments = getAllAppointments;
const getAppointment = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return next(new error_middleware_1.AppError("Appointment ID is required", 400));
        }
        const appointment = await client_1.prisma.appointment.findUnique({
            where: { id },
        });
        if (!appointment) {
            return next(new error_middleware_1.AppError("No appointment found with that ID", 404));
        }
        res.status(200).json({
            status: "success",
            data: {
                appointment,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 500));
    }
};
exports.getAppointment = getAppointment;
const updateAppointmentStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!id) {
            return next(new error_middleware_1.AppError("Appointment ID is required", 400));
        }
        if (!status) {
            return next(new error_middleware_1.AppError("Status is required", 400));
        }
        if (!Object.values(client_2.AppointmentStatus).includes(status)) {
            return next(new error_middleware_1.AppError("Invalid appointment status", 400));
        }
        const existingAppointment = await client_1.prisma.appointment.findUnique({
            where: { id },
        });
        if (!existingAppointment) {
            return next(new error_middleware_1.AppError("No appointment found with that ID", 404));
        }
        const updatedAppointment = await client_1.prisma.appointment.update({
            where: { id },
            data: { status },
        });
        res.status(200).json({
            status: "success",
            data: {
                appointment: updatedAppointment,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 400));
    }
};
exports.updateAppointmentStatus = updateAppointmentStatus;
const deleteAppointment = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return next(new error_middleware_1.AppError("Appointment ID is required", 400));
        }
        const existingAppointment = await client_1.prisma.appointment.findUnique({
            where: { id },
        });
        if (!existingAppointment) {
            return next(new error_middleware_1.AppError("No appointment found with that ID", 404));
        }
        await client_1.prisma.appointment.delete({
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
exports.deleteAppointment = deleteAppointment;
const getUserAppointments = async (req, res, next) => {
    try {
        const { email } = req.params;
        if (!email) {
            return next(new error_middleware_1.AppError("Email is required", 400));
        }
        const appointments = await client_1.prisma.appointment.findMany({
            where: { email },
            orderBy: {
                preferredDate: "asc",
            },
        });
        res.status(200).json({
            status: "success",
            results: appointments.length,
            data: {
                appointments,
            },
        });
    }
    catch (error) {
        next(new error_middleware_1.AppError(error.message, 500));
    }
};
exports.getUserAppointments = getUserAppointments;
