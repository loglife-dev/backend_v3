import { Provider } from "../entities/Provider"
import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IProviderRepository } from "../../../repositories/IProviderRepository";



class ProviderRepository extends BaseRepository<Provider> implements IProviderRepository {
    constructor() {
        super(Provider)
    }

    async Get(): Promise<Provider[]> {
        return this.repository.find({
            relations: ["hubId"],
            order: {
                company_name: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<Provider> {
        return this.repository.findOne({
            where: { id },
            relations: ["hubId"],
            order: {
                company_name: 'ASC'
            }
        })

    }
    findByEmail(email: string): Promise<Provider> {
        return this.repository.findOne({ email })
    }
}

export { ProviderRepository }