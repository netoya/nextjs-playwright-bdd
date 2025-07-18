// Servicio de dominio para Influencer
import type { Influencer } from "./influencer.entity";
import type { IInfluencerRepository } from "./influencer.repository.interface";

export class InfluencerService {
  constructor(private repository: IInfluencerRepository) {}

  async getInfluencer(id: string) {
    return this.repository.findById(id);
  }

  async createInfluencer(influencer: Influencer) {
    // Validaciones y lógica de negocio
    return this.repository.create(influencer);
  }
}
