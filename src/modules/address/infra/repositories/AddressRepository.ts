import { BaseRepository } from "../../../../shared/infra/repositories/BaseRepositories";
import { IAddressRepository } from "../../repositories/IAddressRepository";
import { Address } from "../entities/Address";


class AddressRepository extends BaseRepository<Address> implements IAddressRepository {
    constructor() {
        super(Address)
    }

    async Get(): Promise<Address[]> {
        const all = await this.repository.find({
            relations: ["customerId", "cityId"],
            order: {
                trading_name: 'ASC'
            }
        });
        return all;
    }

    async findById(id: string): Promise<Address> {
        return this.repository.findOne({
            where: { id },
            relations: ["customerId", "cityId"],
            order: {
                trading_name: 'ASC'
            }
        })
    }

    async findByCnpjCpf(cnpj_cpf: string): Promise<Address> {
        return this.repository.findOne({ cnpj_cpf })
    }

}

export { AddressRepository }