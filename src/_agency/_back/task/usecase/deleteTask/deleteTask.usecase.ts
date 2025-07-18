import { injectable, inject } from "tsyringe";
import type { ITaskRepository } from "@/_agency/_back/task/domain/task.repository.interface";

@injectable()
export class DeleteTaskUseCase {
  constructor(
    @inject("ITaskRepository") private readonly taskRepository: ITaskRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
