import { injectable, inject } from "tsyringe";
import type { IExpenseRepository } from "@/_agency/_back/expense/domain/expense.repository.interface";
import type { Expense } from "@/_agency/_back/expense/domain/expense.entity";

@injectable()
export class UpdateExpenseUseCase {
  constructor(
    @inject("IExpenseRepository") private readonly expenseRepository: IExpenseRepository
  ) {}

  async execute(expense: Expense): Promise<Expense | null> {
    return await this.expenseRepository.update(expense);
  }
}
