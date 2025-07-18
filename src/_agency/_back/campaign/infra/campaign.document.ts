// Tipado principal para Campaign (Mongoose)
export interface CampaignDocument {
  _id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  agencyId: string;
  brandId: string;
  influencers: string[];
  status: string;
  tasks: string[];
  goals: string[];
  createdAt: Date;
  updatedAt: Date;
}
