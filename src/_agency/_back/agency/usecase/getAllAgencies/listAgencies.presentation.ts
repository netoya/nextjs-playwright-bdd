"use server";
import { container } from "tsyringe";
import "@/_agency/_back/shared/infra/di/dependencies";
import { GetAllAgenciesUseCase } from "./getAllAgencies.usecase";
import { NextApiRequest, NextApiResponse } from "next";

export async function listAgenciesPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve(GetAllAgenciesUseCase);
    const agencies = await usecase.execute();
    res.status(200).json(agencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
