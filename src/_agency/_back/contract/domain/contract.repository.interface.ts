// Interfaz de repositorio para Contract
import type { Contract } from "./contract.entity";

export interface IContractRepository {
  findById(id: string): Promise<Contract | null>;
  findAll(): Promise<Contract[]>;
  create(contract: Contract): Promise<Contract>;
  update(contract: Contract): Promise<Contract | null>;
  delete(id: string): Promise<void>;
}
