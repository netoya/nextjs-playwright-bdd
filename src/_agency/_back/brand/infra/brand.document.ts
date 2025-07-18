// Tipado principal para Brand (Mongoose)
export interface BrandDocument {
  _id: string;
  name: string;
  description: string;
  website: string;
  contactEmail: string;
  contactPhone: string;
  createdAt: Date;
  updatedAt: Date;
}
