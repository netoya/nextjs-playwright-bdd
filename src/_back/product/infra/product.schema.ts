import { Schema, model, models } from "mongoose";
import { ProductDocument } from "./product.document";

const ProductSchema = new Schema<ProductDocument>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export const ProductModel =
  models.Product || model<ProductDocument>("Product", ProductSchema, "product");
