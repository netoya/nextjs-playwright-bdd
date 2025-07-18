// Servicio de dominio para Agency
import type { Agency } from "./agency.entity";
import type { IAgencyRepository } from "./agency.repository.interface";

export class AgencyService {
  constructor(private repository: IAgencyRepository) {}

  async getAgency(id: string) {
    return this.repository.findById(id);
  }

  async createAgency(agency: Agency) {
    // Validaciones y lógica de negocio
    return this.repository.create(agency);
  }
}
