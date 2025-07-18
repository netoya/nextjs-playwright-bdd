import { Schema, model, models } from "mongoose";
import type { CampaignTrackingDocument } from "./campaignTracking.document";

const CampaignTrackingSchema = new Schema<CampaignTrackingDocument>({
  campaignId: { type: String, required: true },
  date: { type: Date, required: true },
  impressions: { type: Number, required: true },
  clicks: { type: Number, required: true },
  engagement: { type: Number, required: true },
  reach: { type: Number, required: true },
  notes: { type: String, required: true },
});

export const CampaignTrackingModel = models["CampaignTracking"] || model<CampaignTrackingDocument>("CampaignTracking", CampaignTrackingSchema);
