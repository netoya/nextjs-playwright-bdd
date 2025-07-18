// Tipado principal para Influencer (Mongoose)
export interface SocialNetworkDocument {
  name: string;
  url: string;
}

export interface InfluencerDocument {
  _id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  bio: string;
  avatarUrl: string;
  socialNetworks: SocialNetworkDocument[];
  categories: string[];
  agencyId: string;
  createdAt: Date;
  updatedAt: Date;
}
