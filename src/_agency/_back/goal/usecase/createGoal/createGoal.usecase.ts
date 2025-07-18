import { injectable, inject } from "tsyringe";
import type { IGoalRepository } from "@/_agency/_back/goal/domain/goal.repository.interface";
import type { Goal } from "@/_agency/_back/goal/domain/goal.entity";

@injectable()
export class CreateGoalUseCase {
  constructor(
    @inject("IGoalRepository") private readonly goalRepository: IGoalRepository
  ) {}

  async execute(goal: Goal): Promise<Goal> {
    return await this.goalRepository.create(goal);
  }
}
