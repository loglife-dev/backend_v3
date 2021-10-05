import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories"
import { IAllocateServiceRepository } from "../../../repositories/IAllocateServiceRepository"
import { AllocateService } from "../entities/AllocateService"

class AllocateServiceRepository extends BaseRepository<AllocateService> implements IAllocateServiceRepository {
    constructor() {
        super(AllocateService)
    }

    async Get(): Promise<AllocateService[]> {
       return this.repository.find({
           relations: ["serviceId"],
           order: {
               service_id: 'ASC'
           }
       })
    }

    async findById(id: string): Promise<AllocateService> {
       return this.repository.findOne({
           where: { service_id: id},
           relations: ["serviceId"],
           order: {
               service_id: 'ASC'
           }
       })
    }

}

export { AllocateServiceRepository }