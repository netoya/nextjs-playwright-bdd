import { injectable, inject } from "tsyringe";
import type { IGoalRepository } from "@/_agency/_back/goal/domain/goal.repository.interface";

@injectable()
export class DeleteGoalUseCase {
  constructor(
    @inject("IGoalRepository") private readonly goalRepository: IGoalRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.goalRepository.delete(id);
  }
}
