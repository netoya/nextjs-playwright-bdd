import { injectable, inject } from "tsyringe";
import type { ICampaignRepository } from "@/_agency/_back/campaign/domain/campaign.repository.interface";
import type { Campaign } from "@/_agency/_back/campaign/domain/campaign.entity";

@injectable()
export class GetAllCampaignsUseCase {
  constructor(
    @inject("ICampaignRepository") private readonly campaignRepository: ICampaignRepository
  ) {}

  async execute(): Promise<Campaign[]> {
    return await this.campaignRepository.findAll();
  }
}
