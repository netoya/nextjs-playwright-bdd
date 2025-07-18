import type { IExpenseRepository } from "./expense.repository.interface";
import type { Expense } from "./expense.entity";

export class ExpenseService {
  constructor(private readonly expenseRepository: IExpenseRepository) {}

  async create(expense: Expense): Promise<Expense> {
    return this.expenseRepository.create(expense);
  }

  async findById(id: string): Promise<Expense | null> {
    return this.expenseRepository.findById(id);
  }

  async findAll(): Promise<Expense[]> {
    return this.expenseRepository.findAll();
  }

  async update(expense: Expense): Promise<Expense | null> {
    return this.expenseRepository.update(expense);
  }

  async delete(id: string): Promise<void> {
    return this.expenseRepository.delete(id);
  }
}
