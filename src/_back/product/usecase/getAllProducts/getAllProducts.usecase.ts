import { autoInjectable, inject } from "tsyringe";
import { ProductService } from "../../domain/product.service";
import { Product } from "../../domain/product.entity";

@autoInjectable()
export class GetAllProductsUseCase {
  constructor(
    @inject("ProductService")
    private productService: ProductService
  ) {}

  async execute(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }
}
