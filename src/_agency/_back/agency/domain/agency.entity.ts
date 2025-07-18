// Dominio: Agency
export class Agency {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public address: string,
    public phone: string,
    public email: string,
    public website: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
