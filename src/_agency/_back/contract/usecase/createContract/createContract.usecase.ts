import { injectable, inject } from "tsyringe";
import type { IContractRepository } from "@/_agency/_back/contract/domain/contract.repository.interface";
import type { Contract } from "@/_agency/_back/contract/domain/contract.entity";

@injectable()
export class CreateContractUseCase {
  constructor(
    @inject("IContractRepository") private readonly contractRepository: IContractRepository
  ) {}

  async execute(contract: Contract): Promise<Contract> {
    return await this.contractRepository.create(contract);
  }
}
