import { injectable, inject } from "tsyringe";
import type { ITaskRepository } from "@/_agency/_back/task/domain/task.repository.interface";
import type { Task } from "@/_agency/_back/task/domain/task.entity";

@injectable()
export class GetAllTasksUseCase {
  constructor(
    @inject("ITaskRepository") private readonly taskRepository: ITaskRepository
  ) {}

  async execute(): Promise<Task[]> {
    return await this.taskRepository.findAll();
  }
}
