import type { InfluencerDocument } from "./influencer.document";
import { Influencer } from "../domain/influencer.entity";

export class InfluencerMapper {
  static toDomain(doc: InfluencerDocument): Influencer {
    return new Influencer(
      doc._id,
      doc.name,
      doc.username,
      doc.email,
      doc.phone,
      doc.bio,
      doc.avatarUrl,
      doc.socialNetworks,
      doc.categories,
      doc.agencyId,
      doc.createdAt,
      doc.updatedAt
    );
  }
  static toPersistence(entity: Influencer): InfluencerDocument {
    return {
      _id: entity.id,
      name: entity.name,
      username: entity.username,
      email: entity.email,
      phone: entity.phone,
      bio: entity.bio,
      avatarUrl: entity.avatarUrl,
      socialNetworks: entity.socialNetworks,
      categories: entity.categories,
      agencyId: entity.agencyId,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
