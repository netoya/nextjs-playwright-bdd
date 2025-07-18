// Interfaz de repositorio para Influencer
import type { Influencer } from "./influencer.entity";

export interface IInfluencerRepository {
  findById(id: string): Promise<Influencer | null>;
  findAll(): Promise<Influencer[]>;
  create(influencer: Influencer): Promise<Influencer>;
  update(influencer: Influencer): Promise<Influencer | null>;
  delete(id: string): Promise<void>;
}
