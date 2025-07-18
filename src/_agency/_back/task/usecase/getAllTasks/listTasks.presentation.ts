import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "tsyringe";
import { GetAllTasksUseCase } from "./getAllTasks.usecase";

export default async function listTasksPresentation(req: NextApiRequest, res: NextApiResponse) {
  try {
    const useCase = container.resolve(GetAllTasksUseCase);
    const tasks = await useCase.execute();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tareas", details: error });
  }
}
