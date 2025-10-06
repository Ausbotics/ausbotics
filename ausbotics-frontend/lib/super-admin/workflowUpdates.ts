import { SetStateAction } from "react";
import { WorkflowDto, WorkflowStatus } from "../types";
import { toast } from "sonner";
import { API_BASE_URL } from "../constants";

export async function handleSaveWorkflow(
  updatedWorkflow: {
    id: string;
    name: string;
    description: string;
    status: WorkflowStatus;
  },
  setWorkflows: React.Dispatch<React.SetStateAction<WorkflowDto[]>>
) {
  try {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(
      `${API_BASE_URL}/api/workflows/${updatedWorkflow.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: updatedWorkflow.name,
          description: updatedWorkflow.description,
          status: updatedWorkflow.status,
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      setWorkflows((prev) =>
        prev.map((w) =>
          w.id === updatedWorkflow.id ? { ...w, ...data.workflow } : w
        )
      );
    } else {
      console.error("Failed to update workflow", data);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function saveWorkflow(
  id: string,
  name: string,
  description: string,
  status: WorkflowStatus,
  googleSheetUrl: string,
  googleSheetName: string,
  setWorkflows: React.Dispatch<React.SetStateAction<WorkflowDto[]>>
) {
  try {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(`${API_BASE_URL}/api/workflows/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
        status,
        googleSheetUrl,
        googleSheetName,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to update workflow");

    setWorkflows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              ...data.workflow,
              status: status,
            }
          : w
      )
    );
  } catch (err) {
    console.error(err);
    alert("Error updating workflow: " + (err as Error).message);
  }
}

interface CreateWorkflowPayload {
  name: string;
  description: string;
  status: WorkflowStatus;
  subscribedUserIds: string[];
  googleSheet: string;
  googleSheetName: string;
}

export async function createWorkflow(
  payload: CreateWorkflowPayload,
  setWorkflows: React.Dispatch<React.SetStateAction<WorkflowDto[]>>
) {
  try {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(`${API_BASE_URL}/api/workflows`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to create workflow");
    toast.success("Workflow created successfully");
    setWorkflows((prev) => [
      ...prev,
      { ...data.data.workflow, latestExecutionProgress: 0 },
    ]);
  } catch (err) {
    console.error(err);
    alert("Error creating workflow: " + (err as Error).message);
  }
}
export const updateWorkflowProgress = async (
  workflowId: string,
  progress: number,
  setWorkflows: React.Dispatch<SetStateAction<WorkflowDto[]>>,
  workflow: WorkflowDto
) => {
  try {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(
      `${API_BASE_URL}/api/workflows/${workflowId}/progress`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ progress }),
      }
    );
    if (!res.ok) throw new Error("Failed to update progress");
    toast.success("Progress updated successfully");
    const data = await res.json();
    console.log("Progress update response data:", data);
    setWorkflows((prev) =>
      prev.map((w) =>
        w.id === workflowId
          ? {
              ...w,
              latestExecutionProgress: data.data.updatedWorkflow.progress,
              status: data.data.updatedWorkflow.status,
            }
          : w
      )
    );
  } catch (err) {
    console.error("Error updating progress:", err);
  }
};

export async function deleteWorkflow(
  id: string,
  setWorkflows: React.Dispatch<React.SetStateAction<WorkflowDto[]>>
) {
  try {
    setWorkflows((prev) => prev.filter((w) => w.id !== id));
    const token = localStorage.getItem("accessToken");
    const res = await fetch(`${API_BASE_URL}/api/workflows/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to delete workflow");
    toast.success("Workflow deleted successfully");
  } catch (err) {
    console.error("Error deleting workflow:", err);
  }
}
