import type { Expense } from "../domain/expense.entity";
import type { ExpenseDocument } from "./expense.document";

export class ExpenseMapper {
  static toDomain(doc: ExpenseDocument): Expense {
    return {
      id: doc.id,
      type: doc.type,
      amount: doc.amount,
      currency: doc.currency,
      date: doc.date,
      description: doc.description,
      campaignId: doc.campaignId,
      agencyId: doc.agencyId,
      contractId: doc.contractId,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }

  static toPersistence(entity: Expense): Partial<ExpenseDocument> {
    return {
      type: entity.type,
      amount: entity.amount,
      currency: entity.currency,
      date: entity.date,
      description: entity.description,
      campaignId: entity.campaignId,
      agencyId: entity.agencyId,
      contractId: entity.contractId,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
