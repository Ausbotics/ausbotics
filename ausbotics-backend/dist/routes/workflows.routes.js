"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workflows_controller_1 = require("../controllers/workflows.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const workflows_controller_2 = require("../controllers/workflows.controller");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.get("/myworkflows", workflows_controller_1.getMyWorkflows);
router.get("/:id/sheet", (0, auth_middleware_1.restrictTo)(client_1.Role.USER, client_1.Role.ADMIN, client_1.Role.SUPERADMIN), workflows_controller_1.getSheetData);
router
    .route("/")
    .get(workflows_controller_1.getAllWorkflows)
    .post((0, auth_middleware_1.restrictTo)(client_1.Role.SUPERADMIN), workflows_controller_1.createWorkflow);
router
    .route("/:id")
    .get(workflows_controller_1.getWorkflow)
    .patch((0, auth_middleware_1.restrictTo)(client_1.Role.SUPERADMIN), workflows_controller_1.updateWorkflow)
    .delete((0, auth_middleware_1.restrictTo)(client_1.Role.SUPERADMIN), workflows_controller_1.deleteWorkflow);
router.patch("/:id/status", (0, auth_middleware_1.restrictTo)(client_1.Role.SUPERADMIN), workflows_controller_2.updateWorkflowStatus);
router.patch("/:id/progress", (0, auth_middleware_1.restrictTo)(client_1.Role.SUPERADMIN), workflows_controller_1.updateProgress);
router.patch("/:id/sheet", (0, auth_middleware_1.restrictTo)(client_1.Role.SUPERADMIN), workflows_controller_1.updateGoogleSheet);
exports.default = router;
