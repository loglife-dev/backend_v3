import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { ServiceGroup } from "../infra/typeorm/entities/ServiceGroup";

export interface IServiceGroupRepository extends IBaseRepository<ServiceGroup> {

    Get(): Promise<ServiceGroup[]>;
    findById(id: string): Promise<ServiceGroup>;

}