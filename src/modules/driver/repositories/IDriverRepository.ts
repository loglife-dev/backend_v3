import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Driver } from "../infra/typeorm/entities/Driver";



export interface IDriverRepository extends IBaseRepository<Driver> {

    findByCpf(cpf: string): Promise<Driver>;
    
}