import { ICollectorCostDTO } from "../../modules/collector_cost/dtos/ICollectorCostDTO";
import { CollectorCostRepositoryInMemory } from "../../modules/collector_cost/repositories/in-memory/CollectorCostRepositoryInMemory";
import { CreateCollectorCostUseCase } from "../../modules/collector_cost/useCases/create/CollectorCostUseCase";
import { GetAllCollectorCostUseCase, GetCollectorCostUseCase } from "../../modules/collector_cost/useCases/get/CollectorCostUseCase";


let getAllCollectorCostUseCase: GetAllCollectorCostUseCase;
let collectorCostRepositoryInMemory: CollectorCostRepositoryInMemory;
let createCollectorCostUseCase: CreateCollectorCostUseCase;
let getCollectorCostUseCase: GetCollectorCostUseCase;

describe("List all Collector_Cost", () => {
    beforeEach(() => {
        collectorCostRepositoryInMemory = new CollectorCostRepositoryInMemory();
        getAllCollectorCostUseCase = new GetAllCollectorCostUseCase(collectorCostRepositoryInMemory);
        getCollectorCostUseCase = new GetCollectorCostUseCase(collectorCostRepositoryInMemory);
        createCollectorCostUseCase = new CreateCollectorCostUseCase(collectorCostRepositoryInMemory);
    });

    it("Should be able to list all collecctor_cost", async () => {
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

        const all = await getAllCollectorCostUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });

    it("Should be able to findOne id collector_cost", async () => {
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

        const findcCollectorCostId = await getCollectorCostUseCase.execute(collectorCost.id)

        expect(findcCollectorCostId.id).toBe('59fde46d-40ad-46ac-a674-a8506c4791f6');
    })
})