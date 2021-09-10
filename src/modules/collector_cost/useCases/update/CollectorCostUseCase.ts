import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectorCostDTO } from "../../dtos/ICollectorCostDTO";
import { Collector_Cost } from "../../infra/typeorm/entities/Collector_Cost";
import { ICollectorCostRepository } from "../../repositories/ICollectorCostRepository";


@injectable()
class UpdateCollectorCostUseCase {
    constructor(
        @inject("CollectorCostRepository")
        private readonly collectorCostRepository: ICollectorCostRepository) { }

    async execute({
        id,
        collector_id,
        city_id,
        cost_motorcycle,
        additional_cost_motorcycle,
        cost_car,
        additional_cost_car,
        cost_truck,
        additional_cost_truck,
        observation,
    }: ICollectorCostDTO): Promise<Collector_Cost> {
        const collectorCostExists = await this.collectorCostRepository.findById(id)

        if (!collectorCostExists) {
            throw new AppError("Collector_Cost does not exists!");
        }

        Object.assign(collectorCostExists, {
            id,
            collector_id,
            city_id,
            cost_motorcycle,
            additional_cost_motorcycle,
            cost_car,
            additional_cost_car,
            cost_truck,
            additional_cost_truck,
            observation,
        });
        const updateCollectorCost = await this.collectorCostRepository.Update(collectorCostExists);

        return updateCollectorCost;

    }
}

export { UpdateCollectorCostUseCase }