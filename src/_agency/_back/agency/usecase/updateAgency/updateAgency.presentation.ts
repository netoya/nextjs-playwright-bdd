"use server";
import { container } from "tsyringe";
import { UpdateAgencyUseCase } from "./updateAgency.usecase";
import { NextApiRequest, NextApiResponse } from "next";

export async function updateAgencyPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve(UpdateAgencyUseCase);
    const agency = await usecase.execute(req.query.id as string, req.body);
    if (!agency) {
      res.status(404).json({ message: "Agencia no encontrada" });
      return;
    }
    res.status(200).json(agency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
