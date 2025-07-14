import { productRoutes } from "@/_app/_back/product/routes";
import { agencyRoutes } from "@/_agency/_back/agency/routes";

export const routes = {
  ...productRoutes,
  ...agencyRoutes,
};
