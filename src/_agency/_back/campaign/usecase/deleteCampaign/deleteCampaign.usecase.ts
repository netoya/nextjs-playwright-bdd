import { injectable, inject } from "tsyringe";
import type { ICampaignRepository } from "@/_agency/_back/campaign/domain/campaign.repository.interface";

@injectable()
export class DeleteCampaignUseCase {
  constructor(
    @inject("ICampaignRepository") private readonly campaignRepository: ICampaignRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.campaignRepository.delete(id);
  }
}
