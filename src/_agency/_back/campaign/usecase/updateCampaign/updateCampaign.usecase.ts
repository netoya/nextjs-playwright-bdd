import { injectable, inject } from "tsyringe";
import type { ICampaignRepository } from "@/_agency/_back/campaign/domain/campaign.repository.interface";
import type { Campaign } from "@/_agency/_back/campaign/domain/campaign.entity";

@injectable()
export class UpdateCampaignUseCase {
  constructor(
    @inject("ICampaignRepository") private readonly campaignRepository: ICampaignRepository
  ) {}

  async execute(campaign: Campaign): Promise<Campaign | null> {
    return await this.campaignRepository.update(campaign);
  }
}
