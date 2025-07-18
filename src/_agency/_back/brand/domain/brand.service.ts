// Servicio de dominio para Brand
import type { Brand } from "./brand.entity";
import type { IBrandRepository } from "./brand.repository.interface";

export class BrandService {
  constructor(private repository: IBrandRepository) {}

  async getBrand(id: string) {
    return this.repository.findById(id);
  }

  async createBrand(brand: Brand) {
    // Validaciones y lógica de negocio
    return this.repository.create(brand);
  }
}
