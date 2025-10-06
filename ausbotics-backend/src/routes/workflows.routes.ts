import { Router } from "express";
import {
  createWorkflow,
  getAllWorkflows,
  getWorkflow,
  updateWorkflow,
  deleteWorkflow,
  updateProgress,
  getSheetData,
  updateGoogleSheet,
  getMyWorkflows,
} from "../controllers/workflows.controller";
import { authenticate, restrictTo } from "../middlewares/auth.middleware";

import { updateWorkflowStatus } from "../controllers/workflows.controller";
import { Role } from "@prisma/client";

const router = Router();

router.use(authenticate);

router.get("/myworkflows", getMyWorkflows);

router.get(
  "/:id/sheet",
  restrictTo(Role.USER, Role.ADMIN, Role.SUPERADMIN),
  getSheetData
);
router
  .route("/")
  .get(getAllWorkflows)
  .post(restrictTo(Role.SUPERADMIN), createWorkflow);

router
  .route("/:id")
  .get(getWorkflow)
  .patch(restrictTo(Role.SUPERADMIN), updateWorkflow)
  .delete(restrictTo(Role.SUPERADMIN), deleteWorkflow);

router.patch("/:id/status", restrictTo(Role.SUPERADMIN), updateWorkflowStatus);

router.patch("/:id/progress", restrictTo(Role.SUPERADMIN), updateProgress);

router.patch("/:id/sheet", restrictTo(Role.SUPERADMIN), updateGoogleSheet);

export default router;
