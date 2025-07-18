import { Schema, model, models } from "mongoose";
import type { TaskDocument } from "./task.document";

const TaskSchema = new Schema<TaskDocument>({
  campaignId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const TaskModel = models["Task"] || model<TaskDocument>("Task", TaskSchema);
