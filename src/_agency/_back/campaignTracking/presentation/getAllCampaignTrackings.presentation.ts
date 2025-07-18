import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllCampaignTrackingsUseCase } from "@/_agency/_back/campaignTracking/usecase/getAllCampaignTrackings/getAllCampaignTrackings.usecase";

export async function getAllCampaignTrackingsPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllCampaignTrackingsUseCase);
    const campaignTrackings = await useCase.execute();
    res.status(200).json(campaignTrackings);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
