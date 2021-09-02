import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { ICollectorRepository } from "../../../repositories/ICollectorRepository";
import { Collector } from "../entities/Collector";


class CollectorRepository extends BaseRepository<Collector> implements ICollectorRepository {
    constructor() {
        super(Collector);
    }

    async findById(id: string): Promise<Collector> {
        return this.repository.findOne({ id })
    }

    async findByCnpj(cnpj: string): Promise<Collector> {
        return this.repository.findOne({ cnpj })
    }
}

export { CollectorRepository }