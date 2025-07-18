import type { ContractDocument } from "./contract.document";
import { Contract } from "../domain/contract.entity";

export class ContractMapper {
  static toDomain(doc: ContractDocument): Contract {
    return new Contract(
      doc._id,
      doc.brandId,
      doc.agencyId,
      doc.campaignId,
      doc.startDate,
      doc.endDate,
      doc.terms,
      doc.amount,
      doc.status,
      doc.createdAt,
      doc.updatedAt
    );
  }
  static toPersistence(entity: Contract): ContractDocument {
    return {
      _id: entity.id,
      brandId: entity.brandId,
      agencyId: entity.agencyId,
      campaignId: entity.campaignId,
      startDate: entity.startDate,
      endDate: entity.endDate,
      terms: entity.terms,
      amount: entity.amount,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
