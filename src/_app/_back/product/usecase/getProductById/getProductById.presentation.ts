"use server";
import { container } from "tsyringe";

import { NextApiRequest, NextApiResponse } from "next";
import { GetProductByIdUseCase } from "@/_app/_back/product/usecase/getProductById/getProductById.usecase";

export async function getProductByIdPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    const usecase = container.resolve(GetProductByIdUseCase);
    const products = await usecase.execute(id as string);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
