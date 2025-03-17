import { container } from "tsyringe";

import { IProductRepository } from "@/_back/product/domain/product.repository.interface";
import { ProductRepository } from "@/_back/product/infra/product.repository";
import { ProductService } from "@/_back/product/domain/product.service";
import { MongoDBClient } from "@/_back/shared/infra/mongo/mongo.client";

container.registerSingleton<MongoDBClient>(MongoDBClient);
container.resolve(MongoDBClient);

container.registerSingleton<IProductRepository>(
  "IProductRepository",
  ProductRepository
);
container.registerSingleton<ProductService>("ProductService", ProductService);
