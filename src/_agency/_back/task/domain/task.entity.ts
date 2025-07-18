// Dominio: Task
export class Task {
  constructor(
    public id: string,
    public campaignId: string,
    public title: string,
    public description: string,
    public assignedTo: string,
    public dueDate: Date,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
