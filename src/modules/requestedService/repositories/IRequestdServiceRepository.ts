import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { RequestedService } from "../infra/typeorm/entities/RequestedService";

export interface IRequestedServiceRepository extends IBaseRepository<RequestedService> {

    Get(): Promise<RequestedService[]>;
    findById(id: string): Promise<RequestedService>;
}