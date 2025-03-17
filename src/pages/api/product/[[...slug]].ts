import "@/_back/shared/infra/di/dependencies";
import { createProductPresentation } from "@/_back/product/presentation/createProduct.presentation";
import { NextApiRequest, NextApiResponse } from "next";
import { listProductsPresentation } from "@/_back/product/presentation/listProducts.presentation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug = [] } = req.query as { slug: string[] }; // Captura los parámetros de la ruta
  const path = slug ? `/${slug.join("/")}` : ""; // Formateamos la ruta a un string

  switch (req.method) {
    case "GET":
      if (path === "/") {
        return listProductsPresentation(req, res);
      }
      break;
    case "POST":
      if (path === "/create") {
        return createProductPresentation(req, res);
      }
      break;
    // case "PUT":
    //   if (path.startsWith("/update/")) {
    //     const id = path.split("/update/")[1]; // Capturamos el id de la ruta
    //     return updateProductPresentation(req, res, id);
    //   }
    //   break;
    // case "DELETE":
    //   if (path.startsWith("/delete/")) {
    //     const id = path.split("/delete/")[1]; // Capturamos el id de la ruta
    //     return deleteProductPresentation(req, res, id);
    //   }
    //   break;
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }

  return res.status(404).json({ message: "Route not found" }); // Si no se encuentra la ruta o el método
}
