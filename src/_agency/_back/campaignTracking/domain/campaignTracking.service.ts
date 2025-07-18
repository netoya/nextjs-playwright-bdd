// Servicio de dominio para CampaignTracking
import type { CampaignTracking } from "./campaignTracking.entity";
import type { ICampaignTrackingRepository } from "./campaignTracking.repository.interface";

export class CampaignTrackingService {
  constructor(private repository: ICampaignTrackingRepository) {}

  async getCampaignTracking(id: string) {
    return this.repository.findById(id);
  }

  async createCampaignTracking(campaignTracking: CampaignTracking) {
    // Validaciones y lógica de negocio
    return this.repository.create(campaignTracking);
  }
}
