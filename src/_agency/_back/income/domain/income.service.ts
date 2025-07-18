import type { IIncomeRepository } from "./income.repository.interface";
import type { Income } from "./income.entity";

export class IncomeService {
  constructor(private readonly incomeRepository: IIncomeRepository) {}

  async create(income: Income): Promise<Income> {
    return this.incomeRepository.create(income);
  }

  async findById(id: string): Promise<Income | null> {
    return this.incomeRepository.findById(id);
  }

  async findAll(): Promise<Income[]> {
    return this.incomeRepository.findAll();
  }

  async update(income: Income): Promise<Income | null> {
    return this.incomeRepository.update(income);
  }

  async delete(id: string): Promise<void> {
    return this.incomeRepository.delete(id);
  }
}
