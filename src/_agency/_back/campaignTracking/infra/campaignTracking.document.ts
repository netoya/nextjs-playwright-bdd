// Tipado principal para CampaignTracking (Mongoose)
export interface CampaignTrackingDocument {
  _id: string;
  campaignId: string;
  date: Date;
  impressions: number;
  clicks: number;
  engagement: number;
  reach: number;
  notes: string;
}
