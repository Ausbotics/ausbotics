"use server";

import { db } from "@/lib/db";
import { appointments } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";
import type { AppointmentStatus } from "@/lib/types";

export type AppointmentInput = {
  name: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  purpose: string;
  description?: string;
};

export async function bookAppointmentAction(data: AppointmentInput) {
  const id = randomUUID();
  const createdAt = new Date().toISOString();

  await db.insert(appointments).values({
    id,
    name: data.name,
    email: data.email,
    preferredDate: data.preferredDate,
    preferredTime: data.preferredTime,
    purpose: data.purpose,
    description: data.description ?? "",
    status: "Pending",
    createdAt,
  });

  return { success: true };
}

export async function getAllAppointmentsAction() {
  const rows = await db
    .select()
    .from(appointments)
    .orderBy(appointments.createdAt);

  // Map snake_case columns back to the AppointmentDto shape the UI expects
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    preferredDate: r.preferredDate,
    preferredTime: r.preferredTime,
    purpose: r.purpose,
    description: r.description ?? "",
    status: r.status as AppointmentStatus,
    createdAt: r.createdAt,
  }));
}

export async function updateAppointmentStatusAction(
  id: string,
  status: string
) {
  await db
    .update(appointments)
    .set({ status: status as "Pending" | "Confirmed" | "Cancelled" })
    .where(eq(appointments.id, id));

  return { success: true };
}
