import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Driver } from "../infra/typeorm/entities/Driver";



export interface IDriverRepository extends IBaseRepository<Driver> {
    
    Get(): Promise<Driver[]>;
    findById(id: string): Promise<Driver>;
    findByCpf(cpf: string): Promise<Driver>;
    
}