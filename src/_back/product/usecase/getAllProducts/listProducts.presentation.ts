"use server";
import { container } from "tsyringe";
import { GetAllProductsUseCase } from "@/_back/product/usecase/getAllProducts/getAllProducts.usecase";

import { NextApiRequest, NextApiResponse } from "next";

export async function listProductsPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usecase = container.resolve(GetAllProductsUseCase);
    const products = await usecase.execute();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
