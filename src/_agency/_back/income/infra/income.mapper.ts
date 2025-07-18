import type { Income } from "../domain/income.entity";
import type { IncomeDocument } from "./income.document";

export class IncomeMapper {
  static toDomain(doc: IncomeDocument): Income {
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

  static toPersistence(entity: Income): Partial<IncomeDocument> {
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
