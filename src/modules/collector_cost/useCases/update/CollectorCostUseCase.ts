import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICityRepository } from "../../../city/repositories/ICityRepository";
import { ICollectorRepository } from "../../../collector/repositories/ICollectorRepository";
import { ICollectorCostDTO } from "../../dtos/ICollectorCostDTO";
import { Collector_Cost } from "../../infra/typeorm/entities/Collector_Cost";
import { ICollectorCostRepository } from "../../repositories/ICollectorCostRepository";


@injectable()
class UpdateCollectorCostUseCase {
    constructor(
        @inject("CollectorCostRepository")
        private readonly collectorCostRepository: ICollectorCostRepository,
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository,
        @inject("CityRepository")
        private readonly cityRepository: ICityRepository) { }

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
        const collectorCost = await this.collectorCostRepository.findById(id)

        if (!collectorCost) {
            throw new AppError("Collector_Cost does not exists!");
        }

        const collectorId = await this.collectorRepository.findById(collector_id);

        if (!collectorId) {
            throw new AppError("CollectorId does not exists!");
        }

        const cityId = await this.cityRepository.findById(city_id);

        if (!cityId) {
            throw new AppError("CityId does not exists!");
        }

        collectorCost.collector_id = collector_id;
        collectorCost.city_id = city_id;
        collectorCost.cost_motorcycle = cost_motorcycle;
        collectorCost.additional_cost_motorcycle = additional_cost_motorcycle;
        collectorCost.cost_car = cost_car;
        collectorCost.additional_cost_car = additional_cost_car;
        collectorCost.cost_truck = cost_truck;
        collectorCost.additional_cost_truck = additional_cost_truck;
        collectorCost.observation = observation;

        const updateCollectorCost = await this.collectorCostRepository.Update({
            ...collectorCost,
            collectorId,
            cityId,
        });

        return updateCollectorCost;

    }
}

export { UpdateCollectorCostUseCase }