import { injectable, inject } from "tsyringe";
import type { IGoalRepository } from "@/_agency/_back/goal/domain/goal.repository.interface";
import type { Goal } from "@/_agency/_back/goal/domain/goal.entity";

@injectable()
export class GetAllGoalsUseCase {
  constructor(
    @inject("IGoalRepository") private readonly goalRepository: IGoalRepository
  ) {}

  async execute(): Promise<Goal[]> {
    return await this.goalRepository.findAll();
  }
}
