import { injectable, inject } from "tsyringe";
import type { IExpenseRepository } from "@/_agency/_back/expense/domain/expense.repository.interface";

@injectable()
export class DeleteExpenseUseCase {
  constructor(
    @inject("IExpenseRepository") private readonly expenseRepository: IExpenseRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.expenseRepository.delete(id);
  }
}
