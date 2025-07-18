import { injectable, inject } from "tsyringe";
import type { IIncomeRepository } from "@/_agency/_back/income/domain/income.repository.interface";
import type { Income } from "@/_agency/_back/income/domain/income.entity";

@injectable()
export class CreateIncomeUseCase {
  constructor(
    @inject("IIncomeRepository") private readonly incomeRepository: IIncomeRepository
  ) {}

  async execute(income: Income): Promise<Income> {
    return await this.incomeRepository.create(income);
  }
}
