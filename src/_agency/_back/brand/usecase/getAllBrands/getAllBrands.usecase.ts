import { injectable, inject } from "tsyringe";
import type { IBrandRepository } from "@/_agency/_back/brand/domain/brand.repository.interface";
import type { Brand } from "@/_agency/_back/brand/domain/brand.entity";

@injectable()
export class GetAllBrandsUseCase {
  constructor(
    @inject("IBrandRepository") private readonly brandRepository: IBrandRepository
  ) {}

  async execute(): Promise<Brand[]> {
    return await this.brandRepository.findAll();
  }
}
