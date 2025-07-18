import listInfluencersPresentation from "./usecase/getAllInfluencers/listInfluencers.presentation";

export const influencerRoutes = {
  "GET /api/influencer": listInfluencersPresentation,
  // Puedes agregar más rutas aquí para otros casos de uso
};
