import { injectable, inject } from "tsyringe";
import type { ICampaignTrackingRepository } from "@/_agency/_back/campaignTracking/domain/campaignTracking.repository.interface";

@injectable()
export class DeleteCampaignTrackingUseCase {
  constructor(
    @inject("ICampaignTrackingRepository") private readonly campaignTrackingRepository: ICampaignTrackingRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.campaignTrackingRepository.delete(id);
  }
}
