// Interfaz de repositorio para Goal
import type { Goal } from "./goal.entity";

export interface IGoalRepository {
  findById(id: string): Promise<Goal | null>;
  findAll(): Promise<Goal[]>;
  create(goal: Goal): Promise<Goal>;
  update(goal: Goal): Promise<Goal | null>;
  delete(id: string): Promise<void>;
}
