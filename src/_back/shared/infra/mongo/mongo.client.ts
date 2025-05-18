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
      await this.connection.connect(process.env.mongouri as string);
    }
  }

  getConnection() {
    return this.connection;
  }
}
