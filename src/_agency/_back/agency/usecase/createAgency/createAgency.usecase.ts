import { injectable, inject } from "tsyringe";
import type { IAgencyRepository } from "@/_agency/_back/agency/domain/agency.repository.interface";
import type { Agency } from "@/_agency/_back/agency/domain/agency.entity";

@injectable()
export class CreateAgencyUseCase {
  constructor(
    @inject("IAgencyRepository") private readonly agencyRepository: IAgencyRepository
  ) {}

  async execute(agency: Agency): Promise<Agency> {
    return await this.agencyRepository.create(agency);
  }
}
