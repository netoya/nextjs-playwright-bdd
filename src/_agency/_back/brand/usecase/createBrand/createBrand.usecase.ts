import { injectable, inject } from "tsyringe";
import type { IBrandRepository } from "@/_agency/_back/brand/domain/brand.repository.interface";
import type { Brand } from "@/_agency/_back/brand/domain/brand.entity";

@injectable()
export class CreateBrandUseCase {
  constructor(
    @inject("IBrandRepository") private readonly brandRepository: IBrandRepository
  ) {}

  async execute(brand: Brand): Promise<Brand> {
    return await this.brandRepository.create(brand);
  }
}
