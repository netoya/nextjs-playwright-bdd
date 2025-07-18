import { injectable, inject } from "tsyringe";
import type { IContractRepository } from "@/_agency/_back/contract/domain/contract.repository.interface";
import type { Contract } from "@/_agency/_back/contract/domain/contract.entity";

@injectable()
export class GetAllContractsUseCase {
  constructor(
    @inject("IContractRepository") private readonly contractRepository: IContractRepository
  ) {}

  async execute(): Promise<Contract[]> {
    return await this.contractRepository.findAll();
  }
}
