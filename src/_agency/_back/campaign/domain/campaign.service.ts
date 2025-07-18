// Servicio de dominio para Campaign
import type { Campaign } from "./campaign.entity";
import type { ICampaignRepository } from "./campaign.repository.interface";

export class CampaignService {
  constructor(private repository: ICampaignRepository) {}

  async getCampaign(id: string) {
    return this.repository.findById(id);
  }

  async createCampaign(campaign: Campaign) {
    // Validaciones y lógica de negocio
    return this.repository.create(campaign);
  }
}
