import listTasksPresentation from "./usecase/getAllTasks/listTasks.presentation";

export const taskRoutes = {
  "GET /api/task": listTasksPresentation,
  // Puedes agregar más rutas aquí para otros casos de uso
};
