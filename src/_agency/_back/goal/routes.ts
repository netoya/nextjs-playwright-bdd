import listGoalsPresentation from "./usecase/getAllGoals/listGoals.presentation";

export const goalRoutes = {
  "GET /api/goal": listGoalsPresentation,
  // Puedes agregar más rutas aquí para otros casos de uso
};
