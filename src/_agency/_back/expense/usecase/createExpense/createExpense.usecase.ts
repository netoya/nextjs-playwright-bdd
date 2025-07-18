import { injectable, inject } from "tsyringe";
import type { IExpenseRepository } from "@/_agency/_back/expense/domain/expense.repository.interface";
import type { Expense } from "@/_agency/_back/expense/domain/expense.entity";

@injectable()
export class CreateExpenseUseCase {
  constructor(
    @inject("IExpenseRepository") private readonly expenseRepository: IExpenseRepository
  ) {}

  async execute(expense: Expense): Promise<Expense> {
    return await this.expenseRepository.create(expense);
  }
}
