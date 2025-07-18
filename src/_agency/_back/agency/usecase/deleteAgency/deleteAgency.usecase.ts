import { injectable, inject } from "tsyringe";
import type { IAgencyRepository } from "@/_agency/_back/agency/domain/agency.repository.interface";

@injectable()
export class DeleteAgencyUseCase {
  constructor(
    @inject("IAgencyRepository") private readonly agencyRepository: IAgencyRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.agencyRepository.delete(id);
  }
}
