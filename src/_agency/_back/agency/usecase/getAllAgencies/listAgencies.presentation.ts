import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllAgenciesUseCase } from "./getAllAgencies.usecase";

export default async function listAgenciesPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllAgenciesUseCase);
    const agencies = await useCase.execute();
    res.status(200).json(agencies);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener agencias", details: error });
  }
}
