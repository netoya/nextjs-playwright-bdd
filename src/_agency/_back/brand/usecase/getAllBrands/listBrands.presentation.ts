import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllBrandsUseCase } from "./getAllBrands.usecase";

export default async function listBrandsPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllBrandsUseCase);
    const brands = await useCase.execute();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener marcas", details: error });
  }
}
