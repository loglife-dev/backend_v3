import { Between } from "typeorm";
import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { Service } from "../entities/Service";

class ServiceRepository extends BaseRepository<Service> implements IServiceRepository {
    constructor() {
        super(Service)
    }

    async Get(): Promise<Service[]> {
        return this.repository.find({
            relations: ["customerId", "requestedServiceId", "collectServiceId",
                "boardServiceId", "allocateServiceId", "availableServiceId", "landingServiceId", "deliveryServiceId"],
            order: {
                protocol: 'ASC'
            }
        })
    }

  


    async findById(id: string): Promise<Service> {
        return this.repository.findOne({
            where: { id },
            relations: ["customerId", "requestedServiceId", "collectServiceId",
                "boardServiceId", "allocateServiceId", "availableServiceId", "landingServiceId", "deliveryServiceId"],
            order: {
                protocol: 'ASC'
            }
        })
    }

    async findByProtocol(protocol: number): Promise<Service> {
        return this.repository.findOne({
            where: { protocol },
            relations: ["customerId", "requestedServiceId", "collectServiceId",
                "boardServiceId", "allocateServiceId", "availableServiceId", "landingServiceId", "deliveryServiceId"],
            order: {
                protocol: 'ASC'
            }
        })
    }

    async filterSla(startFilter: string, endFilter: string): Promise<Service[]> {
        return this.repository.find({
            where: { collect_date: Between((startFilter), (endFilter)) },
            relations: ["customerId", "requestedServiceId", "collectServiceId",
                "boardServiceId", "allocateServiceId", "availableServiceId", "landingServiceId", "deliveryServiceId"],
            order: {
                protocol: "ASC",
            }

        })
    }


}

export { ServiceRepository }