import { ICollectorCostDTO } from "../../modules/collector_cost/dtos/ICollectorCostDTO";
import { CollectorCostRepositoryInMemory } from "../../modules/collector_cost/repositories/in-memory/CollectorCostRepositoryInMemory";
import { CreateCollectorCostUseCase } from "../../modules/collector_cost/useCases/create/CollectorCostUseCase";

let createCollectorCostUseCase: CreateCollectorCostUseCase;
let collectorCostRepositoryInMemory: CollectorCostRepositoryInMemory;


describe("Create Collector_cost", () => {
    beforeEach(() => {
        collectorCostRepositoryInMemory = new CollectorCostRepositoryInMemory();
        createCollectorCostUseCase = new CreateCollectorCostUseCase(collectorCostRepositoryInMemory);

    });

    it("should be able to create a new Collector_cost", async () => {
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
        const createCollectorCost = await collectorCostRepositoryInMemory.findById(collectorCost.id);

        expect(createCollectorCost).toHaveProperty("id");
    });
})