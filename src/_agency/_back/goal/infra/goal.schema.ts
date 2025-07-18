import { Schema, model, models } from "mongoose";
import type { GoalDocument } from "./goal.document";

const GoalSchema = new Schema<GoalDocument>({
  campaignId: { type: String, required: true },
  description: { type: String, required: true },
  metric: { type: String, required: true },
  targetValue: { type: Number, required: true },
  currentValue: { type: Number, required: true },
  achieved: { type: Boolean, required: true },
});

export const GoalModel = models["Goal"] || model<GoalDocument>("Goal", GoalSchema);
