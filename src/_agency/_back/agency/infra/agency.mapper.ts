// Mapper para transformar documentos de MongoDB a entidad Agency
import { Agency } from "../domain/agency.entity";
import { AgencyDocument } from "./agency.document";

export class AgencyMapper {
  static toDomain(doc: AgencyDocument): Agency {
    return {
      id: typeof doc._id === "string" ? doc._id : doc._id.toString(),
      name: doc.name,
      address: doc.address,
      phone: doc.phone,
    };
  }

  static toPersistence(entity: Agency): AgencyDocument {
    return {
      _id: entity.id,
      name: entity.name,
      address: entity.address,
      phone: entity.phone,
    } as AgencyDocument;
  }
}
