// Dominio: Brand
export class Brand {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public website: string,
    public contactEmail: string,
    public contactPhone: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
