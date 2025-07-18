// Interfaz de repositorio para Task
import type { Task } from "./task.entity";

export interface ITaskRepository {
  findById(id: string): Promise<Task | null>;
  findAll(): Promise<Task[]>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<Task | null>;
  delete(id: string): Promise<void>;
}
