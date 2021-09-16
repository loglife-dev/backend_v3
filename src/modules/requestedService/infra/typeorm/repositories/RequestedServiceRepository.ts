import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IRequestedServiceRepository } from "../../../repositories/IRequestdServiceRepository";
import { RequestedService } from "../entities/RequestedService";

class RequestedServiceRepository extends BaseRepository<RequestedService> implements IRequestedServiceRepository {
    constructor() {
        super(RequestedService)
    }

    async Get(): Promise<RequestedService[]> {
        return this.repository.find({
            relations: ["serviceId", "budgetId", "sourceCollectorId",
                "destinationCollectorId", "sourceBranchId",
                "destinationBranchId", "providerId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<RequestedService> {
        return this.repository.findOne({
            where: { id },
            relations: ["serviceId", "budgetId", "sourceCollectorId",
                "destinationCollectorId", "sourceBranchId",
                "destinationBranchId", "providerId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

}

export { RequestedServiceRepository }