import { injectable, inject } from "tsyringe";
import type { ICampaignTrackingRepository } from "@/_agency/_back/campaignTracking/domain/campaignTracking.repository.interface";
import type { CampaignTracking } from "@/_agency/_back/campaignTracking/domain/campaignTracking.entity";

@injectable()
export class GetAllCampaignTrackingsUseCase {
  constructor(
    @inject("ICampaignTrackingRepository") private readonly campaignTrackingRepository: ICampaignTrackingRepository
  ) {}

  async execute(): Promise<CampaignTracking[]> {
    return await this.campaignTrackingRepository.findAll();
  }
}
