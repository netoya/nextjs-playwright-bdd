import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllIncomesUseCase } from "@/_agency/_back/income/usecase/getAllIncomes/getAllIncomes.usecase";

export async function getAllIncomesPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllIncomesUseCase);
    const incomes = await useCase.execute();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
