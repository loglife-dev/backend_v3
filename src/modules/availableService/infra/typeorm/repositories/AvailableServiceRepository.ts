import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IAvailableServiceRepository } from "../../../repositories/IAvaiableServiceRepository";
import { AvailableService } from "../entities/AvailableService";

class AvailableServiceRepository extends BaseRepository<AvailableService> implements IAvailableServiceRepository {
    constructor() {
        super(AvailableService)
    }

    async Get(): Promise<AvailableService[]> {
        return this.repository.find({
            relations: ["serviceId"],
            order: {
                created_at: 'ASC'
            }
        })
    }
    findById(id: string): Promise<AvailableService> {
        return this.repository.findOne({
            where: { service_id: id },
            relations: ["serviceId"],
            order: {
                created_at: 'ASC'
            }
        })
    }
}

export { AvailableServiceRepository }