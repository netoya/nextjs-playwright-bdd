import type { AgencyDocument } from "./agency.document";
import { Agency } from "../domain/agency.entity";

export class AgencyMapper {
  static toDomain(doc: AgencyDocument): Agency {
    return new Agency(
      doc._id,
      doc.name,
      doc.description,
      doc.address,
      doc.phone,
      doc.email,
      doc.website,
      doc.createdAt,
      doc.updatedAt
    );
  }
  static toPersistence(entity: Agency): AgencyDocument {
    return {
      _id: entity.id,
      name: entity.name,
      description: entity.description,
      address: entity.address,
      phone: entity.phone,
      email: entity.email,
      website: entity.website,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
