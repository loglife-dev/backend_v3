import { IRequestedServiceDTO } from "../../modules/requestedService/dtos/IRequestedServiceDTO";
import { RequestedServiceRepositoryInMemory } from "../../modules/requestedService/repositories/in-memory/RequestedServiceRepositoryInMemory";
import { CreateRequestedServiceUseCase } from "../../modules/requestedService/useCases/create/RequestedServiceUseCase";

let createRequestedServiceUseCase: CreateRequestedServiceUseCase;
let requestedServiceRepositoryInMemory: RequestedServiceRepositoryInMemory;

describe("Create RequestedService", () => {
    beforeEach(() => {
        requestedServiceRepositoryInMemory = new RequestedServiceRepositoryInMemory();
        createRequestedServiceUseCase = new CreateRequestedServiceUseCase(requestedServiceRepositoryInMemory);
    });

    it("should be able to create a new RequestedService", async () => {
        const requested: IRequestedServiceDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "aad78fad-b2a1-4e93-9eaf-2d1ba7a6dce1",
            budget_id: "d72f74da-d1c9-4a79-98c7-7a5986461ae7",
            source_address_id: ["1"],
            destination_address_id: ["2"],
            source_collector_id: "3ebb0817-bdd5-41b7-b6de-7711a301c83c",
            destination_collector_id: "3ebb0817-bdd5-41b7-b6de-7711a301c83c",
            source_branch_id: "bf539e2a-f2a8-40ed-94e5-f321b7615c3b",
            destination_branch_id: "bf539e2a-f2a8-40ed-94e5-f321b7615c3b",
            provider_id: "305f63dc-46d1-4d8b-a7fe-a53c50ccfda3",
            deadline: 1,
            service_type: "fracionado",
            franchising: 100,
            modal: "test modal",
            vehicle: "carro",
            caixa_termica: 1,
            embalagem_secundaria: 0,
            gelo_seco: 1,
            gelox: 0,
            isopor3l: 0,
            isopor7l: 0,
            terciaria3l: 0,
            terciaria8l: 0,
            collect_date: new Date(),
            collect_hour_start: new Date(),
            collect_hour_end: new Date(),
            delivery_date: new Date(),
            delivery_hour: new Date(),
            observation: "teste"
        }
        await createRequestedServiceUseCase.execute(requested);
        const find = await requestedServiceRepositoryInMemory.findById(requested.id)
        expect(find).toHaveProperty("id");
    })
})