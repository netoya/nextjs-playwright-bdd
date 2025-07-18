// Tipado principal para Goal (Mongoose)
export interface GoalDocument {
  _id: string;
  campaignId: string;
  description: string;
  metric: string;
  targetValue: number;
  currentValue: number;
  achieved: boolean;
}
