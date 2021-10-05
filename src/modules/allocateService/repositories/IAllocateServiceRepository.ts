import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { AllocateService } from "../infra/typeom/entities/AllocateService";

export interface IAllocateServiceRepository extends IBaseRepository<AllocateService> {
    Get(): Promise<AllocateService[]>;
    findById(id: string): Promise<AllocateService>;
}