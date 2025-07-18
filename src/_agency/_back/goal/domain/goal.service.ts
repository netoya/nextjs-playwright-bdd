// Servicio de dominio para Goal
import type { Goal } from "./goal.entity";
import type { IGoalRepository } from "./goal.repository.interface";

export class GoalService {
  constructor(private repository: IGoalRepository) {}

  async getGoal(id: string) {
    return this.repository.findById(id);
  }

  async createGoal(goal: Goal) {
    // Validaciones y lógica de negocio
    return this.repository.create(goal);
  }
}
