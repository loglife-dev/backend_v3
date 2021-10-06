import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IDeliveryServiceRepository } from "../../../repositories/IDeliveryServiceRepository";
import { DeliveryService } from "../entities/DeliveryService";

class DeliveryServiceRepository extends BaseRepository<DeliveryService> implements IDeliveryServiceRepository {
    constructor() {
        super(DeliveryService)
    }

    async Get(): Promise<DeliveryService[]> {
        return this.repository.find({
            relations: ["serviceId", "addressId", "driverId"],
            order: {
                created_at: 'ASC'
            }
        })
    }
    findById(id: string): Promise<DeliveryService> {
        return this.repository.findOne({
            where: { service_id: id },
            relations: ["serviceId", "addressId", "driverId"],
            order: {
                created_at: 'ASC'
            }
        })
    }
}
export { DeliveryServiceRepository }