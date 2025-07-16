// Esquema Mongoose para Agency
import { Schema, model, models } from "mongoose";
import { AgencyDocument } from "./agency.document";

const AgencySchema = new Schema<AgencyDocument>({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
});

export const AgencyModel =
  models["Agency"] || model<AgencyDocument>("Agency", AgencySchema);
