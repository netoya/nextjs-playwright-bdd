import type { Expense } from "./expense.entity";

export interface IExpenseRepository {
  create(expense: Expense): Promise<Expense>;
  findById(id: string): Promise<Expense | null>;
  findAll(): Promise<Expense[]>;
  update(expense: Expense): Promise<Expense | null>;
  delete(id: string): Promise<void>;
}
