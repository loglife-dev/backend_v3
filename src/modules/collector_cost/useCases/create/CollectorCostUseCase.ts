import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectorCostDTO } from "../../dtos/ICollectorCostDTO";
import { Collector_Cost } from "../../infra/typeorm/entities/Collector_Cost";
import { ICollectorCostRepository } from "../../repositories/ICollectorCostRepository";


@injectable()
class CreateCollectorCostUseCase {
    constructor(
        @inject("CollectorCostRepository")
        private readonly collectorCostRepository: ICollectorCostRepository) { }

    async execute({
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

        if (cost_motorcycle == "" || additional_cost_motorcycle == "" || cost_car == "" || additional_cost_car == "" || cost_truck == "" || additional_cost_truck == "") {
            throw new AppError("fill in all fields", 400)
        }

        const collectoCost = new Collector_Cost();
        Object.assign(collectoCost, {
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
        const createCollectorCost = await this.collectorCostRepository.Create(collectoCost);

        return createCollectorCost;

    }
}

export { CreateCollectorCostUseCase }