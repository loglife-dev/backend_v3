import { ICollectorCostDTO } from "../../modules/collector_cost/dtos/ICollectorCostDTO";
import { CollectorCostRepositoryInMemory } from "../../modules/collector_cost/repositories/in-memory/CollectorCostRepositoryInMemory";
import { CreateCollectorCostUseCase } from "../../modules/collector_cost/useCases/create/CollectorCostUseCase";
import { UpdateCollectorCostUseCase } from "../../modules/collector_cost/useCases/update/CollectorCostUseCase";

let createCollectorCostUseCase: CreateCollectorCostUseCase;
let collectorCostRepositoryInMemory: CollectorCostRepositoryInMemory;
let updateCollectorCostUseCase: UpdateCollectorCostUseCase;

describe("Update Collector_cost", () => {
    beforeEach(() => {
        collectorCostRepositoryInMemory = new CollectorCostRepositoryInMemory();
        createCollectorCostUseCase = new CreateCollectorCostUseCase(collectorCostRepositoryInMemory);
        updateCollectorCostUseCase = new UpdateCollectorCostUseCase(collectorCostRepositoryInMemory);
    });

    it("should be able to update one Collector_cost", async () => {
        const collectorCost: ICollectorCostDTO = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            collector_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            city_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            cost_motorcycle: '15.00',
            additional_cost_motorcycle: '10.00',
            cost_car: '20',
            additional_cost_car: '10.00',
            cost_truck: '30.00',
            additional_cost_truck: '15.00',
            observation: 'observation test'
        }
        await createCollectorCostUseCase.execute(collectorCost);
        const findId = await collectorCostRepositoryInMemory.findById(collectorCost.id);

        const updateCollectorCost = await updateCollectorCostUseCase.execute({
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            collector_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            city_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            cost_motorcycle: '15.00',
            additional_cost_motorcycle: '10.00',
            cost_car: '25.00',
            additional_cost_car: '10.00',
            cost_truck: '30.00',
            additional_cost_truck: '15.00',
            observation: 'observation test'
        })
        expect(updateCollectorCost.cost_car).toBe('25.00');
    });
})