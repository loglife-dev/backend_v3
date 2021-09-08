import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Address } from "../infra/entities/Address";


export interface IAddressRepository extends IBaseRepository<Address> {

    findByCnpjCpf(cnpj_cpf: string): Promise<Address>;
}