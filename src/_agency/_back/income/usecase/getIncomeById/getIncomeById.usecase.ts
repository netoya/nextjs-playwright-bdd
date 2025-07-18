import { injectable, inject } from "tsyringe";
import type { IIncomeRepository } from "@/_agency/_back/income/domain/income.repository.interface";
import type { Income } from "@/_agency/_back/income/domain/income.entity";

@injectable()
export class GetIncomeByIdUseCase {
  constructor(
    @inject("IIncomeRepository") private readonly incomeRepository: IIncomeRepository
  ) {}

  async execute(id: string): Promise<Income | null> {
    return await this.incomeRepository.findById(id);
  }
}
