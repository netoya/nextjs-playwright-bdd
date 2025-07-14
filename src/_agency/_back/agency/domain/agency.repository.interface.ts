// Interfaz para el repositorio de Agency
import { Agency } from "./agency.entity";

export interface IAgencyRepository {
  findById(id: string): Promise<Agency | null>;
  findAll(): Promise<Agency[]>;
  create(agency: Omit<Agency, "id">): Promise<Agency>;
  update(id: string, agency: Partial<Agency>): Promise<Agency | null>;
  delete(id: string): Promise<boolean>;
}
