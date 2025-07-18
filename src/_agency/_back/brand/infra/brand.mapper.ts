import type { BrandDocument } from "./brand.document";
import { Brand } from "../domain/brand.entity";

export class BrandMapper {
  static toDomain(doc: BrandDocument): Brand {
    return new Brand(
      doc._id,
      doc.name,
      doc.description,
      doc.website,
      doc.contactEmail,
      doc.contactPhone,
      doc.createdAt,
      doc.updatedAt
    );
  }
  static toPersistence(entity: Brand): BrandDocument {
    return {
      _id: entity.id,
      name: entity.name,
      description: entity.description,
      website: entity.website,
      contactEmail: entity.contactEmail,
      contactPhone: entity.contactPhone,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
