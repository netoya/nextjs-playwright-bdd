export interface Income {
  id: string;
  type: string;
  amount: number;
  currency: string;
  date: Date;
  description: string;
  campaignId?: string;
  agencyId?: string;
  contractId?: string;
  createdAt: Date;
  updatedAt: Date;
}
