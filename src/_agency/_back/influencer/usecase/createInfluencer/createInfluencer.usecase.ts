import { injectable, inject } from "tsyringe";
import type { IInfluencerRepository } from "@/_agency/_back/influencer/domain/influencer.repository.interface";
import type { Influencer } from "@/_agency/_back/influencer/domain/influencer.entity";

@injectable()
export class CreateInfluencerUseCase {
  constructor(
    @inject("IInfluencerRepository") private readonly influencerRepository: IInfluencerRepository
  ) {}

  async execute(influencer: Influencer): Promise<Influencer> {
    return await this.influencerRepository.create(influencer);
  }
}
