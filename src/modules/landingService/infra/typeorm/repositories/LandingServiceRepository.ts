import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { ILandingServiceRepository } from "../../../repositories/ILandingServiceRepository";
import { LandingService } from "../entities/LandingService";

class LandingServiceRepository extends BaseRepository<LandingService> implements ILandingServiceRepository {
    constructor() {
        super(LandingService)
    }

    async Get(): Promise<LandingService[]> {
        return this.repository.find({
            relations: ["serviceId", "branchId", "driverId"],
            order: {
                created_at: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<LandingService> {
        return this.repository.findOne({
            where: { service_id: id },
            relations: ["serviceId", "branchId", "driverId"],
            order: {
                created_at: 'ASC'
            }
        })
    }
}

export { LandingServiceRepository }