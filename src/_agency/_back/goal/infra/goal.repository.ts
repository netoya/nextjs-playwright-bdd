import { singleton } from "tsyringe";
import { GoalModel } from "./goal.schema";
import { GoalMapper } from "./goal.mapper";
import type { IGoalRepository } from "../domain/goal.repository.interface";
import { Goal } from "../domain/goal.entity";

@singleton()
export class GoalRepositoryImpl implements IGoalRepository {
  async findById(id: string): Promise<Goal | null> {
    const doc = await GoalModel.findById(id);
    return doc ? GoalMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<Goal[]> {
    const docs = await GoalModel.find();
    return docs.map(GoalMapper.toDomain);
  }
  async create(goal: Goal): Promise<Goal> {
    const doc = await GoalModel.create(GoalMapper.toPersistence(goal));
    return GoalMapper.toDomain(doc);
  }
  async update(goal: Goal): Promise<Goal | null> {
    const doc = await GoalModel.findByIdAndUpdate(goal.id, GoalMapper.toPersistence(goal), { new: true });
    return doc ? GoalMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await GoalModel.findByIdAndDelete(id);
  }
}
