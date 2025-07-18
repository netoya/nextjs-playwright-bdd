import { Schema, model, models } from "mongoose";
import type { ContractDocument } from "./contract.document";

const ContractSchema = new Schema<ContractDocument>({
  brandId: { type: String, required: true },
  agencyId: { type: String, required: true },
  campaignId: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  terms: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ContractModel = models["Contract"] || model<ContractDocument>("Contract", ContractSchema);
