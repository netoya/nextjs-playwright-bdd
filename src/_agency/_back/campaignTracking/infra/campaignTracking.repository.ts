import { singleton } from "tsyringe";
import { CampaignTrackingModel } from "./campaignTracking.schema";
import { CampaignTrackingMapper } from "./campaignTracking.mapper";
import type { ICampaignTrackingRepository } from "../domain/campaignTracking.repository.interface";
import { CampaignTracking } from "../domain/campaignTracking.entity";

@singleton()
export class CampaignTrackingRepositoryImpl implements ICampaignTrackingRepository {
  async findById(id: string): Promise<CampaignTracking | null> {
    const doc = await CampaignTrackingModel.findById(id);
    return doc ? CampaignTrackingMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<CampaignTracking[]> {
    const docs = await CampaignTrackingModel.find();
    return docs.map(CampaignTrackingMapper.toDomain);
  }
  async create(campaignTracking: CampaignTracking): Promise<CampaignTracking> {
    const doc = await CampaignTrackingModel.create(CampaignTrackingMapper.toPersistence(campaignTracking));
    return CampaignTrackingMapper.toDomain(doc);
  }
  async update(campaignTracking: CampaignTracking): Promise<CampaignTracking | null> {
    const doc = await CampaignTrackingModel.findByIdAndUpdate(campaignTracking.id, CampaignTrackingMapper.toPersistence(campaignTracking), { new: true });
    return doc ? CampaignTrackingMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await CampaignTrackingModel.findByIdAndDelete(id);
  }
}
