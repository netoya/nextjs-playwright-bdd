import { injectable, inject } from "tsyringe";
import type { IInfluencerRepository } from "@/_agency/_back/influencer/domain/influencer.repository.interface";

@injectable()
export class DeleteInfluencerUseCase {
  constructor(
    @inject("IInfluencerRepository") private readonly influencerRepository: IInfluencerRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.influencerRepository.delete(id);
  }
}
