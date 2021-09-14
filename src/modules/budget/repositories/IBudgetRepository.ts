import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Budget } from "../infra/typeorm/entities/Budget";

export interface IBudgetRepository extends IBaseRepository<Budget> {

    Get(): Promise<Budget[]>;
    findById(id: string): Promise<Budget>;
}