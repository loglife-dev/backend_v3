import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Service } from "../infra/typeorm/entities/Service";


export interface IServiceRepository extends IBaseRepository<Service> {

    Get(): Promise<Service[]>;
    findById(id: string): Promise<Service>;
    fidByProtocol(protocol: number): Promise<Service>;
}