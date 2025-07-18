import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllExpensesUseCase } from "@/_agency/_back/expense/usecase/getAllExpenses/getAllExpenses.usecase";

export async function getAllExpensesPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllExpensesUseCase);
    const expenses = await useCase.execute();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
