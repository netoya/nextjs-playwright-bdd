// Interfaz de repositorio para Agency
import type { Agency } from "./agency.entity";

export interface IAgencyRepository {
  findById(id: string): Promise<Agency | null>;
  findAll(): Promise<Agency[]>;
  create(agency: Agency): Promise<Agency>;
  update(agency: Agency): Promise<Agency | null>;
  delete(id: string): Promise<void>;
}
