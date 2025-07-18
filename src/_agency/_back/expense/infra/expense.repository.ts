import type { IExpenseRepository } from "../domain/expense.repository.interface";
import type { Expense } from "../domain/expense.entity";
import { ExpenseModel } from "./expense.schema";
import { ExpenseMapper } from "./expense.mapper";

export class ExpenseRepository implements IExpenseRepository {
  async create(expense: Expense): Promise<Expense> {
    const doc = await ExpenseModel.create(ExpenseMapper.toPersistence(expense));
    return ExpenseMapper.toDomain(doc);
  }

  async findById(id: string): Promise<Expense | null> {
    const doc = await ExpenseModel.findById(id);
    return doc ? ExpenseMapper.toDomain(doc) : null;
  }

  async findAll(): Promise<Expense[]> {
    const docs = await ExpenseModel.find();
    return docs.map(ExpenseMapper.toDomain);
  }

  async update(expense: Expense): Promise<Expense | null> {
    const doc = await ExpenseModel.findByIdAndUpdate(
      expense.id,
      ExpenseMapper.toPersistence(expense),
      { new: true }
    );
    return doc ? ExpenseMapper.toDomain(doc) : null;
  }

  async delete(id: string): Promise<void> {
    await ExpenseModel.findByIdAndDelete(id);
  }
}
