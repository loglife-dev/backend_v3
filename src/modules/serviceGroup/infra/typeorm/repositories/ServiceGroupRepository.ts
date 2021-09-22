import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IServiceGroupRepository } from "../../../repositories/IServiceGroupRepository";
import { ServiceGroup } from "../entities/ServiceGroup";

class ServiceGroupRepository extends BaseRepository<ServiceGroup> implements IServiceGroupRepository {
    constructor() {
        super(ServiceGroup)
    }

    async Get(): Promise<ServiceGroup[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<ServiceGroup> {
        return this.repository.findOne({ id })
    }

}
export { ServiceGroupRepository }