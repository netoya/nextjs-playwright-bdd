"use server";
import { container } from "tsyringe";
import { GetAgencyByIdUseCase } from "./getAgencyById.usecase";
import { NextApiRequest, NextApiResponse } from "next";

export async function getAgencyByIdPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve(GetAgencyByIdUseCase);
    const agency = await usecase.execute(req.query.id as string);
    if (!agency) {
      res.status(404).json({ message: "Agencia no encontrada" });
      return;
    }
    res.status(200).json(agency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
