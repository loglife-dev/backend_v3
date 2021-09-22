import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IBudgetRepository } from "../../../repositories/IBudgetRepository";
import { Budget } from "../entities/Budget";

class BudgetRepository extends BaseRepository<Budget> implements IBudgetRepository {
    constructor() {
        super(Budget)
    }

    async Get(): Promise<Budget[]> {
        return this.repository.find({
            relations: ["customerId", "sourceHubId", "destinationHubId"],
            order: {
                service_type: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<Budget> {
        return this.repository.findOne({
            where: { id },
            relations: ["customerId",  "sourceHubId", "destinationHubId"],
            order: {
                service_type: 'ASC'
            }
        })
    }
}

export { BudgetRepository }