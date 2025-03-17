import { NextApiRequest, NextApiResponse } from "next";
import { CreateProductUseCase } from "@/_back/product/usecase/createProduct/createProduct.usecase";
import { container } from "tsyringe";

export async function createProductPresentation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, price, stock } = req.body;
    const createProductUseCase = container.resolve(CreateProductUseCase);
    const result = await createProductUseCase.execute(name, price, stock);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
