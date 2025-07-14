// Servicio de dominio para Agency
import { IAgencyRepository } from "./agency.repository.interface";
import { Agency } from "./agency.entity";

export class AgencyService {
  constructor(private readonly repository: IAgencyRepository) {}

  async getAgency(id: string) {
    return this.repository.findById(id);
  }

  async listAgencies() {
    return this.repository.findAll();
  }

  async createAgency(data: Agency) {
    return this.repository.create(data);
  }

  async updateAgency(id: string, data: Partial<Agency>) {
    return this.repository.update(id, data);
  }

  async deleteAgency(id: string) {
    return this.repository.delete(id);
  }
}
