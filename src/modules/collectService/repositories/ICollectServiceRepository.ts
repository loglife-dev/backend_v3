import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { CollectService } from "../infra/typeorm/entities/CollectService";

export interface ICollectServiceRepository extends IBaseRepository<CollectService> {

    Get(): Promise<CollectService[]>;
    findById(id: string): Promise<CollectService>;
}