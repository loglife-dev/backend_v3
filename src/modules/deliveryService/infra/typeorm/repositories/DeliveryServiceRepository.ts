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

    async findAllIds(id: string): Promise<DeliveryService[]> {
        return this.repository.find({
            where: { service_id: id },
            relations: ["serviceId", "addressId", "driverId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

    async findQuery(service_id: string, address_id: string): Promise<DeliveryService> {
        return this.repository.createQueryBuilder()
            .where("service_id =:service_id AND address_id =:address_id", { service_id: service_id, address_id: address_id })
            .getOne()
    }
}
export { DeliveryServiceRepository }