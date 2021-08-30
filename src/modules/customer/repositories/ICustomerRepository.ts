import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Customer } from "../infra/entities/Customer";


export interface ICustomerRepository extends IBaseRepository<Customer> {

    findById(id: string): Promise<Customer>;
    findByCnpjAndCpf(cnpj_cpf: string): Promise<Customer>;

}