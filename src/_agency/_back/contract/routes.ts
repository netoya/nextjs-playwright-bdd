import listContractsPresentation from "./usecase/getAllContracts/listContracts.presentation";

export const contractRoutes = {
  "GET /api/contract": listContractsPresentation,
  // Puedes agregar más rutas aquí para otros casos de uso
};
