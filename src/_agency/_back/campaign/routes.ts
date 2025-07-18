import listCampaignsPresentation from "./usecase/getAllCampaigns/listCampaigns.presentation";

export const campaignRoutes = {
  "GET /api/campaign": listCampaignsPresentation,
  // Puedes agregar más rutas aquí para otros casos de uso
};
