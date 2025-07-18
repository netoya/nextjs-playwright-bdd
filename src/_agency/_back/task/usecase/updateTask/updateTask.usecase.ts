import { injectable, inject } from "tsyringe";
import type { ITaskRepository } from "@/_agency/_back/task/domain/task.repository.interface";
import type { Task } from "@/_agency/_back/task/domain/task.entity";

@injectable()
export class UpdateTaskUseCase {
  constructor(
    @inject("ITaskRepository") private readonly taskRepository: ITaskRepository
  ) {}

  async execute(task: Task): Promise<Task | null> {
    return await this.taskRepository.update(task);
  }
}
