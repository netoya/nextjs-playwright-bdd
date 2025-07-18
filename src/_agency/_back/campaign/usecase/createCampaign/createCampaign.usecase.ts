import { injectable, inject } from "tsyringe";
import type { ICampaignRepository } from "@/_agency/_back/campaign/domain/campaign.repository.interface";
import type { Campaign } from "@/_agency/_back/campaign/domain/campaign.entity";

@injectable()
export class CreateCampaignUseCase {
  constructor(
    @inject("ICampaignRepository") private readonly campaignRepository: ICampaignRepository
  ) {}

  async execute(campaign: Campaign): Promise<Campaign> {
    return await this.campaignRepository.create(campaign);
  }
}
