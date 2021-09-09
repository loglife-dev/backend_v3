import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Hub } from "../infra/typeorm/entities/Hub";

export interface IHubRepository extends IBaseRepository<Hub> {  

    Get(): Promise<Hub[]>;
    findByName(name: string): Promise<Hub>;
    findById(id: string): Promise<Hub>;
}