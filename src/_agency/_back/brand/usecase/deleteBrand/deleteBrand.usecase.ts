import { injectable, inject } from "tsyringe";
import type { IBrandRepository } from "@/_agency/_back/brand/domain/brand.repository.interface";

@injectable()
export class DeleteBrandUseCase {
  constructor(
    @inject("IBrandRepository") private readonly brandRepository: IBrandRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.brandRepository.delete(id);
  }
}
