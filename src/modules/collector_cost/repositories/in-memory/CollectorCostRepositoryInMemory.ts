import { ICollectorCostDTO } from "../../dtos/ICollectorCostDTO";
import { Collector_Cost } from "../../infra/typeorm/entities/Collector_Cost";
import { ICollectorCostRepository } from "../ICollectorCostRepository";


class CollectorCostRepositoryInMemory implements ICollectorCostRepository {
    collectorCosts: Collector_Cost[] = [];

    async Get(): Promise<Collector_Cost[]> {
        const all = this.collectorCosts;
        return all;
    }

    async Create({
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
        const collectorCost = new Collector_Cost();

        Object.assign(collectorCost, {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            collector_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            city_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            cost_motorcycle,
            additional_cost_motorcycle,
            cost_car,
            additional_cost_car,
            cost_truck,
            additional_cost_truck,
            observation,
        });
        this.collectorCosts.push(collectorCost);

        return collectorCost;
    }

    async Update(collectorCost: Collector_Cost): Promise<Collector_Cost> {
        this.collectorCosts.push(collectorCost);

        return collectorCost;
    }

    async Delete(collectorCost: Collector_Cost): Promise<void> {
        const findIndex = this.collectorCosts.findIndex(collectorCost => collectorCost === collectorCost)

        this.collectorCosts.splice(findIndex, 1);
    }

    async findById(id: string): Promise<Collector_Cost> {
        const collectorCost = this.collectorCosts.find((collectorCost) => collectorCost.id === id)

        return collectorCost;
    }

}

export { CollectorCostRepositoryInMemory }