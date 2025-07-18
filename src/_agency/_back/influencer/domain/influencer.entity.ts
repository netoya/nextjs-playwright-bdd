// Dominio: Influencer
export interface SocialNetwork {
  name: string;
  url: string;
}

export class Influencer {
  constructor(
    public id: string,
    public name: string,
    public username: string,
    public email: string,
    public phone: string,
    public bio: string,
    public avatarUrl: string,
    public socialNetworks: SocialNetwork[],
    public categories: string[],
    public agencyId: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
