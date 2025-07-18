import { Schema, model, models } from "mongoose";
import type { CampaignDocument } from "./campaign.document";

const CampaignSchema = new Schema<CampaignDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, required: true },
  agencyId: { type: String, required: true },
  brandId: { type: String, required: true },
  influencers: { type: [String], required: true },
  status: { type: String, required: true },
  tasks: { type: [String], required: true },
  goals: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const CampaignModel = models["Campaign"] || model<CampaignDocument>("Campaign", CampaignSchema);
