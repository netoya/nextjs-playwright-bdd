import { inject, injectable } from "tsyringe";
import { ProductService } from "../../domain/product.service";
import { Product } from "../../domain/product.entity";

@injectable()
export class CreateProductUseCase {
  constructor(@inject(ProductService) private productService: ProductService) {}

  async execute(name: string, price: number, stock: number): Promise<string> {
    const product = Product.create(name, price, stock);
    return await this.productService.createProduct(
      product.productName,
      product.toJSON().price,
      product.toJSON().stock
    );
  }
}
