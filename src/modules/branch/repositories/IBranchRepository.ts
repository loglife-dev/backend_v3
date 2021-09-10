import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Branch } from "../infra/typeorm/entities/Branch";



export interface IBranchRepository extends IBaseRepository<Branch> {
    
    Get(): Promise<Branch[]>;
    findById(id: string): Promise<Branch>;
    findByNickname(nickname: string): Promise<Branch>;
}