// Tipos unificados para Agency (Mongoose)
import { Document } from "mongoose";

export interface AgencyDocument extends Document {
  _id: string | { toString(): string };
  name: string;
  address?: string;
  phone?: string;
}
