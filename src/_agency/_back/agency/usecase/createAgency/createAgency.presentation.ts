"use server";
import { container } from "tsyringe";
import { CreateAgencyUseCase } from "./createAgency.usecase";
import { NextApiRequest, NextApiResponse } from "next";

export async function createAgencyPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve(CreateAgencyUseCase);
    const agency = await usecase.execute(req.body);
    res.status(201).json(agency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
