import { injectable, inject } from "tsyringe";
import type { IContractRepository } from "@/_agency/_back/contract/domain/contract.repository.interface";
import type { Contract } from "@/_agency/_back/contract/domain/contract.entity";

@injectable()
export class GetContractByIdUseCase {
  constructor(
    @inject("IContractRepository") private readonly contractRepository: IContractRepository
  ) {}

  async execute(id: string): Promise<Contract | null> {
    return await this.contractRepository.findById(id);
  }
}
