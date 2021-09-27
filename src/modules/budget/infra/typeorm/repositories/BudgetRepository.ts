import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IBudgetRepository } from "../../../repositories/IBudgetRepository";
import { Budget } from "../entities/Budget";

class BudgetRepository extends BaseRepository<Budget> implements IBudgetRepository {
    constructor() {
        super(Budget)
    }

    async Get(): Promise<Budget[]> {
        const budget = await this.repository.find({
            relations: ["customerId", "sourceHubId", "destinationHubId"],
            order: {
                service_type: 'ASC'
            }
        })
        return budget;
    }

    async findById(id: string): Promise<Budget> {
        const budget = await this.repository.findOne({
            where: { id },
            relations: ["customerId",  "sourceHubId", "destinationHubId"],
            order: {
                service_type: 'ASC'
            }
        })
        return budget;
    }
}

export { BudgetRepository }