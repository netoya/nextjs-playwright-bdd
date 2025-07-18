import { injectable, inject } from "tsyringe";
import type { ICampaignRepository } from "@/_agency/_back/campaign/domain/campaign.repository.interface";
import type { Campaign } from "@/_agency/_back/campaign/domain/campaign.entity";

@injectable()
export class GetCampaignByIdUseCase {
  constructor(
    @inject("ICampaignRepository") private readonly campaignRepository: ICampaignRepository
  ) {}

  async execute(id: string): Promise<Campaign | null> {
    return await this.campaignRepository.findById(id);
  }
}
