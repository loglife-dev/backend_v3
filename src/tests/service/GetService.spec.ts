import { IServiceDTO } from "../../modules/service/dtos/IServiceDTO";
import { ServiceRepositoryInMemory } from "../../modules/service/repositories/in-memory/ServiceRepositoryInMemory";
import { CreateServiceUseCase } from "../../modules/service/useCases/create/ServiceUseCase";
import { GetAllServiceUseCase, GetServiceUseCase } from "../../modules/service/useCases/get/ServiceUseCase";

let getAllServiceUseCase: GetAllServiceUseCase;
let getServiceUseCase: GetServiceUseCase;
let serviceRepositoryInMemory: ServiceRepositoryInMemory;
let createServiceUseCase: CreateServiceUseCase;

describe("List all service", () => {
    beforeEach(() => {
        serviceRepositoryInMemory = new ServiceRepositoryInMemory();
        createServiceUseCase = new CreateServiceUseCase(serviceRepositoryInMemory);
        getAllServiceUseCase = new GetAllServiceUseCase(serviceRepositoryInMemory);
        getServiceUseCase = new GetServiceUseCase(serviceRepositoryInMemory);
    });

    it("Should be able to list all service", async () => {
        const service: IServiceDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            protocol: 1,
            step: "todo",
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            group_id: "fee4d482-744c-48a4-aa23-881859bb6074",
        }
        await createServiceUseCase.execute(service);

        const all = await getAllServiceUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })

    it("Should be able to findOne id service", async () => {
        const service: IServiceDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            protocol: 1,
            step: "todo",
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            group_id: "fee4d482-744c-48a4-aa23-881859bb6074",
        }
        await createServiceUseCase.execute(service);

        const findService = await getServiceUseCase.execute(service.id);

        expect(findService.id).toBe("59fde46d-40ad-46ac-a674-a8506c4791f6");
    })
});
