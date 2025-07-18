// Dominio: Goal
export class Goal {
  constructor(
    public id: string,
    public campaignId: string,
    public description: string,
    public metric: string,
    public targetValue: number,
    public currentValue: number,
    public achieved: boolean
  ) {}
}
