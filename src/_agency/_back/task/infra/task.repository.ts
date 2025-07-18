import { singleton } from "tsyringe";
import { TaskModel } from "./task.schema";
import { TaskMapper } from "./task.mapper";
import type { ITaskRepository } from "../domain/task.repository.interface";
import { Task } from "../domain/task.entity";

@singleton()
export class TaskRepositoryImpl implements ITaskRepository {
  async findById(id: string): Promise<Task | null> {
    const doc = await TaskModel.findById(id);
    return doc ? TaskMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<Task[]> {
    const docs = await TaskModel.find();
    return docs.map(TaskMapper.toDomain);
  }
  async create(task: Task): Promise<Task> {
    const doc = await TaskModel.create(TaskMapper.toPersistence(task));
    return TaskMapper.toDomain(doc);
  }
  async update(task: Task): Promise<Task | null> {
    const doc = await TaskModel.findByIdAndUpdate(task.id, TaskMapper.toPersistence(task), { new: true });
    return doc ? TaskMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await TaskModel.findByIdAndDelete(id);
  }
}
