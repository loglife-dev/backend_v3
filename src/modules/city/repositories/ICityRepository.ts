import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { City } from "../infra/entities/City";


export interface ICityRepository extends IBaseRepository<City> {

    findByName(name: string): Promise<City>;
    findById(id: string): Promise<City>;
    list():Promise<City[]>;
}