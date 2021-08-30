import { BaseRepository } from "../../../../shared/infra/repositories/BaseRepositories";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { Customer } from "../entities/Customer";


class CustomerRepository extends BaseRepository<Customer> implements ICustomerRepository {
    constructor() {
        super(Customer);
    }

    async findById(id: string): Promise<Customer> {
        return this.repository.findOne({ id });
    }

    findByCnpjAndCpf(cnpj_cpf: string): Promise<Customer> {
        return this.repository.findOne({ cnpj_cpf })
    }

}

export { CustomerRepository }