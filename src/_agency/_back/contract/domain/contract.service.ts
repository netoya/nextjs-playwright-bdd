// Servicio de dominio para Contract
import type { Contract } from "./contract.entity";
import type { IContractRepository } from "./contract.repository.interface";

export class ContractService {
  constructor(private repository: IContractRepository) {}

  async getContract(id: string) {
    return this.repository.findById(id);
  }

  async createContract(contract: Contract) {
    // Validaciones y lógica de negocio
    return this.repository.create(contract);
  }
}
