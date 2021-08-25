import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IHubRepository } from "../../../repositories/IHubRepositories";
import { Hub } from "../entities/Hub";

class HubRepository extends BaseRepository<Hub> implements IHubRepository {
    constructor() {
        super(Hub);
    }
    
    public async findByName(name: string): Promise<Hub> {
        return this.repository.findOne({ name })
    }

    public async findById(id: string): Promise<Hub> {
        return this.repository.findOne({ id })
    }
}

export { HubRepository }