import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IShippingRepository } from "../../../repositories/IShippingRepository";
import { Shipping } from "../entities/Shipping";


class ShippingRepository extends BaseRepository<Shipping> implements IShippingRepository {
    constructor() {
        super(Shipping)
    }

    async Get(): Promise<Shipping[]> {
        return this.repository.find({
            order: {
                company_name: 'ASC'
            }
        });
    }

    async findById(id: string): Promise<Shipping> {
        return this.repository.findOne({
            where: { id },
            order: {
                company_name: 'ASC'
            }
        })
    }

    async findByCnpj(cnpj: string): Promise<Shipping> {
        return this.repository.findOne({ cnpj })
    }

}

export { ShippingRepository }