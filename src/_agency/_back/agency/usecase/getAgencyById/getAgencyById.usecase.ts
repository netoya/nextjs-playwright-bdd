import { injectable, inject } from "tsyringe";
import type { IAgencyRepository } from "@/_agency/_back/agency/domain/agency.repository.interface";
import type { Agency } from "@/_agency/_back/agency/domain/agency.entity";

@injectable()
export class GetAgencyByIdUseCase {
  constructor(
    @inject("IAgencyRepository")
    private readonly agencyRepository: IAgencyRepository
  ) {}

  async execute(id: string): Promise<Agency | null> {
    return await this.agencyRepository.findById(id);
  }
}
