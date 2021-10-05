import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { AvailableService } from "../infra/typeorm/entities/AvailableService";

export interface IAvailableServiceRepository extends IBaseRepository<AvailableService> {
    Get(): Promise<AvailableService[]>;
    findById(id: string): Promise<AvailableService>;
}