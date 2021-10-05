import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories"
import { IAllocateServiceRepository } from "../../../repositories/IAllocateServiceRepository"
import { AllocateService } from "../entities/AllocateService"

class AllocateServiceRepository extends BaseRepository<AllocateService> implements IAllocateServiceRepository {
    constructor() {
        super(AllocateService)
    }

    async Get(): Promise<AllocateService[]> {
        return this.repository.find({
            relations: ['serviceId'],
            order: {
                allocated_filight: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<AllocateService> {
        return this.repository.findOne({
            where: { id },
            relations: ['serviceId'],
            order: {
                allocated_filight: 'ASC'
            }
        })
    }

}

export { AllocateServiceRepository }