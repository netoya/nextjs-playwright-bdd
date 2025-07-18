import { injectable, inject } from "tsyringe";
import type { IGoalRepository } from "@/_agency/_back/goal/domain/goal.repository.interface";
import type { Goal } from "@/_agency/_back/goal/domain/goal.entity";

@injectable()
export class UpdateGoalUseCase {
  constructor(
    @inject("IGoalRepository") private readonly goalRepository: IGoalRepository
  ) {}

  async execute(goal: Goal): Promise<Goal | null> {
    return await this.goalRepository.update(goal);
  }
}
