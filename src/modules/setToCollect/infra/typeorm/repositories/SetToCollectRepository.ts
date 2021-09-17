import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { ISetToCollectRepository } from "../../../repositories/ISetToCollectRepository";
import { SetToCollect } from "../entities/SetToCollect";

class SetToCollectRepository extends BaseRepository<SetToCollect> implements ISetToCollectRepository {
    constructor() {
        super(SetToCollect)
    }

    async Get(): Promise<SetToCollect[]> {
        return this.repository.find({
            relations: ["serviceId", "addressId", "providerId", "driverId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<SetToCollect> {
        return this.repository.findOne({
            where: { id },
            relations: ["serviceId", "addressId", "providerId", "driverId"],
            order: {
                service_id: 'ASC'
            }
        })
    }

}

export { SetToCollectRepository }