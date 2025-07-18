import { singleton } from "tsyringe";
import { InfluencerModel } from "./influencer.schema";
import { InfluencerMapper } from "./influencer.mapper";
import type { IInfluencerRepository } from "../domain/influencer.repository.interface";
import { Influencer } from "../domain/influencer.entity";

@singleton()
export class InfluencerRepositoryImpl implements IInfluencerRepository {
  async findById(id: string): Promise<Influencer | null> {
    const doc = await InfluencerModel.findById(id);
    return doc ? InfluencerMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<Influencer[]> {
    const docs = await InfluencerModel.find();
    return docs.map(InfluencerMapper.toDomain);
  }
  async create(influencer: Influencer): Promise<Influencer> {
    const doc = await InfluencerModel.create(InfluencerMapper.toPersistence(influencer));
    return InfluencerMapper.toDomain(doc);
  }
  async update(influencer: Influencer): Promise<Influencer | null> {
    const doc = await InfluencerModel.findByIdAndUpdate(influencer.id, InfluencerMapper.toPersistence(influencer), { new: true });
    return doc ? InfluencerMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await InfluencerModel.findByIdAndDelete(id);
  }
}
