import { inject, injectable } from "tsyringe";
import { ProductService } from "../../domain/product.service";

@injectable()
export class DeleteProductUseCase {
  constructor(@inject(ProductService) private productService: ProductService) {}

  async execute(id: string): Promise<void> {
    const product = await this.productService.getProductById(id);
    if (product) {
      // Lógica para eliminar el producto (en el repositorio)
      await this.productService.deleteProduct(id);
    } else {
      throw new Error("Product not found");
    }
  }
}
