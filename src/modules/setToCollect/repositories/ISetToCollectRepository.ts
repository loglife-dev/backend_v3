import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { SetToCollect } from "../infra/typeorm/entities/SetToCollect";

export interface ISetToCollectRepository extends IBaseRepository<SetToCollect> {

    Get(): Promise<SetToCollect[]>;
    findById(id: string): Promise<SetToCollect>;
}