import listAgenciesPresentation from "./usecase/getAllAgencies/listAgencies.presentation";

export const agencyRoutes = {
  "GET /api/agency": listAgenciesPresentation,
  // Puedes agregar más rutas aquí para otros casos de uso
};
