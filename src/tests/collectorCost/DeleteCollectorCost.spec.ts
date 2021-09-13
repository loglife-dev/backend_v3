import { CollectorRepositoryInMemory } from "../../modules/collector/repositories/in-memory/CollectorRepositoryInMemory";
import { ICollectorCostDTO } from "../../modules/collector_cost/dtos/ICollectorCostDTO";
import { CollectorCostRepositoryInMemory } from "../../modules/collector_cost/repositories/in-memory/CollectorCostRepositoryInMemory";
import { CreateCollectorCostUseCase } from "../../modules/collector_cost/useCases/create/CollectorCostUseCase";
import { DeleteCollectorCostUseCase } from "../../modules/collector_cost/useCases/delete/CollectorCostUseCase";
import { AppError } from "../../shared/errors/AppError";


let createCollectorCostUseCase: CreateCollectorCostUseCase;
let collectorCostRepositoryInMemory: CollectorCostRepositoryInMemory;
let deleteCollectorCostUseCase: DeleteCollectorCostUseCase;

describe("Delete a collector_cost", () => {
    beforeEach(() => {
        collectorCostRepositoryInMemory = new CollectorCostRepositoryInMemory();
        createCollectorCostUseCase = new CreateCollectorCostUseCase(collectorCostRepositoryInMemory);
        deleteCollectorCostUseCase = new DeleteCollectorCostUseCase(collectorCostRepositoryInMemory);
    });

    it("Should be able to exclude one collector_cost", async () => {
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
        const findId = await deleteCollectorCostUseCase.execute(collectorCost.id);

        expect(findId).toBe(undefined);
    })

})