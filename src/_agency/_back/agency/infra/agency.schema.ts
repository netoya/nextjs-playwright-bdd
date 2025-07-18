import { Schema, model, models } from "mongoose";
import type { AgencyDocument } from "./agency.document";

const AgencySchema = new Schema<AgencyDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const AgencyModel = models["Agency"] || model<AgencyDocument>("Agency", AgencySchema);
