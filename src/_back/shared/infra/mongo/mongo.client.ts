import mongoose from "mongoose";
import { singleton } from "tsyringe";

@singleton()
export class MongoDBClient {
  private connection: typeof mongoose;

  constructor() {
    this.connection = mongoose;
    this.connect();
  }

  async connect() {
    if (this.connection.connection.readyState === 0) {
      const status = await this.connection.connect(
        process.env.mongouri as string
      );
      console.log({ status });
    }
  }

  getConnection() {
    return this.connection;
  }
}
