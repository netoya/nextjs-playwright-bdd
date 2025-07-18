import type { Income } from "./income.entity";

export interface IIncomeRepository {
  create(income: Income): Promise<Income>;
  findById(id: string): Promise<Income | null>;
  findAll(): Promise<Income[]>;
  update(income: Income): Promise<Income | null>;
  delete(id: string): Promise<void>;
}
