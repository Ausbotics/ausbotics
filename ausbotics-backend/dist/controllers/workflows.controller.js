"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGoogleSheet = exports.getSheetData = exports.updateProgress = exports.getMyWorkflows = exports.getActiveWorkflows = exports.updateWorkflowStatus = exports.deleteWorkflow = exports.getWorkflow = exports.getAllWorkflows = exports.createWorkflow = exports.updateWorkflow = void 0;
const client_1 = require("../models/client");
const error_middleware_1 = require("../middlewares/error.middleware");
const sheets_api_1 = require("../utils/sheets.api");
const updateWorkflow = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, status, googleSheetUrl } = req.body;
        const updatedWorkflow = await client_1.prisma.workflow.update({
            where: { id },
            data: { name, description, status, googleSheet: googleSheetUrl },
            include: {
                workflowExecutions: { orderBy: { createdAt: "desc" }, take: 1 },
            },
        });
        res.status(200).json({
            status: "success",
            data: {
                workflow: updatedWorkflow,
                latestExecutionProgress: updatedWorkflow.workflowExecutions[0]?.progress ?? 0,
            },
        });
    }
    catch (err) {
        console.error(`Error updating workflow ${req.params.id}:`, err.message);
        next(new error_middleware_1.AppError(err.message, 400));
    }
};
exports.updateWorkflow = updateWorkflow;
const createWorkflow = async (req, res, next) => {
    try {
        const { name, description, status = "New", subscribedUserIds, googleSheetName, googleSheet, } = req.body;
        console.log(`Creating workflow ${name}`, subscribedUserIds[0]);
        const workflow = await client_1.prisma.workflow.create({
            data: {
                name,
                description,
                status,
                progress: 0,
                subscribedUser: { connect: { id: subscribedUserIds[0] } },
                googleSheet: googleSheet,
                googleSheetName: googleSheetName,
            },
            include: {
                subscribedUser: {
                    select: { id: true, email: true, fullName: true, role: true },
                },
            },
        });
        res.status(201).json({ status: "success", data: { workflow } });
    }
    catch (err) {
        console.error("Error creating workflow:");
        next(new error_middleware_1.AppError(err.message, 400));
    }
};
exports.createWorkflow = createWorkflow;
const getAllWorkflows = async (req, res, next) => {
    try {
        const workflows = await client_1.prisma.workflow.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                status: true,
                progress: true,
                createdAt: true,
                subscribedUser: {
                    select: { id: true, email: true, fullName: true, role: true },
                },
                workflowExecutions: {
                    select: { progress: true },
                    orderBy: { createdAt: "desc" },
                    take: 1,
                },
                result: { select: { id: true, status: true } },
            },
            orderBy: { createdAt: "desc" },
        });
        const workflowsWithProgress = workflows.map((w) => ({
            ...w,
            latestExecutionProgress: w.workflowExecutions[0]?.progress ?? 0,
        }));
        res.status(200).json({
            status: "success",
            results: workflowsWithProgress.length,
            data: { workflows: workflowsWithProgress },
        });
    }
    catch (err) {
        console.error("Error fetching workflows:");
        next(new error_middleware_1.AppError(err.message, 500));
    }
};
exports.getAllWorkflows = getAllWorkflows;
const getWorkflow = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(`Fetching workflow ${id}`);
        const workflow = await client_1.prisma.workflow.findUnique({
            where: { id },
            include: {
                subscribedUser: {
                    select: { id: true, email: true, fullName: true, role: true },
                },
                result: true,
                workflowExecutions: true,
            },
        });
        if (!workflow)
            return next(new error_middleware_1.AppError("No workflow found with that ID", 404));
        const latestExecutionProgress = workflow.workflowExecutions[0]?.progress ?? 0;
        console.log(`Workflow fetched: ${workflow.id}, latest execution progress: ${latestExecutionProgress}`);
        res
            .status(200)
            .json({ status: "success", data: { workflow, latestExecutionProgress } });
    }
    catch (err) {
        console.error(`Error fetching workflow ${req.params.id}:`, err.message);
        next(new error_middleware_1.AppError(err.message, 500));
    }
};
exports.getWorkflow = getWorkflow;
const deleteWorkflow = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(`Deleting workflow ${id}`);
        const workflow = await client_1.prisma.workflow.findUnique({ where: { id } });
        if (!workflow)
            return next(new error_middleware_1.AppError("No workflow found with that ID", 404));
        if (!["ADMIN", "SUPERADMIN"].includes(req.user.role)) {
            return next(new error_middleware_1.AppError("Not authorized to delete workflows", 403));
        }
        await client_1.prisma.workflow.delete({ where: { id } });
        console.log(`Workflow deleted: ${id}`);
        res.status(204).json({ status: "success", data: null });
    }
    catch (err) {
        console.error(`Error deleting workflow ${req.params.id}:`, err.message);
        next(new error_middleware_1.AppError(err.message, 500));
    }
};
exports.deleteWorkflow = deleteWorkflow;
const updateWorkflowStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        console.log(`Updating workflow ${id} to status ${status}`);
        const workflow = await client_1.prisma.workflow.findUnique({ where: { id } });
        if (!workflow)
            return next(new error_middleware_1.AppError("No workflow found with that ID", 404));
        if (workflow.status === "Done") {
            return next(new error_middleware_1.AppError("Cannot update a completed workflow", 400));
        }
        const updatedWorkflow = await client_1.prisma.workflow.update({
            where: { id },
            data: { status },
            include: {
                subscribedUser: {
                    select: { id: true, email: true, fullName: true, role: true },
                },
            },
        });
        res
            .status(200)
            .json({ status: "success", data: { workflow: updatedWorkflow } });
    }
    catch (err) {
        console.error(`Error updating workflow status for ${req.params.id}:`, err.message);
        next(new error_middleware_1.AppError(err.message, 400));
    }
};
exports.updateWorkflowStatus = updateWorkflowStatus;
const getActiveWorkflows = async (req, res, next) => {
    try {
        const getWorkflows = await client_1.prisma.workflow.findMany({
            where: {
                status: {
                    in: ["Active"],
                },
            },
        });
        return res.status(200).json({ status: "success", data: { getWorkflows } });
    }
    catch (error) {
        console.error("Error fetching active workflows:", error);
        next(new error_middleware_1.AppError("Error fetching active workflows", 500));
    }
};
exports.getActiveWorkflows = getActiveWorkflows;
const getMyWorkflows = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return next(new error_middleware_1.AppError("No user Id", 404));
        }
        const isUser = await client_1.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!isUser?.id) {
            return next(new error_middleware_1.AppError("Could'nt get workflows", 404));
        }
        const myWorkflows = await client_1.prisma.workflow.findMany({
            where: { subscribedUserId: userId },
            include: {
                subscribedUser: {
                    select: { id: true, email: true, fullName: true, role: true },
                },
            },
        });
        const worklowSend = {
            myWorkflows,
        };
        return res.status(200).json({ myWorkflows });
    }
    catch (error) { }
};
exports.getMyWorkflows = getMyWorkflows;
const updateProgress = async (req, res, next) => {
    const { progress } = req.body;
    console.log(typeof progress);
    if (progress === undefined || typeof progress !== "number") {
        return next(new error_middleware_1.AppError("Invalid or missing progress value", 400));
    }
    if (progress > 100) {
        return next(new error_middleware_1.AppError("Progress cannot exceed 100", 400));
    }
    const { id } = req.params;
    if (!id) {
        return next(new error_middleware_1.AppError("No workflow Id", 404));
    }
    if (progress < 0) {
        await client_1.prisma.workflow.update({
            where: { id },
            data: { status: "Active" },
        });
    }
    if (progress > 0 && progress < 100) {
        await client_1.prisma.workflow.update({
            where: { id },
            data: { status: "Active" },
        });
    }
    if (progress >= 100) {
        await client_1.prisma.workflow.update({
            where: { id },
            data: {
                status: "Done",
            },
        });
    }
    try {
        const updatedWorkflow = await client_1.prisma.workflow.update({
            where: { id },
            data: { progress },
        });
        return res
            .status(200)
            .json({ status: "success", data: { updatedWorkflow } });
    }
    catch (error) {
        console.error(`Error updating workflow progress for ${req.params.id}:`, error);
        next(new error_middleware_1.AppError("Error updating workflow progress", 500));
    }
};
exports.updateProgress = updateProgress;
const getSheetData = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return next(new error_middleware_1.AppError("No workflow Id", 404));
        }
        const workflow = await client_1.prisma.workflow.findUnique({ where: { id } });
        if (!workflow) {
            console.warn(`[getSheetData] No workflow found for id: ${id}`);
            return next(new error_middleware_1.AppError("No workflow found with that ID", 404));
        }
        console.log(workflow);
        const fetchGooglesheetData = await (0, sheets_api_1.fetchSheetData)(workflow.googleSheetName, workflow.googleSheet);
        return res.status(200).json({
            status: "success",
            data: { fetchGooglesheetData, sheetUrl: workflow.googleSheet },
        });
    }
    catch (error) {
        console.error("[getSheetData] Error occurred:", error.message, error.stack);
        return next(new error_middleware_1.AppError("Failed to fetch sheet data", 500));
    }
};
exports.getSheetData = getSheetData;
const updateGoogleSheet = async (req, res, next) => {
    try {
        const { googleSheetUrl, googleSheetName } = req.body;
        const { id } = req.params;
        if (!id) {
            return next(new error_middleware_1.AppError("No workflow Id", 404));
        }
        const updateSheet = await client_1.prisma.workflow.update({
            where: { id },
            data: { googleSheet: googleSheetUrl, googleSheetName },
        });
        return res.status(200).json({ status: "success", data: { updateSheet } });
    }
    catch (error) {
        console.error(`Error updating Google Sheet for workflow ${req.params.id}:`, error);
        next(new error_middleware_1.AppError("Error updating Google Sheet", 500));
    }
};
exports.updateGoogleSheet = updateGoogleSheet;
