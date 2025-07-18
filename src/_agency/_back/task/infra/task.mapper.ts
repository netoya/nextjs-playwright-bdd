import type { TaskDocument } from "./task.document";
import { Task } from "../domain/task.entity";

export class TaskMapper {
  static toDomain(doc: TaskDocument): Task {
    return new Task(
      doc._id,
      doc.campaignId,
      doc.title,
      doc.description,
      doc.assignedTo,
      doc.dueDate,
      doc.status,
      doc.createdAt,
      doc.updatedAt
    );
  }
  static toPersistence(entity: Task): TaskDocument {
    return {
      _id: entity.id,
      campaignId: entity.campaignId,
      title: entity.title,
      description: entity.description,
      assignedTo: entity.assignedTo,
      dueDate: entity.dueDate,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
