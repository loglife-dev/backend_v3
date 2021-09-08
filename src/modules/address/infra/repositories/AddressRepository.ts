import { BaseRepository } from "../../../../shared/infra/repositories/BaseRepositories";
import { IAddressRepository } from "../../repositories/IAddressRepository";
import { Address } from "../entities/Address";



class AddressRepository extends BaseRepository<Address> implements IAddressRepository {
    constructor(){
        super(Address)
    }

    async findByCnpjCpf(cnpj_cpf: string): Promise<Address> {
        return this.repository.findOne({ cnpj_cpf })
    }

}

export { AddressRepository }