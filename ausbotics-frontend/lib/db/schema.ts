import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const appointments = sqliteTable("appointments", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  preferredDate: text("preferred_date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  purpose: text("purpose").notNull(),
  description: text("description").default(""),
  status: text("status", { enum: ["Pending", "Confirmed", "Cancelled"] })
    .notNull()
    .default("Pending"),
  createdAt: text("created_at").notNull(),
});

export type Appointment = typeof appointments.$inferSelect;
export type NewAppointment = typeof appointments.$inferInsert;
