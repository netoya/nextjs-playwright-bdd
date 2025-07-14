import { listAgenciesPresentation } from "@/_agency/_back/agency/usecase/getAllAgencies/listAgencies.presentation";
import { createAgencyPresentation } from "@/_agency/_back/agency/usecase/createAgency/createAgency.presentation";
import { getAgencyByIdPresentation } from "@/_agency/_back/agency/usecase/getAgencyById/getAgencyById.presentation";
import { updateAgencyPresentation } from "@/_agency/_back/agency/usecase/updateAgency/updateAgency.presentation";
import { deleteAgencyPresentation } from "@/_agency/_back/agency/usecase/deleteAgency/deleteAgency.presentation";

export const agencyRoutes = {
  "GET/api/agency/": listAgenciesPresentation,
  "POST/api/agency/create/": createAgencyPresentation,
  "GET/api/agency/:id/": getAgencyByIdPresentation,
  "PUT/api/agency/:id/": updateAgencyPresentation,
  "DELETE/api/agency/:id/": deleteAgencyPresentation,
};
