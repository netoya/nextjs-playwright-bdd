import { injectable, inject } from "tsyringe";
import type { IBrandRepository } from "@/_agency/_back/brand/domain/brand.repository.interface";
import type { Brand } from "@/_agency/_back/brand/domain/brand.entity";

@injectable()
export class GetBrandByIdUseCase {
  constructor(
    @inject("IBrandRepository") private readonly brandRepository: IBrandRepository
  ) {}

  async execute(id: string): Promise<Brand | null> {
    return await this.brandRepository.findById(id);
  }
}
