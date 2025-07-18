// Interfaz de repositorio para Campaign
import type { Campaign } from "./campaign.entity";

export interface ICampaignRepository {
  findById(id: string): Promise<Campaign | null>;
  findAll(): Promise<Campaign[]>;
  create(campaign: Campaign): Promise<Campaign>;
  update(campaign: Campaign): Promise<Campaign | null>;
  delete(id: string): Promise<void>;
}
