// Interfaz de repositorio para Brand
import type { Brand } from "./brand.entity";

export interface IBrandRepository {
  findById(id: string): Promise<Brand | null>;
  findAll(): Promise<Brand[]>;
  create(brand: Brand): Promise<Brand>;
  update(brand: Brand): Promise<Brand | null>;
  delete(id: string): Promise<void>;
}
