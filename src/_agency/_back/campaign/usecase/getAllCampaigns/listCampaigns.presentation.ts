import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllCampaignsUseCase } from "./getAllCampaigns.usecase";

export default async function listCampaignsPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllCampaignsUseCase);
    const campaigns = await useCase.execute();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener campañas", details: error });
  }
}
