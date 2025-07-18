import type { CampaignDocument } from "./campaign.document";
import { Campaign } from "../domain/campaign.entity";

export class CampaignMapper {
  static toDomain(doc: CampaignDocument): Campaign {
    return new Campaign(
      doc._id,
      doc.name,
      doc.description,
      doc.startDate,
      doc.endDate,
      doc.budget,
      doc.agencyId,
      doc.brandId,
      doc.influencers,
      doc.status,
      doc.tasks,
      doc.goals,
      doc.createdAt,
      doc.updatedAt
    );
  }
  static toPersistence(entity: Campaign): CampaignDocument {
    return {
      _id: entity.id,
      name: entity.name,
      description: entity.description,
      startDate: entity.startDate,
      endDate: entity.endDate,
      budget: entity.budget,
      agencyId: entity.agencyId,
      brandId: entity.brandId,
      influencers: entity.influencers,
      status: entity.status,
      tasks: entity.tasks,
      goals: entity.goals,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
