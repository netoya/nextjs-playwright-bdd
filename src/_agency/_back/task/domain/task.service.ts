// Servicio de dominio para Task
import type { Task } from "./task.entity";
import type { ITaskRepository } from "./task.repository.interface";

export class TaskService {
  constructor(private repository: ITaskRepository) {}

  async getTask(id: string) {
    return this.repository.findById(id);
  }

  async createTask(task: Task) {
    // Validaciones y lógica de negocio
    return this.repository.create(task);
  }
}
