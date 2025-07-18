// Tipado principal para Contract (Mongoose)
export interface ContractDocument {
  _id: string;
  brandId: string;
  agencyId: string;
  campaignId: string;
  startDate: Date;
  endDate: Date;
  terms: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
