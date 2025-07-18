import type { GoalDocument } from "./goal.document";
import { Goal } from "../domain/goal.entity";

export class GoalMapper {
  static toDomain(doc: GoalDocument): Goal {
    return new Goal(
      doc._id,
      doc.campaignId,
      doc.description,
      doc.metric,
      doc.targetValue,
      doc.currentValue,
      doc.achieved
    );
  }
  static toPersistence(entity: Goal): GoalDocument {
    return {
      _id: entity.id,
      campaignId: entity.campaignId,
      description: entity.description,
      metric: entity.metric,
      targetValue: entity.targetValue,
      currentValue: entity.currentValue,
      achieved: entity.achieved,
    };
  }
}
