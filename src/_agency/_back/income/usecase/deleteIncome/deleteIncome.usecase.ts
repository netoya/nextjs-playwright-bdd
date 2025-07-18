import { injectable, inject } from "tsyringe";
import type { IIncomeRepository } from "@/_agency/_back/income/domain/income.repository.interface";

@injectable()
export class DeleteIncomeUseCase {
  constructor(
    @inject("IIncomeRepository") private readonly incomeRepository: IIncomeRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.incomeRepository.delete(id);
  }
}
