// Implementación Mongoose del repositorio Agency
import { IAgencyRepository } from "../domain/agency.repository.interface";
import { singleton } from "tsyringe";
import { Agency } from "../domain/agency.entity";
import { AgencyModel } from "./agency.schema";
import { AgencyMapper } from "./agency.mapper";
// ...existing code...

@singleton()
export class AgencyRepositoryMongo implements IAgencyRepository {
  async findById(id: string): Promise<Agency | null> {
    const doc = await AgencyModel.findById(id).lean().exec();
    return doc ? AgencyMapper.toDomain(doc) : null;
  }

  async findAll(): Promise<Agency[]> {
    const docs = await AgencyModel.find().lean().exec();
    return docs.map(AgencyMapper.toDomain);
  }

  async create(agency: Omit<Agency, "id">): Promise<Agency> {
    const created = await AgencyModel.create(agency);
    return AgencyMapper.toDomain(created.toObject());
  }

  async update(id: string, agency: Partial<Agency>): Promise<Agency | null> {
    const updated = await AgencyModel.findByIdAndUpdate(id, agency, {
      new: true,
    })
      .lean()
      .exec();
    return updated ? AgencyMapper.toDomain(updated) : null;
  }
  // ...existing code...

  async delete(id: string): Promise<boolean> {
    const result = await AgencyModel.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}
