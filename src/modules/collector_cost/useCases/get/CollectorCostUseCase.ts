import { inject, injectable } from "tsyringe";
import { Collector_Cost } from "../../infra/typeorm/entities/Collector_Cost";
import { ICollectorCostRepository } from "../../repositories/ICollectorCostRepository";


@injectable()
class GetCollectorCostUseCase {
    constructor(
        @inject("CollectorCostRepository")
        private readonly collectorCostRepository: ICollectorCostRepository) { }

    async execute(id: string): Promise<Collector_Cost> {
        const collectorCost = await this.collectorCostRepository.findById(id)

        return collectorCost;
    }
}

@injectable()
class GetAllCollectorCostUseCase {
    constructor(
        @inject("CollectorCostRepository")
        private readonly collectorCostRepository: ICollectorCostRepository) { }

    async execute(): Promise<Collector_Cost[]> {
        const collectorCost = await this.collectorCostRepository.Get()

        return collectorCost
    }
}

export { GetCollectorCostUseCase, GetAllCollectorCostUseCase }