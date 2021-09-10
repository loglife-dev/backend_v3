import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Collector_Cost } from "../infra/typeorm/entities/Collector_Cost";


export interface ICollectorCostRepository extends IBaseRepository<Collector_Cost> {

    Get(): Promise<Collector_Cost[]>;
    findById(id: string): Promise<Collector_Cost>;
}