import { singleton } from "tsyringe";
import { ProductModel } from "./product.schema";
import { IProductRepository } from "../domain/product.repository.interface";
import { Product } from "../domain/product.entity";
import { ProductMapper } from "./product.mapper"; // Mapper para convertir entre Mongoose y dominio

@singleton()
export class ProductRepository implements IProductRepository {
  async create(product: Product): Promise<string> {
    const persistenceProduct = ProductMapper.toPersistence(product);
    const createdProduct = await ProductModel.create(persistenceProduct);

    return ProductMapper.toDomain(createdProduct).id as string;
  }

  async findAll(): Promise<Product[]> {
    const products = await ProductModel.find();
    return products.map(ProductMapper.toDomain);
  }

  async findById(id: string): Promise<Product | null> {
    const product = await ProductModel.findById(id);
    return product ? ProductMapper.toDomain(product) : null;
  }

  async update(product: Product): Promise<void> {
    await ProductModel.findByIdAndUpdate(
      product.id,
      ProductMapper.toPersistence(product)
    );
  }

  async delete(id: string): Promise<void> {
    await ProductModel.findByIdAndDelete(id);
  }
}
