import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllContractsUseCase } from "./getAllContracts.usecase";

export default async function listContractsPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllContractsUseCase);
    const contracts = await useCase.execute();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener contratos", details: error });
  }
}
