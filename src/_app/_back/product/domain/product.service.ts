import { inject, injectable, singleton } from "tsyringe";
import type { IProductRepository } from "./product.repository.interface";
import { Product } from "./product.entity";

@injectable()
export class ProductService {
  constructor(
    @inject("IProductRepository") private productRepository: IProductRepository
  ) {}

  // Crear un producto
  async createProduct(
    name: string,
    price: number,
    stock: number
  ): Promise<string> {
    const product = Product.create(name, price, stock); // Crear la entidad de dominio
    return await this.productRepository.create(product); // Pasamos al repositorio
  }

  // Obtener todos los productos
  async getAllProducts(): Promise<Product[]> {
    const products = await this.productRepository.findAll(); // Obtener todos los productos del repositorio
    return products.map((product) => product); // Retornar productos mapeados
  }

  // Obtener un producto por ID
  async getProductById(id: string): Promise<Product | null> {
    return await this.productRepository.findById(id); // Buscar por ID en el repositorio
  }

  // Actualizar el stock de un producto
  async updateProduct(id: string, stock: number): Promise<void> {
    const product = await this.getProductById(id);
    if (!product) throw new Error("Product not found");

    product.updateStock(stock); // Actualizamos el stock de la entidad de dominio
    await this.productRepository.update(product); // Guardamos la entidad actualizada en el repositorio
  }

  // Eliminar un producto
  async deleteProduct(id: string): Promise<void> {
    const product = await this.getProductById(id);
    if (!product) throw new Error("Product not found");

    await this.productRepository.delete(id); // Eliminamos el producto del repositorio
  }
}
