import type { IIncomeRepository } from "../domain/income.repository.interface";
import type { Income } from "../domain/income.entity";
import { IncomeModel } from "./income.schema";
import { IncomeMapper } from "./income.mapper";

export class IncomeRepository implements IIncomeRepository {
  async create(income: Income): Promise<Income> {
    const doc = await IncomeModel.create(IncomeMapper.toPersistence(income));
    return IncomeMapper.toDomain(doc);
  }

  async findById(id: string): Promise<Income | null> {
    const doc = await IncomeModel.findById(id);
    return doc ? IncomeMapper.toDomain(doc) : null;
  }

  async findAll(): Promise<Income[]> {
    const docs = await IncomeModel.find();
    return docs.map(IncomeMapper.toDomain);
  }

  async update(income: Income): Promise<Income | null> {
    const doc = await IncomeModel.findByIdAndUpdate(
      income.id,
      IncomeMapper.toPersistence(income),
      { new: true }
    );
    return doc ? IncomeMapper.toDomain(doc) : null;
  }

  async delete(id: string): Promise<void> {
    await IncomeModel.findByIdAndDelete(id);
  }
}
