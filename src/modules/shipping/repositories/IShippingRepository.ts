import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Shipping } from "../infra/typeorm/entities/Shipping";


export interface IShippingRepository extends IBaseRepository<Shipping> {

    Get(): Promise<Shipping[]>;
    findById(id: string): Promise<Shipping>;
    findByCnpj(cnpj: string): Promise<Shipping>;
}