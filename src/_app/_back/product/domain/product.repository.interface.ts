import { Product } from "@/_app/_back/product/domain/product.entity";

export interface IProductRepository {
  create(product: Product): Promise<string>; // Crear un producto
  findAll(): Promise<Product[]>; // Obtener todos los productos
  findById(id: string): Promise<Product | null>; // Buscar un producto por ID
  update(product: Product): Promise<void>; // Actualizar un producto
  delete(id: string): Promise<void>; // Eliminar un producto
}
