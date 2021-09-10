import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { ICollectorCostRepository } from "../../../repositories/ICollectorCostRepository";
import { Collector_Cost } from "../entities/Collector_Cost";



class CollectorCostRepository extends BaseRepository<Collector_Cost> implements ICollectorCostRepository {
    constructor() {
        super(Collector_Cost)
    }

    async Get(): Promise<Collector_Cost[]> {
        return this.repository.find({
            relations: ["collectorId", "cityId"],
            order: {
                collector_id: 'ASC',
                city_id: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<Collector_Cost> {
        return this.repository.findOne({
            where: { id },
            relations: ["collectorId", "cityId"],
            order: {
                collector_id: 'ASC',
                city_id: 'ASC'
            }
        })
    }
}
export { CollectorCostRepository }