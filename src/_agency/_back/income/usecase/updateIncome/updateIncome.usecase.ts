import { injectable, inject } from "tsyringe";
import type { IIncomeRepository } from "@/_agency/_back/income/domain/income.repository.interface";
import type { Income } from "@/_agency/_back/income/domain/income.entity";

@injectable()
export class UpdateIncomeUseCase {
  constructor(
    @inject("IIncomeRepository") private readonly incomeRepository: IIncomeRepository
  ) {}

  async execute(income: Income): Promise<Income | null> {
    return await this.incomeRepository.update(income);
  }
}
