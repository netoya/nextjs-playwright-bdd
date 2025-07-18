// Dominio: CampaignTracking
export class CampaignTracking {
  constructor(
    public id: string,
    public campaignId: string,
    public date: Date,
    public impressions: number,
    public clicks: number,
    public engagement: number,
    public reach: number,
    public notes: string
  ) {}
}
