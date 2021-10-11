import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { ICollectServiceRepository } from "../../../repositories/ICollectServiceRepository";
import { CollectService } from "../entities/CollectService";

class CollectServiceRepository extends BaseRepository<CollectService> implements ICollectServiceRepository {
    constructor() {
        super(CollectService)
    }

    async findQuery(service_id: string, address_id: string): Promise<CollectService> {
        return this.repository.createQueryBuilder()
            .where("service_id =:service_id AND address_id =:address_id", { service_id: service_id, address_id: address_id })
            .getOne()
    }



    async Get(): Promise<CollectService[]> {
        return this.repository.find({
            relations: ["serviceId", "addressId", "driverId", "providerId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<CollectService> {
        return this.repository.findOne({
            where: { service_id: id },

            relations: ["serviceId", "addressId", "driverId", "providerId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

}
export { CollectServiceRepository }