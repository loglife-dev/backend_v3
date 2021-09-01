import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Collector } from "../infra/typeorm/entities/Collector";


export interface ICollectorRepository extends IBaseRepository<Collector>{

    findById(id: string): Promise<Collector>;
    findByCnpj()
}