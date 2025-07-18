import { singleton } from "tsyringe";
import { AgencyModel } from "./agency.schema";
import { AgencyMapper } from "./agency.mapper";
import type { IAgencyRepository } from "../domain/agency.repository.interface";
import { Agency } from "../domain/agency.entity";

@singleton()
export class AgencyRepositoryImpl implements IAgencyRepository {
  async findById(id: string): Promise<Agency | null> {
    const doc = await AgencyModel.findById(id);
    return doc ? AgencyMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<Agency[]> {
    const docs = await AgencyModel.find();
    return docs.map(AgencyMapper.toDomain);
  }
  async create(agency: Agency): Promise<Agency> {
    const doc = await AgencyModel.create(AgencyMapper.toPersistence(agency));
    return AgencyMapper.toDomain(doc);
  }
  async update(agency: Agency): Promise<Agency | null> {
    const doc = await AgencyModel.findByIdAndUpdate(agency.id, AgencyMapper.toPersistence(agency), { new: true });
    return doc ? AgencyMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await AgencyModel.findByIdAndDelete(id);
  }
}
