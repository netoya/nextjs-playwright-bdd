import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllInfluencersUseCase } from "./getAllInfluencers.usecase";

export default async function listInfluencersPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllInfluencersUseCase);
    const influencers = await useCase.execute();
    res.status(200).json(influencers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener influencers", details: error });
  }
}
