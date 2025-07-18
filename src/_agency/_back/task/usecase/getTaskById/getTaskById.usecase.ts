import { injectable, inject } from "tsyringe";
import type { ITaskRepository } from "@/_agency/_back/task/domain/task.repository.interface";
import type { Task } from "@/_agency/_back/task/domain/task.entity";

@injectable()
export class GetTaskByIdUseCase {
  constructor(
    @inject("ITaskRepository") private readonly taskRepository: ITaskRepository
  ) {}

  async execute(id: string): Promise<Task | null> {
    return await this.taskRepository.findById(id);
  }
}
