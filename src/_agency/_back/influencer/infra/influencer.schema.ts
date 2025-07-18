import { Schema, model, models } from "mongoose";
import type { InfluencerDocument } from "./influencer.document";

const SocialNetworkSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const InfluencerSchema = new Schema<InfluencerDocument>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  bio: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  socialNetworks: { type: [SocialNetworkSchema], required: true },
  categories: { type: [String], required: true },
  agencyId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const InfluencerModel = models["Influencer"] || model<InfluencerDocument>("Influencer", InfluencerSchema);
