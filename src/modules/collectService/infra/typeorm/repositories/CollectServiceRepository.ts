import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { ICollectServiceRepository } from "../../../repositories/ICollectServiceRepository";
import { CollectService } from "../entities/CollectService";

class CollectServiceRepository extends BaseRepository<CollectService> implements ICollectServiceRepository {
    constructor() {
        super(CollectService)
    }

    async Get(): Promise<CollectService[]> {
        return this.repository.find({
            relations: ["serviceId", "addressId", "driverId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<CollectService> {
        return this.repository.findOne({
            where: { id },
            relations: ["serviceId", "addressId", "driverId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

}
export { CollectServiceRepository }