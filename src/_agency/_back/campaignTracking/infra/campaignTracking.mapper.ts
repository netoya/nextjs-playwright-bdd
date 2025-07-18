import type { CampaignTrackingDocument } from "./campaignTracking.document";
import { CampaignTracking } from "../domain/campaignTracking.entity";

export class CampaignTrackingMapper {
  static toDomain(doc: CampaignTrackingDocument): CampaignTracking {
    return new CampaignTracking(
      doc._id,
      doc.campaignId,
      doc.date,
      doc.impressions,
      doc.clicks,
      doc.engagement,
      doc.reach,
      doc.notes
    );
  }
  static toPersistence(entity: CampaignTracking): CampaignTrackingDocument {
    return {
      _id: entity.id,
      campaignId: entity.campaignId,
      date: entity.date,
      impressions: entity.impressions,
      clicks: entity.clicks,
      engagement: entity.engagement,
      reach: entity.reach,
      notes: entity.notes,
    };
  }
}
