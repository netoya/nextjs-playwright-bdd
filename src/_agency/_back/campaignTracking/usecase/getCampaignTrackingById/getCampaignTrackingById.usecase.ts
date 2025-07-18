import { injectable, inject } from "tsyringe";
import type { ICampaignTrackingRepository } from "@/_agency/_back/campaignTracking/domain/campaignTracking.repository.interface";
import type { CampaignTracking } from "@/_agency/_back/campaignTracking/domain/campaignTracking.entity";

@injectable()
export class GetCampaignTrackingByIdUseCase {
  constructor(
    @inject("ICampaignTrackingRepository") private readonly campaignTrackingRepository: ICampaignTrackingRepository
  ) {}

  async execute(id: string): Promise<CampaignTracking | null> {
    return await this.campaignTrackingRepository.findById(id);
  }
}
