// Dominio: Campaign
export class Campaign {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public budget: number,
    public agencyId: string,
    public brandId: string,
    public influencers: string[],
    public status: string,
    public tasks: string[],
    public goals: string[],
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
