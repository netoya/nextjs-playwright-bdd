// Dominio: Contract
export class Contract {
  constructor(
    public id: string,
    public brandId: string,
    public agencyId: string,
    public campaignId: string,
    public startDate: Date,
    public endDate: Date,
    public terms: string,
    public amount: number,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
