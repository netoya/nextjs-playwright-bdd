import { createProductPresentation } from "@/_app/_back/product/usecase/createProduct/createProduct.presentation";
import { listProductsPresentation } from "@/_app/_back/product/usecase/getAllProducts/listProducts.presentation";
import { getProductByIdPresentation } from "@/_app/_back/product/usecase/getProductById/getProductById.presentation";

export const routes = {
  "GET/api/product/": listProductsPresentation,
  "POST/api/product/create/": createProductPresentation,
  "GET/api/product/:id/": getProductByIdPresentation,
};
