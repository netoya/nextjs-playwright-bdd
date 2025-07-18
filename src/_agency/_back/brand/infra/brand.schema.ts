import { Schema, model, models } from "mongoose";
import type { BrandDocument } from "./brand.document";

const BrandSchema = new Schema<BrandDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  website: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const BrandModel = models["Brand"] || model<BrandDocument>("Brand", BrandSchema);
