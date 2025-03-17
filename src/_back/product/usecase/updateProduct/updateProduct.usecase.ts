import { inject, injectable } from "tsyringe";
import { ProductService } from "../../domain/product.service";

@injectable()
export class UpdateProductUseCase {
  constructor(@inject(ProductService) private productService: ProductService) {}

  async execute(id: string, stock: number): Promise<void> {
    const product = await this.productService.getProductById(id);
    if (product) {
      product.updateStock(stock);
      await this.productService.createProduct(
        product.productName,
        product.toJSON().price,
        product.toJSON().stock
      );
    } else {
      throw new Error("Product not found");
    }
  }
}
