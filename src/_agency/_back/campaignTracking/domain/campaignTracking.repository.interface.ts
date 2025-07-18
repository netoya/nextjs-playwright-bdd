// Interfaz de repositorio para CampaignTracking
import type { CampaignTracking } from "./campaignTracking.entity";

export interface ICampaignTrackingRepository {
  findById(id: string): Promise<CampaignTracking | null>;
  findAll(): Promise<CampaignTracking[]>;
  create(campaignTracking: CampaignTracking): Promise<CampaignTracking>;
  update(campaignTracking: CampaignTracking): Promise<CampaignTracking | null>;
  delete(id: string): Promise<void>;
}
