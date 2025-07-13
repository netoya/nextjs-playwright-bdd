import { inject, injectable } from "tsyringe";
import { ProductService } from "../../domain/product.service";
import { Product } from "../../domain/product.entity";

@injectable()
export class GetProductByIdUseCase {
  constructor(@inject(ProductService) private productService: ProductService) {}

  async execute(id: string): Promise<Product | null> {
    return await this.productService.getProductById(id);
  }
}
