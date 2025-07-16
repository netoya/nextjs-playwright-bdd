import { container } from "tsyringe";

import { AgencyRepositoryMongo } from "@/_agency/_back/agency/infra/agency.repository";
import { AgencyService } from "@/_agency/_back/agency/domain/agency.service";
import { IAgencyRepository } from "@/_agency/_back/agency/domain/agency.repository.interface";
import { MongoDBClient } from "@/_app/_back/shared/infra/mongo/mongo.client";
import "@/_agency/_back/shared/infra/di/dependencies";

container.registerSingleton<MongoDBClient>(MongoDBClient);
container.resolve(MongoDBClient);

container.registerSingleton<IAgencyRepository>(
  "IAgencyRepository",
  AgencyRepositoryMongo
);
container.registerSingleton<AgencyService>(AgencyService);

export { container };
