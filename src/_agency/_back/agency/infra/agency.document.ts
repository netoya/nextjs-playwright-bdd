// Tipado principal para Agency (Mongoose)
export interface AgencyDocument {
  _id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  createdAt: Date;
  updatedAt: Date;
}
