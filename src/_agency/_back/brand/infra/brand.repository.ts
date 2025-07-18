import { singleton } from "tsyringe";
import { BrandModel } from "./brand.schema";
import { BrandMapper } from "./brand.mapper";
import type { IBrandRepository } from "../domain/brand.repository.interface";
import { Brand } from "../domain/brand.entity";

@singleton()
export class BrandRepositoryImpl implements IBrandRepository {
  async findById(id: string): Promise<Brand | null> {
    const doc = await BrandModel.findById(id);
    return doc ? BrandMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<Brand[]> {
    const docs = await BrandModel.find();
    return docs.map(BrandMapper.toDomain);
  }
  async create(brand: Brand): Promise<Brand> {
    const doc = await BrandModel.create(BrandMapper.toPersistence(brand));
    return BrandMapper.toDomain(doc);
  }
  async update(brand: Brand): Promise<Brand | null> {
    const doc = await BrandModel.findByIdAndUpdate(brand.id, BrandMapper.toPersistence(brand), { new: true });
    return doc ? BrandMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await BrandModel.findByIdAndDelete(id);
  }
}
