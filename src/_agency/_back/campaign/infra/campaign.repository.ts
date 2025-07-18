import { singleton } from "tsyringe";
import { CampaignModel } from "./campaign.schema";
import { CampaignMapper } from "./campaign.mapper";
import type { ICampaignRepository } from "../domain/campaign.repository.interface";
import { Campaign } from "../domain/campaign.entity";

@singleton()
export class CampaignRepositoryImpl implements ICampaignRepository {
  async findById(id: string): Promise<Campaign | null> {
    const doc = await CampaignModel.findById(id);
    return doc ? CampaignMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<Campaign[]> {
    const docs = await CampaignModel.find();
    return docs.map(CampaignMapper.toDomain);
  }
  async create(campaign: Campaign): Promise<Campaign> {
    const doc = await CampaignModel.create(CampaignMapper.toPersistence(campaign));
    return CampaignMapper.toDomain(doc);
  }
  async update(campaign: Campaign): Promise<Campaign | null> {
    const doc = await CampaignModel.findByIdAndUpdate(campaign.id, CampaignMapper.toPersistence(campaign), { new: true });
    return doc ? CampaignMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await CampaignModel.findByIdAndDelete(id);
  }
}
