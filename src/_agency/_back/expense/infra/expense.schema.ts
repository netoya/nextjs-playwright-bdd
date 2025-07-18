import { Schema, model } from "mongoose";
import type { ExpenseDocument } from "./expense.document";

const ExpenseSchema = new Schema<ExpenseDocument>({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  campaignId: { type: String },
  agencyId: { type: String },
  contractId: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ExpenseModel = model<ExpenseDocument>("Expense", ExpenseSchema);
