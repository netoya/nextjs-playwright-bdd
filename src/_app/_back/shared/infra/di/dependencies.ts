import { container } from "tsyringe";
import { MongoDBClient } from "@/_app/_back/shared/infra/mongo/mongo.client";

container.registerSingleton<MongoDBClient>(MongoDBClient);
container.resolve(MongoDBClient);

export { container };
