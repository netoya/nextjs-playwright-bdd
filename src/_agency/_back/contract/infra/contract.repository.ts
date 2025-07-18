import { singleton } from "tsyringe";
import { ContractModel } from "./contract.schema";
import { ContractMapper } from "./contract.mapper";
import type { IContractRepository } from "../domain/contract.repository.interface";
import { Contract } from "../domain/contract.entity";

@singleton()
export class ContractRepositoryImpl implements IContractRepository {
  async findById(id: string): Promise<Contract | null> {
    const doc = await ContractModel.findById(id);
    return doc ? ContractMapper.toDomain(doc) : null;
  }
  async findAll(): Promise<Contract[]> {
    const docs = await ContractModel.find();
    return docs.map(ContractMapper.toDomain);
  }
  async create(contract: Contract): Promise<Contract> {
    const doc = await ContractModel.create(ContractMapper.toPersistence(contract));
    return ContractMapper.toDomain(doc);
  }
  async update(contract: Contract): Promise<Contract | null> {
    const doc = await ContractModel.findByIdAndUpdate(contract.id, ContractMapper.toPersistence(contract), { new: true });
    return doc ? ContractMapper.toDomain(doc) : null;
  }
  async delete(id: string): Promise<void> {
    await ContractModel.findByIdAndDelete(id);
  }
}
