"use server";
import { container } from "tsyringe";
import { DeleteAgencyUseCase } from "./deleteAgency.usecase";
import { NextApiRequest, NextApiResponse } from "next";

export async function deleteAgencyPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve(DeleteAgencyUseCase);
    await usecase.execute(req.query.id as string);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
