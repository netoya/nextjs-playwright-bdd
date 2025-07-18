import { injectable, inject } from "tsyringe";
import type { IGoalRepository } from "@/_agency/_back/goal/domain/goal.repository.interface";
import type { Goal } from "@/_agency/_back/goal/domain/goal.entity";

@injectable()
export class GetGoalByIdUseCase {
  constructor(
    @inject("IGoalRepository") private readonly goalRepository: IGoalRepository
  ) {}

  async execute(id: string): Promise<Goal | null> {
    return await this.goalRepository.findById(id);
  }
}
