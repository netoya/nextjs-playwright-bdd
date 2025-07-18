import { injectable, inject } from "tsyringe";
import type { IContractRepository } from "@/_agency/_back/contract/domain/contract.repository.interface";

@injectable()
export class DeleteContractUseCase {
  constructor(
    @inject("IContractRepository") private readonly contractRepository: IContractRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.contractRepository.delete(id);
  }
}
