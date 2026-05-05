"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { WorkflowDto, WorkflowStatus } from "@/lib/types";
import { createWorkflow } from "@/lib/super-admin/workflowUpdates";
import { Loader2, X } from "lucide-react";
import * as z from "zod";
import { toast } from "sonner";
import { API_BASE_URL } from "@/lib/constants";

// Zod validation schema
const workflowSchema = z.object({
  name: z.string().min(1, "Workflow name is required"),
  description: z.string().optional(),
  googleSheetName: z.string().min(1, "Google Sheet name is required"),
  googleSheetLink: z.string().url("Enter a valid Google Sheet URL"),
  status: z.enum(["New", "Active", "Paused", "Done"]),
  subscribedUserIds: z.array(z.string()).optional(),
});

interface CreateWorkflowDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setWorkflows: React.Dispatch<React.SetStateAction<WorkflowDto[]>>;
}

interface User {
  id: string;
  fullName: string;
  email: string;
}

export function CreateWorkflowDialog({
  open,
  setOpen,
  setWorkflows,
}: CreateWorkflowDialogProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    googleSheetName: "",
    googleSheetLink: "",
    status: "New" as WorkflowStatus,
    subscribedUserIds: [] as string[],
  });
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;

    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("accessToken");
        const res = await fetch(`${API_BASE_URL}/api/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setAllUsers(data.data.users || []);
      } catch (err) {
        toast.error("Failed to load users");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [open]);

  const handleCreate = async () => {
    try {
      const validatedData = await workflowSchema.safeParse(form);
      setIsSubmitting(true);
      if (!validatedData.success) {
        toast.error(validatedData.error.message);
      }
      if (!validatedData.data) {
        return;
      }
      await createWorkflow(
        {
          description: validatedData.data.description!,
          googleSheetName: validatedData.data.googleSheetName,
          googleSheet: validatedData.data.googleSheetLink,
          name: validatedData.data.name,
          status: validatedData.data.status,
          subscribedUserIds: validatedData.data.subscribedUserIds!,
        },
        setWorkflows
      );
      toast.success("workflow created succesfully");
      // toast({ title: "Success", description: "Workflow created successfully" });
      setForm({
        name: "",
        description: "",
        googleSheetName: "",
        googleSheetLink: "",
        status: "New",
        subscribedUserIds: [],
      });
      setOpen(false);
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error(<div>{err.errors.map((e) => e.message).join(", ")}</div>);
      } else {
        toast.error("Failed to create workflow");

        console.error(err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeUser = (id: string) => {
    setForm((prev) => ({
      ...prev,
      subscribedUserIds: prev.subscribedUserIds.filter((uid) => uid !== id),
    }));
  };

  const availableUsers = allUsers.filter(
    (user) => !form.subscribedUserIds.includes(user.id)
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="
        max-w-md w-full 
        bg-white dark:bg-neutral-950 
        text-neutral-900 dark:text-neutral-100 
        p-6 rounded-lg shadow-lg shadow-black/20 
        overflow-y-auto
        animate-in fade-in-80 slide-in-from-bottom-10
        md:zoom-in-90
      "
      >
        <DialogHeader>
          <DialogTitle>Create New Workflow</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-2">
          {/* Workflow Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Workflow Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter workflow name"
              disabled={isSubmitting}
              className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Enter workflow description"
              className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 min-h-[100px]"
              disabled={isSubmitting}
            />
          </div>

          {/* Google Sheet Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Google Sheet Name</label>
            <Input
              value={form.googleSheetName}
              onChange={(e) =>
                setForm({ ...form, googleSheetName: e.target.value })
              }
              placeholder="Enter Google Sheet name"
              disabled={isSubmitting}
              className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Google Sheet Link</label>
            <Input
              value={form.googleSheetLink}
              onChange={(e) =>
                setForm({ ...form, googleSheetLink: e.target.value })
              }
              placeholder="Enter Google Sheet URL"
              disabled={isSubmitting}
              className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>

          {/* Status */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Status</label>
            <Select
              value={form.status}
              onValueChange={(value) =>
                setForm({ ...form, status: value as WorkflowStatus })
              }
              disabled={isSubmitting}
            >
              <SelectTrigger className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {["New", "Active", "Paused", "Done"].map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Assign Users */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Assign Users</label>

            {/* Selected Users as Tags */}
            <div className="flex flex-wrap gap-2">
              {form.subscribedUserIds.map((id) => {
                const user = allUsers.find((u) => u.id === id);
                if (!user) return null;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm"
                  >
                    {user.fullName || user.email}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeUser(id)}
                    />
                  </div>
                );
              })}
            </div>

            {/* Dropdown to add users */}
            <Select
              value=""
              onValueChange={(value) =>
                setForm((prev) => ({
                  ...prev,
                  subscribedUserIds: [...prev.subscribedUserIds, value],
                }))
              }
              disabled={
                isLoading || isSubmitting || availableUsers.length === 0
              }
            >
              <SelectTrigger className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
                <SelectValue
                  placeholder={
                    isLoading
                      ? "Loading users..."
                      : availableUsers.length === 0
                      ? "All users assigned"
                      : "Select users to assign"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {availableUsers.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.fullName || user.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="flex justify-end gap-2 mt-6">
          <Button
            variant="ghost"
            onClick={() => setOpen(false)}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={isSubmitting || isLoading}
            className="min-w-[120px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...
              </>
            ) : (
              "Create Workflow"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
