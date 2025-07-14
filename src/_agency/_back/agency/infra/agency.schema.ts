// Esquema Mongoose para Agency
import { Schema, model } from "mongoose";
import { AgencyDocument } from "./agency.document";

const AgencySchema = new Schema<AgencyDocument>({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
});

export const AgencyModel = model<AgencyDocument>("Agency", AgencySchema);
