// Tipado principal para Task (Mongoose)
export interface TaskDocument {
  _id: string;
  campaignId: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
