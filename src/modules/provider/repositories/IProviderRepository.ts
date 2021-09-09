import { Provider } from "../infra/typeorm/entities/Provider"
import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";


export interface IProviderRepository extends IBaseRepository<Provider> {

    Get():Promise<Provider[]>;
    findById(id: string): Promise<Provider>;
    findByEmail(email: string): Promise<Provider>;
}