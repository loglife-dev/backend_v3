import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { SetToBoard } from "../infra/typeorm/entities/SetToBoard";

export interface ISetToBoardRepository extends IBaseRepository<SetToBoard> {

    Get(): Promise<SetToBoard[]>;
    findById(id: string): Promise<SetToBoard>;
}