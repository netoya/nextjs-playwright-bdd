import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllGoalsUseCase } from "./getAllGoals.usecase";

export default async function listGoalsPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllGoalsUseCase);
    const goals = await useCase.execute();
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener objetivos", details: error });
  }
}
