import { Product } from "../domain/product.entity";
import { ProductDocument } from "./product.document";

export class ProductMapper {
  static toDomain(raw: ProductDocument): Product {
    const data = raw.toJSON();

    return new Product(data._id?.toString(), data.name, data.price, data.stock);
  }

  static toPersistence(product: Product): ProductDocument {
    return {
      _id: product.id ? product.id : undefined,
      name: product.productName,
      price: product.toJSON().price,
      stock: product.toJSON().stock,
    } as ProductDocument; // Se asegura de que coincida con el tipo `ProductDocument`
  }
}
